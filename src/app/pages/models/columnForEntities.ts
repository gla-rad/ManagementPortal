export const ColumnForEntity = {
    device: {
        id: {
            title: 'ID',
            type: 'number',
            visibleFrom: ['detail'],
          },
          mrn: {
            title: 'MRN',
            type: 'string',
            visibleFrom: ['detail', 'list'],
          },
          name: {
            title: 'Name',
            type: 'string',
            visibleFrom: ['detail', 'list'],
          },
          createdAt: {
            title: 'Created at',
            type: 'string',
            visibleFrom: ['detail'],
          },
          updatedAt: {
            title: 'Updated at',
            type: 'string',
            visibleFrom: ['detail', 'list'],
          },
          permissions: {
            title: 'Permissions',
            type: 'string',
            visibleFrom: ['detail'],
          },
          mrnSubsidiary: {
            title: 'Subsidiary MRN',
            type: 'string',
            visibleFrom: ['detail'],
          },
          homeMMSUrl: {
            title: 'Home MMS URL',
            type: 'string',
            visibleFrom: ['detail'],
          },
    },
    organization: {
        id: {
            title: 'ID',
            type: 'number',
            visibleFrom: ['detail'],
          },
          mrn: {
            title: 'MRN',
            type: 'string',
            visibleFrom: ['detail', 'list'],
          },
          name: {
            title: 'Name',
            type: 'string',
            visibleFrom: ['detail', 'list'],
          },
          createdAt: {
            title: 'Created at',
            type: 'string',
            visibleFrom: ['detail'],
          },
          updatedAt: {
            title: 'Updated at',
            type: 'string',
            visibleFrom: ['detail', 'list'],
          },
          mrnSubsidiary: {
            title: 'Subsidiary MRN',
            type: 'string',
            visibleFrom: ['detail'],
          },
          homeMMSUrl: {
            title: 'Home MMS URL',
            type: 'string',
            visibleFrom: ['detail'],
          },
          email: {
            title: 'e-mail',
            type: 'string',
            visibleFrom: ['detail', 'list'],
          },
          url: {
            title: 'URL',
            type: 'string',
            visibleFrom: ['detail', 'list'],
          },
          address: {
            title: 'Address',
            type: 'string',
            visibleFrom: ['detail'],
          },
          country: {
            title: 'Country',
            type: 'string',
            visibleFrom: ['detail', 'list'],
          },
          federationType: {
            title: 'Federation type',
            type: 'string',
            visibleFrom: ['detail'],
          },
    },
    service: {
        id: {
            title: 'ID',
            type: 'number',
            visibleFrom: ['detail'],
          },
          mrn: {
            title: 'MRN',
            type: 'string',
            visibleFrom: ['detail', 'list'],
          },
          name: {
            title: 'Name',
            type: 'string',
            visibleFrom: ['detail', 'list'],
          },
          createdAt: {
            title: 'Created at',
            type: 'string',
            visibleFrom: ['detail'],
          },
          updatedAt: {
            title: 'Updated at',
            type: 'string',
            visibleFrom: ['detail', 'list'],
          },
          permissions: {
            title: 'Permissions',
            type: 'string',
            visibleFrom: ['detail'],
          },
          mrnSubsidiary: {
            title: 'Subsidiary MRN',
            type: 'string',
            visibleFrom: ['detail'],
          },
          homeMMSUrl: {
            title: 'Home MMS URL',
            type: 'string',
            visibleFrom: ['detail'],
          },
          instanceVersion: {
            title: 'Instance version',
            type: 'string',
            visibleFrom: ['detail', 'list'],
          },
          oidcAccessType: {
            title: 'Access type',
            type: 'string',
            visibleFrom: ['detail'],
          },
          oidcClientId: {
            title: 'OIDC client ID',
            type: 'string',
            visibleFrom: ['detail'],
          },
          vessel: {
            title: 'Vessel',
            type: 'string',
            visibleFrom: ['detail'],
          },
    },
    user: {
        id: {
            title: 'ID',
            type: 'number',
            visibleFrom: ['detail'],
          },
          mrn: {
            title: 'MRN',
            type: 'string',
            visibleFrom: ['detail', 'list'],
          },
          firstName: {
            title: 'First name',
            type: 'string',
            visibleFrom: ['detail', 'list'],
          },
          lastName: {
            title: 'Last name',
            type: 'string',
            visibleFrom: ['detail', 'list'],
          },
          email: {
            title: 'e-mail',
            type: 'string',
            visibleFrom: ['detail', 'list'],
          },
          createdAt: {
            title: 'Created at',
            type: 'string',
            visibleFrom: ['detail'],
          },
          updatedAt: {
            title: 'Updated at',
            type: 'string',
            visibleFrom: ['detail', 'list'],
          },
          permissions: {
            title: 'Permissions',
            type: 'string',
            visibleFrom: ['detail', 'list'],
          },
          mrnSubsidiary: {
            title: 'Subsidiary MRN',
            type: 'string',
            visibleFrom: ['detail'],
          },
          homeMMSUrl: {
            title: 'Home MMS URL',
            type: 'string',
            visibleFrom: ['detail'],
          },
    },
    vessel: {
        id: {
            title: 'ID',
            type: 'number',
            visibleFrom: ['detail'],
          },
          mrn: {
            title: 'MRN',
            type: 'string',
            visibleFrom: ['detail', 'list'],
          },
          name: {
            title: 'Name',
            type: 'string',
            visibleFrom: ['detail', 'list'],
          },
          createdAt: {
            title: 'Created at',
            type: 'string',
            visibleFrom: ['detail'],
          },
          updatedAt: {
            title: 'Updated at',
            type: 'string',
            visibleFrom: ['detail', 'list'],
          },
          permissions: {
            title: 'Permissions',
            type: 'string',
            visibleFrom: ['detail'],
          },
          mrnSubsidiary: {
            title: 'Subsidiary MRN',
            type: 'string',
            visibleFrom: ['detail'],
          },
          homeMMSUrl: {
            title: 'Home MMS URL',
            type: 'string',
            visibleFrom: ['detail'],
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
    },
}