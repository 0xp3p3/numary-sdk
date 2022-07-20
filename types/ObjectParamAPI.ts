import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { Account } from '../models/Account';
import { AccountWithVolumesAndBalances } from '../models/AccountWithVolumesAndBalances';
import { Config } from '../models/Config';
import { ConfigInfo } from '../models/ConfigInfo';
import { ConfigInfoResponse } from '../models/ConfigInfoResponse';
import { Contract } from '../models/Contract';
import { CreateTransactionResponse } from '../models/CreateTransactionResponse';
import { CreateTransactions200Response } from '../models/CreateTransactions200Response';
import { CreateTransactions200ResponseAllOf } from '../models/CreateTransactions200ResponseAllOf';
import { Cursor } from '../models/Cursor';
import { ErrorCode } from '../models/ErrorCode';
import { ErrorResponse } from '../models/ErrorResponse';
import { GetAccount200Response } from '../models/GetAccount200Response';
import { LedgerStorage } from '../models/LedgerStorage';
import { ListAccounts200Response } from '../models/ListAccounts200Response';
import { ListAccounts200ResponseCursor } from '../models/ListAccounts200ResponseCursor';
import { ListAccounts200ResponseCursorAllOf } from '../models/ListAccounts200ResponseCursorAllOf';
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

import { ObservableAccountsApi } from "./ObservableAPI";
import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";

export interface AccountsApiAddMetadataToAccountRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof AccountsApiaddMetadataToAccount
     */
    ledger: string
    /**
     * Exact address of the account.
     * @type string
     * @memberof AccountsApiaddMetadataToAccount
     */
    address: string
    /**
     * metadata
     * @type { [key: string]: any; }
     * @memberof AccountsApiaddMetadataToAccount
     */
    requestBody: { [key: string]: any; }
}

export interface AccountsApiCountAccountsRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof AccountsApicountAccounts
     */
    ledger: string
    /**
     * Filter accounts by address pattern (regular expression placed between ^ and $).
     * @type string
     * @memberof AccountsApicountAccounts
     */
    address?: string
    /**
     * Filter accounts by metadata key value pairs. Nested objects can be used as seen in the example below.
     * @type any
     * @memberof AccountsApicountAccounts
     */
    metadata?: any
}

export interface AccountsApiGetAccountRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof AccountsApigetAccount
     */
    ledger: string
    /**
     * Exact address of the account.
     * @type string
     * @memberof AccountsApigetAccount
     */
    address: string
}

export interface AccountsApiListAccountsRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof AccountsApilistAccounts
     */
    ledger: string
    /**
     * Pagination cursor, will return accounts after given address, in descending order.
     * @type string
     * @memberof AccountsApilistAccounts
     */
    after?: string
    /**
     * Filter accounts by address pattern (regular expression placed between ^ and $).
     * @type string
     * @memberof AccountsApilistAccounts
     */
    address?: string
    /**
     * Filter accounts by metadata key value pairs. Nested objects can be used as seen in the example below.
     * @type any
     * @memberof AccountsApilistAccounts
     */
    metadata?: any
}

export class ObjectAccountsApi {
    private api: ObservableAccountsApi

    public constructor(configuration: Configuration, requestFactory?: AccountsApiRequestFactory, responseProcessor?: AccountsApiResponseProcessor) {
        this.api = new ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add metadata to an account.
     * @param param the request object
     */
    public addMetadataToAccount(param: AccountsApiAddMetadataToAccountRequest, options?: Configuration): Promise<void> {
        return this.api.addMetadataToAccount(param.ledger, param.address, param.requestBody,  options).toPromise();
    }

    /**
     * Count the accounts from a ledger.
     * @param param the request object
     */
    public countAccounts(param: AccountsApiCountAccountsRequest, options?: Configuration): Promise<void> {
        return this.api.countAccounts(param.ledger, param.address, param.metadata,  options).toPromise();
    }

    /**
     * Get account by its address.
     * @param param the request object
     */
    public getAccount(param: AccountsApiGetAccountRequest, options?: Configuration): Promise<GetAccount200Response> {
        return this.api.getAccount(param.ledger, param.address,  options).toPromise();
    }

    /**
     * List accounts from a ledger, sorted by address in descending order.
     * List accounts from a ledger.
     * @param param the request object
     */
    public listAccounts(param: AccountsApiListAccountsRequest, options?: Configuration): Promise<ListAccounts200Response> {
        return this.api.listAccounts(param.ledger, param.after, param.address, param.metadata,  options).toPromise();
    }

}

import { ObservableMappingApi } from "./ObservableAPI";
import { MappingApiRequestFactory, MappingApiResponseProcessor} from "../apis/MappingApi";

export interface MappingApiGetMappingRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof MappingApigetMapping
     */
    ledger: string
}

export interface MappingApiUpdateMappingRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof MappingApiupdateMapping
     */
    ledger: string
    /**
     * 
     * @type Mapping
     * @memberof MappingApiupdateMapping
     */
    mapping: Mapping
}

export class ObjectMappingApi {
    private api: ObservableMappingApi

    public constructor(configuration: Configuration, requestFactory?: MappingApiRequestFactory, responseProcessor?: MappingApiResponseProcessor) {
        this.api = new ObservableMappingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the mapping of a ledger.
     * @param param the request object
     */
    public getMapping(param: MappingApiGetMappingRequest, options?: Configuration): Promise<MappingResponse> {
        return this.api.getMapping(param.ledger,  options).toPromise();
    }

    /**
     * Update the mapping of a ledger.
     * @param param the request object
     */
    public updateMapping(param: MappingApiUpdateMappingRequest, options?: Configuration): Promise<MappingResponse> {
        return this.api.updateMapping(param.ledger, param.mapping,  options).toPromise();
    }

}

import { ObservableScriptApi } from "./ObservableAPI";
import { ScriptApiRequestFactory, ScriptApiResponseProcessor} from "../apis/ScriptApi";

export interface ScriptApiRunScriptRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof ScriptApirunScript
     */
    ledger: string
    /**
     * 
     * @type Script
     * @memberof ScriptApirunScript
     */
    script: Script
    /**
     * Set the preview mode. Preview mode doesn&#39;t add the logs to the database or publish a message to the message broker.
     * @type boolean
     * @memberof ScriptApirunScript
     */
    preview?: boolean
}

export class ObjectScriptApi {
    private api: ObservableScriptApi

    public constructor(configuration: Configuration, requestFactory?: ScriptApiRequestFactory, responseProcessor?: ScriptApiResponseProcessor) {
        this.api = new ObservableScriptApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Execute a Numscript.
     * @param param the request object
     */
    public runScript(param: ScriptApiRunScriptRequest, options?: Configuration): Promise<ScriptResult> {
        return this.api.runScript(param.ledger, param.script, param.preview,  options).toPromise();
    }

}

import { ObservableServerApi } from "./ObservableAPI";
import { ServerApiRequestFactory, ServerApiResponseProcessor} from "../apis/ServerApi";

export interface ServerApiGetInfoRequest {
}

export class ObjectServerApi {
    private api: ObservableServerApi

    public constructor(configuration: Configuration, requestFactory?: ServerApiRequestFactory, responseProcessor?: ServerApiResponseProcessor) {
        this.api = new ObservableServerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Show server information.
     * @param param the request object
     */
    public getInfo(param: ServerApiGetInfoRequest = {}, options?: Configuration): Promise<ConfigInfoResponse> {
        return this.api.getInfo( options).toPromise();
    }

}

import { ObservableStatsApi } from "./ObservableAPI";
import { StatsApiRequestFactory, StatsApiResponseProcessor} from "../apis/StatsApi";

export interface StatsApiReadStatsRequest {
    /**
     * name of the ledger
     * @type string
     * @memberof StatsApireadStats
     */
    ledger: string
}

export class ObjectStatsApi {
    private api: ObservableStatsApi

    public constructor(configuration: Configuration, requestFactory?: StatsApiRequestFactory, responseProcessor?: StatsApiResponseProcessor) {
        this.api = new ObservableStatsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get ledger stats (aggregate metrics on accounts and transactions) The stats for account
     * Get Stats
     * @param param the request object
     */
    public readStats(param: StatsApiReadStatsRequest, options?: Configuration): Promise<StatsResponse> {
        return this.api.readStats(param.ledger,  options).toPromise();
    }

}

import { ObservableTransactionsApi } from "./ObservableAPI";
import { TransactionsApiRequestFactory, TransactionsApiResponseProcessor} from "../apis/TransactionsApi";

export interface TransactionsApiAddMetadataOnTransactionRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof TransactionsApiaddMetadataOnTransaction
     */
    ledger: string
    /**
     * Transaction ID.
     * @type number
     * @memberof TransactionsApiaddMetadataOnTransaction
     */
    txid: number
    /**
     * metadata
     * @type { [key: string]: any; }
     * @memberof TransactionsApiaddMetadataOnTransaction
     */
    requestBody?: { [key: string]: any; }
}

export interface TransactionsApiCountTransactionsRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof TransactionsApicountTransactions
     */
    ledger: string
    /**
     * Filter transactions by reference field.
     * @type string
     * @memberof TransactionsApicountTransactions
     */
    reference?: string
    /**
     * Filter transactions with postings involving given account, either as source or destination.
     * @type string
     * @memberof TransactionsApicountTransactions
     */
    account?: string
    /**
     * Filter transactions with postings involving given account at source.
     * @type string
     * @memberof TransactionsApicountTransactions
     */
    source?: string
    /**
     * Filter transactions with postings involving given account at destination.
     * @type string
     * @memberof TransactionsApicountTransactions
     */
    destination?: string
}

export interface TransactionsApiCreateTransactionRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof TransactionsApicreateTransaction
     */
    ledger: string
    /**
     * 
     * @type TransactionData
     * @memberof TransactionsApicreateTransaction
     */
    transactionData: TransactionData
    /**
     * Set the preview mode. Preview mode doesn&#39;t add the logs to the database or publish a message to the message broker.
     * @type boolean
     * @memberof TransactionsApicreateTransaction
     */
    preview?: boolean
}

export interface TransactionsApiCreateTransactionsRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof TransactionsApicreateTransactions
     */
    ledger: string
    /**
     * 
     * @type Transactions
     * @memberof TransactionsApicreateTransactions
     */
    transactions: Transactions
}

export interface TransactionsApiGetTransactionRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof TransactionsApigetTransaction
     */
    ledger: string
    /**
     * Transaction ID.
     * @type number
     * @memberof TransactionsApigetTransaction
     */
    txid: number
}

export interface TransactionsApiListTransactionsRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    ledger: string
    /**
     * Pagination cursor, will return transactions after given txid (in descending order).
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    after?: string
    /**
     * Find transactions by reference field.
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    reference?: string
    /**
     * Find transactions with postings involving given account, either as source or destination.
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    account?: string
    /**
     * Find transactions with postings involving given account at source.
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    source?: string
    /**
     * Find transactions with postings involving given account at destination.
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    destination?: string
    /**
     * Filter transactions that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, 12:00:01 includes the first second of the minute).
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    startTime?: string
    /**
     * Filter transactions that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, 12:00:01 excludes the first second of the minute).
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    endTime?: string
}

export interface TransactionsApiRevertTransactionRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof TransactionsApirevertTransaction
     */
    ledger: string
    /**
     * Transaction ID.
     * @type number
     * @memberof TransactionsApirevertTransaction
     */
    txid: number
}

export class ObjectTransactionsApi {
    private api: ObservableTransactionsApi

    public constructor(configuration: Configuration, requestFactory?: TransactionsApiRequestFactory, responseProcessor?: TransactionsApiResponseProcessor) {
        this.api = new ObservableTransactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Set the metadata of a transaction by its ID.
     * @param param the request object
     */
    public addMetadataOnTransaction(param: TransactionsApiAddMetadataOnTransactionRequest, options?: Configuration): Promise<void> {
        return this.api.addMetadataOnTransaction(param.ledger, param.txid, param.requestBody,  options).toPromise();
    }

    /**
     * Count the transactions from a ledger.
     * @param param the request object
     */
    public countTransactions(param: TransactionsApiCountTransactionsRequest, options?: Configuration): Promise<void> {
        return this.api.countTransactions(param.ledger, param.reference, param.account, param.source, param.destination,  options).toPromise();
    }

    /**
     * Create a new transaction to a ledger.
     * @param param the request object
     */
    public createTransaction(param: TransactionsApiCreateTransactionRequest, options?: Configuration): Promise<CreateTransactionResponse> {
        return this.api.createTransaction(param.ledger, param.transactionData, param.preview,  options).toPromise();
    }

    /**
     * Create a new batch of transactions to a ledger.
     * @param param the request object
     */
    public createTransactions(param: TransactionsApiCreateTransactionsRequest, options?: Configuration): Promise<CreateTransactions200Response> {
        return this.api.createTransactions(param.ledger, param.transactions,  options).toPromise();
    }

    /**
     * Get transaction from a ledger by its ID.
     * @param param the request object
     */
    public getTransaction(param: TransactionsApiGetTransactionRequest, options?: Configuration): Promise<TransactionResponse> {
        return this.api.getTransaction(param.ledger, param.txid,  options).toPromise();
    }

    /**
     * List transactions from a ledger, sorted by txid in descending order.
     * List transactions from a ledger.
     * @param param the request object
     */
    public listTransactions(param: TransactionsApiListTransactionsRequest, options?: Configuration): Promise<ListTransactions200Response> {
        return this.api.listTransactions(param.ledger, param.after, param.reference, param.account, param.source, param.destination, param.startTime, param.endTime,  options).toPromise();
    }

    /**
     * Revert a ledger transaction by its ID.
     * @param param the request object
     */
    public revertTransaction(param: TransactionsApiRevertTransactionRequest, options?: Configuration): Promise<TransactionResponse> {
        return this.api.revertTransaction(param.ledger, param.txid,  options).toPromise();
    }

}
