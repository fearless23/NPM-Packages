"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compiler = void 0;
var value_type_enum_1 = require("./enums/value-type.enum");
var utils_1 = require("./utils");
var Compiler = /** @class */ (function () {
    function Compiler() {
    }
    Compiler.compile = function (tree) {
        var schema = {
            '$id': 'http://example.com/example.json',
            '$schema': 'http://json-schema.org/draft-07/schema#',
            type: tree.type,
        };
        if (tree.type === value_type_enum_1.ValueTypeEnum.OBJECT) {
            schema = __assign(__assign({}, schema), { properties: {}, required: [] });
            Compiler.compileChild(tree, schema.properties, schema);
        }
        else {
            schema = __assign(__assign({}, schema), { uniqueItems: tree.uniqueItems, items: [] });
            Compiler.compileChild(tree, schema.items, schema);
            if (Object.keys(schema.items).length === 1) {
                schema.items = schema.items[0];
            }
        }
        return schema;
    };
    Compiler.compileChild = function (tree, properties, parentSchema) {
        var keys = Object.keys(tree.children);
        keys.forEach(function (k) {
            var child = tree.children[k];
            if (child.required && parentSchema.required) {
                parentSchema.required.push(k);
            }
            if (child.type === value_type_enum_1.ValueTypeEnum.OBJECT) {
                properties[k] = Compiler.getObjectPart(Compiler.getId(parentSchema, k, keys.length), child);
                Compiler.compileChild(child, properties[k].properties, properties[k]);
            }
            else if (child.type === value_type_enum_1.ValueTypeEnum.ARRAY) {
                properties[k] = Compiler.getArrayPart(Compiler.getId(parentSchema, k, keys.length), child);
                Compiler.compileChild(child, properties[k].items, properties[k]);
                if (Object.keys(properties[k].items).length === 1) {
                    properties[k].items = properties[k].items[0];
                }
            }
            else {
                properties[k] = Compiler.getPimitivePart(Compiler.getId(parentSchema, k, keys.length), child, k);
            }
        });
    };
    Compiler.getPimitivePart = function (id, child, k) {
        // TODO : Manage all options
        var result = {
            '$id': id,
            type: child.type,
            // title: `The ${k} Schema `,
            default: utils_1.Utils.getDefaultValue(child.type)
        };
        if (child.values && child.values.length > 0) {
            result.examples = __spreadArrays(child.values);
        }
        return result;
    };
    Compiler.getObjectPart = function (id, child) {
        var schema = {
            '$id': id,
            type: child.type
        };
        if (Object.keys(child.children).length > 0) {
            schema = __assign(__assign({}, schema), { properties: {}, required: [] });
        }
        return schema;
    };
    Compiler.getArrayPart = function (id, child) {
        return {
            '$id': id,
            type: child.type,
            uniqueItems: child.uniqueItems,
            items: []
        };
    };
    Compiler.getId = function (parentSchema, key, length) {
        var parentId = parentSchema.$id[0] === '/' ? parentSchema.$id : '';
        if (parentSchema.type === value_type_enum_1.ValueTypeEnum.ARRAY) {
            if (length > 1) {
                return parentId + "/items/" + key;
            }
            else {
                return parentId + "/items";
            }
        }
        else {
            return parentId + "/properties/" + key;
        }
    };
    return Compiler;
}());
exports.Compiler = Compiler;
