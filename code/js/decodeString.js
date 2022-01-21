function decodeString(s) {
    let numStack = str
        .replace(/[a-zA-Z|\]]/g, "")
        .split("[")
        .filter((item) => item)
        .map((item) => Number(item));
    let strStack = new Array();
    for (let i of s) {
        if (isNaN(Number(i))) {
            if (i !== "]") {
                strStack.push(i);
            }
            else {
                console.log(strStack, "strStack00");
                // let num = numStack.shift();
                // let temp: string = strStack.pop()
                // let str: string = temp
                // let res: string = ''
                // console.log(strStack,'strStack')
                //   while (strStack.length > 0) {
                //     temp = strStack.pop();
                //     console.log(temp, 'temp')
                //     if(temp === '[') break
                //     str =  temp + str
                // }
                // for (let j = 0; j < num; j++) {
                //     res += str;
                // }
                dec(strStack, numStack);
                //   }
                // strStack.push(res);
            }
        }
    }
    console.log(strStack);
    return strStack[0];
}
let str = "3[a]2[bc]";
function dec(strStack, numStack) {
    let num = numStack.length > 0 && numStack.shift();
    let temp = strStack.pop();
    let str = temp;
    let res = "";
    console.log(strStack, "strStack");
    while (strStack.length > 0) {
        temp = strStack.pop();
        console.log(temp, "temp");
        if (temp === "[")
            break;
        str = temp + str;
    }
    for (let j = 0; j < num; j++) {
        res += str;
    }
    strStack.push(res);
    if (strStack.length > 0) {
        dec(strStack, num);
    }
    return strStack;
}
// sppsppsppsppsppsppsppsppsppspp
// console.log(str.replace(/[a-zA-Z|\]]/g, '').split('[').filter(item => item).map(item => Number(item)))
decodeString(str);
/**
 * let str = 5[a3[c]]
 * res: acccacccacccacccaccc
 * let str = 10[a2[d]]
 * res：addaddaddaddaddaddaddaddaddadd
 */
