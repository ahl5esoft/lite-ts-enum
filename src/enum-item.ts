export class EnumItem {
    private m_Name: string;

    public value: number;

    public key?: string;

    public text?: string;

    public getEncodingKey(attr: string) {
        return [this.m_Name, this.value, attr].join('-');
    }

    public static create(name: string, entry: EnumItem) {
        const item = Object.assign(new EnumItem(), entry);
        item.m_Name = name;
        return item;
    }
}