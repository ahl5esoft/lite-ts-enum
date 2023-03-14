import { Enum } from './enum';

export type LoadEnumHandleOption = {
    enum: Enum<any>;
    res: { [no: number]: any };
};