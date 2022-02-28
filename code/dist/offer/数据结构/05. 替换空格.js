"use strict";
/**
 *
 * @param s
 * @returns
 * 输入：s = "We are happy."
 * 输出："We%20are%20happy."
 */
function replaceSpace(s) {
    let arr = s.split(" ");
    return arr.join("%20");
}
;
/**
 * 方法一：遍历字符
 * 时间复杂度：O(N)
 * 空间复杂度：O(N)
 */
function replaceSpace1(s) {
    let res = new Array();
    for (let i of s) {
        if (i === ' ') {
            res.push('%20');
        }
        else {
            res.push(i);
        }
    }
    console.log(res.join(''));
    return res.join('');
}
replaceSpace1('We are happy.');
