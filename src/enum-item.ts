export class EnumItem {
    public value: number;

    public key?: string;

    public text?: string;

    public constructor(
        private m_Name: string,
        entry: EnumItem,
    ) {
        Object.assign(this, entry);
    }

    public getEncodingKey(attr: string) {
        return [this.m_Name, this.value, attr].join('-');
    }
}