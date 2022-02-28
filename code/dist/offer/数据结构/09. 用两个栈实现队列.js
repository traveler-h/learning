"use strict";
/**
 * 用两个栈实现一个队列。队列的声明如下，
 * 请实现它的两个函数 appendTail 和 deleteHead ，
 * 分别完成在队列尾部插入整数和在队列头部删除整数的功能。
 * (若队列中没有元素，deleteHead 操作返回 -1 )
 * 输入：["CQueue","appendTail","deleteHead","deleteHead"]
 * [[],[3],[],[]]
 * 输出：[null,null,3,-1]
 *
 * 使用一个栈A存放元素在队尾插入元素，另一个栈B做临时栈，
 * 删除队首元素时，栈A所有出栈，进入栈B，删除栈B最后一个元素，将剩余元素出栈，重新进入栈A
 * 空间复杂度O(N)
 * appendTail的时间复杂度O(1)
 * deleteHead的时间复杂度O(N)
 */
class CQueue {
    constructor() {
        this.stackA = [];
        this.stackB = [];
    }
    appendTail(value) {
        this.stackA.push(value);
    }
    deleteHead() {
        if (this.stackA.length === 0)
            return -1;
        while (this.stackA.length > 0) {
            this.stackB.push(this.stackA.pop());
        }
        let res = this.stackB.pop();
        while (this.stackB.length > 0) {
            this.stackA.push(this.stackB.pop());
        }
        return res;
    }
}
var obj = new CQueue();
obj.appendTail(2);
obj.appendTail(3);
obj.deleteHead();
obj.deleteHead();
obj.deleteHead();
obj.appendTail(8);
obj.appendTail(6);
obj.appendTail(0);
obj.deleteHead();
