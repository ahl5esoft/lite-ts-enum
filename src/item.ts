export class EnumItem {
    public value: number;
    public key?: string;
    public text?: string;
}

export type EnumGetAssetPathOption = Partial<{
    dir: string;
    scene: string;
}>;

export class EnumCcItem extends EnumItem {
    private m_EnumName: string;

    private m_BundleName: string;
    protected get bundleName() {
        this.m_BundleName ??= this.m_EnumName.replace(/[A-Z]/g, (r, i) => {
            return (i ? '-' : 'bundles_') + r.toLowerCase();
        });
        return this.m_BundleName;
    }

    public findLangKeys(attr?: string) {
        const parts = [this.m_EnumName, this.value];
        if (attr)
            parts.push(attr);
        return [parts.join('-')];
    }

    public getAssetPath(opt?: EnumGetAssetPathOption) {
        const paths: any[] = [this.bundleName, ':'];
        opt ??= {};
        opt.dir ??= 'texture';
        paths.push(opt.dir, '/', this.value);
        if (opt.scene)
            paths.push('-', opt.scene);
        return paths.join('');
    }

    public static create(entry: EnumItem, enumName: string) {
        const item = new EnumCcItem();
        Object.assign(item, entry);
        item.m_EnumName = enumName;
        return item;
    }
}