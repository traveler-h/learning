/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，
 * 调用 min、push 及 pop 的时间复杂度都是 O(1)
 *
 */
var MinStack = /** @class */ (function () {
    function MinStack() {
        this.stackA = [];
        this.stackB = [];
    }
    MinStack.prototype.push = function (x) {
        this.stackA.push(x);
        if (this.stackB.length > 0) {
            if (this.stackB[this.stackB.length - 1] > x) {
                // this.stackB.pop()
                this.stackB.push(x);
            }
        }
        else {
            this.stackB.push(x);
        }
    };
    MinStack.prototype.pop = function () {
        var popValue = this.stackA.pop();
        if (this.stackB[this.stackB.length - 1] === popValue) {
            this.stackB.pop();
        }
    };
    MinStack.prototype.top = function () {
        return this.stackA[this.stackA.length - 1];
    };
    MinStack.prototype.min = function () {
        return this.stackB[this.stackB.length - 1];
    };
    return MinStack;
}());
var obj = new MinStack();
// obj.push(5)
// obj.push(1)
// obj.push(-3)
// obj.push(-1)
obj.pop();
obj.pop();
obj.push(-4);
var param_3 = obj.top();
var param_4 = obj.min();
console.log(obj, param_3, param_4);
