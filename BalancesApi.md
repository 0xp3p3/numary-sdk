# ledger.BalancesApi

All URIs are relative to *https://.o.numary.cloud/ledger*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBalances**](BalancesApi.md#getBalances) | **GET** /{ledger}/balances | Get the balances from a ledger&#39;s account
[**getBalancesAggregated**](BalancesApi.md#getBalancesAggregated) | **GET** /{ledger}/aggregate/balances | Get the aggregated balances from selected accounts


# **getBalances**
> GetBalances200Response getBalances()


### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.BalancesApi(configuration);

let body:ledger.BalancesApiGetBalancesRequest = {
  // string | Name of the ledger.
  ledger: "ledger001",
  // string | Filter balances involving given account, either as source or destination. (optional)
  address: "users:001",
  // string | Pagination cursor, will return accounts after given address, in descending order. (optional)
  after: "users:003",
  // string | Parameter used in pagination requests.  Set to the value of next for the next page of results.  Set to the value of previous for the previous page of results. (optional)
  paginationToken: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
};

apiInstance.getBalances(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **address** | [**string**] | Filter balances involving given account, either as source or destination. | (optional) defaults to undefined
 **after** | [**string**] | Pagination cursor, will return accounts after given address, in descending order. | (optional) defaults to undefined
 **paginationToken** | [**string**] | Parameter used in pagination requests.  Set to the value of next for the next page of results.  Set to the value of previous for the previous page of results. | (optional) defaults to undefined


### Return type

**GetBalances200Response**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBalancesAggregated**
> GetBalancesAggregated200Response getBalancesAggregated()


### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.BalancesApi(configuration);

let body:ledger.BalancesApiGetBalancesAggregatedRequest = {
  // string | Name of the ledger.
  ledger: "ledger001",
  // string | Filter balances involving given account, either as source or destination. (optional)
  address: "users:001",
};

apiInstance.getBalancesAggregated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **address** | [**string**] | Filter balances involving given account, either as source or destination. | (optional) defaults to undefined


### Return type

**GetBalancesAggregated200Response**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


