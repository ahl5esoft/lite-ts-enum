import moment from 'moment';

import { EnumItem } from './enum-item';
import { Reward } from './reward';

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