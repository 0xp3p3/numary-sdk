# TransactionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMetadataOnTransaction**](TransactionsApi.md#addMetadataOnTransaction) | **POST** /{ledger}/transactions/{txid}/metadata | Set the metadata of a transaction by its ID.
[**countTransactions**](TransactionsApi.md#countTransactions) | **HEAD** /{ledger}/transactions | Count the transactions from a ledger.
[**createTransaction**](TransactionsApi.md#createTransaction) | **POST** /{ledger}/transactions | Create a new transaction to a ledger.
[**createTransactions**](TransactionsApi.md#createTransactions) | **POST** /{ledger}/transactions/batch | Create a new batch of transactions to a ledger.
[**getTransaction**](TransactionsApi.md#getTransaction) | **GET** /{ledger}/transactions/{txid} | Get transaction from a ledger by its ID.
[**listTransactions**](TransactionsApi.md#listTransactions) | **GET** /{ledger}/transactions | List transactions from a ledger.
[**revertTransaction**](TransactionsApi.md#revertTransaction) | **POST** /{ledger}/transactions/{txid}/revert | Revert a ledger transaction by its ID.


# **addMetadataOnTransaction**
> void addMetadataOnTransaction()


### Example


```typescript
import { TransactionsApi, createConfiguration } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new TransactionsApi(configuration);

apiInstance.addMetadataOnTransaction("ledger001",  1234,  {
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
 **txid** | [**number**] | Transaction ID. | defaults to undefined


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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **countTransactions**
> void countTransactions()


### Example


```typescript
import { TransactionsApi, createConfiguration } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new TransactionsApi(configuration);

apiInstance.countTransactions("ledger001",  "ref:001",  "users:001",  "users:001",  "users:001" ).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **reference** | [**string**] | Filter transactions by reference field. | (optional) defaults to undefined
 **account** | [**string**] | Filter transactions with postings involving given account, either as source or destination. | (optional) defaults to undefined
 **source** | [**string**] | Filter transactions with postings involving given account at source. | (optional) defaults to undefined
 **destination** | [**string**] | Filter transactions with postings involving given account at destination. | (optional) defaults to undefined


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

# **createTransaction**
> CreateTransactionResponse createTransaction(transactionData)


### Example


```typescript
import { TransactionsApi, createConfiguration } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new TransactionsApi(configuration);

apiInstance.createTransaction("ledger001",  {
    postings: [
      {
        amount: 100,
        asset: "COIN",
        destination: "users:002",
        source: "users:001",
      },
    ],
    reference: "ref:001",
    metadata: {
      "key": null,
    },
  },  true ).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionData** | **TransactionData**|  |
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **preview** | [**boolean**] | Set the preview mode. Preview mode doesn&#39;t add the logs to the database or publish a message to the message broker. | (optional) defaults to undefined


### Return type

**CreateTransactionResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**304** | Not modified (when preview is enabled) |  -  |
**400** | Commit error |  -  |
**409** | Confict |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTransactions**
> CreateTransactions200Response createTransactions(transactions)


### Example


```typescript
import { TransactionsApi, createConfiguration } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new TransactionsApi(configuration);

apiInstance.createTransactions("ledger001",  {
    transactions: [
      {
        postings: [
          {
            amount: 100,
            asset: "COIN",
            destination: "users:002",
            source: "users:001",
          },
        ],
        reference: "ref:001",
        metadata: {
          "key": null,
        },
      },
    ],
  } ).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactions** | **Transactions**|  |
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined


### Return type

**CreateTransactions200Response**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Commit error |  -  |
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTransaction**
> TransactionResponse getTransaction()


### Example


```typescript
import { TransactionsApi, createConfiguration } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new TransactionsApi(configuration);

apiInstance.getTransaction("ledger001",  1234 ).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **txid** | [**number**] | Transaction ID. | defaults to undefined


### Return type

**TransactionResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTransactions**
> ListTransactions200Response listTransactions()

List transactions from a ledger, sorted by txid in descending order.

### Example


```typescript
import { TransactionsApi, createConfiguration } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new TransactionsApi(configuration);

apiInstance.listTransactions("ledger001",  "1234",  "ref:001",  "users:001",  "users:001",  "users:001",  "start_time_example",  "end_time_example" ).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **after** | [**string**] | Pagination cursor, will return transactions after given txid (in descending order). | (optional) defaults to undefined
 **reference** | [**string**] | Find transactions by reference field. | (optional) defaults to undefined
 **account** | [**string**] | Find transactions with postings involving given account, either as source or destination. | (optional) defaults to undefined
 **source** | [**string**] | Find transactions with postings involving given account at source. | (optional) defaults to undefined
 **destination** | [**string**] | Find transactions with postings involving given account at destination. | (optional) defaults to undefined
 **startTime** | [**string**] | Filter transactions that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, 12:00:01 includes the first second of the minute). | (optional) defaults to undefined
 **endTime** | [**string**] | Filter transactions that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, 12:00:01 excludes the first second of the minute). | (optional) defaults to undefined


### Return type

**ListTransactions200Response**

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

# **revertTransaction**
> TransactionResponse revertTransaction()


### Example


```typescript
import { TransactionsApi, createConfiguration } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new TransactionsApi(configuration);

apiInstance.revertTransaction("ledger001",  1234 ).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **txid** | [**number**] | Transaction ID. | defaults to undefined


### Return type

**TransactionResponse**

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


