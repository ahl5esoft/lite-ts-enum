import { EnumLoadHandlerContext } from './load-handler-context';

export abstract class EnumLoadHandlerBase {
    protected next: EnumLoadHandlerBase;

    public setNext(v: EnumLoadHandlerBase) {
        this.next = v;
        return this.next;
    }

    public abstract handle(ctx: EnumLoadHandlerContext): Promise<void>;
}