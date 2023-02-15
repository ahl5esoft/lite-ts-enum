import { Enum } from './enum';
import { EnumFactoryBase } from './enum-factory-base';
import { EnumItem } from './enum-item';
import { LoadHandlerBase } from './load-handler-base';

export class EnumFactory extends EnumFactoryBase {
    public constructor(
        private m_LoadHandler: LoadHandlerBase,
        private m_ReduceFunc: { [key: string]: (memo: any, item: any) => any; },
    ) {
        super();
    }

    public build<T extends EnumItem>(nameOrCtor: string | (new () => T)) {
        return new Enum(
            typeof nameOrCtor == 'string' ? nameOrCtor : nameOrCtor.name,
            this.m_LoadHandler,
            this.m_ReduceFunc,
        );
    }
}