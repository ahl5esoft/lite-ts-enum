export class EnumItem {
    private m_Name: string;

    public value: number;

    public key?: string;

    public text?: string;

    public getEncodingKey(attr: string) {
        return [this.m_Name, this.value, attr].join('-');
    }

    public static create(name: string, entry: EnumItem) {
        const item = new EnumItem();
        Object.assign(item, entry);
        item.m_Name = name;
        return item;
    }
}