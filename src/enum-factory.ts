import { Enum } from './enum';
import { EnumFactoryBase } from './enum-factory-base';
import { EnumItem } from './enum-item';
import { LoadOption } from './load-option';

export class EnumFactory extends EnumFactoryBase {
    public constructor(
        private m_ReduceFunc: { [key: string]: (memo: any, item: any) => any; },
        private m_LoadOptions: LoadOption[],
    ) {
        super();
    }

    public build<T extends EnumItem>(nameOrCtor: string | (new () => T)) {
        return new Enum(
            typeof nameOrCtor == 'string' ? nameOrCtor : nameOrCtor.name,
            this.m_ReduceFunc,
            this.m_LoadOptions,
        );
    }
}