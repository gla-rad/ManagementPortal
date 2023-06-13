/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.
 *
 * OpenAPI spec version: 1.1.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Certificate } from '../model/certificate';
import { CertificateBundle } from '../model/certificateBundle';
import { CertificateRevocation } from '../model/certificateRevocation';
import { PageService } from '../model/pageService';
import { Pageable } from '../model/pageable';
import { Service } from '../model/service';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { AppConfig } from '../../../app.config';


@Injectable()
export class ServiceControllerService {

    protected basePath = AppConfig.IR_BASE_PATH;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * Create a new service identity
     * @param body 
     * @param orgMrn 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createService(body: Service, orgMrn: string, observe?: 'body', reportProgress?: boolean): Observable<Service>;
    public createService(body: Service, orgMrn: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Service>>;
    public createService(body: Service, orgMrn: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Service>>;
    public createService(body: Service, orgMrn: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createService.');
        }

        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling createService.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<Service>('post',`${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Delete a specific service identity
     * @param orgMrn 
     * @param serviceMrn 
     * @param version 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteService(orgMrn: string, serviceMrn: string, version: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteService(orgMrn: string, serviceMrn: string, version: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteService(orgMrn: string, serviceMrn: string, version: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteService(orgMrn: string, serviceMrn: string, version: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling deleteService.');
        }

        if (serviceMrn === null || serviceMrn === undefined) {
            throw new Error('Required parameter serviceMrn was null or undefined when calling deleteService.');
        }

        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling deleteService.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Get a page of service identities of the specified organization
     * @param orgMrn 
     * @param page Zero-based page index (0..N)
     * @param size The size of the page to be returned
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getOrganizationServices(orgMrn: string, page?: number, size?: number, sort?: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<PageService>;
    public getOrganizationServices(orgMrn: string, page?: number, size?: number, sort?: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageService>>;
    public getOrganizationServices(orgMrn: string, page?: number, size?: number, sort?: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageService>>;
    public getOrganizationServices(orgMrn: string, page?: number, size?: number, sort?: Array<string>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling getOrganizationServices.');
        }




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (sort) {
            sort.forEach((element) => {
                queryParameters = queryParameters.append('sort', <any>element);
            })
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<PageService>('get',`${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/services`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Get a page of service identities with a given MRN
     * @param orgMrn 
     * @param serviceMrn 
     * @param pageable 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getService(orgMrn: string, serviceMrn: string, pageable: Pageable, observe?: 'body', reportProgress?: boolean): Observable<PageService>;
    public getService(orgMrn: string, serviceMrn: string, pageable: Pageable, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageService>>;
    public getService(orgMrn: string, serviceMrn: string, pageable: Pageable, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageService>>;
    public getService(orgMrn: string, serviceMrn: string, pageable: Pageable, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling getService.');
        }

        if (serviceMrn === null || serviceMrn === undefined) {
            throw new Error('Required parameter serviceMrn was null or undefined when calling getService.');
        }

        if (pageable === null || pageable === undefined) {
            throw new Error('Required parameter pageable was null or undefined when calling getService.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (pageable !== undefined && pageable !== null) {
            queryParameters = queryParameters.set('pageable', <any>pageable);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<PageService>('get',`${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Get the service identity certificate with the given serial number
     * @param orgMrn 
     * @param serviceMrn 
     * @param version 
     * @param serialNumber 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getServiceCert(orgMrn: string, serviceMrn: string, version: string, serialNumber: number, observe?: 'body', reportProgress?: boolean): Observable<Certificate>;
    public getServiceCert(orgMrn: string, serviceMrn: string, version: string, serialNumber: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Certificate>>;
    public getServiceCert(orgMrn: string, serviceMrn: string, version: string, serialNumber: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Certificate>>;
    public getServiceCert(orgMrn: string, serviceMrn: string, version: string, serialNumber: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling getServiceCert.');
        }

        if (serviceMrn === null || serviceMrn === undefined) {
            throw new Error('Required parameter serviceMrn was null or undefined when calling getServiceCert.');
        }

        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling getServiceCert.');
        }

        if (serialNumber === null || serialNumber === undefined) {
            throw new Error('Required parameter serialNumber was null or undefined when calling getServiceCert.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Certificate>('get',`${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}/certificate/${encodeURIComponent(String(serialNumber))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Get the Keycloak JBoss XML configuration for the specified service if it exists
     * @param orgMrn 
     * @param serviceMrn 
     * @param version 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getServiceJbossXml(orgMrn: string, serviceMrn: string, version: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public getServiceJbossXml(orgMrn: string, serviceMrn: string, version: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public getServiceJbossXml(orgMrn: string, serviceMrn: string, version: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public getServiceJbossXml(orgMrn: string, serviceMrn: string, version: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling getServiceJbossXml.');
        }

        if (serviceMrn === null || serviceMrn === undefined) {
            throw new Error('Required parameter serviceMrn was null or undefined when calling getServiceJbossXml.');
        }

        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling getServiceJbossXml.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<string>('get',`${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}/jbossxml`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Get the Keycloak JSON configuration for the specified service if it exists
     * @param orgMrn 
     * @param serviceMrn 
     * @param version 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getServiceKeycloakJson(orgMrn: string, serviceMrn: string, version: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public getServiceKeycloakJson(orgMrn: string, serviceMrn: string, version: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public getServiceKeycloakJson(orgMrn: string, serviceMrn: string, version: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public getServiceKeycloakJson(orgMrn: string, serviceMrn: string, version: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling getServiceKeycloakJson.');
        }

        if (serviceMrn === null || serviceMrn === undefined) {
            throw new Error('Required parameter serviceMrn was null or undefined when calling getServiceKeycloakJson.');
        }

        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling getServiceKeycloakJson.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<string>('get',`${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}/keycloakjson`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Get the service identity with the given MRN and version
     * @param orgMrn 
     * @param serviceMrn 
     * @param version 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getServiceVersion(orgMrn: string, serviceMrn: string, version: string, observe?: 'body', reportProgress?: boolean): Observable<Service>;
    public getServiceVersion(orgMrn: string, serviceMrn: string, version: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Service>>;
    public getServiceVersion(orgMrn: string, serviceMrn: string, version: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Service>>;
    public getServiceVersion(orgMrn: string, serviceMrn: string, version: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling getServiceVersion.');
        }

        if (serviceMrn === null || serviceMrn === undefined) {
            throw new Error('Required parameter serviceMrn was null or undefined when calling getServiceVersion.');
        }

        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling getServiceVersion.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Service>('get',`${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * DEPRECATED: Issues a bundle containing a certificate, the key pair of the certificate and keystores in JKS and PKCS#12 formats. As server generated key pairs are not considered secure this endpoint should not be used, and anybody who does should migrate to the endpoint for issuing certificates using certificate signing requests as soon as possible. This endpoint will be removed completely in the future and providers may choose to already disable it now which will result in an error if called.
     * @param orgMrn 
     * @param serviceMrn 
     * @param version 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public newServiceCert(orgMrn: string, serviceMrn: string, version: string, observe?: 'body', reportProgress?: boolean): Observable<CertificateBundle>;
    public newServiceCert(orgMrn: string, serviceMrn: string, version: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CertificateBundle>>;
    public newServiceCert(orgMrn: string, serviceMrn: string, version: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CertificateBundle>>;
    public newServiceCert(orgMrn: string, serviceMrn: string, version: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling newServiceCert.');
        }

        if (serviceMrn === null || serviceMrn === undefined) {
            throw new Error('Required parameter serviceMrn was null or undefined when calling newServiceCert.');
        }

        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling newServiceCert.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<CertificateBundle>('get',`${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}/certificate/issue-new`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Create a new service identity certificate using CSR
     * @param body 
     * @param orgMrn 
     * @param serviceMrn 
     * @param version 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public newServiceCertFromCsr(body: string, orgMrn: string, serviceMrn: string, version: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public newServiceCertFromCsr(body: string, orgMrn: string, serviceMrn: string, version: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public newServiceCertFromCsr(body: string, orgMrn: string, serviceMrn: string, version: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public newServiceCertFromCsr(body: string, orgMrn: string, serviceMrn: string, version: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling newServiceCertFromCsr.');
        }

        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling newServiceCertFromCsr.');
        }

        if (serviceMrn === null || serviceMrn === undefined) {
            throw new Error('Required parameter serviceMrn was null or undefined when calling newServiceCertFromCsr.');
        }

        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling newServiceCertFromCsr.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/pem-certificate-chain',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'text/plain'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<string>('post',`${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}/certificate/issue-new/csr`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Revoke the service identity certificate with the given serial number
     * @param body 
     * @param orgMrn 
     * @param serviceMrn 
     * @param version 
     * @param certId The serial number of the certificate given in decimal
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public revokeServiceCert(body: CertificateRevocation, orgMrn: string, serviceMrn: string, version: string, certId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public revokeServiceCert(body: CertificateRevocation, orgMrn: string, serviceMrn: string, version: string, certId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public revokeServiceCert(body: CertificateRevocation, orgMrn: string, serviceMrn: string, version: string, certId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public revokeServiceCert(body: CertificateRevocation, orgMrn: string, serviceMrn: string, version: string, certId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling revokeServiceCert.');
        }

        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling revokeServiceCert.');
        }

        if (serviceMrn === null || serviceMrn === undefined) {
            throw new Error('Required parameter serviceMrn was null or undefined when calling revokeServiceCert.');
        }

        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling revokeServiceCert.');
        }

        if (certId === null || certId === undefined) {
            throw new Error('Required parameter certId was null or undefined when calling revokeServiceCert.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}/certificate/${encodeURIComponent(String(certId))}/revoke`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Update a specific service identity
     * @param body 
     * @param orgMrn 
     * @param serviceMrn 
     * @param version 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateService(body: Service, orgMrn: string, serviceMrn: string, version: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateService(body: Service, orgMrn: string, serviceMrn: string, version: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateService(body: Service, orgMrn: string, serviceMrn: string, version: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateService(body: Service, orgMrn: string, serviceMrn: string, version: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateService.');
        }

        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling updateService.');
        }

        if (serviceMrn === null || serviceMrn === undefined) {
            throw new Error('Required parameter serviceMrn was null or undefined when calling updateService.');
        }

        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling updateService.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('put',`${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
