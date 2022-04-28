import { AppConfig } from './../../app.config';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ColumnForMenu } from '../../shared/models/columnForMenu';

@Component({
  selector: 'ngx-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent implements OnInit {
  title = 'Requested information to join';
  menuType = 'newOrganization';
  isForNew = true;
  environmentName: string;
  clause: string;
  agreed = false;
  submitted = false;

  constructor(protected ref: NbDialogRef<RegisterDialogComponent>) {
    this.environmentName = AppConfig.ENVIRONMENT_TITLE;
    this.clause = AppConfig.TERMS_OF_USE;
  }

  ngOnInit(): void {
  }

  dismiss(): void {
    this.ref.close();
  }

  agree(): void {
    this.agreed = true;
  }

  submit(): void {
    this.submitted = true;
  }
}