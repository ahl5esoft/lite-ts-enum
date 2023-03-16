import moment from 'moment';

import { EnumItem } from './enum-item';

export type Value = {
    count: number;
    valueType: number;
} & Partial<{
    targetNo: number;
    targetType: number;
    source: string;
}>;

export type Reward = Value & {
    weight?: number;
};

export type ValueCondition = Value & {
    op: string;
};

export class ValueTypeData extends EnumItem {
    /**
     * 自动恢复类型
     */
    public autoRecovery: {
        /**
         * 倒计时数值
         */
        countdownOnValueType: number,
        /**
         * 恢复间隔
         */
        interval: number;
        /**
         * 最大限制数值
         */
        limitValueType: number,
    };
    public isNegative: boolean;
    public isReplace: boolean;
    public parser?: {
        exp: string;
    };
    public range: {
        max: number;
        min: number;
    };
    public reward: {
        addition: {
            childValueType: number;
            mainValueType: number;
        };
        open: Reward[][];
    };
    public sync: {
        valueTypes: number[];
    };

    public text: string;
    public time: {
        valueType: number;
        momentType: moment.unitOfTime.StartOf;
    };
    public value: number;
}