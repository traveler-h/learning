"use strict";
/**
 *
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。
 * 注意 k 保证为正整数。
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 */
function decodeString(s) {
    //当前字符串的长度
    let len = s.length;
    //在这一层级的时候的字符串，这一层的结果都往这里拼接
    let temp = '';
    //左边括号的个数，初始肯定为0，碰上加1，碰上右括号减去1
    let tempLevel = 0;
    //记录这一层级里 最后需要把下一层级返回的字符串重复多少遍
    let repeatNum = 1;
    for (let i = 0; i < len; i++) {
        if (s[i] == '[') {
            let start = i;
            tempLevel++;
            while (start < len) {
                start++;
                if (s[start] == '[') {
                    tempLevel++;
                }
                else if (s[start] == ']') {
                    tempLevel--;
                    if (tempLevel == 0) {
                        //一个完整的合法的字符串已经出现了 所以break
                        break;
                    }
                }
            }
            //讲合法字符串去掉头尾的括号后作为参数递归调用
            let str = decodeString(s.slice(i + 1, start));
            i = start;
            while (repeatNum > 0) {
                temp += str;
                repeatNum--;
            }
        }
        else if (/\d/.test(s[i])) {
            let start = i;
            let temp = '';
            //碰上左括号前必有数字，我们在这里记录需要重复的此属，然后最后把左右括号中递归得来的字符串
            //重复添加N遍
            while (start < len) {
                if (/\d/.test(s[start])) {
                    temp += s[start];
                }
                else {
                    break;
                }
                start++;
            }
            i = start - 1;
            repeatNum = +temp;
        }
        else {
            //什么情况都没有，碰上普通的字符串就直接将其加入temp中
            temp += s[i];
        }
    }
    return temp;
}
;
