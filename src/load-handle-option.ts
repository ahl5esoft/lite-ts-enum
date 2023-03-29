import { ReadonlyEnum } from './readonly-enum';

export type LoadEnumHandleOption = {
    enum: ReadonlyEnum<any>;
    res: { [no: number]: any; };
    areaNo?: number;
};