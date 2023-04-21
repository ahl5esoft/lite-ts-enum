import { Enum } from './enum';

export type EnumLoadHandlerContext = Partial<{
    app: string;
    areaNo: number;
    enum: Enum<any>;
    res: { [no: number]: any; };
}>;