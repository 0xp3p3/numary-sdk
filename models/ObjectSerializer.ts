export * from './Account';
export * from './AccountWithVolumesAndBalances';
export * from './Config';
export * from './ConfigInfo';
export * from './ConfigInfoResponse';
export * from './Contract';
export * from './CreateTransactionResponse';
export * from './CreateTransactions200Response';
export * from './CreateTransactions200ResponseAllOf';
export * from './Cursor';
export * from './ErrorCode';
export * from './ErrorResponse';
export * from './GetAccount200Response';
export * from './LedgerStorage';
export * from './ListAccounts200Response';
export * from './ListAccounts200ResponseCursor';
export * from './ListAccounts200ResponseCursorAllOf';
export * from './ListTransactions200Response';
export * from './ListTransactions200ResponseCursor';
export * from './ListTransactions200ResponseCursorAllOf';
export * from './Mapping';
export * from './MappingResponse';
export * from './Posting';
export * from './Script';
export * from './ScriptResult';
export * from './Stats';
export * from './StatsResponse';
export * from './Transaction';
export * from './TransactionData';
export * from './TransactionResponse';
export * from './Transactions';

import { Account } from './Account';
import { AccountWithVolumesAndBalances } from './AccountWithVolumesAndBalances';
import { Config } from './Config';
import { ConfigInfo } from './ConfigInfo';
import { ConfigInfoResponse } from './ConfigInfoResponse';
import { Contract } from './Contract';
import { CreateTransactionResponse } from './CreateTransactionResponse';
import { CreateTransactions200Response } from './CreateTransactions200Response';
import { CreateTransactions200ResponseAllOf } from './CreateTransactions200ResponseAllOf';
import { Cursor } from './Cursor';
import { ErrorCode } from './ErrorCode';
import { ErrorResponse } from './ErrorResponse';
import { GetAccount200Response } from './GetAccount200Response';
import { LedgerStorage } from './LedgerStorage';
import { ListAccounts200Response } from './ListAccounts200Response';
import { ListAccounts200ResponseCursor } from './ListAccounts200ResponseCursor';
import { ListAccounts200ResponseCursorAllOf } from './ListAccounts200ResponseCursorAllOf';
import { ListTransactions200Response } from './ListTransactions200Response';
import { ListTransactions200ResponseCursor } from './ListTransactions200ResponseCursor';
import { ListTransactions200ResponseCursorAllOf } from './ListTransactions200ResponseCursorAllOf';
import { Mapping } from './Mapping';
import { MappingResponse } from './MappingResponse';
import { Posting } from './Posting';
import { Script } from './Script';
import { ScriptResult , ScriptResultErrorCodeEnum     } from './ScriptResult';
import { Stats } from './Stats';
import { StatsResponse } from './StatsResponse';
import { Transaction } from './Transaction';
import { TransactionData } from './TransactionData';
import { TransactionResponse } from './TransactionResponse';
import { Transactions } from './Transactions';

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
    "Config": Config,
    "ConfigInfo": ConfigInfo,
    "ConfigInfoResponse": ConfigInfoResponse,
    "Contract": Contract,
    "CreateTransactionResponse": CreateTransactionResponse,
    "CreateTransactions200Response": CreateTransactions200Response,
    "CreateTransactions200ResponseAllOf": CreateTransactions200ResponseAllOf,
    "Cursor": Cursor,
    "ErrorResponse": ErrorResponse,
    "GetAccount200Response": GetAccount200Response,
    "LedgerStorage": LedgerStorage,
    "ListAccounts200Response": ListAccounts200Response,
    "ListAccounts200ResponseCursor": ListAccounts200ResponseCursor,
    "ListAccounts200ResponseCursorAllOf": ListAccounts200ResponseCursorAllOf,
    "ListTransactions200Response": ListTransactions200Response,
    "ListTransactions200ResponseCursor": ListTransactions200ResponseCursor,
    "ListTransactions200ResponseCursorAllOf": ListTransactions200ResponseCursorAllOf,
    "Mapping": Mapping,
    "MappingResponse": MappingResponse,
    "Posting": Posting,
    "Script": Script,
    "ScriptResult": ScriptResult,
    "Stats": Stats,
    "StatsResponse": StatsResponse,
    "Transaction": Transaction,
    "TransactionData": TransactionData,
    "TransactionResponse": TransactionResponse,
    "Transactions": Transactions,
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
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
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

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
