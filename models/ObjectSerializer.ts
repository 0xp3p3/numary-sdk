export * from '../models/Account';
export * from '../models/AccountWithVolumesAndBalances';
export * from '../models/AddMetadataToAccount409Response';
export * from '../models/Config';
export * from '../models/ConfigInfo';
export * from '../models/ConfigInfoResponse';
export * from '../models/Contract';
export * from '../models/CreateTransaction400Response';
export * from '../models/CreateTransaction409Response';
export * from '../models/CreateTransactions400Response';
export * from '../models/Cursor';
export * from '../models/ErrorCode';
export * from '../models/ErrorResponse';
export * from '../models/GetAccount200Response';
export * from '../models/GetAccount400Response';
export * from '../models/GetBalances200Response';
export * from '../models/GetBalances200ResponseCursor';
export * from '../models/GetBalances200ResponseCursorAllOf';
export * from '../models/GetBalancesAggregated200Response';
export * from '../models/GetBalancesAggregated400Response';
export * from '../models/GetTransaction400Response';
export * from '../models/GetTransaction404Response';
export * from '../models/LedgerStorage';
export * from '../models/ListAccounts200Response';
export * from '../models/ListAccounts200ResponseCursor';
export * from '../models/ListAccounts200ResponseCursorAllOf';
export * from '../models/ListAccounts400Response';
export * from '../models/ListTransactions200Response';
export * from '../models/ListTransactions200ResponseCursor';
export * from '../models/ListTransactions200ResponseCursorAllOf';
export * from '../models/Mapping';
export * from '../models/MappingResponse';
export * from '../models/Posting';
export * from '../models/RunScript400Response';
export * from '../models/Script';
export * from '../models/ScriptResult';
export * from '../models/Stats';
export * from '../models/StatsResponse';
export * from '../models/Transaction';
export * from '../models/TransactionData';
export * from '../models/TransactionResponse';
export * from '../models/Transactions';
export * from '../models/TransactionsResponse';
export * from '../models/Volume';

import { Account } from '../models/Account';
import { AccountWithVolumesAndBalances } from '../models/AccountWithVolumesAndBalances';
import { AddMetadataToAccount409Response } from '../models/AddMetadataToAccount409Response';
import { Config } from '../models/Config';
import { ConfigInfo } from '../models/ConfigInfo';
import { ConfigInfoResponse } from '../models/ConfigInfoResponse';
import { Contract } from '../models/Contract';
import { CreateTransaction400Response } from '../models/CreateTransaction400Response';
import { CreateTransaction409Response } from '../models/CreateTransaction409Response';
import { CreateTransactions400Response } from '../models/CreateTransactions400Response';
import { Cursor } from '../models/Cursor';
import { ErrorCode } from '../models/ErrorCode';
import { ErrorResponse   } from '../models/ErrorResponse';
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
import { RunScript400Response } from '../models/RunScript400Response';
import { Script } from '../models/Script';
import { ScriptResult , ScriptResultErrorCodeEnum     } from '../models/ScriptResult';
import { Stats } from '../models/Stats';
import { StatsResponse } from '../models/StatsResponse';
import { Transaction } from '../models/Transaction';
import { TransactionData } from '../models/TransactionData';
import { TransactionResponse } from '../models/TransactionResponse';
import { Transactions } from '../models/Transactions';
import { TransactionsResponse } from '../models/TransactionsResponse';
import { Volume } from '../models/Volume';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "ErrorCode",
    "ScriptResultErrorCodeEnum",
]);

let typeMap: {[index: string]: any} = {
    "Account": Account,
    "AccountWithVolumesAndBalances": AccountWithVolumesAndBalances,
    "AddMetadataToAccount409Response": AddMetadataToAccount409Response,
    "Config": Config,
    "ConfigInfo": ConfigInfo,
    "ConfigInfoResponse": ConfigInfoResponse,
    "Contract": Contract,
    "CreateTransaction400Response": CreateTransaction400Response,
    "CreateTransaction409Response": CreateTransaction409Response,
    "CreateTransactions400Response": CreateTransactions400Response,
    "Cursor": Cursor,
    "ErrorResponse": ErrorResponse,
    "GetAccount200Response": GetAccount200Response,
    "GetAccount400Response": GetAccount400Response,
    "GetBalances200Response": GetBalances200Response,
    "GetBalances200ResponseCursor": GetBalances200ResponseCursor,
    "GetBalances200ResponseCursorAllOf": GetBalances200ResponseCursorAllOf,
    "GetBalancesAggregated200Response": GetBalancesAggregated200Response,
    "GetBalancesAggregated400Response": GetBalancesAggregated400Response,
    "GetTransaction400Response": GetTransaction400Response,
    "GetTransaction404Response": GetTransaction404Response,
    "LedgerStorage": LedgerStorage,
    "ListAccounts200Response": ListAccounts200Response,
    "ListAccounts200ResponseCursor": ListAccounts200ResponseCursor,
    "ListAccounts200ResponseCursorAllOf": ListAccounts200ResponseCursorAllOf,
    "ListAccounts400Response": ListAccounts400Response,
    "ListTransactions200Response": ListTransactions200Response,
    "ListTransactions200ResponseCursor": ListTransactions200ResponseCursor,
    "ListTransactions200ResponseCursorAllOf": ListTransactions200ResponseCursorAllOf,
    "Mapping": Mapping,
    "MappingResponse": MappingResponse,
    "Posting": Posting,
    "RunScript400Response": RunScript400Response,
    "Script": Script,
    "ScriptResult": ScriptResult,
    "Stats": Stats,
    "StatsResponse": StatsResponse,
    "Transaction": Transaction,
    "TransactionData": TransactionData,
    "TransactionResponse": TransactionResponse,
    "Transactions": Transactions,
    "TransactionsResponse": TransactionsResponse,
    "Volume": Volume,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "text/plain") {
            return String(data);
        }

        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "text/plain") {
            return rawData;
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        if (mediaType === "text/html") {
            return rawData;
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
