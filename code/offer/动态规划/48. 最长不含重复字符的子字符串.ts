/**
 * 请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */

function lengthOfLongestSubstring(s: string): number {
    const length = s.length
    if(length === 0) return 0
    let count = 0
    let max = 1
    let _s = ""
    for (let i: number = 0; i < length; i++) {
        if (_s.indexOf(s[i]) !== -1) {
            _s = _s.slice(_s.indexOf(s[i]) + 1)
            count = _s.length
        }
        count++
        _s += s[i]
        max = Math.max(max, count)
        console.log(max, _s)
    }
    console.log(max)
    return max
};
lengthOfLongestSubstring('abcabcabc')