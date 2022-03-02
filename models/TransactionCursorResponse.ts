/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.2.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TransactionCursor } from './TransactionCursor';
import { HttpFile } from '../http/http';

export class TransactionCursorResponse {
    'cursor': TransactionCursor;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "TransactionCursor",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TransactionCursorResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

