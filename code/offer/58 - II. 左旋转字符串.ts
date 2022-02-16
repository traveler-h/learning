// 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。
// 请定义一个函数实现字符串左旋转操作的功能。
// 比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
/**
 * 
 * @param s 
 * @param n 
 * @returns 
 * 循环字符 时间复杂度O(N)、空间复杂度O(N)
 */
function reverseLeftWords(s: string, n: number): string {
    let leftStr: string = ''
    let oldStr: string = ''
    for (let i: number = 0; i < s.length; i++) {
        if (i < n) {
            leftStr += s[i]
        } else {
            oldStr += s[i]
        }
    }
    const res = oldStr + leftStr
    return res
};

/**
 * 
 * @param s 
 * @param n 
 * @returns 
 * 切片： 时间复杂度O(N)、空间复杂度O(N)
 */
function reverseLeftWords1(s: string, n: number): string {
    return s.substring(n, s.length) + s.substring(0, n)
};

const s = 'lrloseumgh'
reverseLeftWords(s, 6)
reverseLeftWords1(s, 2)