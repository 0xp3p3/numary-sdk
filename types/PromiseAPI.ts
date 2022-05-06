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
     * Add metadata to account
     * @param ledger ledger
     * @param accountId accountId
     * @param requestBody metadata
     */
    public addMetadataToAccount(ledger: string, accountId: string, requestBody: { [key: string]: any; }, _options?: Configuration): Promise<void> {
        const result = this.api.addMetadataToAccount(ledger, accountId, requestBody, _options);
        return result.toPromise();
    }

    /**
     * Count accounts
     * @param ledger ledger
     * @param after pagination cursor, will return accounts after given address (in descending order)
     * @param address account address
     * @param metadata metadata
     */
    public countAccounts(ledger: string, after?: string, address?: string, metadata?: { [key: string]: string; }, _options?: Configuration): Promise<void> {
        const result = this.api.countAccounts(ledger, after, address, metadata, _options);
        return result.toPromise();
    }

    /**
     * Get account by address
     * @param ledger ledger
     * @param accountId accountId
     */
    public getAccount(ledger: string, accountId: string, _options?: Configuration): Promise<AccountResponse> {
        const result = this.api.getAccount(ledger, accountId, _options);
        return result.toPromise();
    }

    /**
     * List all accounts
     * @param ledger ledger
     * @param after pagination cursor, will return accounts after given address (in descending order)
     * @param address account address
     * @param metadata account address
     */
    public listAccounts(ledger: string, after?: string, address?: string, metadata?: { [key: string]: string; }, _options?: Configuration): Promise<AccountCursorResponse> {
        const result = this.api.listAccounts(ledger, after, address, metadata, _options);
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
     * Get ledger mapping
     * Get mapping
     * @param ledger ledger
     */
    public getMapping(ledger: string, _options?: Configuration): Promise<MappingResponse> {
        const result = this.api.getMapping(ledger, _options);
        return result.toPromise();
    }

    /**
     * Update ledger mapping
     * Put mapping
     * @param ledger ledger
     * @param mapping mapping
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
     * Execute a Numscript and create the transaction if any
     * Execute Numscript
     * @param ledger ledger
     * @param script script
     * @param preview Preview mode
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
     * Show server informations
     * Server Info
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
     * @param ledger ledger
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
     * Set a new metadata to a ledger transaction by transaction id
     * Set Transaction Metadata
     * @param ledger ledger
     * @param txid txid
     * @param requestBody metadata
     */
    public addMetadataOnTransaction(ledger: string, txid: number, requestBody?: { [key: string]: any; }, _options?: Configuration): Promise<void> {
        const result = this.api.addMetadataOnTransaction(ledger, txid, requestBody, _options);
        return result.toPromise();
    }

    /**
     * Count transactions mathing given criteria
     * Count transactions
     * @param ledger ledger
     * @param after pagination cursor, will return transactions after given txid (in descending order)
     * @param reference find transactions by reference field
     * @param account find transactions with postings involving given account, either as source or destination
     * @param source find transactions with postings involving given account at source
     * @param destination find transactions with postings involving given account at destination
     */
    public countTransactions(ledger: string, after?: string, reference?: string, account?: string, source?: string, destination?: string, _options?: Configuration): Promise<void> {
        const result = this.api.countTransactions(ledger, after, reference, account, source, destination, _options);
        return result.toPromise();
    }

    /**
     * Create a new ledger transaction Commit a new transaction to the ledger
     * Create Transaction
     * @param ledger ledger
     * @param transactionData transaction
     * @param preview Preview mode
     */
    public createTransaction(ledger: string, transactionData: TransactionData, preview?: boolean, _options?: Configuration): Promise<CreateTransactionResponse> {
        const result = this.api.createTransaction(ledger, transactionData, preview, _options);
        return result.toPromise();
    }

    /**
     * Create a new ledger transactions batch Commit a batch of new transactions to the ledger
     * Create Transactions Batch
     * @param ledger ledger
     * @param transactions transactions
     */
    public createTransactions(ledger: string, transactions: Transactions, _options?: Configuration): Promise<TransactionListResponse> {
        const result = this.api.createTransactions(ledger, transactions, _options);
        return result.toPromise();
    }

    /**
     * Get transaction by transaction id
     * Get Transaction
     * @param ledger ledger
     * @param txid txid
     */
    public getTransaction(ledger: string, txid: number, _options?: Configuration): Promise<TransactionResponse> {
        const result = this.api.getTransaction(ledger, txid, _options);
        return result.toPromise();
    }

    /**
     * Get all ledger transactions
     * Get all Transactions
     * @param ledger ledger
     * @param after pagination cursor, will return transactions after given txid (in descending order)
     * @param reference find transactions by reference field
     * @param account find transactions with postings involving given account, either as source or destination
     * @param source find transactions with postings involving given account at source
     * @param destination find transactions with postings involving given account at destination
     */
    public listTransactions(ledger: string, after?: string, reference?: string, account?: string, source?: string, destination?: string, _options?: Configuration): Promise<TransactionCursorResponse> {
        const result = this.api.listTransactions(ledger, after, reference, account, source, destination, _options);
        return result.toPromise();
    }

    /**
     * Revert a ledger transaction by transaction id
     * Revert Transaction
     * @param ledger ledger
     * @param txid txid
     */
    public revertTransaction(ledger: string, txid: number, _options?: Configuration): Promise<TransactionResponse> {
        const result = this.api.revertTransaction(ledger, txid, _options);
        return result.toPromise();
    }


}



