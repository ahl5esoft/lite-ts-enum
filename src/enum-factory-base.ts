import { Enum } from './enum';
import { EnumBuildOption } from './enum-build-option';
import { EnumItem } from './enum-item';
export abstract class EnumFactoryBase {
    public static ctor = 'EnumFactoryBase';

    public abstract build<T extends EnumItem>(opt: EnumBuildOption<T>): Enum<T>;
}