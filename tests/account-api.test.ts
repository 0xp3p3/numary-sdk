import {createConfiguration} from "../configuration";
import {ServerConfiguration} from "../servers";
import {AccountsApi, TransactionsApi} from "../index";
import {randomUUID} from "crypto";

const config = createConfiguration({
    baseServer: new ServerConfiguration('http://localhost:3068', {})
})
const transactionApi = new TransactionsApi(config);
const accountApi = new AccountsApi(config);

test("List accounts", async () => {
    const ledger = randomUUID();
    await transactionApi.createTransaction(ledger, {
        postings: [{source: 'world', destination: 'bank', amount: 100, asset: 'USD'}]
    });
    const accounts = await accountApi.listAccounts(ledger);
    expect(accounts.cursor.data.length).toBe(2);
});

test("Read account", async () => {
    const ledger = randomUUID();
    await transactionApi.createTransaction(ledger, {
        postings: [{source: 'world', destination: 'bank', amount: 100, asset: 'USD'}]
    });
    const account = await accountApi.getAccount(ledger, 'world');
    expect(account.data.balances!["USD"]).toBe(-100)
    expect(account.data.volumes!["USD"]["output"]).toBe(100);
});

test("Add metadata to account", async () => {
    const ledger = randomUUID();
    await transactionApi.createTransaction(ledger, {
        postings: [{source: 'world', destination: 'bank', amount: 100, asset: 'USD'}]
    });
    const metadata = {
        'foo': 'bar',
        'nested': {
            'foo': 'bar',
        }
    };
    await accountApi.addMetadataToAccount(ledger, 'world', metadata);
    const account = await accountApi.getAccount(ledger, 'world');
    expect(account.data.metadata).toStrictEqual(metadata);
});