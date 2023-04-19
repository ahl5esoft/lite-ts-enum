import { Enum } from './enum';

export type LoadEnumHandlerContext = Partial<{
    app: string;
    areaNo: number;
    enum: Enum<any>;
    res: { [no: number]: any; };
}>;