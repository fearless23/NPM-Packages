"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var _ = require("lodash");
var value_type_enum_1 = require("./enums/value-type.enum");
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * Read and return JSON from file path.
     * @param {string} filePath a string or a path to the file.
     */
    Utils.getJson = function (filePath) {
        console.log('TODO return the json from file path');
    };
    /**
     * Get the type of value as a string.
     * @param value the value to get the type as string
     * @return {string} the type of the value.
     */
    Utils.getType = function (value) {
        if (_.isArray(value)) {
            return value_type_enum_1.ValueTypeEnum.ARRAY;
        }
        else if (_.isBoolean(value)) {
            return value_type_enum_1.ValueTypeEnum.BOOLEAN;
        }
        else if (_.isString(value)) {
            return value_type_enum_1.ValueTypeEnum.STRING;
        }
        else if (_.isInteger(value)) {
            return value_type_enum_1.ValueTypeEnum.INTEGER;
        }
        else if (_.isNumber(value)) {
            return value_type_enum_1.ValueTypeEnum.NUMBER;
        }
        else if (_.isObject(value)) {
            return value_type_enum_1.ValueTypeEnum.OBJECT;
        }
        else {
            return value_type_enum_1.ValueTypeEnum.NULL;
        }
    };
    /**
     * Return default value depending on type.
     * @param {string} type
     * @return {any}
     */
    Utils.getDefaultValue = function (type) {
        switch (type) {
            case value_type_enum_1.ValueTypeEnum.BOOLEAN:
                return false;
            case value_type_enum_1.ValueTypeEnum.NUMBER:
            case value_type_enum_1.ValueTypeEnum.INTEGER:
                return 0;
            case value_type_enum_1.ValueTypeEnum.STRING:
                return '';
            case value_type_enum_1.ValueTypeEnum.NULL:
                return null;
            case value_type_enum_1.ValueTypeEnum.ARRAY:
                return [];
            case value_type_enum_1.ValueTypeEnum.OBJECT:
                return {};
        }
    };
    /**
     * Test deep equality between two object with the possibility to omit recursively
     * some properties.
     * @param obj1: the first object to compare.
     * @param obj2: the second object to compare.
     * @param {string} omits: one or many names of properties to omit recursively.
     * @return {boolean}: whether the two object are identical or not.
     */
    Utils.isEqualWithout = function (obj1, obj2) {
        var omits = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            omits[_i - 2] = arguments[_i];
        }
        if (_.isObject(obj1) && _.isObject(obj2)) {
            var keys = Object.keys(obj1);
            return keys.every(function (k) {
                if (omits.indexOf(k) === -1) {
                    return Utils.isEqualWithout.apply(Utils, __spreadArrays([obj1[k], obj2[k]], omits));
                }
                return true;
            });
        }
        else {
            return obj1 === obj2;
        }
    };
    return Utils;
}());
exports.Utils = Utils;
