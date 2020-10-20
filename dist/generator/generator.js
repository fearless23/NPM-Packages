"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generator = void 0;
var generator_options_model_1 = require("./models/generator-options.model");
var compiler_1 = require("./compiler");
var abstract_synthax_tree_builder_1 = require("./abstract-synthax-tree-builder");
var Generator = /** @class */ (function () {
    function Generator(generatorOptions) {
        this.generatorOptions = generatorOptions || new generator_options_model_1.GeneratorOptionsModel();
    }
    /**getSchemaFromDatas(data: any): any {
        console.log('Will return a JSON schema from data.');
        return null;
    }

    getSchemaFromPath(path: string): any {
        console.log('Will return a JSON schema from path.');
        return null;
    }

    getSchemaFromUrl(url: any): any {
        console.log('Will return a JSON schema from url.');
        return null;
    }**/
    Generator.prototype.getSchema = function (param) {
        if (typeof param === 'string') {
            // return this.getSchemaFromPath(param);
            throw new Error('functionality not implemented yet');
        }
        else {
            return this.compile(param);
        }
    };
    Generator.prototype.compile = function (jsonModel) {
        var ast = abstract_synthax_tree_builder_1.AbstractSyntaxTreeBuilder.buildNode(jsonModel);
        return compiler_1.Compiler.compile(ast);
    };
    return Generator;
}());
exports.Generator = Generator;
