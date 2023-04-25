import { Enum } from './enum';

export type EnumLoadHandlerContext = {
    app: string;
    areaNo: number;
    enum: Enum<any>;
    res?: { [no: number]: any; };
};