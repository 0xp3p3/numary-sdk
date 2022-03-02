import {createConfiguration} from "../configuration";
import {ServerConfiguration} from "../servers";
import {ScriptApi, TransactionsApi} from "../index";
import {randomUUID} from "crypto";

const config = createConfiguration({
    baseServer: new ServerConfiguration('http://localhost:3068', {})
})
const transactionApi = new TransactionsApi(config);
const scriptApi = new ScriptApi(config);

test("Run a script", async () => {
    const ledger = randomUUID();
    const ret = await scriptApi.runScript(ledger, {
        plain: `
        send [COIN 100] (
            source = @world
            destination = @centralbank
        )
        `,
    });
    expect(ret.transaction).not.toBe(undefined);
    expect(ret.transaction!.txid).toBe(0);
    const listTransactionRet = await transactionApi.listTransactions(ledger)
    expect(listTransactionRet.cursor.data.length).toBe(1)
});

test("Run a script with error", async () => {
    const ledger = randomUUID();
    const ret = await scriptApi.runScript(ledger, {
        plain: `
        send [COIN ABC] (
            source = @world
            destination = @centralbank
        )
        `,
    });
    expect(ret.transaction).toBe(undefined);
    expect(ret.errorCode).toBe("COMPILATION_FAILED");
});