import { EnumItem } from './enum-item';
import { Enum } from './enum';

export abstract class EnumFactoryBase {
    public static ctor = 'EnumFactoryBase';

    public abstract build<T extends EnumItem>(nameOrCtor: string | (new () => T), areaNo?: number): Enum<T>;
}