import { Enum } from './enum';
import { EnumBuildOption } from './build-option';
import { EnumItem } from './item';

export abstract class EnumFactoryBase {
    public static ctor = 'EnumFactoryBase';

    public abstract build<T extends EnumItem>(opt: EnumBuildOption<T>): Enum<T>;
}