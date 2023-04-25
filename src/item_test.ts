import { deepStrictEqual, strictEqual } from 'assert';

import { EnumCcItem } from './item';

describe('src/item.ts', () => {
    describe('.bundleName[protected]', () => {
        it('ok', async () => {
            const self = EnumCcItem.create({
                value: 2,
            }, 'AreaData');
            const res = Reflect.get(self, 'bundleName');
            strictEqual(res, 'bundles_area-data');
        });
    });

    describe('.findLangKeys(attr?: string)', () => {
        it('ok', () => {
            const self = EnumCcItem.create({
                value: 2,
            }, 'AreaData');
            const res = self.findLangKeys();
            deepStrictEqual(res, ['AreaData-2']);
        });

        it('attr', () => {
            const self = EnumCcItem.create({
                value: 2,
            }, 'AreaData');
            const res = self.findLangKeys('desc');
            deepStrictEqual(res, ['AreaData-2-desc']);
        });
    });

    describe('.getAssetPath(opt?: EnumGetAssetPathOption)', () => {
        it('ok', async () => {
            const self = EnumCcItem.create({
                value: 2,
            }, 'AreaData');
            const res = self.getAssetPath();
            strictEqual(res, 'bundles_area-data:texture/2');
        });

        it('dir', async () => {
            const self = EnumCcItem.create({
                value: 2,
            }, 'AreaData');
            const res = self.getAssetPath({
                dir: 'tt'
            });
            strictEqual(res, 'bundles_area-data:tt/2');
        });

        it('scene', async () => {
            const self = EnumCcItem.create({
                value: 2,
            }, 'AreaData');
            const res = self.getAssetPath({
                scene: 'desc'
            });
            strictEqual(res, 'bundles_area-data:texture/2-desc');
        });
    });
});