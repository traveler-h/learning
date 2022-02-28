"use strict";
/**
 * 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
 * 数值（按顺序）可以分成以下几个部分：
 * 1.若干空格
 * 2.一个 小数 或者 整数
 * 3.（可选）一个 'e' 或 'E' ，后面跟着一个 整数
 * 4.若干空格
 *
 * 小数（按顺序）可以分成以下几个部分：
 * 1.（可选）一个符号字符（'+' 或 '-'）
 * 2.下述格式之一：
 * 至少一位数字，后面跟着一个点 '.'
 * 至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
 * 一个点 '.' ，后面跟着至少一位数字
 *
 * 整数（按顺序）可以分成以下几个部分：
 * 1.（可选）一个符号字符（'+' 或 '-'）
 * 2.至少一位数字
 *
 * 部分数值列举如下：
 * ["+100", "5e2", "-123", "3.1416", "-1E-16", "0123"]
 * 部分非数值列举如下：
 * ["12e", "1a3.14", "1.2.3", "+-5", "12e+5.4"]
 */
/**
 * 方法一：正则
 * @param s
 * @returns
 */
function isNumber(s) {
    return /^[+-]?(\d+(\.\d*)?|(\.\d+))(e[+-]?\d+)?$/i.test(s.trim());
}
;
/**
 * 方法二： js版本状态机
 * @param {string} s
 * @return {boolean}
 */
var isNumber1 = function (s) {
    var _a;
    let states = [
        { " ": 0, "s": 1, "d": 2, ".": 4 },
        { 'd': 2, '.': 4 },
        { 'd': 2, '.': 3, 'e': 5, ' ': 8 },
        { 'd': 3, 'e': 5, ' ': 8 },
        { 'd': 3 },
        { 's': 6, 'd': 7 },
        { 'd': 7 },
        { 'd': 7, ' ': 8 },
        { ' ': 8 } // 8. end with 'blank'
    ];
    let p = 0;
    let t;
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if ('0' <= c && c <= '9')
            t = 'd';
        else if (c == '+' || c == '-')
            t = 's';
        else if (c == 'e' || c == 'E')
            t = 'e';
        else if (c == '.' || c == ' ')
            t = c;
        else
            t = '?';
        let nextStep = (_a = states[p]) === null || _a === void 0 ? void 0 : _a[t];
        if (nextStep == null || nextStep == undefined)
            return false;
        p = nextStep;
    }
    return p == 2 || p == 3 || p == 7 || p == 8;
};
/**
 * 方法三： 状态机2
 * @param s
 * @returns
 */
function isNumber2(s) {
    let State;
    (function (State) {
        State[State["STATE_INITIAL"] = 0] = "STATE_INITIAL";
        State[State["STATE_INT_SIGN"] = 1] = "STATE_INT_SIGN";
        State[State["STATE_INTEGER"] = 2] = "STATE_INTEGER";
        State[State["STATE_POINT"] = 3] = "STATE_POINT";
        State[State["STATE_POINT_WITHOUT_INT"] = 4] = "STATE_POINT_WITHOUT_INT";
        State[State["STATE_FRACTION"] = 5] = "STATE_FRACTION";
        State[State["STATE_EXP"] = 6] = "STATE_EXP";
        State[State["STATE_EXP_SIGN"] = 7] = "STATE_EXP_SIGN";
        State[State["STATE_EXP_NUMBER"] = 8] = "STATE_EXP_NUMBER";
        State[State["STATE_END"] = 9] = "STATE_END";
    })(State || (State = {}));
    let CharType;
    (function (CharType) {
        CharType[CharType["CHAR_NUMBER"] = 0] = "CHAR_NUMBER";
        CharType[CharType["CHAR_EXP"] = 1] = "CHAR_EXP";
        CharType[CharType["CHAR_POINT"] = 2] = "CHAR_POINT";
        CharType[CharType["CHAR_SIGN"] = 3] = "CHAR_SIGN";
        CharType[CharType["CHAR_SPACE"] = 4] = "CHAR_SPACE";
        CharType[CharType["CHAR_ILLEGAL"] = 5] = "CHAR_ILLEGAL";
    })(CharType || (CharType = {}));
    const toChartType = (t) => {
        switch (t) {
            case 'e':
            case 'E':
                return CharType.CHAR_EXP;
            case '.':
                return CharType.CHAR_POINT;
            case '-':
            case '+':
                return CharType.CHAR_SIGN;
            case ' ':
                return CharType.CHAR_SPACE;
            default:
                break;
        }
        if (/\d/.test(t)) {
            return CharType.CHAR_NUMBER;
        }
        return CharType.CHAR_ILLEGAL;
    };
    const stateTransfer = {
        [State.STATE_INITIAL]: {
            [CharType.CHAR_SPACE]: State.STATE_INITIAL,
            [CharType.CHAR_NUMBER]: State.STATE_INTEGER,
            [CharType.CHAR_POINT]: State.STATE_POINT_WITHOUT_INT,
            [CharType.CHAR_SIGN]: State.STATE_INT_SIGN
        },
        [State.STATE_INT_SIGN]: {
            [CharType.CHAR_NUMBER]: State.STATE_INTEGER,
            [CharType.CHAR_POINT]: State.STATE_POINT_WITHOUT_INT,
        },
        [State.STATE_INTEGER]: {
            [CharType.CHAR_NUMBER]: State.STATE_INTEGER,
            [CharType.CHAR_EXP]: State.STATE_EXP,
            [CharType.CHAR_POINT]: State.STATE_POINT,
            [CharType.CHAR_SPACE]: State.STATE_END,
        },
        [State.STATE_POINT]: {
            [CharType.CHAR_NUMBER]: State.STATE_FRACTION,
            [CharType.CHAR_EXP]: State.STATE_EXP,
            [CharType.CHAR_SPACE]: State.STATE_END
        },
        [State.STATE_POINT_WITHOUT_INT]: {
            [CharType.CHAR_NUMBER]: State.STATE_FRACTION
        },
        [State.STATE_FRACTION]: {
            [CharType.CHAR_NUMBER]: State.STATE_FRACTION,
            [CharType.CHAR_EXP]: State.STATE_EXP,
            [CharType.CHAR_SPACE]: State.STATE_END
        },
        [State.STATE_EXP]: {
            [CharType.CHAR_NUMBER]: State.STATE_EXP_NUMBER,
            [CharType.CHAR_SIGN]: State.STATE_EXP_SIGN
        },
        [State.STATE_EXP_SIGN]: {
            [CharType.CHAR_NUMBER]: State.STATE_EXP_NUMBER
        },
        [State.STATE_EXP_NUMBER]: {
            [CharType.CHAR_NUMBER]: State.STATE_EXP_NUMBER,
            [CharType.CHAR_SPACE]: State.STATE_END
        },
        [State.STATE_END]: {
            [CharType.CHAR_SPACE]: State.STATE_END
        }
    };
    let st = State.STATE_INITIAL;
    for (let i = 0; i < s.length; i++) {
        const charType = toChartType(s[i]);
        if (stateTransfer[st][charType] === undefined) {
            return false;
        }
        st = stateTransfer[st][charType];
    }
    const allowedEndState = [State.STATE_INTEGER, State.STATE_POINT, State.STATE_FRACTION, State.STATE_EXP_NUMBER, State.STATE_END];
    return allowedEndState.includes(st);
}
;
isNumber("+.2");
