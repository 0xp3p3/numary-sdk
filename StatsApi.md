# ledger.StatsApi

All URIs are relative to *https://.o.numary.cloud/ledger*

Method | HTTP request | Description
------------- | ------------- | -------------
[**readStats**](StatsApi.md#readStats) | **GET** /{ledger}/stats | Get Stats


# **readStats**
> StatsResponse readStats()

Get ledger stats (aggregate metrics on accounts and transactions) The stats for account 

### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.StatsApi(configuration);

let body:ledger.StatsApiReadStatsRequest = {
  // string | name of the ledger
  ledger: "ledger001",
};

apiInstance.readStats(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | name of the ledger | defaults to undefined


### Return type

**StatsResponse**

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


