/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * 1.左括号必须用相同类型的右括号闭合
 * 2.左括号必须以正确的顺序闭合。
 */
let map: any = {
  "{": "}",
  "(": ")",
  "[": "]",
};

function isValid(s: string): boolean {
  let stack: string[] = [];
//   let top: string | undefined;

  for (let char of s) {
    //   let value;
    // if ((value = map[char])) {
    //   stack.push(value);
    // } else {
    //   top = stack.pop();
    //   if (top !== char) {
    //     return false;
    //   }
    // }
      if (char === '{') {
          stack.push('}')
      } else if (char === '(') {
          stack.push(')')
      } else if (char === '[') {
          stack.push(']')
      } else {
          let top = stack.pop()
          if (top !== char) {
              console.log(false)
              return false
          }
      }
    }
    console.log('p!',!stack.length)
    return !stack.length
}
isValid('(){(}]')
