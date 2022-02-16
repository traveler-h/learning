/**
 *
 * @param s
 * @param n
 * @returns
 * 循环字符 时间复杂度O(N)、空间复杂度O(N)
 */
function reverseLeftWords(s, n) {
    var leftStr = '';
    var oldStr = '';
    for (var i = 0; i < s.length; i++) {
        if (i < n) {
            leftStr += s[i];
        }
        else {
            oldStr += s[i];
        }
    }
    var res = oldStr + leftStr;
    return res;
}
;
/**
 *
 * @param s
 * @param n
 * @returns
 * 切片： 时间复杂度O(N)、空间复杂度O(N)
 */
function reverseLeftWords1(s, n) {
    return s.substring(n, s.length) + s.substring(0, n);
}
;
var s = 'lrloseumgh';
reverseLeftWords(s, 6);
reverseLeftWords1(s, 2);
