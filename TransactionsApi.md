# TransactionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMetadataOnTransaction**](TransactionsApi.md#addMetadataOnTransaction) | **POST** /{ledger}/transactions/{txid}/metadata | Set Transaction Metadata
[**countTransactions**](TransactionsApi.md#countTransactions) | **HEAD** /{ledger}/transactions | Count transactions
[**createTransaction**](TransactionsApi.md#createTransaction) | **POST** /{ledger}/transactions | Create Transaction
[**createTransactions**](TransactionsApi.md#createTransactions) | **POST** /{ledger}/transactions/batch | Create Transactions Batch
[**getTransaction**](TransactionsApi.md#getTransaction) | **GET** /{ledger}/transactions/{txid} | Get Transaction
[**listTransactions**](TransactionsApi.md#listTransactions) | **GET** /{ledger}/transactions | Get all Transactions
[**revertTransaction**](TransactionsApi.md#revertTransaction) | **POST** /{ledger}/transactions/{txid}/revert | Revert Transaction


# **addMetadataOnTransaction**
> void addMetadataOnTransaction()

Set a new metadata to a ledger transaction by transaction id

### Example


```typescript
import { TransactionsApi, createConfiguration } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new TransactionsApi(configuration);

apiInstance.addMetadataOnTransaction("ledger_example",  1,  {
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
 **txid** | [**number**] | txid | defaults to undefined


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

Count transactions mathing given criteria

### Example


```typescript
import { TransactionsApi, createConfiguration } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new TransactionsApi(configuration);

apiInstance.countTransactions("ledger_example",  "after_example",  "reference_example",  "account_example",  "source_example",  "destination_example" ).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | ledger | defaults to undefined
 **after** | [**string**] | pagination cursor, will return transactions after given txid (in descending order) | (optional) defaults to undefined
 **reference** | [**string**] | find transactions by reference field | (optional) defaults to undefined
 **account** | [**string**] | find transactions with postings involving given account, either as source or destination | (optional) defaults to undefined
 **source** | [**string**] | find transactions with postings involving given account at source | (optional) defaults to undefined
 **destination** | [**string**] | find transactions with postings involving given account at destination | (optional) defaults to undefined


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

Create a new ledger transaction Commit a new transaction to the ledger

### Example


```typescript
import { TransactionsApi, createConfiguration } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new TransactionsApi(configuration);

apiInstance.createTransaction("ledger_example",  {
    metadata: {},
    postings: [
      {
        amount: 1,
        asset: "asset_example",
        destination: "destination_example",
        source: "source_example",
      },
    ],
    reference: "reference_example",
  },  true ).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionData** | **TransactionData**| transaction |
 **ledger** | [**string**] | ledger | defaults to undefined
 **preview** | [**boolean**] | Preview mode | (optional) defaults to undefined


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
> TransactionListResponse createTransactions(transactions)

Create a new ledger transactions batch Commit a batch of new transactions to the ledger

### Example


```typescript
import { TransactionsApi, createConfiguration } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new TransactionsApi(configuration);

apiInstance.createTransactions("ledger_example",  {
    transactions: [
      {
        metadata: {},
        postings: [
          {
            amount: 1,
            asset: "asset_example",
            destination: "destination_example",
            source: "source_example",
          },
        ],
        reference: "reference_example",
      },
    ],
  } ).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactions** | **Transactions**| transactions |
 **ledger** | [**string**] | ledger | defaults to undefined


### Return type

**TransactionListResponse**

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
**409** | Confict |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTransaction**
> TransactionResponse getTransaction()

Get transaction by transaction id

### Example


```typescript
import { TransactionsApi, createConfiguration } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new TransactionsApi(configuration);

apiInstance.getTransaction("ledger_example",  1 ).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | ledger | defaults to undefined
 **txid** | [**number**] | txid | defaults to undefined


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
> TransactionCursorResponse listTransactions()

Get all ledger transactions

### Example


```typescript
import { TransactionsApi, createConfiguration } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new TransactionsApi(configuration);

apiInstance.listTransactions("ledger_example",  "after_example",  "reference_example",  "account_example",  "source_example",  "destination_example" ).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | ledger | defaults to undefined
 **after** | [**string**] | pagination cursor, will return transactions after given txid (in descending order) | (optional) defaults to undefined
 **reference** | [**string**] | find transactions by reference field | (optional) defaults to undefined
 **account** | [**string**] | find transactions with postings involving given account, either as source or destination | (optional) defaults to undefined
 **source** | [**string**] | find transactions with postings involving given account at source | (optional) defaults to undefined
 **destination** | [**string**] | find transactions with postings involving given account at destination | (optional) defaults to undefined


### Return type

**TransactionCursorResponse**

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

Revert a ledger transaction by transaction id

### Example


```typescript
import { TransactionsApi, createConfiguration } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new TransactionsApi(configuration);

apiInstance.revertTransaction("ledger_example",  1 ).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | ledger | defaults to undefined
 **txid** | [**number**] | txid | defaults to undefined


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


