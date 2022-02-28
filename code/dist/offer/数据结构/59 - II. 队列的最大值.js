"use strict";
/**
 * 请定义一个队列并实现函数 max_value 得到队列里的最大值，
 * 要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。
 * 若队列为空，pop_front 和 max_value 需要返回 -1
 *
 * 输入: ["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
 * [[],[1],[2],[],[],[]]
 *
 * 输出: [null,null,null,2,1,2]
 */
/**
 * 时间复杂度不符
 */
class MaxQueue {
    constructor() {
        this.queue = [];
    }
    max_value() {
        if (this.queue.length === 0) {
            console.log(-1);
            return -1;
        }
        let max = this.queue[0];
        for (let i = 1; i < this.queue.length; i++) {
            if (max < this.queue[i]) {
                max = this.queue[i];
            }
        }
        return max;
    }
    push_back(value) {
        this.queue.push(value);
    }
    pop_front() {
        return this.queue.length ? this.queue.shift() : -1;
    }
}
// Your MaxQueue object will be instantiated and called as such:
var obj = new MaxQueue();
obj.max_value();
obj.push_back(1);
obj.push_back(2);
obj.push_back(0);
obj.pop_front();
console.log(obj);
obj.max_value();
/**
 * 实现方式： 空间换时间
 */
class MaxQueue_1 {
    constructor() {
        this.queue = [];
        this.dequeue = [];
    }
    max_value() {
        return this.dequeue.length ? this.dequeue[0] : -1;
    }
    push_back(value) {
        this.queue.push(value);
        if (this.dequeue.length === 0) {
            this.dequeue.push(value);
        }
        else {
            this.dequeue[0] < value && this.dequeue.pop() && this.dequeue.push(value);
        }
    }
    pop_front() {
        const res = this.queue.shift();
        if (res === this.dequeue[0])
            this.dequeue.pop();
        return res ? res : -1;
    }
}
// Your MaxQueue object will be instantiated and called as such:
var obj_1 = new MaxQueue_1();
obj_1.max_value();
obj_1.pop_front();
obj_1.max_value();
obj_1.push_back(46);
obj_1.max_value();
obj_1.pop_front();
console.log(obj_1);
