/**
 *
 * 逆波兰表达式是一种后缀表达式，所谓后缀就是指算符写在后面。
 * 平常使用的算式则是一种中缀表达式，如 ( 1 + 2 ) * ( 3 + 4 ) 。
 * 该算式的逆波兰表达式写法为 ( ( 1 2 + ) ( 3 4 + ) * ) 。
 * 逆波兰表达式主要有以下两个优点：
 * 去掉括号后表达式无歧义，上式即便写成 1 2 + 3 4 + * 也可以依据次序计算出正确结果。
 * 适合用栈操作运算：遇到数字则入栈；遇到算符则取出栈顶两个数字进行计算，并将结果压入栈中。
 */
function evalRPN(tokens) {
    var stack = [];
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var item = tokens_1[_i];
        if (!isNaN(Number(item))) {
            stack.push(Number(item));
        }
        else {
            var first = stack.pop();
            var second = stack.pop();
            var res = void 0;
            if (item === '+') {
                res = second + first;
                console.log('+', first, second, res);
            }
            else if (item === '-') {
                res = second - first;
                console.log('-', first, second, res);
            }
            else if (item === '*') {
                res = second * first;
                console.log('*', first, second, res);
            }
            else {
                res = parseInt((second / first) + '');
                console.log('/', first, second, res);
            }
            stack.push(res);
            console.log(stack);
        }
    }
    console.log(stack);
    return 1;
}
;
var tokens = ["0", "6", "/"];
// ["10", "6", "12", "-11", "*", "/", "*", "17", "+", "5", "+"]
// ["10", "6", "-132", "/", "*", "17", "+", "5", "+"]
evalRPN(tokens);
/**
 * 输入：tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
 * 输出：22
 */
