import { Enum } from './enum';

export abstract class LoadHandlerBase {
    protected next: LoadHandlerBase;

    public setNext(v: LoadHandlerBase) {
        this.next = v;
        return this.next;
    }

    public abstract handle(target: Enum<any>, res: { [value: number]: any }): Promise<void>;
}