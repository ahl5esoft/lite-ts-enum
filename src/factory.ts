import { ioc } from 'lite-ts-ioc';

import { Enum } from './enum';
import { EnumBuildOption } from './build-option';
import { EnumFactoryBase } from './factory-base';
import { EnumItem } from './item';
import { EnumLoadHandlerBase } from './load-handler-base';

export class EnumFactory extends EnumFactoryBase {
    public constructor(
        private m_LoadHandler: EnumLoadHandlerBase,
        private m_ReduceFunc: {
            [enumName: string]: {
                [key: string]: (memo: any, item: any) => any;
            };
        },
    ) {
        super();
    }

    public build<T extends EnumItem>(opt: EnumBuildOption<T>) {
        const enumName = ioc.getKey(opt.name ?? opt.ctor);
        return new Enum(
            enumName,
            opt.app,
            opt.areaNo,
            this.m_LoadHandler,
            this.m_ReduceFunc[enumName] ?? {},
        );
    }
}