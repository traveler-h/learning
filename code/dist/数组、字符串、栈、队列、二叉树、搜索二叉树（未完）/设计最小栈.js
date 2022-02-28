"use strict";
/**
 * 设计最小栈
 */
class MinStack {
    constructor() {
        this.min = 0;
        this.stack = [];
    }
    push(val) {
        this.stack.push(val);
        this.min = Math.min(...this.stack);
    }
    pop() {
        this.stack.pop();
        this.min = Math.min(...this.stack);
    }
    top() {
        return this.stack[this.stack.length - 1];
    }
    getMin() {
        console.log(this.min);
        return this.min;
    }
}
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
