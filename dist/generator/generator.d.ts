import { GeneratorOptionsModel } from './models/generator-options.model';
export declare class Generator {
    private generatorOptions;
    constructor(generatorOptions?: GeneratorOptionsModel);
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
    getSchema(param: string | any): any;
    private compile;
}
