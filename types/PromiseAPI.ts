import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { Account } from '../models/Account';
import { AccountResponse } from '../models/AccountResponse';
import { AccountWithVolumesAndBalances } from '../models/AccountWithVolumesAndBalances';
import { AccountsCursorResponse } from '../models/AccountsCursorResponse';
import { AccountsCursorResponseCursor } from '../models/AccountsCursorResponseCursor';
import { AggregateBalancesResponse } from '../models/AggregateBalancesResponse';
import { BalancesCursorResponse } from '../models/BalancesCursorResponse';
import { BalancesCursorResponseCursor } from '../models/BalancesCursorResponseCursor';
import { Config } from '../models/Config';
import { ConfigInfo } from '../models/ConfigInfo';
import { ConfigInfoResponse } from '../models/ConfigInfoResponse';
import { Contract } from '../models/Contract';
import { ErrorResponse } from '../models/ErrorResponse';
import { ErrorsEnum } from '../models/ErrorsEnum';
import { LedgerInfo } from '../models/LedgerInfo';
import { LedgerInfoResponse } from '../models/LedgerInfoResponse';
import { LedgerInfoStorage } from '../models/LedgerInfoStorage';
import { LedgerStorage } from '../models/LedgerStorage';
import { Log } from '../models/Log';
import { LogsCursorResponse } from '../models/LogsCursorResponse';
import { LogsCursorResponseCursor } from '../models/LogsCursorResponseCursor';
import { Mapping } from '../models/Mapping';
import { MappingResponse } from '../models/MappingResponse';
import { MigrationInfo } from '../models/MigrationInfo';
import { PostTransaction } from '../models/PostTransaction';
import { PostTransactionScript } from '../models/PostTransactionScript';
import { Posting } from '../models/Posting';
import { Script } from '../models/Script';
import { ScriptResponse } from '../models/ScriptResponse';
import { Stats } from '../models/Stats';
import { StatsResponse } from '../models/StatsResponse';
import { Transaction } from '../models/Transaction';
import { TransactionData } from '../models/TransactionData';
import { TransactionResponse } from '../models/TransactionResponse';
import { Transactions } from '../models/Transactions';
import { TransactionsCursorResponse } from '../models/TransactionsCursorResponse';
import { TransactionsCursorResponseCursor } from '../models/TransactionsCursorResponseCursor';
import { TransactionsResponse } from '../models/TransactionsResponse';
import { Volume } from '../models/Volume';
import { ObservableAccountsApi } from './ObservableAPI';

import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";
export class PromiseAccountsApi {
    private api: ObservableAccountsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountsApiRequestFactory,
        responseProcessor?: AccountsApiResponseProcessor
    ) {
        this.api = new ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add metadata to an account
     * @param ledger Name of the ledger.
     * @param address Exact address of the account. It must match the following regular expressions pattern: &#x60;&#x60;&#x60; ^\\w+(:\\w+)*$ &#x60;&#x60;&#x60; 
     * @param requestBody metadata
     */
    public addMetadataToAccount(ledger: string, address: string, requestBody: { [key: string]: any; }, _options?: Configuration): Promise<void> {
        const result = this.api.addMetadataToAccount(ledger, address, requestBody, _options);
        return result.toPromise();
    }

    /**
     * Count the accounts from a ledger
     * @param ledger Name of the ledger.
     * @param address Filter accounts by address pattern (regular expression placed between ^ and $).
     * @param metadata Filter accounts by metadata key value pairs. Nested objects can be used as seen in the example below.
     */
    public countAccounts(ledger: string, address?: string, metadata?: any, _options?: Configuration): Promise<void> {
        const result = this.api.countAccounts(ledger, address, metadata, _options);
        return result.toPromise();
    }

    /**
     * Get account by its address
     * @param ledger Name of the ledger.
     * @param address Exact address of the account. It must match the following regular expressions pattern: &#x60;&#x60;&#x60; ^\\w+(:\\w+)*$ &#x60;&#x60;&#x60; 
     */
    public getAccount(ledger: string, address: string, _options?: Configuration): Promise<AccountResponse> {
        const result = this.api.getAccount(ledger, address, _options);
        return result.toPromise();
    }

    /**
     * List accounts from a ledger, sorted by address in descending order.
     * List accounts from a ledger
     * @param ledger Name of the ledger.
     * @param pageSize The maximum number of results to return per page. 
     * @param pageSize2 The maximum number of results to return per page. Deprecated, please use &#x60;pageSize&#x60; instead. 
     * @param after Pagination cursor, will return accounts after given address, in descending order.
     * @param address Filter accounts by address pattern (regular expression placed between ^ and $).
     * @param metadata Filter accounts by metadata key value pairs. Nested objects can be used as seen in the example below.
     * @param balance Filter accounts by their balance (default operator is gte)
     * @param balanceOperator Operator used for the filtering of balances can be greater than/equal, less than/equal, greater than, less than, equal or not. 
     * @param balanceOperator2 Operator used for the filtering of balances can be greater than/equal, less than/equal, greater than, less than, equal or not. Deprecated, please use &#x60;balanceOperator&#x60; instead. 
     * @param cursor Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set. 
     * @param paginationToken Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set. Deprecated, please use &#x60;cursor&#x60; instead. 
     */
    public listAccounts(ledger: string, pageSize?: number, pageSize2?: number, after?: string, address?: string, metadata?: any, balance?: number, balanceOperator?: 'gte' | 'lte' | 'gt' | 'lt' | 'e' | 'ne', balanceOperator2?: 'gte' | 'lte' | 'gt' | 'lt' | 'e' | 'ne', cursor?: string, paginationToken?: string, _options?: Configuration): Promise<AccountsCursorResponse> {
        const result = this.api.listAccounts(ledger, pageSize, pageSize2, after, address, metadata, balance, balanceOperator, balanceOperator2, cursor, paginationToken, _options);
        return result.toPromise();
    }


}



import { ObservableBalancesApi } from './ObservableAPI';

import { BalancesApiRequestFactory, BalancesApiResponseProcessor} from "../apis/BalancesApi";
export class PromiseBalancesApi {
    private api: ObservableBalancesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BalancesApiRequestFactory,
        responseProcessor?: BalancesApiResponseProcessor
    ) {
        this.api = new ObservableBalancesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the balances from a ledger's account
     * @param ledger Name of the ledger.
     * @param address Filter balances involving given account, either as source or destination.
     * @param after Pagination cursor, will return accounts after given address, in descending order.
     * @param cursor Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set. 
     * @param paginationToken Parameter used in pagination requests. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. Deprecated, please use &#x60;cursor&#x60; instead.
     */
    public getBalances(ledger: string, address?: string, after?: string, cursor?: string, paginationToken?: string, _options?: Configuration): Promise<BalancesCursorResponse> {
        const result = this.api.getBalances(ledger, address, after, cursor, paginationToken, _options);
        return result.toPromise();
    }

    /**
     * Get the aggregated balances from selected accounts
     * @param ledger Name of the ledger.
     * @param address Filter balances involving given account, either as source or destination.
     */
    public getBalancesAggregated(ledger: string, address?: string, _options?: Configuration): Promise<AggregateBalancesResponse> {
        const result = this.api.getBalancesAggregated(ledger, address, _options);
        return result.toPromise();
    }


}



import { ObservableLedgerApi } from './ObservableAPI';

import { LedgerApiRequestFactory, LedgerApiResponseProcessor} from "../apis/LedgerApi";
export class PromiseLedgerApi {
    private api: ObservableLedgerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LedgerApiRequestFactory,
        responseProcessor?: LedgerApiResponseProcessor
    ) {
        this.api = new ObservableLedgerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get information about a ledger
     * @param ledger Name of the ledger.
     */
    public getLedgerInfo(ledger: string, _options?: Configuration): Promise<LedgerInfoResponse> {
        const result = this.api.getLedgerInfo(ledger, _options);
        return result.toPromise();
    }


}



import { ObservableLogsApi } from './ObservableAPI';

import { LogsApiRequestFactory, LogsApiResponseProcessor} from "../apis/LogsApi";
export class PromiseLogsApi {
    private api: ObservableLogsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LogsApiRequestFactory,
        responseProcessor?: LogsApiResponseProcessor
    ) {
        this.api = new ObservableLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List the logs from a ledger, sorted by ID in descending order.
     * List the logs from a ledger
     * @param ledger Name of the ledger.
     * @param pageSize The maximum number of results to return per page. 
     * @param pageSize2 The maximum number of results to return per page. Deprecated, please use &#x60;pageSize&#x60; instead. 
     * @param after Pagination cursor, will return the logs after a given ID. (in descending order).
     * @param startTime Filter transactions that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, \&quot;2023-01-02T15:04:01Z\&quot; includes the first second of 4th minute). 
     * @param startTime2 Filter transactions that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, \&quot;2023-01-02T15:04:01Z\&quot; includes the first second of 4th minute). Deprecated, please use &#x60;startTime&#x60; instead. 
     * @param endTime Filter transactions that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, \&quot;2023-01-02T15:04:01Z\&quot; excludes the first second of 4th minute). 
     * @param endTime2 Filter transactions that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, \&quot;2023-01-02T15:04:01Z\&quot; excludes the first second of 4th minute). Deprecated, please use &#x60;endTime&#x60; instead. 
     * @param cursor Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set. 
     * @param paginationToken Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set. Deprecated, please use &#x60;cursor&#x60; instead. 
     */
    public listLogs(ledger: string, pageSize?: number, pageSize2?: number, after?: string, startTime?: Date, startTime2?: Date, endTime?: Date, endTime2?: Date, cursor?: string, paginationToken?: string, _options?: Configuration): Promise<LogsCursorResponse> {
        const result = this.api.listLogs(ledger, pageSize, pageSize2, after, startTime, startTime2, endTime, endTime2, cursor, paginationToken, _options);
        return result.toPromise();
    }


}



import { ObservableMappingApi } from './ObservableAPI';

import { MappingApiRequestFactory, MappingApiResponseProcessor} from "../apis/MappingApi";
export class PromiseMappingApi {
    private api: ObservableMappingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MappingApiRequestFactory,
        responseProcessor?: MappingApiResponseProcessor
    ) {
        this.api = new ObservableMappingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the mapping of a ledger
     * @param ledger Name of the ledger.
     */
    public getMapping(ledger: string, _options?: Configuration): Promise<MappingResponse> {
        const result = this.api.getMapping(ledger, _options);
        return result.toPromise();
    }

    /**
     * Update the mapping of a ledger
     * @param ledger Name of the ledger.
     * @param mapping 
     */
    public updateMapping(ledger: string, mapping: Mapping, _options?: Configuration): Promise<MappingResponse> {
        const result = this.api.updateMapping(ledger, mapping, _options);
        return result.toPromise();
    }


}



import { ObservableScriptApi } from './ObservableAPI';

import { ScriptApiRequestFactory, ScriptApiResponseProcessor} from "../apis/ScriptApi";
export class PromiseScriptApi {
    private api: ObservableScriptApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ScriptApiRequestFactory,
        responseProcessor?: ScriptApiResponseProcessor
    ) {
        this.api = new ObservableScriptApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This route is deprecated, and has been merged into `POST /{ledger}/transactions`. 
     * Execute a Numscript
     * @param ledger Name of the ledger.
     * @param script 
     * @param preview Set the preview mode. Preview mode doesn&#39;t add the logs to the database or publish a message to the message broker.
     */
    public runScript(ledger: string, script: Script, preview?: boolean, _options?: Configuration): Promise<ScriptResponse> {
        const result = this.api.runScript(ledger, script, preview, _options);
        return result.toPromise();
    }


}



import { ObservableServerApi } from './ObservableAPI';

import { ServerApiRequestFactory, ServerApiResponseProcessor} from "../apis/ServerApi";
export class PromiseServerApi {
    private api: ObservableServerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ServerApiRequestFactory,
        responseProcessor?: ServerApiResponseProcessor
    ) {
        this.api = new ObservableServerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Show server information
     */
    public getInfo(_options?: Configuration): Promise<ConfigInfoResponse> {
        const result = this.api.getInfo(_options);
        return result.toPromise();
    }


}



import { ObservableStatsApi } from './ObservableAPI';

import { StatsApiRequestFactory, StatsApiResponseProcessor} from "../apis/StatsApi";
export class PromiseStatsApi {
    private api: ObservableStatsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StatsApiRequestFactory,
        responseProcessor?: StatsApiResponseProcessor
    ) {
        this.api = new ObservableStatsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get statistics from a ledger. (aggregate metrics on accounts and transactions) 
     * Get statistics from a ledger
     * @param ledger name of the ledger
     */
    public readStats(ledger: string, _options?: Configuration): Promise<StatsResponse> {
        const result = this.api.readStats(ledger, _options);
        return result.toPromise();
    }


}



import { ObservableTransactionsApi } from './ObservableAPI';

import { TransactionsApiRequestFactory, TransactionsApiResponseProcessor} from "../apis/TransactionsApi";
export class PromiseTransactionsApi {
    private api: ObservableTransactionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TransactionsApiRequestFactory,
        responseProcessor?: TransactionsApiResponseProcessor
    ) {
        this.api = new ObservableTransactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Set the metadata of a transaction by its ID
     * @param ledger Name of the ledger.
     * @param txid Transaction ID.
     * @param requestBody metadata
     */
    public addMetadataOnTransaction(ledger: string, txid: number, requestBody?: { [key: string]: any; }, _options?: Configuration): Promise<void> {
        const result = this.api.addMetadataOnTransaction(ledger, txid, requestBody, _options);
        return result.toPromise();
    }

    /**
     * Count the transactions from a ledger
     * @param ledger Name of the ledger.
     * @param reference Filter transactions by reference field.
     * @param account Filter transactions with postings involving given account, either as source or destination (regular expression placed between ^ and $).
     * @param source Filter transactions with postings involving given account at source (regular expression placed between ^ and $).
     * @param destination Filter transactions with postings involving given account at destination (regular expression placed between ^ and $).
     * @param startTime Filter transactions that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, \&quot;2023-01-02T15:04:01Z\&quot; includes the first second of 4th minute). 
     * @param startTime2 Filter transactions that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, \&quot;2023-01-02T15:04:01Z\&quot; includes the first second of 4th minute). Deprecated, please use &#x60;startTime&#x60; instead. 
     * @param endTime Filter transactions that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, \&quot;2023-01-02T15:04:01Z\&quot; excludes the first second of 4th minute). 
     * @param endTime2 Filter transactions that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, \&quot;2023-01-02T15:04:01Z\&quot; excludes the first second of 4th minute). Deprecated, please use &#x60;endTime&#x60; instead. 
     * @param metadata Filter transactions by metadata key value pairs. Nested objects can be used as seen in the example below.
     */
    public countTransactions(ledger: string, reference?: string, account?: string, source?: string, destination?: string, startTime?: Date, startTime2?: Date, endTime?: Date, endTime2?: Date, metadata?: any, _options?: Configuration): Promise<void> {
        const result = this.api.countTransactions(ledger, reference, account, source, destination, startTime, startTime2, endTime, endTime2, metadata, _options);
        return result.toPromise();
    }

    /**
     * Create a new transaction to a ledger
     * @param ledger Name of the ledger.
     * @param postTransaction The request body must contain at least one of the following objects:   - &#x60;postings&#x60;: suitable for simple transactions   - &#x60;script&#x60;: enabling more complex transactions with Numscript 
     * @param preview Set the preview mode. Preview mode doesn&#39;t add the logs to the database or publish a message to the message broker.
     */
    public createTransaction(ledger: string, postTransaction: PostTransaction, preview?: boolean, _options?: Configuration): Promise<TransactionsResponse> {
        const result = this.api.createTransaction(ledger, postTransaction, preview, _options);
        return result.toPromise();
    }

    /**
     * Create a new batch of transactions to a ledger
     * @param ledger Name of the ledger.
     * @param transactions 
     */
    public createTransactions(ledger: string, transactions: Transactions, _options?: Configuration): Promise<TransactionsResponse> {
        const result = this.api.createTransactions(ledger, transactions, _options);
        return result.toPromise();
    }

    /**
     * Get transaction from a ledger by its ID
     * @param ledger Name of the ledger.
     * @param txid Transaction ID.
     */
    public getTransaction(ledger: string, txid: number, _options?: Configuration): Promise<TransactionResponse> {
        const result = this.api.getTransaction(ledger, txid, _options);
        return result.toPromise();
    }

    /**
     * List transactions from a ledger, sorted by txid in descending order.
     * List transactions from a ledger
     * @param ledger Name of the ledger.
     * @param pageSize The maximum number of results to return per page. 
     * @param pageSize2 The maximum number of results to return per page. Deprecated, please use &#x60;pageSize&#x60; instead. 
     * @param after Pagination cursor, will return transactions after given txid (in descending order).
     * @param reference Find transactions by reference field.
     * @param account Filter transactions with postings involving given account, either as source or destination (regular expression placed between ^ and $).
     * @param source Filter transactions with postings involving given account at source (regular expression placed between ^ and $).
     * @param destination Filter transactions with postings involving given account at destination (regular expression placed between ^ and $).
     * @param startTime Filter transactions that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, \&quot;2023-01-02T15:04:01Z\&quot; includes the first second of 4th minute). 
     * @param startTime2 Filter transactions that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, \&quot;2023-01-02T15:04:01Z\&quot; includes the first second of 4th minute). Deprecated, please use &#x60;startTime&#x60; instead. 
     * @param endTime Filter transactions that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, \&quot;2023-01-02T15:04:01Z\&quot; excludes the first second of 4th minute). 
     * @param endTime2 Filter transactions that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, \&quot;2023-01-02T15:04:01Z\&quot; excludes the first second of 4th minute). Deprecated, please use &#x60;endTime&#x60; instead. 
     * @param cursor Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set. 
     * @param paginationToken Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set. Deprecated, please use &#x60;cursor&#x60; instead. 
     * @param metadata Filter transactions by metadata key value pairs. Nested objects can be used as seen in the example below.
     */
    public listTransactions(ledger: string, pageSize?: number, pageSize2?: number, after?: string, reference?: string, account?: string, source?: string, destination?: string, startTime?: Date, startTime2?: Date, endTime?: Date, endTime2?: Date, cursor?: string, paginationToken?: string, metadata?: any, _options?: Configuration): Promise<TransactionsCursorResponse> {
        const result = this.api.listTransactions(ledger, pageSize, pageSize2, after, reference, account, source, destination, startTime, startTime2, endTime, endTime2, cursor, paginationToken, metadata, _options);
        return result.toPromise();
    }

    /**
     * Revert a ledger transaction by its ID
     * @param ledger Name of the ledger.
     * @param txid Transaction ID.
     */
    public revertTransaction(ledger: string, txid: number, _options?: Configuration): Promise<TransactionResponse> {
        const result = this.api.revertTransaction(ledger, txid, _options);
        return result.toPromise();
    }


}



