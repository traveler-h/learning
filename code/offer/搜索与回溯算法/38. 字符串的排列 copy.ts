/**
 * 输入一个字符串，打印出该字符串中字符的所有排列。
 * 可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
 * 示例:
 * 输入：s = "abc"
 * 输出：["abc","acb","bac","bca","cab","cba"]
 */

//----------延后
function permutation(s: string): string[] {
    const result: string[] = []
    const length: number = s.length

    const set = new Set()
    let tmp: string[] = []
    const dfs = (array: string) => {
        if(tmp.length === length) {
            result.push(tmp.join(''))
            return
        }
        for(let i = 0; i < array.length; i++) {
            tmp.push(array[i])
            if(!set.has(tmp.join(''))){
                dfs(array.slice(0, i).concat(array.slice(i + 1)))
                set.add(tmp.join(''))
            }
            tmp.pop()
        }
    }
    dfs(s)
    return result
};
const s = "abc"
permutation(s)

export { }
