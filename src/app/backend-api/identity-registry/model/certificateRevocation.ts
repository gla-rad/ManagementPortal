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

/**
 * Model object representing a certificate revocation
 */
export interface CertificateRevocation { 
    /**
     * The date the certificate revocation should be activated.
     */
    revokedAt: Date;
    /**
     * The reason the certificates has been revoked
     */
    revokationReason: RevokationReasonEnum;
}
export type RevokationReasonEnum = 'unspecified' | 'keycompromise' | 'cacompromise' | 'affiliationchanged' | 'superseded' | 'cessationofoperation' | 'certificatehold' | 'removefromcrl' | 'privilegewithdrawn' | 'aacompromise';
export const RevokationReasonEnum = {
    Unspecified: 'unspecified' as RevokationReasonEnum,
    Keycompromise: 'keycompromise' as RevokationReasonEnum,
    Cacompromise: 'cacompromise' as RevokationReasonEnum,
    Affiliationchanged: 'affiliationchanged' as RevokationReasonEnum,
    Superseded: 'superseded' as RevokationReasonEnum,
    Cessationofoperation: 'cessationofoperation' as RevokationReasonEnum,
    Certificatehold: 'certificatehold' as RevokationReasonEnum,
    Removefromcrl: 'removefromcrl' as RevokationReasonEnum,
    Privilegewithdrawn: 'privilegewithdrawn' as RevokationReasonEnum,
    Aacompromise: 'aacompromise' as RevokationReasonEnum
};