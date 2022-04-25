import { convertTime } from '../../util/timeConverter';

export const ColumnForMenu = {
  device: {
    id: {
      title: 'ID',
      type: 'number',
      description: 'identifier',
    },
    mrn: {
      title: 'Maritime Resource Name (MRN)',
      type: 'string',
      description: 'MCP MRN as unique identifer',
      visibleFrom: ['detail', 'list'],
      immutable: true,
      required: true,
    },
    name: {
      title: 'Name',
      type: 'string',
      description: 'Name of device',
      visibleFrom: ['detail', 'list'],
      required: true,
    },
    permissions: {
      title: 'Permissions',
      type: 'string',
      description: 'List of permissions assigned by the organization',
      visibleFrom: ['edit', 'detail'],
    },
    mrnSubsidiary: {
      title: 'Subsidiary MRN',
      type: 'string',
      description: 'Additional MRN assigned to entity',
      visibleFrom: ['detail'],
    },
    homeMMSUrl: {
      title: 'Home MMS URL',
      type: 'string',
      description: 'URL of home MMS',
      visibleFrom: ['detail'],
    },
    createdAt: {
      title: 'Created at',
      type: 'string',
      filter: false,
      valuePrepareFunction: (timestamp: any) => {
        return convertTime(timestamp);
      },
      immutable: true,
      notShowOnEdit: true,
      visibleFrom: ['detail'],
    },
    updatedAt: {
      title: 'Updated at',
      type: 'string',
      filter: false,
      valuePrepareFunction: (timestamp: any) => {
        return convertTime(timestamp);
      },
      immutable: true,
      notShowOnEdit: true,
      visibleFrom: ['detail', 'list'],
    },
  },
  organization: {
    id: {
      title: 'ID',
      type: 'number',
    },
    mrn: {
      title: 'Maritime Resource Name (MRN)',
      type: 'string',
      description: 'MCP MRN as unique identifer',
      visibleFrom: ['detail', 'list'],
      immutable: true,
      required: true,
    },
    name: {
      title: 'Name',
      type: 'string',
      description: 'Name of organization',
      visibleFrom: ['detail', 'list'],
      required: true,
    },
    mrnSubsidiary: {
      title: 'Subsidiary MRN',
      type: 'string',
      description: 'Additional MRN assigned to entity',
      visibleFrom: ['detail'],
    },
    homeMMSUrl: {
      title: 'Home MMS URL',
      type: 'string',
      description: 'URL of home MMS',
      visibleFrom: ['detail'],
    },
    email: {
      title: 'e-mail',
      type: 'string',
      description: 'Contact e-mail',
      visibleFrom: ['detail', 'list'],
      required: true,
    },
    url: {
      title: 'URL',
      type: 'string',
      description: 'URL of organization',
      visibleFrom: ['detail', 'list'],
      required: true,
    },
    address: {
      title: 'Address',
      type: 'string',
      description: 'Address of organization',
      visibleFrom: ['detail'],
      required: true,
    },
    country: {
      title: 'Country',
      type: 'string',
      description: 'Country that organization belongs to',
      visibleFrom: ['detail', 'list'],
      required: true,
    },
    federationType: {
      title: 'Federation type',
      type: 'string',
      description: 'OpenID Connect federation type',
      visibleFrom: ['detail'],
      immutable: true,
    },
    createdAt: {
      title: 'Created at',
      type: 'string',
      filter: false,
      valuePrepareFunction: (timestamp: any) => {
        return convertTime(timestamp);
      },
      immutable: true,
      notShowOnEdit: true,
      visibleFrom: ['detail'],
    },
    updatedAt: {
      title: 'Updated at',
      type: 'string',
      filter: false,
      valuePrepareFunction: (timestamp: any) => {
        return convertTime(timestamp);
      },
      immutable: true,
      notShowOnEdit: true,
      visibleFrom: ['detail', 'list'],
    },
  },
  service: {
    id: {
      title: 'ID',
      type: 'number',
    },
    mrn: {
      title: 'Maritime Resource Name (MRN)',
      type: 'string',
      description: 'MCP MRN as unique identifer',
      visibleFrom: ['detail', 'list'],
      immutable: true,
      required: true,
    },
    name: {
      title: 'Name',
      type: 'string',
      description: 'Name of service',
      visibleFrom: ['detail', 'list'],
      required: true,
    },
    permissions: {
      title: 'Permissions',
      type: 'string',
      description: 'List of permissions assigned by the organization',
      visibleFrom: ['edit', 'detail'],
    },
    mrnSubsidiary: {
      title: 'Subsidiary MRN',
      type: 'string',
      description: 'Additional MRN assigned to entity',
      visibleFrom: ['detail'],
    },
    homeMMSUrl: {
      title: 'Home MMS URL',
      type: 'string',
      description: 'URL of home MMS',
      visibleFrom: ['detail'],
    },
    instanceVersion: {
      title: 'Instance version',
      type: 'string',
      description: 'Version of service instance',
      visibleFrom: ['detail', 'list'],
      immutable: true,
      required: true,
    },
    oidcAccessType: {
      title: 'Access type',
      type: 'string',
      description: 'OpenID Connect access type',
      visibleFrom: ['detail'],
    },
    oidcClientId: {
      title: 'OIDC client ID',
      type: 'string',
      description: 'OpenID Connect client ID',
      visibleFrom: ['detail'],
    },
    vessel: {
      title: 'Vessel',
      type: 'string',
      description: 'Correlated vessel',
      visibleFrom: ['detail'],
    },
    createdAt: {
      title: 'Created at',
      type: 'string',
      filter: false,
      valuePrepareFunction: (timestamp: any) => {
        return convertTime(timestamp);
      },
      immutable: true,
      notShowOnEdit: true,
      visibleFrom: ['detail'],
    },
    updatedAt: {
      title: 'Updated at',
      type: 'string',
      filter: false,
      valuePrepareFunction: (timestamp: any) => {
        return convertTime(timestamp);
      },
      immutable: true,
      notShowOnEdit: true,
      visibleFrom: ['detail', 'list'],
    },
  },
  user: {
    id: {
      title: 'ID',
      type: 'number',
    },
    mrn: {
      title: 'Maritime Resource Name (MRN)',
      type: 'string',
      description: 'MCP MRN as unique identifer',
      visibleFrom: ['detail', 'list'],
      immutable: true,
      required: true,
    },
    firstName: {
      title: 'First name',
      type: 'string',
      visibleFrom: ['detail', 'list'],
      required: true,
    },
    lastName: {
      title: 'Last name',
      type: 'string',
      visibleFrom: ['detail', 'list'],
      required: true,
    },
    email: {
      title: 'e-mail',
      type: 'string',
      description: 'Contact e-mail',
      visibleFrom: ['detail', 'list'],
      immutable: true,
      required: true,
    },
    permissions: {
      title: 'Permissions',
      type: 'string',
      description: 'List of permissions assigned by the organization',
      visibleFrom: ['detail', 'list'],
    },
    mrnSubsidiary: {
      title: 'Subsidiary MRN',
      type: 'string',
      description: 'Additional MRN assigned to entity',
      visibleFrom: ['detail'],
    },
    homeMMSUrl: {
      title: 'Home MMS URL',
      type: 'string',
      description: 'URL of home MMS',
      visibleFrom: ['detail'],
    },
    createdAt: {
      title: 'Created at',
      type: 'string',
      filter: false,
      valuePrepareFunction: (timestamp: any) => {
        return convertTime(timestamp);
      },
      immutable: true,
      notShowOnEdit: true,
      visibleFrom: ['detail'],
    },
    updatedAt: {
      title: 'Updated at',
      type: 'string',
      filter: false,
      valuePrepareFunction: (timestamp: any) => {
        return convertTime(timestamp);
      },
      immutable: true,
      notShowOnEdit: true,
      visibleFrom: ['detail', 'list'],
    },
  },
  vessel: {
    id: {
      title: 'ID',
      type: 'number',
    },
    mrn: {
      title: 'Maritime Resource Name (MRN)',
      type: 'string',
      description: 'MCP MRN as unique identifer',
      visibleFrom: ['detail', 'list'],
      immutable: true,
      required: true,
    },
    name: {
      title: 'Name',
      type: 'string',
      description: 'Name of device',
      visibleFrom: ['detail', 'list'],
      required: true,
    },
    permissions: {
      title: 'Permissions',
      type: 'string',
      description: 'List of permissions assigned by the organization',
      visibleFrom: ['edit', 'detail'],
    },
    // vessel specific
    imoNumber: {
      title: 'IMO number',
      type: 'string',
      visibleFrom: ['detail', 'list'],
    },
    mmsiNumber: {
      title: 'MMSI number',
      type: 'string',
      visibleFrom: ['detail', 'list'],
    },
    callsign: {
      title: 'Call sign',
      type: 'string',
      visibleFrom: ['detail', 'list'],
    },
    flagstate: {
      title: 'Flag state',
      type: 'string',
      visibleFrom: ['detail', 'list'],
    },
    aisClass: {
      title: 'AIS class',
      type: 'string',
      visibleFrom: ['detail', 'list'],
    },
    portOfRegister: {
      title: 'Port of register',
      type: 'string',
      visibleFrom: ['detail', 'list'],
    },
    mrnSubsidiary: {
      title: 'Subsidiary MRN',
      type: 'string',
      description: 'Additional MRN assigned to entity',
      visibleFrom: ['detail'],
    },
    homeMMSUrl: {
      title: 'Home MMS URL',
      type: 'string',
      description: 'URL of home MMS',
      visibleFrom: ['detail'],
    },
    createdAt: {
      title: 'Created at',
      type: 'string',
      filter: false,
      valuePrepareFunction: (timestamp: any) => {
        return convertTime(timestamp);
      },
      immutable: true,
      notShowOnEdit: true,
      visibleFrom: ['detail'],
    },
    updatedAt: {
      title: 'Updated at',
      type: 'string',
      filter: false,
      valuePrepareFunction: (timestamp: any) => {
        return convertTime(timestamp);
      },
      immutable: true,
      notShowOnEdit: true,
      visibleFrom: ['detail', 'list'],
    },
  },
  role: {
    id: {
      title: 'ID',
      type: 'number',
    },
    roleName: {
      title: 'Role name',
      type: 'string',
      visibleFrom: ['detail', 'list'],
      required: true,
    },
    permission: {
      title: 'Permission',
      type: 'string',
      visibleFrom: ['detail', 'list'],
      required: true,
    },
    createdAt: {
      title: 'Created at',
      type: 'string',
      filter: false,
      valuePrepareFunction: (timestamp: any) => {
        return convertTime(timestamp);
      },
      immutable: true,
      notShowOnEdit: true,
      visibleFrom: ['detail'],
    },
    updatedAt: {
      title: 'Updated at',
      type: 'string',
      filter: false,
      valuePrepareFunction: (timestamp: any) => {
        return convertTime(timestamp);
      },
      immutable: true,
      notShowOnEdit: true,
      visibleFrom: ['detail', 'list'],
    },
  },
  approveorg: {
    id: {
      title: 'ID',
      type: 'number',
    },
    mrn: {
      title: 'Maritime Resource Name (MRN)',
      type: 'string',
      description: 'MCP MRN as unique identifer',
      visibleFrom: ['detail', 'list'],
      immutable: true,
      required: true,
    },
    name: {
      title: 'Name',
      type: 'string',
      description: 'Name of organization',
      visibleFrom: ['detail', 'list'],
      required: true,
    },
    mrnSubsidiary: {
      title: 'Subsidiary MRN',
      type: 'string',
      description: 'Additional MRN assigned to entity',
      visibleFrom: ['detail'],
    },
    homeMMSUrl: {
      title: 'Home MMS URL',
      type: 'string',
      description: 'URL of home MMS',
      visibleFrom: ['detail'],
    },
    email: {
      title: 'e-mail',
      type: 'string',
      description: 'Contact e-mail',
      visibleFrom: ['detail', 'list'],
      required: true,
    },
    url: {
      title: 'URL',
      type: 'string',
      description: 'URL of organization',
      visibleFrom: ['detail', 'list'],
      required: true,
    },
    address: {
      title: 'Address',
      type: 'string',
      description: 'Address of organization',
      visibleFrom: ['detail'],
      required: true,
    },
    country: {
      title: 'Country',
      type: 'string',
      description: 'Country that organization belongs to',
      visibleFrom: ['detail', 'list'],
      required: true,
    },
    federationType: {
      title: 'Federation type',
      type: 'string',
      description: 'OpenID Connect federation type',
      visibleFrom: ['detail'],
      immutable: true,
    },
    createdAt: {
      title: 'Created at',
      type: 'string',
      filter: false,
      valuePrepareFunction: (timestamp: any) => {
        return convertTime(timestamp);
      },
      immutable: true,
      notShowOnEdit: true,
      visibleFrom: ['detail'],
    },
    updatedAt: {
      title: 'Updated at',
      type: 'string',
      filter: false,
      valuePrepareFunction: (timestamp: any) => {
        return convertTime(timestamp);
      },
      immutable: true,
      notShowOnEdit: true,
      visibleFrom: ['detail', 'list'],
    },
  },
  instance: {
    id: {
      title: 'ID',
      type: 'number',
    },
    name: {
      title: 'Name',
      type: 'string',
      description: 'Name of service instance',
      visibleFrom: ['detail', 'list'],
      required: true,
    },
    version: {
      title: 'Version',
      type: 'string',
      description: 'Version of service instance',
      visibleFrom: ['detail', 'list'],
      immutable: true,
      required: true,
    },
    serviceType: {
      title: 'Type',
      type: 'string',
      description: 'Type',
      visibleFrom: ['detail', 'list'],
    },
    status: {
      title: 'Status',
      type: 'string',
      visibleFrom: ['detail', 'list'],
    },
    endpointUri: {
      title: 'Endpoint URI',
      type: 'string',
      visibleFrom: ['detail', 'list'],
      required: true,
    },
    organizationId: {
      title: 'Organization',
      type: 'string',
      visibleFrom: ['detail', 'list'],
      immutable: true,
      required: true,
    },
    keywords: {
      title: 'Keywords',
      type: 'string',
      visibleFrom: ['detail', 'list'],
    },
    instanceId: {
      title: 'Instance ID',
      type: 'string',
      description: 'MCP MRN as unique identifer',
      visibleFrom: ['detail', 'list'],
      immutable: true,
      required: true,
    },
    createdAt: {
      title: 'Created at',
      type: 'string',
      filter: false,
      immutable: true,
      notShowOnEdit: true,
      visibleFrom: ['detail'],
    },
    lastUpdatedAt: {
      title: 'Updated at',
      type: 'string',
      filter: false,
      immutable: true,
      notShowOnEdit: true,
      visibleFrom: ['detail', 'list'],
    },
    doc: {
      title: 'Doc',
      type: 'string',
      filter: false,
      immutable: true,
      notShowOnEdit: true,
      visibleFrom: ['detail', 'list'],
    },
  },
  approvesvc: {
    id: {
      title: 'ID',
      type: 'number',
    },
    name: {
      title: 'Name',
      type: 'string',
      description: 'Name of service instance',
      visibleFrom: ['detail', 'list'],
      required: true,
    },
    version: {
      title: 'Version',
      type: 'string',
      description: 'Version of service instance',
      visibleFrom: ['detail', 'list'],
      immutable: true,
      required: true,
    },
    serviceType: {
      title: 'Type',
      type: 'string',
      description: 'Type',
      visibleFrom: ['detail', 'list'],
    },
    status: {
      title: 'Status',
      type: 'string',
      visibleFrom: ['detail', 'list'],
    },
    endpointUri: {
      title: 'Endpoint URI',
      type: 'string',
      visibleFrom: ['detail'],
      required: true,
    },
    organizationId: {
      title: 'Organization',
      type: 'string',
      visibleFrom: ['detail'],
      immutable: true,
      required: true,
    },
    keywords: {
      title: 'Keywords',
      type: 'string',
      visibleFrom: ['detail'],
    },
    instanceId: {
      title: 'Instance ID',
      type: 'string',
      description: 'MCP MRN as unique identifer',
      visibleFrom: ['detail', 'list'],
      immutable: true,
      required: true,
    },
    createdAt: {
      title: 'Created at',
      type: 'string',
      filter: false,
      immutable: true,
      notShowOnEdit: true,
      visibleFrom: ['detail'],
    },
    lastUpdatedAt: {
      title: 'Updated at',
      type: 'string',
      filter: false,
      immutable: true,
      notShowOnEdit: true,
      visibleFrom: ['detail', 'list'],
    },
  },
  newOrganization: {
    orgMrn: {
      title: 'Maritime Resource Name (MRN) for organization',
      type: 'string',
      description: 'MCP MRN as unique identifer',
      visibleFrom: ['detail'],
      required: true,
    },
    orgName: {
      title: 'Organization name',
      type: 'string',
      description: 'Name of organization',
      visibleFrom: ['detail'],
      required: true,
    },
    orgEmail: {
      title: 'Organization contact e-mail',
      type: 'string',
      description: 'Contact e-mail',
      visibleFrom: ['detail'],
      required: true,
    },
    orgUrl: {
      title: 'URL of organization',
      type: 'string',
      description: 'URL of organization',
      visibleFrom: ['detail'],
      required: true,
    },
    orgAddress: {
      title: 'Address of organization',
      type: 'string',
      description: 'Address of organization',
      visibleFrom: ['detail'],
      required: true,
    },
    orgCountry: {
      title: 'Country of organization',
      type: 'string',
      description: 'Country that organization belongs to',
      visibleFrom: ['detail'],
      required: true,
    },
    adminMrn: {
      title: 'MRN for admin user',
      type: 'string',
      description: 'MCP MRN as unique identifer',
      visibleFrom: ['detail'],
      required: true,
    },
    adminFirstName: {
      title: 'First name of admin user',
      type: 'string',
      description: 'First name',
      visibleFrom: ['detail'],
      required: true,
    },
    adminLastName: {
      title: 'Last name of admin user',
      type: 'string',
      description: 'Last name',
      visibleFrom: ['detail'],
      required: true,
    },
    adminEmail: {
      title: 'e-mail of admin user',
      type: 'string',
      description: 'Contact e-mail to admin user',
      visibleFrom: ['detail'],
      required: true,
    },
  },
};