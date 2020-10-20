import { CommonOptions } from './common-options.model';
import { StringOptions } from './string-options.model';
import { ObjectOptions } from './object-options.model';
import { ArrayOptions } from './array-options.model';
import { NumberOptions } from './number-options.model';
export declare class GeneratorOptionsModel {
    common: CommonOptions;
    objects: ObjectOptions;
    arrays: ArrayOptions;
    strings: StringOptions;
    numbers: NumberOptions;
    constructor();
    private getDefaultCommonOptions;
    private getDefaultObjectOptions;
    private getDefaultArrayOptions;
    private getDefaultStringOptions;
    private getDefaultNumberOptions;
}
