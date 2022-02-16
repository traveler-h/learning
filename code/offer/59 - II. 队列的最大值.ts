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

class MaxQueue {
    public queue: number[]
    constructor() {
        this.queue = []
    }

    max_value(): number {
        if (this.queue.length === 0) return -1
    }

    push_back(value: number): void {

    }

    pop_front(): number {
        if (this.queue.length === 0) return -1
    }
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */

