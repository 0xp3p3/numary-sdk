import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";
export class ObservableAccountsApi {
    private requestFactory: AccountsApiRequestFactory;
    private responseProcessor: AccountsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountsApiRequestFactory,
        responseProcessor?: AccountsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccountsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccountsApiResponseProcessor();
    }

    /**
     * Add metadata to an account
     * @param ledger Name of the ledger.
     * @param address Exact address of the account. It must match the following regular expressions pattern: &#x60;&#x60;&#x60; ^\\w+(:\\w+)*$ &#x60;&#x60;&#x60; 
     * @param requestBody metadata
     */
    public addMetadataToAccount(ledger: string, address: string, requestBody: { [key: string]: any; }, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.addMetadataToAccount(ledger, address, requestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addMetadataToAccount(rsp)));
            }));
    }

    /**
     * Count the accounts from a ledger
     * @param ledger Name of the ledger.
     * @param address Filter accounts by address pattern (regular expression placed between ^ and $).
     * @param metadata Filter accounts by metadata key value pairs. Nested objects can be used as seen in the example below.
     */
    public countAccounts(ledger: string, address?: string, metadata?: any, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.countAccounts(ledger, address, metadata, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.countAccounts(rsp)));
            }));
    }

    /**
     * Get account by its address
     * @param ledger Name of the ledger.
     * @param address Exact address of the account. It must match the following regular expressions pattern: &#x60;&#x60;&#x60; ^\\w+(:\\w+)*$ &#x60;&#x60;&#x60; 
     */
    public getAccount(ledger: string, address: string, _options?: Configuration): Observable<AccountResponse> {
        const requestContextPromise = this.requestFactory.getAccount(ledger, address, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccount(rsp)));
            }));
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
    public listAccounts(ledger: string, pageSize?: number, pageSize2?: number, after?: string, address?: string, metadata?: any, balance?: number, balanceOperator?: 'gte' | 'lte' | 'gt' | 'lt' | 'e' | 'ne', balanceOperator2?: 'gte' | 'lte' | 'gt' | 'lt' | 'e' | 'ne', cursor?: string, paginationToken?: string, _options?: Configuration): Observable<AccountsCursorResponse> {
        const requestContextPromise = this.requestFactory.listAccounts(ledger, pageSize, pageSize2, after, address, metadata, balance, balanceOperator, balanceOperator2, cursor, paginationToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAccounts(rsp)));
            }));
    }

}

import { BalancesApiRequestFactory, BalancesApiResponseProcessor} from "../apis/BalancesApi";
export class ObservableBalancesApi {
    private requestFactory: BalancesApiRequestFactory;
    private responseProcessor: BalancesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BalancesApiRequestFactory,
        responseProcessor?: BalancesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BalancesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BalancesApiResponseProcessor();
    }

    /**
     * Get the balances from a ledger's account
     * @param ledger Name of the ledger.
     * @param address Filter balances involving given account, either as source or destination.
     * @param after Pagination cursor, will return accounts after given address, in descending order.
     * @param cursor Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set. 
     * @param paginationToken Parameter used in pagination requests. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. Deprecated, please use &#x60;cursor&#x60; instead.
     */
    public getBalances(ledger: string, address?: string, after?: string, cursor?: string, paginationToken?: string, _options?: Configuration): Observable<BalancesCursorResponse> {
        const requestContextPromise = this.requestFactory.getBalances(ledger, address, after, cursor, paginationToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBalances(rsp)));
            }));
    }

    /**
     * Get the aggregated balances from selected accounts
     * @param ledger Name of the ledger.
     * @param address Filter balances involving given account, either as source or destination.
     */
    public getBalancesAggregated(ledger: string, address?: string, _options?: Configuration): Observable<AggregateBalancesResponse> {
        const requestContextPromise = this.requestFactory.getBalancesAggregated(ledger, address, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBalancesAggregated(rsp)));
            }));
    }

}

import { LedgerApiRequestFactory, LedgerApiResponseProcessor} from "../apis/LedgerApi";
export class ObservableLedgerApi {
    private requestFactory: LedgerApiRequestFactory;
    private responseProcessor: LedgerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LedgerApiRequestFactory,
        responseProcessor?: LedgerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LedgerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LedgerApiResponseProcessor();
    }

    /**
     * Get information about a ledger
     * @param ledger Name of the ledger.
     */
    public getLedgerInfo(ledger: string, _options?: Configuration): Observable<LedgerInfoResponse> {
        const requestContextPromise = this.requestFactory.getLedgerInfo(ledger, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLedgerInfo(rsp)));
            }));
    }

}

import { LogsApiRequestFactory, LogsApiResponseProcessor} from "../apis/LogsApi";
export class ObservableLogsApi {
    private requestFactory: LogsApiRequestFactory;
    private responseProcessor: LogsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LogsApiRequestFactory,
        responseProcessor?: LogsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LogsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LogsApiResponseProcessor();
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
    public listLogs(ledger: string, pageSize?: number, pageSize2?: number, after?: string, startTime?: Date, startTime2?: Date, endTime?: Date, endTime2?: Date, cursor?: string, paginationToken?: string, _options?: Configuration): Observable<LogsCursorResponse> {
        const requestContextPromise = this.requestFactory.listLogs(ledger, pageSize, pageSize2, after, startTime, startTime2, endTime, endTime2, cursor, paginationToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLogs(rsp)));
            }));
    }

}

import { MappingApiRequestFactory, MappingApiResponseProcessor} from "../apis/MappingApi";
export class ObservableMappingApi {
    private requestFactory: MappingApiRequestFactory;
    private responseProcessor: MappingApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MappingApiRequestFactory,
        responseProcessor?: MappingApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MappingApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MappingApiResponseProcessor();
    }

    /**
     * Get the mapping of a ledger
     * @param ledger Name of the ledger.
     */
    public getMapping(ledger: string, _options?: Configuration): Observable<MappingResponse> {
        const requestContextPromise = this.requestFactory.getMapping(ledger, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMapping(rsp)));
            }));
    }

    /**
     * Update the mapping of a ledger
     * @param ledger Name of the ledger.
     * @param mapping 
     */
    public updateMapping(ledger: string, mapping: Mapping, _options?: Configuration): Observable<MappingResponse> {
        const requestContextPromise = this.requestFactory.updateMapping(ledger, mapping, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateMapping(rsp)));
            }));
    }

}

import { ScriptApiRequestFactory, ScriptApiResponseProcessor} from "../apis/ScriptApi";
export class ObservableScriptApi {
    private requestFactory: ScriptApiRequestFactory;
    private responseProcessor: ScriptApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ScriptApiRequestFactory,
        responseProcessor?: ScriptApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ScriptApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ScriptApiResponseProcessor();
    }

    /**
     * This route is deprecated, and has been merged into `POST /{ledger}/transactions`. 
     * Execute a Numscript
     * @param ledger Name of the ledger.
     * @param script 
     * @param preview Set the preview mode. Preview mode doesn&#39;t add the logs to the database or publish a message to the message broker.
     */
    public runScript(ledger: string, script: Script, preview?: boolean, _options?: Configuration): Observable<ScriptResponse> {
        const requestContextPromise = this.requestFactory.runScript(ledger, script, preview, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.runScript(rsp)));
            }));
    }

}

import { ServerApiRequestFactory, ServerApiResponseProcessor} from "../apis/ServerApi";
export class ObservableServerApi {
    private requestFactory: ServerApiRequestFactory;
    private responseProcessor: ServerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ServerApiRequestFactory,
        responseProcessor?: ServerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ServerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ServerApiResponseProcessor();
    }

    /**
     * Show server information
     */
    public getInfo(_options?: Configuration): Observable<ConfigInfoResponse> {
        const requestContextPromise = this.requestFactory.getInfo(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInfo(rsp)));
            }));
    }

}

import { StatsApiRequestFactory, StatsApiResponseProcessor} from "../apis/StatsApi";
export class ObservableStatsApi {
    private requestFactory: StatsApiRequestFactory;
    private responseProcessor: StatsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StatsApiRequestFactory,
        responseProcessor?: StatsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StatsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StatsApiResponseProcessor();
    }

    /**
     * Get statistics from a ledger. (aggregate metrics on accounts and transactions) 
     * Get statistics from a ledger
     * @param ledger name of the ledger
     */
    public readStats(ledger: string, _options?: Configuration): Observable<StatsResponse> {
        const requestContextPromise = this.requestFactory.readStats(ledger, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readStats(rsp)));
            }));
    }

}

import { TransactionsApiRequestFactory, TransactionsApiResponseProcessor} from "../apis/TransactionsApi";
export class ObservableTransactionsApi {
    private requestFactory: TransactionsApiRequestFactory;
    private responseProcessor: TransactionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TransactionsApiRequestFactory,
        responseProcessor?: TransactionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TransactionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TransactionsApiResponseProcessor();
    }

    /**
     * Set the metadata of a transaction by its ID
     * @param ledger Name of the ledger.
     * @param txid Transaction ID.
     * @param requestBody metadata
     */
    public addMetadataOnTransaction(ledger: string, txid: number, requestBody?: { [key: string]: any; }, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.addMetadataOnTransaction(ledger, txid, requestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addMetadataOnTransaction(rsp)));
            }));
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
    public countTransactions(ledger: string, reference?: string, account?: string, source?: string, destination?: string, startTime?: Date, startTime2?: Date, endTime?: Date, endTime2?: Date, metadata?: any, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.countTransactions(ledger, reference, account, source, destination, startTime, startTime2, endTime, endTime2, metadata, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.countTransactions(rsp)));
            }));
    }

    /**
     * Create a new transaction to a ledger
     * @param ledger Name of the ledger.
     * @param postTransaction The request body must contain at least one of the following objects:   - &#x60;postings&#x60;: suitable for simple transactions   - &#x60;script&#x60;: enabling more complex transactions with Numscript 
     * @param preview Set the preview mode. Preview mode doesn&#39;t add the logs to the database or publish a message to the message broker.
     */
    public createTransaction(ledger: string, postTransaction: PostTransaction, preview?: boolean, _options?: Configuration): Observable<TransactionsResponse> {
        const requestContextPromise = this.requestFactory.createTransaction(ledger, postTransaction, preview, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTransaction(rsp)));
            }));
    }

    /**
     * Create a new batch of transactions to a ledger
     * @param ledger Name of the ledger.
     * @param transactions 
     */
    public createTransactions(ledger: string, transactions: Transactions, _options?: Configuration): Observable<TransactionsResponse> {
        const requestContextPromise = this.requestFactory.createTransactions(ledger, transactions, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTransactions(rsp)));
            }));
    }

    /**
     * Get transaction from a ledger by its ID
     * @param ledger Name of the ledger.
     * @param txid Transaction ID.
     */
    public getTransaction(ledger: string, txid: number, _options?: Configuration): Observable<TransactionResponse> {
        const requestContextPromise = this.requestFactory.getTransaction(ledger, txid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTransaction(rsp)));
            }));
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
    public listTransactions(ledger: string, pageSize?: number, pageSize2?: number, after?: string, reference?: string, account?: string, source?: string, destination?: string, startTime?: Date, startTime2?: Date, endTime?: Date, endTime2?: Date, cursor?: string, paginationToken?: string, metadata?: any, _options?: Configuration): Observable<TransactionsCursorResponse> {
        const requestContextPromise = this.requestFactory.listTransactions(ledger, pageSize, pageSize2, after, reference, account, source, destination, startTime, startTime2, endTime, endTime2, cursor, paginationToken, metadata, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTransactions(rsp)));
            }));
    }

    /**
     * Revert a ledger transaction by its ID
     * @param ledger Name of the ledger.
     * @param txid Transaction ID.
     */
    public revertTransaction(ledger: string, txid: number, _options?: Configuration): Observable<TransactionResponse> {
        const requestContextPromise = this.requestFactory.revertTransaction(ledger, txid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.revertTransaction(rsp)));
            }));
    }

}
