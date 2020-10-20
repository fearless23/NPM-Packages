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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSyntaxTreeBuilder = void 0;
var utils_1 = require("./utils");
var value_type_enum_1 = require("./enums/value-type.enum");
var _ = require("lodash");
var AbstractSyntaxTreeBuilder = /** @class */ (function () {
    function AbstractSyntaxTreeBuilder() {
    }
    AbstractSyntaxTreeBuilder.buildPrimitive = function (node) {
        var type = utils_1.Utils.getType(node);
        var required = type === value_type_enum_1.ValueTypeEnum.STRING ? !!node : true;
        var values = [node];
        return { type: type, required: required, values: values };
    };
    AbstractSyntaxTreeBuilder.buildObject = function (node) {
        var type = utils_1.Utils.getType(node);
        var keys = Object.keys(node);
        var required = keys.length > 0;
        var children = {};
        if (required) {
            children = keys.map(function (k) {
                var _a;
                return _a = {}, _a[k] = AbstractSyntaxTreeBuilder.buildNode(node[k]), _a;
            }).reduce(function (previousValue, currentValue) {
                return _.assign(previousValue, currentValue);
            });
        }
        return { type: type, required: required, children: children };
    };
    AbstractSyntaxTreeBuilder.buildArray = function (node) {
        var type = utils_1.Utils.getType(node);
        var required = node.length > 0;
        // build children.
        var arrayWithDuplicates = node.map(function (value) {
            return AbstractSyntaxTreeBuilder.buildNode(value);
        });
        var uniqArray = _.transform(arrayWithDuplicates, function (acc, curr) {
            var _a;
            var similarEntry = _.filter(acc, function (value) { return utils_1.Utils.isEqualWithout(value, curr, 'values'); });
            if (similarEntry.length === 0) {
                acc.push(curr);
            }
            else {
                var ast = similarEntry[0];
                if (ast.values && curr.values)
                    (_a = ast.values).push.apply(_a, curr.values);
            }
        });
        var children = __assign({}, uniqArray);
        // get uniqueItems
        var uniqueValueLength = _.uniqWith(node, _.isEqual).length;
        var uniqueItems = uniqueValueLength === node.length;
        return { type: type, required: required, children: children, uniqueItems: uniqueItems };
    };
    /**
     * Orchestrator
     * @param node
     * @return {AbstractSyntaxTreeModel}
     */
    AbstractSyntaxTreeBuilder.buildNode = function (node) {
        var type = utils_1.Utils.getType(node);
        if (type === value_type_enum_1.ValueTypeEnum.OBJECT) {
            return AbstractSyntaxTreeBuilder.buildObject(node);
        }
        else if (type === value_type_enum_1.ValueTypeEnum.ARRAY) {
            return AbstractSyntaxTreeBuilder.buildArray(node);
        }
        else {
            return AbstractSyntaxTreeBuilder.buildPrimitive(node);
        }
    };
    return AbstractSyntaxTreeBuilder;
}());
exports.AbstractSyntaxTreeBuilder = AbstractSyntaxTreeBuilder;
