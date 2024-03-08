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

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const environment = {
    production: true,
    staging: false,
    irBasePath: window["env"]["identity_registry_url"] || 'https://api.maritimeconnectivity.net',
    irProvider: window["env"]["identity_registry_provider"] || 'MCP Consortium',
    irContact: window["env"]["identity_registry_email"] || 'info@maritimeconnectivity.net',
    oidcBasePath: window["env"]["keycloak_server_url"] || 'https://maritimeid.maritimeconnectivity.net',
    hasServiceRegistry: true,
    srBasePath: window["env"]["service_registry_url"] || 'https://msr.maritimeconnectivity.net',
    srProvider: window["env"]["service_registry_provider"] || 'MCP Consortium',
    srContact: window["env"]["service_registry_email"] || 'info@maritimeconnectivity.net',
    hasMSRLedger: false,
    ledgerPath: '',
    mpProvider: window["env"]["management_portal_provider"] || 'MCP Consortium',
    mpContact: window["env"]["management_portal_email"] || 'info@maritimeconnectivity.net',
    environmentTitle: window["env"]["environment_title"] || 'MCC Testbed',
    termsOfUse: 'By applying for access to the MCP testbed, you agree not to store any personal information on the platform such as names and email addresses. Please use generic names, such as \'John Doe\' and generic email addresses such as \'info@company.com\'. It does need to be a working email address though, since access will be granted through this email address. Furthermore, if anyone chooses to federate an identity registry into the MCP testbed, this should only contain test data - not actual personal information. This is due to the European Union General Data Protection Regulation (GDPR). For more information, contact the MCC secretariat.',
    idpNamespace: window["env"]["identity_provider_mrn_namespace"] || 'mcc',
    mpName: window["env"]["management_portal_name"] || 'MCC MCP Testbed',
    environmentName: 'public-demonstrator',
    footerName: 'Maritime Connectivity Platform Consortium',
    footerLink: 'https://maritimeconnectivity.net',
    logoImg: 'assets/images/logo.svg',
    loginBgImg: '',
    appBaseHref: window["env"]["app_base_href"] || '/'
};
  