var MinStack = /** @class */ (function () {
    function MinStack() {
        this.min = 0;
        this.stack = [];
    }
    MinStack.prototype.push = function (val) {
        this.stack.push(val);
        this.min = Math.min.apply(Math, this.stack);
    };
    MinStack.prototype.pop = function () {
        this.stack.pop();
        this.min = Math.min.apply(Math, this.stack);
    };
    MinStack.prototype.top = function () {
        return this.stack[this.stack.length - 1];
    };
    MinStack.prototype.getMin = function () {
        console.log(this.min);
        return this.min;
    };
    return MinStack;
}());
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var obj = new MinStack();
obj.push(4);
obj.push(2);
obj.push(7);
obj.push(5);
obj.push(1);
console.log(obj);
obj.getMin();
obj.top();
obj.pop();
console.log(obj);
