import { addLangs, applyTranslateToSingleMenu, loadLang } from './../../../util/translateHelper';
/*
 * Copyright (c) 2024 Maritime Connectivity Platform Consortium
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { MenuTypeNames } from '../../models/menuType';
import { AuthService } from '../../../auth/auth.service';
import { InstanceControllerService } from '../../../backend-api/service-registry/api/instanceController.service';
import { ServiceControllerService } from '../../../backend-api/identity-registry/api/serviceController.service';
import { DeviceControllerService } from '../../../backend-api/identity-registry/api/deviceController.service';
import { Observable } from 'rxjs/Observable';
import { RoleControllerService } from '../../../backend-api/identity-registry/api/roleController.service';
import { Organization } from '../../../backend-api/identity-registry/model/organization';
import { OrganizationControllerService } from '../../../backend-api/identity-registry/api/organizationController.service';
import { UserControllerService } from '../../../backend-api/identity-registry/api/userController.service';
import { ColumnForResource } from '../../models/columnForMenu';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { ResourceType, MenuTypeIconNames, EntityTypes } from '../../models/menuType';
import { NbIconLibraries } from '@nebular/theme';
import { NotifierService } from 'angular-notifier';
import { InstanceDto } from '../../../backend-api/service-registry';
import { formatData, formatInstanceData } from '../../../util/dataFormatter';
import { hasAdminPermission } from '../../../util/adminPermissionResolver';
import { TranslateService } from '@ngx-translate/core';
import _ from 'lodash';
import { MmsControllerService, VesselControllerService } from '../../../backend-api/identity-registry/api/api';
import { Role } from '../../../backend-api/identity-registry/model/role';

const capitalize = (s): string => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1);
}
@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  menuType: ResourceType = ResourceType.Device;
  title = ' for ';
  contextForAttributes = 'list';
  orgName = 'MCC';
  orgMrn = '';
  iconName = 'circle';
  menuTypeName = '';
  data = [];
  isLoading = false;
  settings;
  mySettings = {
    actions: {
      edit: false,
      position: 'right',
    },
    mode: 'external',
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {...ColumnForResource[this.menuType], ...{name:{title:"Nameeeee"}}},
    hideSubHeader: true,
  };
  showTables = true;
  source: LocalDataSource = new LocalDataSource();
  isForServiceForOrg = false;
  isAdmin: boolean = false;
  currentPageNumber = 0;
  totalPages = 0;
  totalElements = 0;
  elementsPerPage = 10;
  pageNumbers = [];

  constructor(private router: Router,
    private iconsLibrary: NbIconLibraries,
    private userControllerService: UserControllerService,
    private deviceControllerService: DeviceControllerService,
    private roleControllerService: RoleControllerService,
    private vesselControllerService: VesselControllerService,
    private serviceControllerService: ServiceControllerService,
    private instanceControllerService: InstanceControllerService,
    private mmsControllerService: MmsControllerService,
    private organizationControllerService: OrganizationControllerService,
    private notifierService: NotifierService,
    private authService: AuthService,
    public translate: TranslateService,
    ) {
      addLangs(translate);
      loadLang(translate);
      // TODO: apply translate to table
      //console.log(ColumnForResource[this.menuType]);
      //console.log({...ColumnForResource[this.menuType], name:{title:"Nameeeee"}})
      /*
      this.translate.get(['table']).subscribe(res => {
        console.log(res);
      });
      */

      iconsLibrary.registerFontPack('fas', { packClass: 'fas', iconClassPrefix: 'fa' });
  }

  ngOnInit(): void {
    const menuTypeString = this.router.url.split('/').pop();
    if (menuTypeString === ResourceType.InstanceOfOrg) {
      this.isForServiceForOrg = true;
      this.menuType = ResourceType.Instance;
    } else {
      this.menuType = menuTypeString.replace('-', '').substr(0, menuTypeString.length - 1) as ResourceType;
    }
    if (Object.values(ResourceType).includes(this.menuType)) {
      this.menuTypeName = MenuTypeNames[this.menuType.toString()];
      this.iconName = MenuTypeIconNames[this.menuType.toString()];
      this.orgMrn = this.authService.authState.orgMrn;
    } else {
      this.router.navigate(['**']);
    }

    if (this.authService.authState.rolesLoaded) {
      this.isAdmin = hasAdminPermission(this.menuType, this.authService, false);
    } else {
      this.authService.rolesLoaded.subscribe((mode)=> {
        this.isAdmin = hasAdminPermission(this.menuType, this.authService, false);
      });
    }

    this.fetchValues(this.currentPageNumber);
  }

  updatePageContentInfo = (totalPages: number, totalElements: number) => {
    this.totalPages = totalPages;
    this.totalElements = totalElements;
    this.pageNumbers = Array(this.totalPages).fill(0).map((x,i)=>i);
  }

  updateContent = (totalPages: number, totalElements: number, content: any) => {
    this.updatePageContentInfo(totalPages, totalElements);
    this.refreshData(this.formatResponse(content));
    this.isLoading = false;
  }

  fetchValues(pageNumber: number) {
    this.currentPageNumber = pageNumber;
    // filtered with context
    if(ColumnForResource.hasOwnProperty(this.menuType.toString())) {
      this.mySettings.columns = Object.assign({}, ...
        Object.entries(ColumnForResource[this.menuType.toString()]).filter(([k,v]) => Array.isArray(v['visibleFrom']) && v['visibleFrom'].includes(this.contextForAttributes)).map(([k,v]) => ({[k]:v}))
      );
      this.settings = Object.assign({}, this.mySettings);
      // Not-approved organization list
      this.title = `${capitalize(this.menuTypeName)} list`;
      this.isLoading = true;

      if (Object.values(ResourceType).includes(this.menuType)) {
        if(this.menuType === ResourceType.Organization || this.menuType === ResourceType.OrgCandidate){
          this.loadDataContent(this.menuType, pageNumber).subscribe(
            resOrigin => this.updateContent(resOrigin.totalPages, resOrigin.totalElements, resOrigin.content),
            error => this.notifierService.notify('error', error.message),
          );
        } else if(this.menuType === ResourceType.Role){
          this.loadMyOrganization().subscribe(
            resMyOrg => this.loadRoles(resMyOrg.mrn).subscribe(
              res => {
                // TODO: paging in role
                //this.updatePageContentInfo(res.totalPages, res.totalElements);
                this.refreshData(res); this.isLoading = false;},
              error => this.notifierService.notify('error', error.message),
            ),
            error => this.notifierService.notify('error', error.message),
          );
        } else if(this.menuType === ResourceType.Instance || this.menuType === ResourceType.InstanceOfOrg){
          this.loadServiceInstances(pageNumber).subscribe(
            resData => {
              this.instanceControllerService.getInstancesDt().subscribe(response => {
                this.totalElements = response.recordsTotal;
                this.totalPages = Math.ceil(this.totalElements / this.elementsPerPage);
                this.updateContent(this.totalPages, this.totalElements, this.formatResponseForInstance(
                  this.isForServiceForOrg ?
                    resData.filter(i => i.organizationId === this.orgMrn) :
                    resData,
                ),);
              });
            },
            error => this.notifierService.notify('error', error.message),
          );
        } else {
          this.loadMyOrganization().subscribe(
            resMyOrg => {
              this.loadDataContent(this.menuType, pageNumber, resMyOrg.mrn).subscribe(
              res => 
                this.updateContent(res.totalPages, res.totalElements, res.content),
              error => this.notifierService.notify('error', error.message),
            )},
            error => this.notifierService.notify('error', error.message),
          );
        }
      } else {
        this.isLoading = false;
        throw new Error(`${this.translate.instant('error.resource.noDataService')}${this.menuType}`);
      }
    } else {
      this.isLoading = false;
      throw new Error(`${this.translate.instant('error.resource.noDataService')}${this.menuType}`);
    }
  }

  refreshData(data?: any) {
    if (data) {
      this.source.load(data);
      this.data = data;
    } else {
      this.source.load([]);
    }
  }

  formatResponse(data: any[]) {
    return data.map(d => formatData(d));
  }

  formatResponseForInstance(data: any[]) {
    return data.map(d => formatInstanceData(d));
  }

  onDelete(event): void {
    if (!this.isAdmin) {
      this.notifierService.notify('error', this.translate.instant('error.resource.permissionError'));
    } else {
      this.delete(this.menuType, this.orgMrn, event.data.mrn, event.data.instanceVersion, event.data.id);
    }
  }

  delete(menuType: ResourceType, orgMrn: string, entityMrn: string, instanceVersion?: string, numberId?: number) {
    let message = this.translate.instant('warning.resource.beforeDeletion');
    message = EntityTypes.indexOf(this.menuType) >= 0 ?
      message + this.translate.instant('warning.resource.beforeRevoke') : message;
    if (confirm(message)) {
      this.deleteData(menuType, orgMrn, entityMrn, instanceVersion, numberId).subscribe(
        res => {
          this.notifierService.notify('success', this.menuTypeName + this.translate.instant('success.resource.delete'));
          this.fetchValues(this.currentPageNumber);
        },
        err => this.notifierService.notify('error',
          this.translate.instant('error.resource.errorInDeletion') + err.error.message));
    }
  }

  deleteData = (context: ResourceType, orgMrn: string, entityMrn: string, version?: string, numberId?: number): Observable<any> => {
    if (context === ResourceType.User) {
      return this.userControllerService.deleteUser(orgMrn, entityMrn);
    } else if (context === ResourceType.Device) {
      return this.deviceControllerService.deleteDevice(orgMrn, entityMrn);
    } else if (context === ResourceType.Vessel) {
      return this.vesselControllerService.deleteVessel(orgMrn, entityMrn);
    } else if (context === ResourceType.MMS) {
      return this.mmsControllerService.deleteMMS(orgMrn, entityMrn);
    } else if (context === ResourceType.Service && version) {
      return this.serviceControllerService.deleteService(orgMrn, entityMrn, version);
    } else if (context === ResourceType.Organization || context === ResourceType.OrgCandidate) {
      return this.organizationControllerService.deleteOrg(entityMrn);
    } else if (context === ResourceType.Role && numberId) {
      return this.roleControllerService.deleteRole(orgMrn, numberId);
    } else if (context === ResourceType.Instance || context === ResourceType.InstanceOfOrg) {
      return this.instanceControllerService.deleteInstance(numberId);
    }
    return new Observable();
  }

  onEdit(event): void {
    const mrn = this.menuType === ResourceType.Instance ? event.data.id : event.data.mrn;
    this.router.navigate([this.router.url,
      mrn ? encodeURIComponent(mrn) : event.data.id],
        { queryParams: { name: event.data.roleName ? event.data.roleName :
            event.data.name ? event.data.name :
            event.data.lastName + ' ' + event.data.firstName,
          version: event.data.instanceVersion,
         }});
  }

  onAddNew(): void {
    this.router.navigate([this.router.url, 'new']);
  }

  onSearch(event: any) {
    const query = event.srcElement.value;
    if (event && event.srcElement && query.length > 0) {
      this.source.setFilter([
        // fields we want to include in the search
        {
          field: 'id',
          search: query,
        },
        {
          field: 'name',
          search: query,
        },
        {
          field: 'mrn',
          search: query,
        },
      ], false);
    } else {
      this.source.reset();
      this.refreshData();
    }
  }

  loadMyOrganization = ():Observable<Organization> => {
    // fetch organization information from it
    return this.organizationControllerService.getOrganization1(this.authService.authState.orgMrn);
	}

  loadServiceInstances = (page: number): Observable<InstanceDto[]> => {
    return this.instanceControllerService.getInstances(page, this.elementsPerPage);
  }

  loadDataContent = (context: ResourceType, page: number, orgMrn?: string): Observable<any> => {
    const size = this.elementsPerPage;
    if (context === ResourceType.User) {
      return this.userControllerService.getOrganizationUsers(orgMrn, page, size);
    } else if (context === ResourceType.Device) {
      return this.deviceControllerService.getOrganizationDevices(orgMrn, page, size);
    } else if (context === ResourceType.Vessel) {
      return this.vesselControllerService.getOrganizationVessels(orgMrn, page, size);
    } else if (context === ResourceType.MMS) {
      return this.mmsControllerService.getOrganizationMMSes(orgMrn, page, size);
    } else if (context === ResourceType.Service) {
      return this.serviceControllerService.getOrganizationServices(orgMrn, page, size);
    } else if (context === ResourceType.Organization) {
      return this.organizationControllerService.getOrganization(page, size);
    } else if (context === ResourceType.OrgCandidate) {
      return this.organizationControllerService.getUnapprovedOrganizations(page, size);
    }
    return new Observable();
  }

  loadRoles = (orgMrn: string): Observable<Role[]> => {
    return this.roleControllerService.getRoles(orgMrn);
  }
}
