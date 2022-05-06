import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { Account } from '../models/Account';
import { AccountCursor } from '../models/AccountCursor';
import { AccountCursorAllOf } from '../models/AccountCursorAllOf';
import { AccountCursorResponse } from '../models/AccountCursorResponse';
import { AccountResponse } from '../models/AccountResponse';
import { Config } from '../models/Config';
import { ConfigInfo } from '../models/ConfigInfo';
import { ConfigInfoResponse } from '../models/ConfigInfoResponse';
import { Contract } from '../models/Contract';
import { CreateTransactionResponse } from '../models/CreateTransactionResponse';
import { Cursor } from '../models/Cursor';
import { CursorResponse } from '../models/CursorResponse';
import { ErrorCode } from '../models/ErrorCode';
import { ErrorResponse } from '../models/ErrorResponse';
import { LedgerStorage } from '../models/LedgerStorage';
import { Mapping } from '../models/Mapping';
import { MappingResponse } from '../models/MappingResponse';
import { Posting } from '../models/Posting';
import { Script } from '../models/Script';
import { ScriptResult } from '../models/ScriptResult';
import { Stats } from '../models/Stats';
import { StatsResponse } from '../models/StatsResponse';
import { Transaction } from '../models/Transaction';
import { TransactionCursor } from '../models/TransactionCursor';
import { TransactionCursorAllOf } from '../models/TransactionCursorAllOf';
import { TransactionCursorResponse } from '../models/TransactionCursorResponse';
import { TransactionData } from '../models/TransactionData';
import { TransactionListResponse } from '../models/TransactionListResponse';
import { TransactionResponse } from '../models/TransactionResponse';
import { Transactions } from '../models/Transactions';

import { ObservableAccountsApi } from "./ObservableAPI";
import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";

export interface AccountsApiAddMetadataToAccountRequest {
    /**
     * ledger
     * @type string
     * @memberof AccountsApiaddMetadataToAccount
     */
    ledger: string
    /**
     * accountId
     * @type string
     * @memberof AccountsApiaddMetadataToAccount
     */
    accountId: string
    /**
     * metadata
     * @type { [key: string]: any; }
     * @memberof AccountsApiaddMetadataToAccount
     */
    requestBody: { [key: string]: any; }
}

export interface AccountsApiCountAccountsRequest {
    /**
     * ledger
     * @type string
     * @memberof AccountsApicountAccounts
     */
    ledger: string
    /**
     * pagination cursor, will return accounts after given address (in descending order)
     * @type string
     * @memberof AccountsApicountAccounts
     */
    after?: string
    /**
     * account address
     * @type string
     * @memberof AccountsApicountAccounts
     */
    address?: string
    /**
     * metadata
     * @type { [key: string]: string; }
     * @memberof AccountsApicountAccounts
     */
    metadata?: { [key: string]: string; }
}

export interface AccountsApiGetAccountRequest {
    /**
     * ledger
     * @type string
     * @memberof AccountsApigetAccount
     */
    ledger: string
    /**
     * accountId
     * @type string
     * @memberof AccountsApigetAccount
     */
    accountId: string
}

export interface AccountsApiListAccountsRequest {
    /**
     * ledger
     * @type string
     * @memberof AccountsApilistAccounts
     */
    ledger: string
    /**
     * pagination cursor, will return accounts after given address (in descending order)
     * @type string
     * @memberof AccountsApilistAccounts
     */
    after?: string
    /**
     * account address
     * @type string
     * @memberof AccountsApilistAccounts
     */
    address?: string
    /**
     * account address
     * @type { [key: string]: string; }
     * @memberof AccountsApilistAccounts
     */
    metadata?: { [key: string]: string; }
}

export class ObjectAccountsApi {
    private api: ObservableAccountsApi

    public constructor(configuration: Configuration, requestFactory?: AccountsApiRequestFactory, responseProcessor?: AccountsApiResponseProcessor) {
        this.api = new ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add metadata to account
     * @param param the request object
     */
    public addMetadataToAccount(param: AccountsApiAddMetadataToAccountRequest, options?: Configuration): Promise<void> {
        return this.api.addMetadataToAccount(param.ledger, param.accountId, param.requestBody,  options).toPromise();
    }

    /**
     * Count accounts
     * @param param the request object
     */
    public countAccounts(param: AccountsApiCountAccountsRequest, options?: Configuration): Promise<void> {
        return this.api.countAccounts(param.ledger, param.after, param.address, param.metadata,  options).toPromise();
    }

    /**
     * Get account by address
     * @param param the request object
     */
    public getAccount(param: AccountsApiGetAccountRequest, options?: Configuration): Promise<AccountResponse> {
        return this.api.getAccount(param.ledger, param.accountId,  options).toPromise();
    }

    /**
     * List all accounts
     * @param param the request object
     */
    public listAccounts(param: AccountsApiListAccountsRequest, options?: Configuration): Promise<AccountCursorResponse> {
        return this.api.listAccounts(param.ledger, param.after, param.address, param.metadata,  options).toPromise();
    }

}

import { ObservableMappingApi } from "./ObservableAPI";
import { MappingApiRequestFactory, MappingApiResponseProcessor} from "../apis/MappingApi";

export interface MappingApiGetMappingRequest {
    /**
     * ledger
     * @type string
     * @memberof MappingApigetMapping
     */
    ledger: string
}

export interface MappingApiUpdateMappingRequest {
    /**
     * ledger
     * @type string
     * @memberof MappingApiupdateMapping
     */
    ledger: string
    /**
     * mapping
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
     * Get ledger mapping
     * Get mapping
     * @param param the request object
     */
    public getMapping(param: MappingApiGetMappingRequest, options?: Configuration): Promise<MappingResponse> {
        return this.api.getMapping(param.ledger,  options).toPromise();
    }

    /**
     * Update ledger mapping
     * Put mapping
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
     * ledger
     * @type string
     * @memberof ScriptApirunScript
     */
    ledger: string
    /**
     * script
     * @type Script
     * @memberof ScriptApirunScript
     */
    script: Script
    /**
     * Preview mode
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
     * Execute a Numscript and create the transaction if any
     * Execute Numscript
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
     * Show server informations
     * Server Info
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
     * ledger
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
     * ledger
     * @type string
     * @memberof TransactionsApiaddMetadataOnTransaction
     */
    ledger: string
    /**
     * txid
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
     * ledger
     * @type string
     * @memberof TransactionsApicountTransactions
     */
    ledger: string
    /**
     * pagination cursor, will return transactions after given txid (in descending order)
     * @type string
     * @memberof TransactionsApicountTransactions
     */
    after?: string
    /**
     * find transactions by reference field
     * @type string
     * @memberof TransactionsApicountTransactions
     */
    reference?: string
    /**
     * find transactions with postings involving given account, either as source or destination
     * @type string
     * @memberof TransactionsApicountTransactions
     */
    account?: string
    /**
     * find transactions with postings involving given account at source
     * @type string
     * @memberof TransactionsApicountTransactions
     */
    source?: string
    /**
     * find transactions with postings involving given account at destination
     * @type string
     * @memberof TransactionsApicountTransactions
     */
    destination?: string
}

export interface TransactionsApiCreateTransactionRequest {
    /**
     * ledger
     * @type string
     * @memberof TransactionsApicreateTransaction
     */
    ledger: string
    /**
     * transaction
     * @type TransactionData
     * @memberof TransactionsApicreateTransaction
     */
    transactionData: TransactionData
    /**
     * Preview mode
     * @type boolean
     * @memberof TransactionsApicreateTransaction
     */
    preview?: boolean
}

export interface TransactionsApiCreateTransactionsRequest {
    /**
     * ledger
     * @type string
     * @memberof TransactionsApicreateTransactions
     */
    ledger: string
    /**
     * transactions
     * @type Transactions
     * @memberof TransactionsApicreateTransactions
     */
    transactions: Transactions
}

export interface TransactionsApiGetTransactionRequest {
    /**
     * ledger
     * @type string
     * @memberof TransactionsApigetTransaction
     */
    ledger: string
    /**
     * txid
     * @type number
     * @memberof TransactionsApigetTransaction
     */
    txid: number
}

export interface TransactionsApiListTransactionsRequest {
    /**
     * ledger
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    ledger: string
    /**
     * pagination cursor, will return transactions after given txid (in descending order)
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    after?: string
    /**
     * find transactions by reference field
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    reference?: string
    /**
     * find transactions with postings involving given account, either as source or destination
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    account?: string
    /**
     * find transactions with postings involving given account at source
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    source?: string
    /**
     * find transactions with postings involving given account at destination
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    destination?: string
}

export interface TransactionsApiRevertTransactionRequest {
    /**
     * ledger
     * @type string
     * @memberof TransactionsApirevertTransaction
     */
    ledger: string
    /**
     * txid
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
     * Set a new metadata to a ledger transaction by transaction id
     * Set Transaction Metadata
     * @param param the request object
     */
    public addMetadataOnTransaction(param: TransactionsApiAddMetadataOnTransactionRequest, options?: Configuration): Promise<void> {
        return this.api.addMetadataOnTransaction(param.ledger, param.txid, param.requestBody,  options).toPromise();
    }

    /**
     * Count transactions mathing given criteria
     * Count transactions
     * @param param the request object
     */
    public countTransactions(param: TransactionsApiCountTransactionsRequest, options?: Configuration): Promise<void> {
        return this.api.countTransactions(param.ledger, param.after, param.reference, param.account, param.source, param.destination,  options).toPromise();
    }

    /**
     * Create a new ledger transaction Commit a new transaction to the ledger
     * Create Transaction
     * @param param the request object
     */
    public createTransaction(param: TransactionsApiCreateTransactionRequest, options?: Configuration): Promise<CreateTransactionResponse> {
        return this.api.createTransaction(param.ledger, param.transactionData, param.preview,  options).toPromise();
    }

    /**
     * Create a new ledger transactions batch Commit a batch of new transactions to the ledger
     * Create Transactions Batch
     * @param param the request object
     */
    public createTransactions(param: TransactionsApiCreateTransactionsRequest, options?: Configuration): Promise<TransactionListResponse> {
        return this.api.createTransactions(param.ledger, param.transactions,  options).toPromise();
    }

    /**
     * Get transaction by transaction id
     * Get Transaction
     * @param param the request object
     */
    public getTransaction(param: TransactionsApiGetTransactionRequest, options?: Configuration): Promise<TransactionResponse> {
        return this.api.getTransaction(param.ledger, param.txid,  options).toPromise();
    }

    /**
     * Get all ledger transactions
     * Get all Transactions
     * @param param the request object
     */
    public listTransactions(param: TransactionsApiListTransactionsRequest, options?: Configuration): Promise<TransactionCursorResponse> {
        return this.api.listTransactions(param.ledger, param.after, param.reference, param.account, param.source, param.destination,  options).toPromise();
    }

    /**
     * Revert a ledger transaction by transaction id
     * Revert Transaction
     * @param param the request object
     */
    public revertTransaction(param: TransactionsApiRevertTransactionRequest, options?: Configuration): Promise<TransactionResponse> {
        return this.api.revertTransaction(param.ledger, param.txid,  options).toPromise();
    }

}
