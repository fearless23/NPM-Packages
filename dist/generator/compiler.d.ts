import { AbstractSyntaxTreeModel } from './models/abstract-syntax-tree.model';
import { Draf7SchemaModel } from './models/schema.model';
export declare class Compiler {
    static compile(tree: AbstractSyntaxTreeModel): Draf7SchemaModel;
    static compileChild(tree: any, properties: any, parentSchema: Draf7SchemaModel): void;
    private static getPimitivePart;
    private static getObjectPart;
    private static getArrayPart;
    private static getId;
}
