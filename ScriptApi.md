# ledger.ScriptApi

All URIs are relative to *https://.o.numary.cloud/ledger*

Method | HTTP request | Description
------------- | ------------- | -------------
[**runScript**](ScriptApi.md#runScript) | **POST** /{ledger}/script | Execute a Numscript.


# **runScript**
> ScriptResult runScript(script)


### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.ScriptApi(configuration);

let body:ledger.ScriptApiRunScriptRequest = {
  // string | Name of the ledger.
  ledger: "ledger001",
  // Script
  script: {
    reference: "order_1234",
    metadata: {
      "key": null,
    },
    plain: `vars {
account $user
}
send [COIN 10] (
	source = @world
	destination = $user
)
`,
    vars: {},
  },
  // boolean | Set the preview mode. Preview mode doesn't add the logs to the database or publish a message to the message broker. (optional)
  preview: true,
};

apiInstance.runScript(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **script** | **Script**|  |
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **preview** | [**boolean**] | Set the preview mode. Preview mode doesn&#39;t add the logs to the database or publish a message to the message broker. | (optional) defaults to undefined


### Return type

**ScriptResult**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


