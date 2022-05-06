# AccountsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMetadataToAccount**](AccountsApi.md#addMetadataToAccount) | **POST** /{ledger}/accounts/{accountId}/metadata | Add metadata to account
[**countAccounts**](AccountsApi.md#countAccounts) | **HEAD** /{ledger}/accounts | Count accounts
[**getAccount**](AccountsApi.md#getAccount) | **GET** /{ledger}/accounts/{accountId} | Get account by address
[**listAccounts**](AccountsApi.md#listAccounts) | **GET** /{ledger}/accounts | List all accounts


# **addMetadataToAccount**
> void addMetadataToAccount(requestBody)


### Example


```typescript
import { AccountsApi, createConfiguration } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new AccountsApi(configuration);

apiInstance.addMetadataToAccount("ledger_example",  "accountId_example",  {
    "key": null,
  } ).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **{ [key: string]: any; }**| metadata |
 **ledger** | [**string**] | ledger | defaults to undefined
 **accountId** | [**string**] | accountId | defaults to undefined


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

apiInstance.countAccounts("ledger_example",  "after_example",  "address_example",  {
    "key": "key_example",
  } ).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | ledger | defaults to undefined
 **after** | [**string**] | pagination cursor, will return accounts after given address (in descending order) | (optional) defaults to undefined
 **address** | [**string**] | account address | (optional) defaults to undefined
 **metadata** | **{ [key: string]: string; }** | metadata | (optional) defaults to undefined


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
> AccountResponse getAccount()


### Example


```typescript
import { AccountsApi, createConfiguration } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new AccountsApi(configuration);

apiInstance.getAccount("ledger_example",  "accountId_example" ).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | ledger | defaults to undefined
 **accountId** | [**string**] | accountId | defaults to undefined


### Return type

**AccountResponse**

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
> AccountCursorResponse listAccounts()


### Example


```typescript
import { AccountsApi, createConfiguration } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new AccountsApi(configuration);

apiInstance.listAccounts("ledger_example",  "after_example",  "address_example",  {
    "key": "key_example",
  } ).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | ledger | defaults to undefined
 **after** | [**string**] | pagination cursor, will return accounts after given address (in descending order) | (optional) defaults to undefined
 **address** | [**string**] | account address | (optional) defaults to undefined
 **metadata** | **{ [key: string]: string; }** | account address | (optional) defaults to undefined


### Return type

**AccountCursorResponse**

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


