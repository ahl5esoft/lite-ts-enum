import { Enum } from './enum';
import { EnumFactoryBase } from './enum-factory-base';
import { EnumItem } from './enum-item';
import { LoadEnumHandlerBase } from './load-handler-base';

export class EnumFactory extends EnumFactoryBase {
    public constructor(
        private m_LoadHandler: LoadEnumHandlerBase,
        private m_ReduceFunc: {
            [enumName: string]: {
                [key: string]: (memo: any, item: any) => any;
            };
        },
    ) {
        super();
    }

    public build<T extends EnumItem>(nameOrCtor: string | (new () => T), areaNo = 0) {
        const enumName = typeof nameOrCtor == 'string' ? nameOrCtor : nameOrCtor.name;
        return new Enum(
            enumName,
            areaNo,
            this.m_LoadHandler,
            this.m_ReduceFunc[enumName] ?? {},
        );
    }
}