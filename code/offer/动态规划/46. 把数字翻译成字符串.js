/**
 * 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。
 * 一个数字可能有多个翻译。
 * 请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法
 *
 * 输入: 12258
 * 输出: 5
 * 解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
 */
const num = 12258;
function translateNum(num) {
    const _num = String(num);
    if (_num.length === 0)
        return 0;
    let a = 1, b = 1;
    for (let i = 1; i < _num.length; i++) {
        let pre = _num[i - 1] + _num[i];
        console.log(pre);
        let c = pre <= '25' && pre >= '10' ? a + b : a;
        b = a;
        a = c;
        console.log("a: ", a, "b:", b, "c:", c);
    }
    console.log(a);
    return a;
}
;
translateNum(num);
