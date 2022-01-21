let map = {
    "{": "}",
    "(": ")",
    "[": "]",
};
function isValid(s) {
    let stack = [];
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
            stack.push('}');
        }
        else if (char === '(') {
            stack.push(')');
        }
        else if (char === '[') {
            stack.push(']');
        }
        else {
            let top = stack.pop();
            if (top !== char) {
                console.log(false);
                return false;
            }
        }
    }
    console.log('p!', !stack.length);
    return !stack.length;
}
isValid('(){(}]');
