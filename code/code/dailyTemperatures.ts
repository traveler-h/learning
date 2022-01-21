/**
 * 
 * 请根据每日 气温 列表 temperatures ，
 * 请计算在每一天需要等几天才会有更高的温度。
 * 如果气温在这之后都不会升高，请在该位置用 0 来代替。
 */
//数学
// function dailyTemperatures(temperatures: number[]): number[] {
//     let res: number[] = [];
//     if (temperatures.length === 1) {
//         return [0];
//     } else {
//         for (let i: number = 0; i < temperatures.length; i++) {
//             if (temperatures[i] < temperatures[i + 1]) {
//                 res.push(1);
//             } else {
//                 let cur = temperatures[i];
//                 let curI = i;
//                 while (true) {
//                     if (curI < temperatures.length) {
//                         if (cur < temperatures[curI + 1] ) {
//                             res.push(curI + 1 - i);
//                             break;
//                         } else {
//                             curI++;
//                         }
//                     } else {
//                         res.push(0)
//                         break;
//                     }

//                 }
//             }
//         }
//     }
//     res[res.length - 1] = 0;
//     console.log(res);
//     return res;
// }

// 栈
function dailyTemperatures(temperatures: number[]): number[] {
    const len = temperatures.length;
    const res: number[] = new Array(len).fill(0);
    const stack: number[] = [];
    for (let i = len - 1; i >= 0; i--) {
        while (
            stack.length &&
            temperatures[i] >= temperatures[stack[stack.length - 1]]
        ) {
            stack.pop();
        }
        stack.length && (res[i] = stack[stack.length - 1] - i);
        stack.push(i);
    }
    return res;
}
let temps: number[] = [73, 74, 75, 71, 69, 72, 76, 73];
dailyTemperatures(temps);
/**
 * return [1,1,4,2,1,1,0,0]
 */
