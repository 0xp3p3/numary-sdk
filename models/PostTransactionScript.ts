/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.9.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class PostTransactionScript {
    'plain': string;
    'vars'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "plain",
            "baseName": "plain",
            "type": "string",
            "format": ""
        },
        {
            "name": "vars",
            "baseName": "vars",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PostTransactionScript.attributeTypeMap;
    }

    public constructor() {
    }
}
