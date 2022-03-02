import {createConfiguration} from "../configuration";
import {ServerConfiguration} from "../servers";
import {TransactionsApi} from "../index";
import {randomUUID} from "crypto";

const config = createConfiguration({
    baseServer: new ServerConfiguration('http://localhost:3068', {})
})
const api = new TransactionsApi(config);

test("Create a transaction", async () => {
    const ledger = randomUUID();
    const ret = await api.createTransaction(ledger, {
        postings: [{
            source: 'world',
            destination: 'bank',
            amount: 100,
            asset: 'USD'
        }],
        metadata: {}
    });
    expect(ret.data[0].txid).toBe(0);
    expect(ret.data[0].timestamp).not.toBe(undefined);

    const tx = await api.getTransaction(ledger, ret.data[0].txid);
    expect(tx.data).toStrictEqual(ret.data[0]);
});

test("List transactions", async () => {
    const ledger = randomUUID();
    await api.createTransaction(ledger, {
        postings: [{source: 'world', destination: 'bank', amount: 100, asset: 'USD'}]
    });
    await api.createTransaction(ledger, {
        postings: [{source: 'world', destination: 'bank', amount: 100, asset: 'USD'}]
    });
    const ret = await api.listTransactions(ledger)
    expect(ret.cursor.data.length).toBe(2);
});

test("Revert transaction", async () => {
    const ledger = randomUUID();
    const txRet = await api.createTransaction(ledger, {
        postings: [{source: 'world', destination: 'bank', amount: 100, asset: 'USD'}]
    });
    const ret = await api.revertTransaction(ledger, txRet.data[0].txid);
    expect(ret.data.txid).toBe(1);
});

test("Add metadata on transaction", async () => {
    const ledger = randomUUID();
    const txRet = await api.createTransaction(ledger, {
        postings: [{source: 'world', destination: 'bank', amount: 100, asset: 'USD'}]
    });
    const metadata = {
        'foo': 'bar',
        'nested': {
            'foo': 'bar',
        }
    };
    await api.addMetadataOnTransaction(ledger, txRet.data[0].txid, metadata);
    const tx = await api.getTransaction(ledger, txRet.data[0].txid);
    expect(tx.data.metadata).toStrictEqual(metadata);
});