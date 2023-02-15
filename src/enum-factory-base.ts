import { Enum } from './enum';
import { EnumItem } from './enum-item';

export abstract class EnumFactoryBase {
    public abstract build<T extends EnumItem>(nameOrCtor: string | (new () => T)): Enum<T>;
}