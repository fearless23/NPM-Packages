"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratorOptionsModel = void 0;
var id_type_enum_1 = require("../enums/id-type.enum");
var required_enum_1 = require("../enums/required.enum");
var array_validation_type_enum_1 = require("../enums/array-validation-type.enum");
var GeneratorOptionsModel = /** @class */ (function () {
    function GeneratorOptionsModel() {
        this.common = this.getDefaultCommonOptions();
        this.objects = this.getDefaultObjectOptions();
        this.arrays = this.getDefaultArrayOptions();
        this.strings = this.getDefaultStringOptions();
        this.numbers = this.getDefaultNumberOptions();
    }
    GeneratorOptionsModel.prototype.getDefaultCommonOptions = function () {
        return {
            inferEnums: false,
            inclNullAsType: false,
            idType: id_type_enum_1.IDTypeEnum.relative,
            inferTitle: false,
            inferDescription: false,
            inferDefault: false,
            inferExamples: false,
            readOnly: false,
            writeOnly: false
        };
    };
    GeneratorOptionsModel.prototype.getDefaultObjectOptions = function () {
        return {
            required: required_enum_1.RequiredEnum.ifValue,
            additionalProperties: true
        };
    };
    GeneratorOptionsModel.prototype.getDefaultArrayOptions = function () {
        return {
            uniqueItems: false,
            additionalItems: true,
            validationType: array_validation_type_enum_1.ArrayValidationTypeEnum.listValidation
        };
    };
    GeneratorOptionsModel.prototype.getDefaultStringOptions = function () {
        return {};
    };
    GeneratorOptionsModel.prototype.getDefaultNumberOptions = function () {
        return {
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            detectInteger: true
        };
    };
    return GeneratorOptionsModel;
}());
exports.GeneratorOptionsModel = GeneratorOptionsModel;
