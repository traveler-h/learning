"use strict";
exports.__esModule = true;
/**
 * 输入一个字符串，打印出该字符串中字符的所有排列。
 * 可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
 * 示例:
 * 输入：s = "abc"
 * 输出：["abc","acb","bac","bca","cab","cba"]
 */
function permutation(s) {
    var sArr = s.split('');
    console.log(sArr);
    // for (let i: number = 0; i < s.length; i++) {
    // }
    var res = [];
    while (sArr.length > 0) {
        var cur = sArr.shift();
        for (var i = 0; i < sArr.length; i++) {
            console.log(sArr[i]);
        }
        console.log('cur: ', cur);
        // console.log(cur, res)
    }
    return res;
}
;
var s = "aabc";
permutation(s);
