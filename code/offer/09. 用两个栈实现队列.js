/**
 * 用两个栈实现一个队列。队列的声明如下，
 * 请实现它的两个函数 appendTail 和 deleteHead ，
 * 分别完成在队列尾部插入整数和在队列头部删除整数的功能。
 * (若队列中没有元素，deleteHead 操作返回 -1 )
 * 输入：["CQueue","appendTail","deleteHead","deleteHead"]
 * [[],[3],[],[]]
 * 输出：[null,null,3,-1]
 */
var CQueue = /** @class */ (function () {
    function CQueue() {
        this.stackA = [];
        this.stackB = [];
    }
    CQueue.prototype.appendTail = function (value) {
        this.stackA.push(value);
        console.log(this.stackA);
    };
    CQueue.prototype.deleteHead = function () {
        if (this.stackA.length === 0) {
            console.log(-1);
            return -1;
        }
        while (this.stackA.length > 0) {
            this.stackB.push(this.stackA.pop());
        }
        var res = this.stackB.pop();
        while (this.stackB.length > 0) {
            this.stackA.push(this.stackB.pop());
        }
        console.log(this.stackA);
        console.log(res);
        return res;
    };
    return CQueue;
}());
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
