import { AbstractSyntaxTreeModel } from './models/abstract-syntax-tree.model';
export declare class AbstractSyntaxTreeBuilder {
    static buildPrimitive(node: any): AbstractSyntaxTreeModel;
    static buildObject(node: any): AbstractSyntaxTreeModel;
    static buildArray(node: Array<any>): AbstractSyntaxTreeModel;
    /**
     * Orchestrator
     * @param node
     * @return {AbstractSyntaxTreeModel}
     */
    static buildNode(node: any): AbstractSyntaxTreeModel;
}
