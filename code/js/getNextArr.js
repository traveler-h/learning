function generateNextArr(pattern) {
    /**
     *
     * abcdabd
     *
     * a          [a]                                                           0
     * ab         [a][b]                                                        0
     * abc        [a,ab] [b,bc]                                                 0
     * abcd       [a,ab,abc] [bcd,cd,d]                                         0
     * abcda      [a,ab,abc,abcd] [bcda,cda,da,a]                               1
     * abcdab     [a,ab,abc,abcd,abcda] [bcdab,cdab,dab,ab,b]                   2
     * abcdabd    [a,ab,abc,abcd,abcda, abcdab] [bcdabd,cdabd,dabd,abd,bd,d]    0
     *
     *
     * 建立Next表 [-1, 0, 0, 0, 0, 1, 2, 0]
     *
     */
    var i = 0;
    var j = -1; // 最长公共前后缀的长度 , 作为 next 的下标
    var next = [-1];
    while (i < pattern.length) {
        if (j === -1 || pattern[i] === pattern[j]) {
            i++;
            j++;
            next[i] = j;
        }
        else {
            j = next[j];
        }
    }
    return next;
}
function kmp(str, pattern) {
    var next = generateNextArr(pattern);
    var i = 0;
    var j = 0;
    while (i < str.length && j < pattern.length) {
        if (j === -1 || str[i] === pattern[j]) {
            i++;
            j++;
        }
        else {
            j = next[j];
        }
    }
    return j === pattern.length ? i - j : -1;
}
var result = kmp("bbc abcdab abcdabcdabde", "abcdabd");
console.log(result);
