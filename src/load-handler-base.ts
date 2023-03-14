import { LoadEnumHandleOption } from './load-handle-option';

export abstract class LoadEnumHandlerBase {
    protected next: LoadEnumHandlerBase;

    public setNext(v: LoadEnumHandlerBase) {
        this.next = v;
        return this.next;
    }

    public abstract handle(opt: LoadEnumHandleOption): Promise<void>;
}