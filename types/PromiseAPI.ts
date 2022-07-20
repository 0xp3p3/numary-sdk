import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { Account } from '../models/Account';
import { AccountWithVolumesAndBalances } from '../models/AccountWithVolumesAndBalances';
import { Config } from '../models/Config';
import { ConfigInfo } from '../models/ConfigInfo';
import { ConfigInfoResponse } from '../models/ConfigInfoResponse';
import { Contract } from '../models/Contract';
import { CreateTransaction400Response } from '../models/CreateTransaction400Response';
import { CreateTransaction409Response } from '../models/CreateTransaction409Response';
import { CreateTransactions400Response } from '../models/CreateTransactions400Response';
import { Cursor } from '../models/Cursor';
import { ErrorCode } from '../models/ErrorCode';
import { ErrorResponse } from '../models/ErrorResponse';
import { GetAccount200Response } from '../models/GetAccount200Response';
import { GetAccount400Response } from '../models/GetAccount400Response';
import { GetBalances200Response } from '../models/GetBalances200Response';
import { GetBalances200ResponseCursor } from '../models/GetBalances200ResponseCursor';
import { GetBalances200ResponseCursorAllOf } from '../models/GetBalances200ResponseCursorAllOf';
import { GetBalancesAggregated200Response } from '../models/GetBalancesAggregated200Response';
import { GetBalancesAggregated400Response } from '../models/GetBalancesAggregated400Response';
import { GetTransaction400Response } from '../models/GetTransaction400Response';
import { GetTransaction404Response } from '../models/GetTransaction404Response';
import { LedgerStorage } from '../models/LedgerStorage';
import { ListAccounts200Response } from '../models/ListAccounts200Response';
import { ListAccounts200ResponseCursor } from '../models/ListAccounts200ResponseCursor';
import { ListAccounts200ResponseCursorAllOf } from '../models/ListAccounts200ResponseCursorAllOf';
import { ListAccounts400Response } from '../models/ListAccounts400Response';
import { ListTransactions200Response } from '../models/ListTransactions200Response';
import { ListTransactions200ResponseCursor } from '../models/ListTransactions200ResponseCursor';
import { ListTransactions200ResponseCursorAllOf } from '../models/ListTransactions200ResponseCursorAllOf';
import { Mapping } from '../models/Mapping';
import { MappingResponse } from '../models/MappingResponse';
import { Posting } from '../models/Posting';
import { Script } from '../models/Script';
import { ScriptResult } from '../models/ScriptResult';
import { Stats } from '../models/Stats';
import { StatsResponse } from '../models/StatsResponse';
import { Transaction } from '../models/Transaction';
import { TransactionData } from '../models/TransactionData';
import { TransactionResponse } from '../models/TransactionResponse';
import { Transactions } from '../models/Transactions';
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
     * Add metadata to an account.
     * @param ledger Name of the ledger.
     * @param address Exact address of the account. It must match the following regular expressions pattern: &#x60;&#x60;&#x60; ^\\w+(:\\w+)*$ &#x60;&#x60;&#x60; 
     * @param requestBody metadata
     */
    public addMetadataToAccount(ledger: string, address: string, requestBody: { [key: string]: any; }, _options?: Configuration): Promise<void> {
        const result = this.api.addMetadataToAccount(ledger, address, requestBody, _options);
        return result.toPromise();
    }

    /**
     * Count the accounts from a ledger.
     * @param ledger Name of the ledger.
     * @param address Filter accounts by address pattern (regular expression placed between ^ and $).
     * @param metadata Filter accounts by metadata key value pairs. Nested objects can be used as seen in the example below.
     */
    public countAccounts(ledger: string, address?: string, metadata?: any, _options?: Configuration): Promise<void> {
        const result = this.api.countAccounts(ledger, address, metadata, _options);
        return result.toPromise();
    }

    /**
     * Get account by its address.
     * @param ledger Name of the ledger.
     * @param address Exact address of the account. It must match the following regular expressions pattern: &#x60;&#x60;&#x60; ^\\w+(:\\w+)*$ &#x60;&#x60;&#x60; 
     */
    public getAccount(ledger: string, address: string, _options?: Configuration): Promise<GetAccount200Response> {
        const result = this.api.getAccount(ledger, address, _options);
        return result.toPromise();
    }

    /**
     * List accounts from a ledger, sorted by address in descending order.
     * List accounts from a ledger.
     * @param ledger Name of the ledger.
     * @param pageSize The maximum number of results to return per page
     * @param after Pagination cursor, will return accounts after given address, in descending order.
     * @param address Filter accounts by address pattern (regular expression placed between ^ and $).
     * @param metadata Filter accounts by metadata key value pairs. Nested objects can be used as seen in the example below.
     * @param balance Filter accounts by their balance (default operator is gte)
     * @param balanceOperator Operator used for the filtering of balances can be greater than/equal, less than/equal, greater than, less than, or equal
     * @param paginationToken Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results.  Set to the value of previous for the previous page of results. No other parameters can be set when the pagination token is set. 
     */
    public listAccounts(ledger: string, pageSize?: number, after?: string, address?: string, metadata?: any, balance?: number, balanceOperator?: 'gte' | 'lte' | 'gt' | 'lt' | 'e', paginationToken?: string, _options?: Configuration): Promise<ListAccounts200Response> {
        const result = this.api.listAccounts(ledger, pageSize, after, address, metadata, balance, balanceOperator, paginationToken, _options);
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
     * @param paginationToken Parameter used in pagination requests.  Set to the value of next for the next page of results.  Set to the value of previous for the previous page of results.
     */
    public getBalances(ledger: string, address?: string, after?: string, paginationToken?: string, _options?: Configuration): Promise<GetBalances200Response> {
        const result = this.api.getBalances(ledger, address, after, paginationToken, _options);
        return result.toPromise();
    }

    /**
     * Get the aggregated balances from selected accounts
     * @param ledger Name of the ledger.
     * @param address Filter balances involving given account, either as source or destination.
     */
    public getBalancesAggregated(ledger: string, address?: string, _options?: Configuration): Promise<GetBalancesAggregated200Response> {
        const result = this.api.getBalancesAggregated(ledger, address, _options);
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
     * Get the mapping of a ledger.
     * @param ledger Name of the ledger.
     */
    public getMapping(ledger: string, _options?: Configuration): Promise<MappingResponse> {
        const result = this.api.getMapping(ledger, _options);
        return result.toPromise();
    }

    /**
     * Update the mapping of a ledger.
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
     * Execute a Numscript.
     * @param ledger Name of the ledger.
     * @param script 
     * @param preview Set the preview mode. Preview mode doesn&#39;t add the logs to the database or publish a message to the message broker.
     */
    public runScript(ledger: string, script: Script, preview?: boolean, _options?: Configuration): Promise<ScriptResult> {
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
     * Show server information.
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
     * Get ledger stats (aggregate metrics on accounts and transactions) The stats for account 
     * Get Stats
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
     * Set the metadata of a transaction by its ID.
     * @param ledger Name of the ledger.
     * @param txid Transaction ID.
     * @param requestBody metadata
     */
    public addMetadataOnTransaction(ledger: string, txid: number, requestBody?: { [key: string]: any; }, _options?: Configuration): Promise<void> {
        const result = this.api.addMetadataOnTransaction(ledger, txid, requestBody, _options);
        return result.toPromise();
    }

    /**
     * Count the transactions from a ledger.
     * @param ledger Name of the ledger.
     * @param reference Filter transactions by reference field.
     * @param account Filter transactions with postings involving given account, either as source or destination.
     * @param source Filter transactions with postings involving given account at source.
     * @param destination Filter transactions with postings involving given account at destination.
     * @param metadata Filter transactions by metadata key value pairs. Nested objects can be used as seen in the example below.
     */
    public countTransactions(ledger: string, reference?: string, account?: string, source?: string, destination?: string, metadata?: any, _options?: Configuration): Promise<void> {
        const result = this.api.countTransactions(ledger, reference, account, source, destination, metadata, _options);
        return result.toPromise();
    }

    /**
     * Create a new transaction to a ledger.
     * @param ledger Name of the ledger.
     * @param transactionData 
     * @param preview Set the preview mode. Preview mode doesn&#39;t add the logs to the database or publish a message to the message broker.
     */
    public createTransaction(ledger: string, transactionData: TransactionData, preview?: boolean, _options?: Configuration): Promise<TransactionsResponse> {
        const result = this.api.createTransaction(ledger, transactionData, preview, _options);
        return result.toPromise();
    }

    /**
     * Create a new batch of transactions to a ledger.
     * @param ledger Name of the ledger.
     * @param transactions 
     */
    public createTransactions(ledger: string, transactions: Transactions, _options?: Configuration): Promise<TransactionsResponse> {
        const result = this.api.createTransactions(ledger, transactions, _options);
        return result.toPromise();
    }

    /**
     * Get transaction from a ledger by its ID.
     * @param ledger Name of the ledger.
     * @param txid Transaction ID.
     */
    public getTransaction(ledger: string, txid: number, _options?: Configuration): Promise<TransactionResponse> {
        const result = this.api.getTransaction(ledger, txid, _options);
        return result.toPromise();
    }

    /**
     * List transactions from a ledger, sorted by txid in descending order.
     * List transactions from a ledger.
     * @param ledger Name of the ledger.
     * @param pageSize The maximum number of results to return per page
     * @param after Pagination cursor, will return transactions after given txid (in descending order).
     * @param reference Find transactions by reference field.
     * @param account Find transactions with postings involving given account, either as source or destination.
     * @param source Find transactions with postings involving given account at source.
     * @param destination Find transactions with postings involving given account at destination.
     * @param startTime Filter transactions that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, 12:00:01 includes the first second of the minute). 
     * @param endTime Filter transactions that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, 12:00:01 excludes the first second of the minute). 
     * @param paginationToken Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results.  Set to the value of previous for the previous page of results. No other parameters can be set when the pagination token is set. 
     * @param metadata Filter transactions by metadata key value pairs. Nested objects can be used as seen in the example below.
     */
    public listTransactions(ledger: string, pageSize?: number, after?: string, reference?: string, account?: string, source?: string, destination?: string, startTime?: string, endTime?: string, paginationToken?: string, metadata?: any, _options?: Configuration): Promise<ListTransactions200Response> {
        const result = this.api.listTransactions(ledger, pageSize, after, reference, account, source, destination, startTime, endTime, paginationToken, metadata, _options);
        return result.toPromise();
    }

    /**
     * Revert a ledger transaction by its ID.
     * @param ledger Name of the ledger.
     * @param txid Transaction ID.
     */
    public revertTransaction(ledger: string, txid: number, _options?: Configuration): Promise<TransactionResponse> {
        const result = this.api.revertTransaction(ledger, txid, _options);
        return result.toPromise();
    }


}



