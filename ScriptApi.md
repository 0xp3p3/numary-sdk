# ScriptApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**runScript**](ScriptApi.md#runScript) | **POST** /{ledger}/script | Execute Numscript


# **runScript**
> ScriptResult runScript(script)

Execute a Numscript and create the transaction if any

### Example


```typescript
import { ScriptApi, createConfiguration } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new ScriptApi(configuration);

apiInstance.runScript("ledger_example",  {
    plain: "plain_example",
    vars: {},
  },  true ).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **script** | **Script**| script |
 **ledger** | [**string**] | ledger | defaults to undefined
 **preview** | [**boolean**] | Preview mode | (optional) defaults to undefined


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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


