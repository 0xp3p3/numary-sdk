# MappingApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMapping**](MappingApi.md#getMapping) | **GET** /{ledger}/mapping | Get mapping
[**updateMapping**](MappingApi.md#updateMapping) | **PUT** /{ledger}/mapping | Put mapping


# **getMapping**
> MappingResponse getMapping()

Get ledger mapping

### Example


```typescript
import { MappingApi, createConfiguration } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new MappingApi(configuration);

apiInstance.getMapping("ledger_example" ).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | ledger | defaults to undefined


### Return type

**MappingResponse**

### Authorization

[basicAuth](README.md#basicAuth), [cloudToken](README.md#cloudToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateMapping**
> MappingResponse updateMapping(mapping)

Update ledger mapping

### Example


```typescript
import { MappingApi, createConfiguration } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new MappingApi(configuration);

apiInstance.updateMapping("ledger_example",  {
    contracts: [
      {
        account: "account_example",
        expr: {},
      },
    ],
  } ).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mapping** | **Mapping**| mapping |
 **ledger** | [**string**] | ledger | defaults to undefined


### Return type

**MappingResponse**

### Authorization

[basicAuth](README.md#basicAuth), [cloudToken](README.md#cloudToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


