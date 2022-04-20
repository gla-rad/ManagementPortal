/**
 * Maritime Connectivity Platform Service Registry API
 * Maritime Connectivity Platform Service Registry, developed by the MCC MSR WG
 *
 * OpenAPI spec version: 0.1
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { LedgerRequestDto } from '../model/ledgerRequestDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { AppConfig } from '../../../app.config';


@Injectable()
export class LedgerRequestControllerService {

    protected basePath = AppConfig.SR_BASE_PATH;
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
     * createLedgerRequest
     * 
     * @param requestDto requestDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createLedgerRequestUsingPOST(requestDto: LedgerRequestDto, observe?: 'body', reportProgress?: boolean): Observable<LedgerRequestDto>;
    public createLedgerRequestUsingPOST(requestDto: LedgerRequestDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LedgerRequestDto>>;
    public createLedgerRequestUsingPOST(requestDto: LedgerRequestDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LedgerRequestDto>>;
    public createLedgerRequestUsingPOST(requestDto: LedgerRequestDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (requestDto === null || requestDto === undefined) {
            throw new Error('Required parameter requestDto was null or undefined when calling createLedgerRequestUsingPOST.');
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

        return this.httpClient.post<LedgerRequestDto>(`${this.basePath}/api/ledgerrequests`,
            requestDto,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deleteRequest
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteRequestUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteRequestUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteRequestUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteRequestUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteRequestUsingDELETE.');
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

        return this.httpClient.delete<any>(`${this.basePath}/api/ledgerrequests/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getLedgerRequest
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLedgerRequestUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<LedgerRequestDto>;
    public getLedgerRequestUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LedgerRequestDto>>;
    public getLedgerRequestUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LedgerRequestDto>>;
    public getLedgerRequestUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getLedgerRequestUsingGET.');
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

        return this.httpClient.get<LedgerRequestDto>(`${this.basePath}/api/ledgerrequests/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getLedgerRequests
     * 
     * @param offset 
     * @param paged 
     * @param pageNumber 
     * @param pageSize 
     * @param sortSorted 
     * @param sortUnsorted 
     * @param unpaged 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLedgerRequestsUsingGET(offset?: number, paged?: boolean, pageNumber?: number, pageSize?: number, sortSorted?: boolean, sortUnsorted?: boolean, unpaged?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Array<LedgerRequestDto>>;
    public getLedgerRequestsUsingGET(offset?: number, paged?: boolean, pageNumber?: number, pageSize?: number, sortSorted?: boolean, sortUnsorted?: boolean, unpaged?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<LedgerRequestDto>>>;
    public getLedgerRequestsUsingGET(offset?: number, paged?: boolean, pageNumber?: number, pageSize?: number, sortSorted?: boolean, sortUnsorted?: boolean, unpaged?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<LedgerRequestDto>>>;
    public getLedgerRequestsUsingGET(offset?: number, paged?: boolean, pageNumber?: number, pageSize?: number, sortSorted?: boolean, sortUnsorted?: boolean, unpaged?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {








        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', <any>offset);
        }
        if (paged !== undefined && paged !== null) {
            queryParameters = queryParameters.set('paged', <any>paged);
        }
        if (pageNumber !== undefined && pageNumber !== null) {
            queryParameters = queryParameters.set('pageNumber', <any>pageNumber);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('pageSize', <any>pageSize);
        }
        if (sortSorted !== undefined && sortSorted !== null) {
            queryParameters = queryParameters.set('sort.sorted', <any>sortSorted);
        }
        if (sortUnsorted !== undefined && sortUnsorted !== null) {
            queryParameters = queryParameters.set('sort.unsorted', <any>sortUnsorted);
        }
        if (unpaged !== undefined && unpaged !== null) {
            queryParameters = queryParameters.set('unpaged', <any>unpaged);
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

        return this.httpClient.get<Array<LedgerRequestDto>>(`${this.basePath}/api/ledgerrequests`,
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
     * updateRequestStatus
     * 
     * @param id id
     * @param status status
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateRequestStatusUsingPUT(id: number, status: 'CREATED' | 'FAILED' | 'INACTIVE' | 'REJECTED' | 'REQUESTING' | 'SUCCEEDED' | 'VETTED' | 'VETTING', observe?: 'body', reportProgress?: boolean): Observable<LedgerRequestDto>;
    public updateRequestStatusUsingPUT(id: number, status: 'CREATED' | 'FAILED' | 'INACTIVE' | 'REJECTED' | 'REQUESTING' | 'SUCCEEDED' | 'VETTED' | 'VETTING', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LedgerRequestDto>>;
    public updateRequestStatusUsingPUT(id: number, status: 'CREATED' | 'FAILED' | 'INACTIVE' | 'REJECTED' | 'REQUESTING' | 'SUCCEEDED' | 'VETTED' | 'VETTING', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LedgerRequestDto>>;
    public updateRequestStatusUsingPUT(id: number, status: 'CREATED' | 'FAILED' | 'INACTIVE' | 'REJECTED' | 'REQUESTING' | 'SUCCEEDED' | 'VETTED' | 'VETTING', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateRequestStatusUsingPUT.');
        }

        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling updateRequestStatusUsingPUT.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (status !== undefined && status !== null) {
            queryParameters = queryParameters.set('status', <any>status);
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

        return this.httpClient.put<LedgerRequestDto>(`${this.basePath}/api/ledgerrequests/${encodeURIComponent(String(id))}/status`,
            null,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
