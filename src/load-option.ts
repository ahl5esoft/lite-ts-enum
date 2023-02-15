import { Enum } from './enum';

export type LoadOption = (self: Enum<any>, res: { [value: number]: any }) => Promise<void>;