declare class EnumItem {
    private m_Name;
    value: number;
    key?: string;
    text?: string;
    constructor(m_Name: string, entry: EnumItem);
    getEncodingKey(attr: string): string;
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