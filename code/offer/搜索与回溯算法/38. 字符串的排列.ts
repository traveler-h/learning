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

    const temp: string[] = []
    
    const dfs = (str: string) => {
        if(temp.length === length) {
            result.push(temp.join(''))
            return
        }

        for(let i = 0; i < str.length; i++) {
            temp.push(str[i])
            
        }

    }
    return result
};
const s = "abc"
permutation(s)

export { }
