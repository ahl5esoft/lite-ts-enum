import { DelegateLoadEnumHandler } from './delegate-load-handler';
import { Enum } from './enum';
import { EnumFactory } from './enum-factory';
import { EnumFactoryBase } from './enum-factory-base';
import { EnumItem } from './enum-item';
import { LoadEnumHandlerBase } from './load-handler-base';
import { LoadEnumHandlerContext } from './load-handler-context';

export {
    DelegateLoadEnumHandler,
    Enum,
    EnumFactory,
    EnumFactoryBase,
    EnumItem,
    LoadEnumHandlerBase,
    LoadEnumHandlerContext
};
globalThis['lite-ts-enum'] = {
    DelegateLoadEnumHandler,
    Enum,
    EnumFactory,
    EnumFactoryBase,
    EnumItem,
    LoadEnumHandlerBase,
};