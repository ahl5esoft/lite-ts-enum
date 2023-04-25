import { ioc } from 'lite-ts-ioc';

import { Enum } from './enum';
import { EnumItem } from './item';
import { EnumLoadHandlerBase } from './load-handler-base';

export type EnumBuildOption<T> = {
    areaNo: number;
    app: string;
    name?: string;
    ctor?: new () => T;
};

export abstract class EnumFactoryBase {
    public static ctor = 'EnumFactoryBase';

    public abstract build<T extends EnumItem>(opt: EnumBuildOption<T>): Enum<T>;
}

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