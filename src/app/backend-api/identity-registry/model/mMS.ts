/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Certificate } from './certificate';

/**
 * Model object representing an MMS
 */
export interface MMS { 
    /**
     * The ID of the entity in the form of a sequential integer
     */
    readonly id?: number;
    /**
     * The time that the entity was created
     */
    readonly createdAt?: Date;
    /**
     * The time that the entity was last updated
     */
    readonly updatedAt?: Date;
    /**
     * The ID of the organization that the entity belongs to
     */
    idOrganization?: number;
    /**
     * Maritime Connectivity Platform Maritime Resource Name
     */
    mrn: string;
    /**
     * Subsidiary Maritime Resource Name
     */
    mrnSubsidiary?: string;
    /**
     * URL of MMS that the identity is registered
     */
    homeMMSUrl?: string;
    /**
     * Permissions as assigned from the organization
     */
    permissions?: string;
    /**
     * The name of the entity
     */
    name: string;
    /**
     * URL of MMS instance
     */
    url: string;
    /**
     * The set of certificates of the MMS. Cannot be created/updated by editing in the model. Use the dedicated create and revoke calls.
     */
    readonly certificates?: Array<Certificate>;
}