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
var MaxQueue = /** @class */ (function () {
    function MaxQueue() {
        this.queue = [];
    }
    MaxQueue.prototype.max_value = function () {
        if (this.queue.length === 0) {
            console.log(-1);
            return -1;
        }
        var max = this.queue[0];
        for (var i = 1; i < this.queue.length; i++) {
            if (max < this.queue[i]) {
                max = this.queue[i];
            }
        }
        return max;
    };
    MaxQueue.prototype.push_back = function (value) {
        this.queue.push(value);
    };
    MaxQueue.prototype.pop_front = function () {
        return this.queue.length ? this.queue.shift() : -1;
    };
    return MaxQueue;
}());
// Your MaxQueue object will be instantiated and called as such:
// var obj = new MaxQueue()
// obj.max_value()
// obj.push_back(1)
// obj.push_back(2)
// obj.push_back(0)
// obj.pop_front()
// console.log(obj)
// obj.max_value()
var MaxQueue_1 = /** @class */ (function () {
    function MaxQueue_1() {
        this.queue = [];
        this.dequeue = [];
    }
    MaxQueue_1.prototype.max_value = function () {
        console.log(this.dequeue.length ? this.dequeue[0] : -1);
        return this.dequeue.length ? this.dequeue[0] : -1;
    };
    MaxQueue_1.prototype.push_back = function (value) {
        this.queue.push(value);
        if (this.dequeue.length === 0) {
            this.dequeue.push(value);
        }
        else {
            this.dequeue[0] < value && this.dequeue.pop() && this.dequeue.push(value);
        }
    };
    MaxQueue_1.prototype.pop_front = function () {
        var res = this.queue.shift();
        if (res === this.dequeue[0])
            this.dequeue.pop();
        console.log(res);
        return res ? res : -1;
    };
    return MaxQueue_1;
}());
// Your MaxQueue object will be instantiated and called as such:
var obj_1 = new MaxQueue_1();
obj_1.max_value();
obj_1.pop_front();
obj_1.max_value();
obj_1.push_back(46);
obj_1.max_value();
obj_1.pop_front();
console.log(obj_1);
