import { deepStrictEqual } from 'assert';

import { Enum as Self } from './enum';

describe('src/enum.ts', () => {
    describe('.allItem', () => {
        it('ok', async () => {
            const self = new Self('tt', null, [
                async (_, res) => {
                    res['a'] = 'aa';
                },
                async (_, res) => {
                    res[1] = 'bb';
                }
            ]);

            const res = await self.allItem;
            deepStrictEqual(res, {
                a: 'aa',
                1: 'bb'
            });
        });
    });

    describe('.items', () => {
        it('ok', async () => {
            const self = new Self('tt', null, null);

            Reflect.set(self, 'm_AllItem', {
                a: 'aa',
                b: 'bb'
            });

            const res = await self.items;
            deepStrictEqual(res, ['aa', 'bb']);
        });
    });

    describe('.get(predicate: (entry: T) => boolean)', () => {
        it('ok', async () => {
            const self = new Self('tt', null, null);

            Reflect.set(self, 'm_AllItem', {
                a: {
                    value: 1
                },
                b: {
                    value: 2
                }
            });

            const res = await self.get(r => r.value == 2);
            deepStrictEqual(res, {
                value: 2
            });
        });
    });

    describe('.getReduce<TReduce>(typer: string)', () => {
        it('ok', async () => {
            const self = new Self('tt', null, null);

            Reflect.set(self, 'm_Reduce', {
                a: {
                    value: 1
                },
                b: {
                    value: 2
                }
            });

            const res = await self.getReduce('a');
            deepStrictEqual(res, {
                value: 1
            });
        });
    });
});