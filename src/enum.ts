import { areaDbOption, DbFactoryBase } from 'lite-ts-db';
import { modelDbOption } from 'lite-ts-mongo';
import { RedisBase } from 'lite-ts-redis';

import { EnumItem } from './enum-item';
import { LoadEnumHandlerBase } from './load-handler-base';
import { ReadonlyEnum } from './readonly-enum';

class EnumModel {
    id: string;
    items: EnumItem[];
}

export class Enum<T extends EnumItem> extends ReadonlyEnum<T> {
    public constructor(
        name: string,
        areaNo: number,
        loadHandler: LoadEnumHandlerBase,
        reduceFunc: { [key: string]: (memo: any, item: T) => any; },
        private m_DbFactory: DbFactoryBase,
        private m_Redis: RedisBase
    ) {
        super(name, areaNo, loadHandler, reduceFunc);
    }

    /**
     * 保存配置
     * @param items 枚举数组
     * @param backupExpire 备份时长，该字段存在时启用备份
     */
    public async save(items: T[], backupExpire?: number) {
        if (backupExpire) {
            await this.m_Redis.set(
                `Enum:Backup:${this.name}`,
                JSON.stringify(items),
                'EX',
                backupExpire
            );
        }
        const db = this.m_DbFactory.db<EnumModel>(
            modelDbOption(EnumModel),
            areaDbOption(this.areaNo),
        );
        const entries = await db.query().toArray({
            where: {
                id: this.name
            }
        });
        if (entries.length) {
            entries[0].items = items;
            await db.save(entries[0]);
        } else {
            await db.add({
                id: this.name,
                items: items,
            });
        }
    }
}