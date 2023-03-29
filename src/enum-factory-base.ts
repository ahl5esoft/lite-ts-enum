import { EnumItem } from './enum-item';
import { ReadonlyEnum } from './readonly-enum';

export abstract class EnumFactoryBase {
    public static ctor = 'EnumFactoryBase';

    public abstract build<T extends EnumItem>(nameOrCtor: string | (new () => T), areaNo?: number): ReadonlyEnum<T>;
}