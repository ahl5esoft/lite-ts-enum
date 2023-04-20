import { Enum } from './enum';
import { EnumBuildOption } from './enum-build-option';
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

    public build<T extends EnumItem>(opt: EnumBuildOption<T>) {
        const enumName = typeof opt.nameOrCtor == 'string' ? opt.nameOrCtor : opt.nameOrCtor.name;
        return new Enum(
            enumName,
            opt.app,
            opt.areaNo,
            this.m_LoadHandler,
            this.m_ReduceFunc[enumName] ?? {},
        );
    }
}