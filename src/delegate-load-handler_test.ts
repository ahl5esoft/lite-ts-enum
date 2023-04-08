import { deepStrictEqual } from 'assert';
import { Mock } from 'lite-ts-mock';

import { DelegateLoadEnumHandler as Self } from './delegate-load-handler';
import { LoadEnumHandlerBase } from './load-handler-base';
import { LoadEnumHandlerContext } from './load-handler-context';

describe('src/delegate-load-handler.ts', () => {
    describe('.handle(ctx: LoadEnumHandlerContext)', () => {
        it('ok', async () => {
            const self = new Self(async opt => {
                opt.res = [];
            });

            const mockHandler = new Mock<LoadEnumHandlerBase>();
            self.setNext(mockHandler.actual);

            const ctx: LoadEnumHandlerContext = {};
            mockHandler.expected.handle(ctx);

            await self.handle(ctx as any);

            deepStrictEqual(ctx.res, []);
        });
    });
});