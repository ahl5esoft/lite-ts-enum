export interface IEnumItem {
    value: number;
    key?: string;
    text?: string;
}

export interface IEnumCcItem extends IEnumItem {
    findLangKeys(attr?: string): string[];
    getAssetPath<T>(ctor: new () => T, scene?: string): string;
}

export class EnumItem implements IEnumItem {
    public value: number;
    public key?: string;
    public text?: string;
}