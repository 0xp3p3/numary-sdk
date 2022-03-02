import {createConfiguration} from "../configuration";
import {ServerConfiguration} from "../servers";
import {StatsApi, TransactionsApi} from "../index";
import {randomUUID} from "crypto";

const config = createConfiguration({
    baseServer: new ServerConfiguration('http://localhost:3068', {})
})
const transactionApi = new TransactionsApi(config);
const statsApi = new StatsApi(config);

test("Run a script", async () => {
    const ledger = randomUUID();
    await transactionApi.createTransaction(ledger, {
        postings: [{source: 'world', destination: 'bank', amount: 100, asset: 'USD'}]
    });
    const ret = await statsApi.readStats(ledger);
    expect(ret.data.transactions).toBe(1);
    expect(ret.data.accounts).toBe(2);
});