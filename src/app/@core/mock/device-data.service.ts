import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceDataService {

  constructor() { }

  getDevices() {
    return [
      {"id":1,"createdAt":1605529900000,"updatedAt":1605529900000,"idOrganization":3,"mrn":"urn:mrn:mcp:device:mcc:core:syncer","permissions":"","name":"Sync Device","certificates":[{"id":1,"createdAt":1605530175000,"updatedAt":1605530175000,"certificate":"-----BEGIN CERTIFICATE-----\\nMIIEKTCCA6+gAwIBAgIUCiU6B19MVSgZlNXyP6vFgllD1SkwCgYIKoZIzj0EAwMw\\ngcwxLDAqBgoJkiaJk/IsZAEBDBx1cm46bXJuOm1jcDpjYTptY2M6bWNwLWlkcmVn\\nMQswCQYDVQQGEwJESzEQMA4GA1UECAwHRGVubWFyazETMBEGA1UEBwwKQ29wZW5o\\nYWdlbjEMMAoGA1UECgwDTUNQMQwwCgYDVQQLDANNQ1AxHjAcBgNVBAMMFU1DUCBJ\\nZGVudGl0eSBSZWdpc3RyeTEsMCoGCSqGSIb3DQEJARYdaW5mb0BtYXJpdGltZWNv\\nbm5lY3Rpdml0eS5uZXQwHhcNMjAxMTE2MTIzNjEyWhcNMjIxMTE2MTIzNjEyWjCB\\nizELMAkGA1UEBhMCREsxITAfBgNVBAoMGHVybjptcm46bWNwOm9yZzptY2M6Y29y\\nZTEPMA0GA1UECwwGZGV2aWNlMRQwEgYDVQQDDAtTeW5jIERldmljZTEyMDAGCgmS\\nJomT8ixkAQEMInVybjptcm46bWNwOmRldmljZTptY2M6Y29yZTpzeW5jZXIwdjAQ\\nBgcqhkjOPQIBBgUrgQQAIgNiAARkaT++6RIy4rCQLyI+edFb6nokOlXZyjv0VOoS\\n3TUI3z6U/ZjBmk7WvGNRBhSZwGp7S8Z3qj/Cz0pZvQra+BmSxa1D60Tu9DaNLCVE\\nPF2n0jK5wG4vgfjZRbZm5Ai2VTGjggGPMIIBizBjBgNVHREEXDBaoBoGFGmChru7\\nyJuwqMfLntmAgKqu14oboAIMAKA8BhRpg5i818Ce8PDHy6qdgICqrteKG6AkDCJ1\\ncm46bXJuOm1jcDpkZXZpY2U6bWNjOmNvcmU6c3luY2VyMB8GA1UdIwQYMBaAFB8O\\nW+IGYDcHL1B5U5hNW65ekNAaMB0GA1UdDgQWBBQXwc02oR+W7okf7uoMZAJYMh7V\\n1TBrBgNVHR8EZDBiMGCgXqBchlpodHRwOi8vYXBpLm1hcml0aW1lY29ubmVjdGl2\\naXR5Lm5ldC94NTA5L2FwaS9jZXJ0aWZpY2F0ZXMvY3JsL3Vybjptcm46bWNwOmNh\\nOm1jYzptY3AtaWRyZWcwdwYIKwYBBQUHAQEEazBpMGcGCCsGAQUFBzABhltodHRw\\nOi8vYXBpLm1hcml0aW1lY29ubmVjdGl2aXR5Lm5ldC94NTA5L2FwaS9jZXJ0aWZp\\nY2F0ZXMvb2NzcC91cm46bXJuOm1jcDpjYTptY2M6bWNwLWlkcmVnMAoGCCqGSM49\\nBAMDA2gAMGUCMGOnjED1TpU779A6IWQRMdUBBvD0gGrYOtCMOWWA7XhywltN/ti9\\npX7OJXWqxF11kAIxAMmTREd/aLAnPDDWedHG1Vhqu6hZpEb0XTpMuEJ2xMrtm1JM\\nzEwlQdqCOWOAIerLbg==\\n-----END CERTIFICATE-----\\n","start":1605530172000,"end":1668602172000,"serialNumber":"57920090301817640182118531171648208170742175017","revoked":false}]},
    ];
  }
}
