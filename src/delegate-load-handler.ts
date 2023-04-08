import { LoadEnumHandlerBase } from './load-handler-base';
import { LoadEnumHandlerContext } from './load-handler-context';

export class DelegateLoadEnumHandler extends LoadEnumHandlerBase {
    public constructor(
        private m_HandleAction: (ctx: LoadEnumHandlerContext) => Promise<void>,
    ) {
        super();
    }

    public async handle(ctx: LoadEnumHandlerContext) {
        await this.m_HandleAction(ctx);
        await this.next?.handle(ctx);
    }
}