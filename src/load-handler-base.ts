import { LoadEnumHandlerContext } from './load-handler-context';

export abstract class LoadEnumHandlerBase {
    protected next: LoadEnumHandlerBase;

    public setNext(v: LoadEnumHandlerBase) {
        this.next = v;
        return this.next;
    }

    public abstract handle(ctx: LoadEnumHandlerContext): Promise<void>;
}