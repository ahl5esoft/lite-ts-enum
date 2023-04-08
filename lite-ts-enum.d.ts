declare class EnumItem {
    value: number;
    key?: string;
    text?: string;
}
declare class Enum<T extends EnumItem> {
    name: string;
    private m_AreaNo;
    private m_LoadHandler;
    private m_ReduceFunc;
    private m_Reduce;
    private m_AllItem;
    get allItem(): Promise<{
        [no: number]: T;
    }>;
    get items(): Promise<T[]>;
    constructor(name: string, m_AreaNo: number, m_LoadHandler: LoadEnumHandlerBase, m_ReduceFunc: {
        [key: string]: (memo: any, item: T) => any;
    });
    get(predicate: (entry: T) => boolean): Promise<T>;
    getReduce<TReduce>(typer: string): Promise<TReduce>;
}
type LoadEnumHandlerContext = Partial<{
    enum: Enum<any>;
    res: {
        [no: number]: any;
    };
    areaNo: number;
}>;
declare abstract class LoadEnumHandlerBase {
    protected next: LoadEnumHandlerBase;
    setNext(v: LoadEnumHandlerBase): LoadEnumHandlerBase;
    abstract handle(ctx: LoadEnumHandlerContext): Promise<void>;
}
declare class DelegateLoadEnumHandler extends LoadEnumHandlerBase {
    private m_HandleAction;
    constructor(m_HandleAction: (ctx: LoadEnumHandlerContext) => Promise<void>);
    handle(ctx: LoadEnumHandlerContext): Promise<void>;
}
declare abstract class EnumFactoryBase {
    static ctor: string;
    abstract build<T extends EnumItem>(nameOrCtor: string | (new () => T), areaNo?: number): Enum<T>;
}
declare class EnumFactory extends EnumFactoryBase {
    private m_LoadHandler;
    private m_ReduceFunc;
    constructor(m_LoadHandler: LoadEnumHandlerBase, m_ReduceFunc: {
        [enumName: string]: {
            [key: string]: (memo: any, item: any) => any;
        };
    });
    build<T extends EnumItem>(nameOrCtor: string | (new () => T), areaNo?: number): Enum<any>;
}
type Value = {
    count: number;
    valueType: number;
} & Partial<{
    targetNo: number;
    targetType: number;
    source: string;
}>;
type Reward = Value & {
    weight?: number;
};
type ValueCondition = Value & {
    op: string;
};
declare class ValueTypeData extends EnumItem {
    autoRecovery: {
        countdownOnValueType: number;
        interval: number;
        limitValueType: number;
    };
    isNegative: boolean;
    isReplace: boolean;
    parser?: {
        exp: string;
    };
    range: {
        max: number;
        min: number;
    };
    reward: {
        addition: {
            childValueType: number;
            mainValueType: number;
        };
        open: Reward[][];
    };
    sync: {
        valueTypes: number[];
    };
    text: string;
    time: {
        valueType: number;
        momentType: string;
    };
    value: number;
}