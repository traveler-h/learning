/**
 * 写一个函数 StrToInt，实现把字符串转换成整数这个功能。不能使用 atoi 或者其他类似的库函数。
 * 首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。
 * 当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，
 * 作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。
 * 该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。
 * 注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，
 * 则你的函数不需要进行转换。
 * 在任何情况下，若函数不能进行有效的转换时，请返回 0。
 * 说明：
 * 假设我们的环境只能存储 32 位大小的有符号整数，
 * 那么其数值范围为 [−231,  231 − 1]。如果数值超过这个范围，
 * 请返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。
 */
/**
 * 方法一：parseInt
 * 判断上下界
 * @param str
 * @returns
 */
function strToInt(str) {
    var res = parseInt(str);
    if (isNaN(res)) {
        return 0;
    }
    else {
        res = res < Math.pow(-2, 31) ? Math.pow(-2, 31) : res;
        res = res > Math.pow(2, 31) - 1 ? Math.pow(2, 31) - 1 : res;
    }
}
strToInt('  +4 0 ');
/**
 * 使用trim去掉空格
 * 时间复杂度O(N)
 * 空间复杂度O(N)
 */
function strToInt1(str) {
    var c = str.trim();
    if (c.length == 0)
        return 0;
    var res = 0, bndry = Number.MAX_VALUE / 10;
    var i = 1, sign = 1;
    if (c[0] == '-')
        sign = -1;
    else if (c[0] != '+')
        i = 0;
    for (var j = i; j < c.length; j++) {
        if (c[j] < '0' || c[j] > '9')
            break;
        if (res > bndry || res == bndry && c[j] > '7')
            return sign == 1 ? Number.MAX_VALUE : Number.MIN_VALUE;
        res = res * 10 + (+c[j] - 0);
    }
    console.log(res, sign * res);
    return sign * res;
}
strToInt1('  -4 0 ');
