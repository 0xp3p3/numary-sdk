# AccountsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMetadataToAccount**](AccountsApi.md#addMetadataToAccount) | **POST** /{ledger}/accounts/{address}/metadata | Add metadata to an account.
[**countAccounts**](AccountsApi.md#countAccounts) | **HEAD** /{ledger}/accounts | Count the accounts from a ledger.
[**getAccount**](AccountsApi.md#getAccount) | **GET** /{ledger}/accounts/{address} | Get account by its address.
[**listAccounts**](AccountsApi.md#listAccounts) | **GET** /{ledger}/accounts | List accounts from a ledger.


# **addMetadataToAccount**
> void addMetadataToAccount(requestBody)


### Example


```typescript
import { AccountsApi, createConfiguration } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new AccountsApi(configuration);

apiInstance.addMetadataToAccount("ledger001",  "users:001",  {
    "key": null,
  } ).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **{ [key: string]: any; }**| metadata |
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **address** | [**string**] | Exact address of the account. | defaults to undefined


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Empty response |  -  |
**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **countAccounts**
> void countAccounts()


### Example


```typescript
import { AccountsApi, createConfiguration } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new AccountsApi(configuration);

apiInstance.countAccounts("ledger001",  "users:.+",  {} ).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **address** | [**string**] | Filter accounts by address pattern (regular expression placed between ^ and $). | (optional) defaults to undefined
 **metadata** | **any** | Filter accounts by metadata key value pairs. Nested objects can be used as seen in the example below. | (optional) defaults to undefined


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Count -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccount**
> GetAccount200Response getAccount()


### Example


```typescript
import { AccountsApi, createConfiguration } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new AccountsApi(configuration);

apiInstance.getAccount("ledger001",  "users:001" ).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **address** | [**string**] | Exact address of the account. | defaults to undefined


### Return type

**GetAccount200Response**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAccounts**
> ListAccounts200Response listAccounts()

List accounts from a ledger, sorted by address in descending order.

### Example


```typescript
import { AccountsApi, createConfiguration } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new AccountsApi(configuration);

apiInstance.listAccounts("ledger001",  "users:003",  "users:.+",  {} ).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **after** | [**string**] | Pagination cursor, will return accounts after given address, in descending order. | (optional) defaults to undefined
 **address** | [**string**] | Filter accounts by address pattern (regular expression placed between ^ and $). | (optional) defaults to undefined
 **metadata** | **any** | Filter accounts by metadata key value pairs. Nested objects can be used as seen in the example below. | (optional) defaults to undefined


### Return type

**ListAccounts200Response**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


