import { EnumItemData } from './enum-item-data';

export class EnumItem<T extends EnumItemData> {
    public constructor(
        public entry: T,
        private m_Name: string
    ) { }

    public getEncodingKey(attr: string) {
        return [this.m_Name, this.entry.value, attr].join('-');
    }
}