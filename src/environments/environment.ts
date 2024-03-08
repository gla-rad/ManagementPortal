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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: true,
    staging: false,
    irBasePath: 'https://rnavlab.gla-rad.org/mcp/mir',
    irProvider: 'GLA Research & Development Directorate',
    irContact: 'glaresearchdevelopment@gmail.com',
    oidcBasePath: 'https://rnavlab.gla-rad.org/mcp',
    hasServiceRegistry: true,
    srBasePath: 'https://rnavlab.gla-rad.org/mcp/msr',
    srProvider: 'GLA Research & Development Directorate',
    srContact: 'glaresearchdevelopment@gmail.com',
    hasMSRLedger: true,
    ledgerPath: 'https://rnavlav.gla-rad.org/mcp/ledger',
    mpProvider: 'GLA Research & Development Directorate',
    mpContact: 'glaresearchdevelopment@gmail.com',
    environmentTitle: 'GRAD MCP Testbed TEST',
    termsOfUse: 'By applying for access to the MCP testbed, you agree not to store any personal information on the platform such as names and email addresses. Please use generic names, such as \'John Doe\' and generic email addresses such as \'info@company.com\'. It does need to be a working email address though, since access will be granted through this email address. Furthermore, if anyone chooses to federate an identity registry into the MCP testbed, this should only contain test data - not actual personal information. This is due to the European Union General Data Protection Regulation (GDPR). For more information, contact the MCC secretariat.',
    idpNamespace: 'grad',
    environmentName: 'public-demonstrator',
    mpName: 'MCC MCP Testbed',
    footerName: 'Maritime Connectivity Platform Consortium',
    footerLink: 'https://maritimeconnectivity.net',
    logoImg: 'assets/images/logo.svg',
    loginBgImg: '',
    appBaseHref: '/mcp/portal',
};
  