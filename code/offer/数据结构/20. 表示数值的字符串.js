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
function isNumber(s) {
    const _s = s.trim();
    console.log(_s.slice(0, 1));
    function isInteger(num) {
        console.log(typeof num === 'number' && num % 1 === 0);
        return typeof num === 'number' && num % 1 === 0;
    }
    if (!_s || (_s.includes('+') && _s.includes('-')) || (_s.includes('.') && (_s.includes('e') || _s.includes('E'))))
        return false;
    if (_s.includes('e') || _s.includes('E')) {
        const tempArr = _s.includes('e') ? _s.split("e") : _s.split('E');
        console.log(tempArr);
        for (let i = 0; i < tempArr.length; i++) {
            if (tempArr[i].includes(" ") || !tempArr[i] || !isInteger(+tempArr[i])) {
                console.log(false, 'o');
                return false;
            }
        }
    }
    else if (_s.includes(".")) {
        const tempArr = _s.split(".");
        if (tempArr.length > 2)
            return false;
        console.log(tempArr);
        if (!((isInteger(+tempArr[0])) && isInteger(+tempArr[1]) || (isInteger(+tempArr[0]) && !tempArr[1]) || (isInteger(+tempArr[1]) && !tempArr[0])) || tempArr[0].includes(" ") || tempArr[1].includes(" ") || (!tempArr[0] && !tempArr[1]) || tempArr[1].includes("+") || tempArr[1].includes('-')) {
            console.log(false);
            return false;
        }
    }
    else if (!isInteger(+_s)) {
        return false;
    }
    console.log(true);
    return true;
}
;
isNumber("+.2");
