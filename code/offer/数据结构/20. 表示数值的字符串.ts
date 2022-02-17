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
function isNumber(s: string): boolean {
    return /^[+-]?(\d+(\.\d*)?|(\.\d+))(e[+-]?\d+)?$/i.test(s.trim())
};
/**
 * 方法二： js版本状态机
 * @param {string} s
 * @return {boolean}
 */
var isNumber1 = function (s: string): boolean {

    let states = [
        { " ": 0, "s": 1, "d": 2, ".": 4 },        // 0. start with 'blank'
        { 'd': 2, '.': 4 },                      // 1. 'sign' before 'e'
        { 'd': 2, '.': 3, 'e': 5, ' ': 8 }, // 2. 'digit' before 'dot'
        { 'd': 3, 'e': 5, ' ': 8 },         // 3. 'digit' after 'dot'
        { 'd': 3 },                         // 4. 'digit' after 'dot' (‘blank’ before 'dot')
        { 's': 6, 'd': 7 },                 // 5. 'e'
        { 'd': 7 },                         // 6. 'sign' after 'e'
        { 'd': 7, ' ': 8 },                 // 7. 'digit' after 'e'
        { ' ': 8 }                          // 8. end with 'blank'
    ]
    let p = 0
    let t: string
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i)
        if ('0' <= c && c <= '9') t = 'd';
        else if (c == '+' || c == '-') t = 's';
        else if (c == 'e' || c == 'E') t = 'e';
        else if (c == '.' || c == ' ') t = c;
        else t = '?';
        let nextStep = states[p]?.[t]
        if (nextStep == null || nextStep == undefined) return false
        p = nextStep
    }

    return p == 2 || p == 3 || p == 7 || p == 8
};


/**
 * 方法三： 状态机2
 * @param s 
 * @returns 
 */
function isNumber2(s: string): boolean {
    enum State {
        STATE_INITIAL,
        STATE_INT_SIGN,
        STATE_INTEGER,
        STATE_POINT,
        STATE_POINT_WITHOUT_INT,
        STATE_FRACTION,
        STATE_EXP,
        STATE_EXP_SIGN,
        STATE_EXP_NUMBER,
        STATE_END
    }

    enum CharType {
        CHAR_NUMBER,
        CHAR_EXP,
        CHAR_POINT,
        CHAR_SIGN,
        CHAR_SPACE,
        CHAR_ILLEGAL
    }

    const toChartType = (t: string): CharType => {
        switch (t) {
            case 'e':
            case 'E':
                return CharType.CHAR_EXP
            case '.':
                return CharType.CHAR_POINT
            case '-':
            case '+':
                return CharType.CHAR_SIGN
            case ' ':
                return CharType.CHAR_SPACE
            default:
                break;
        }
        if (/\d/.test(t)) {
            return CharType.CHAR_NUMBER
        }
        return CharType.CHAR_ILLEGAL
    }

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
    }

    let st = State.STATE_INITIAL

    for (let i = 0; i < s.length; i++) {
        const charType = toChartType(s[i])

        if (stateTransfer[st][charType] === undefined) {
            return false
        }
        st = stateTransfer[st][charType]
    }

    const allowedEndState = [State.STATE_INTEGER, State.STATE_POINT, State.STATE_FRACTION, State.STATE_EXP_NUMBER, State.STATE_END]
    return allowedEndState.includes(st)
};


isNumber("+.2")