import { IDTypeEnum } from '../enums/id-type.enum';
export interface CommonOptions {
    inferEnums: boolean;
    inclNullAsType: boolean;
    idType: IDTypeEnum;
    inferTitle: boolean;
    inferDescription: boolean;
    inferDefault: boolean;
    inferExamples: boolean;
    readOnly: boolean;
    writeOnly: boolean;
}
