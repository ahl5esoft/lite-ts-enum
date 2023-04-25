export type EnumBuildOption<T> = {
    areaNo: number;
    app: string;
    name?: string;
    ctor?: new () => T;
};