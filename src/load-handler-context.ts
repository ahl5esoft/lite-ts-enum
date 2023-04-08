import { Enum } from './enum';

export type LoadEnumHandlerContext = Partial<{
    enum: Enum<any>;
    res: { [no: number]: any; };
    areaNo: number;
}>;