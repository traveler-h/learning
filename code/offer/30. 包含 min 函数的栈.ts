/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，
 * 调用 min、push 及 pop 的时间复杂度都是 O(1)
 * 
 * 数据栈 A ： 栈 A 用于存储所有元素，保证入栈 push() 函数、出栈 pop() 函数、获取栈顶 top() 函数的正常逻辑。
 * 辅助栈 B ： 栈 B 中存储栈 A 中所有 非严格降序 元素的子序列，则栈 A 中的最小元素始终对应栈 B 的栈顶元素。此时， min() 函数只需返回栈 B 的栈顶元素即可。
 * 
 */
class MinStack {
    private stackA: Array<number>
    private stackB: Array<number>
    constructor() {
        this.stackA = []
        this.stackB = []
    }

    push(x: number): void {
        this.stackA.push(x)
        if (this.stackB.length > 0) {
            //若当前入栈元素小于或者等于栈B的栈顶元素，则当前元素push入栈B
            if (this.stackB[this.stackB.length - 1] >= x) {
                this.stackB.push(x)
            }
        } else {
            // 若栈B为空栈 当前入栈元素同时入栈B
            this.stackB.push(x)
        }
    }

    pop(): void {
        // 栈A 删除最后入栈的元素
        let popValue = this.stackA.pop()
        // 若出栈的元素与栈B的栈顶元素相同，则栈B的栈顶元素也出栈
        if (this.stackB[this.stackB.length - 1] === popValue) {
            this.stackB.pop()
        }
    }

    top(): number {
        // 返回栈A的栈顶元素
        return this.stackA[this.stackA.length - 1]
    }

    min(): number {
        // 返回栈B的栈顶元素
        return this.stackB[this.stackB.length - 1] || 0
    }
}

var obj = new MinStack()
// obj.push(5)
// obj.push(1)
// obj.push(-3)
// obj.push(-1)
obj.pop()
obj.pop()
obj.push(-4)
var param_3 = obj.top()
var param_4 = obj.min()
console.log(obj, param_3, param_4)