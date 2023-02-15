import { EnumItem } from './enum-item';
import { LoadOption } from './load-option';

export class Enum<T extends EnumItem> {
    private m_Reduce: Promise<{ [key: string]: any; }>;

    private m_AllItem: Promise<{ [value: number]: T }>;
    public get allItem() {
        this.m_AllItem ??= new Promise<{ [value: number]: T }>(async (s, f) => {
            try {
                let res: { [value: number]: T } = {};
                for (const r of this.m_LoadOptions) {
                    await r(this, res);
                }
                s(res);
            } catch (ex) {
                f(ex);
            }
        });
        return this.m_AllItem;
    }

    public get items() {
        return new Promise<T[]>(async (s, f) => {
            try {
                const allItem = await this.allItem;
                s(
                    Object.values(allItem)
                );
            } catch (ex) {
                f(ex);
            }
        });
    }

    public constructor(
        public name: string,
        private m_ReduceFunc: { [key: string]: (memo: any, item: T) => any; },
        private m_LoadOptions: LoadOption[],
    ) { }

    public async get(predicate: (entry: T) => boolean) {
        const items = await this.items;
        return items.find(r => {
            return predicate(r);
        });
    }

    public async getReduce<TReduce>(typer: string) {
        this.m_Reduce ??= new Promise<{ [key: string]: any; }>(async (s, f) => {
            try {
                const items = await this.items;
                s(
                    Object.entries(this.m_ReduceFunc).reduce((memo, [k, v]) => {
                        memo[k] = items.reduce((memo, r) => {
                            return v(memo, r);
                        }, {});
                        return memo;
                    }, {})
                );
            } catch (ex) {
                return f(ex);
            }
        });

        const reduce = await this.m_Reduce;
        return reduce[typer] as TReduce;
    }
}