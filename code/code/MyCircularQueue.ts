/**
 * MyCircularQueue(k): 构造器，设置队列长度为 k 。
Front: 从队首获取元素。如果队列为空，返回 -1 。
Rear: 获取队尾元素。如果队列为空，返回 -1 。
enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
isEmpty(): 检查循环队列是否为空。
isFull(): 检查循环队列是否已满。
 */

class MyCircularQueue {
    private capacity: number;
    private head: number;
    private tail: number;
    private queue: number[];
    
    constructor(k: number) {
        this.capacity = k // 数组长度 --- 容器长度
        this.head = -1
        this.tail = -1
        this.queue = new Array(k) // 队列
    }

    // 添加队列
    enQueue(value: number): boolean {
        if (this.isFull()) {
            return false
        } else {
            if (this.isEmpty()) {
                this.tail++
                this.head++
                this.queue[this.head] = this.queue[this.tail] = value
            } else {
                if (this.queue.length - 1 === this.tail) {
                    this.tail = 0
                } else {
                    this.tail++
                }
                this.queue[this.tail] = value
            }
            return true
        }
    }

    // 删除队列元素
    deQueue(): boolean {
        if (this.isEmpty()) {
            return false
        } else {
            if (this.tail === this.head) {
                this.queue[this.head] = this.queue[this.tail] = -1
                this.tail = this.head = -1
            } else {
                this.queue[this.head] = -1
                if (this.head !== this.queue.length - 1) {
                    this.head++
                } else {
                    this.head = 0
                }
            }
            return true
        }
    }
    
    // 获取队首元素
    Front(): number {
        if (this.queue[this.head] === -1 || this.head === -1) {
            return -1
        } else {
            return this.queue[this.head]
        }
    }

    // 获取队尾元素
    Rear(): number {
        if (this.tail === -1 || this.queue[this.tail] === -1) {
            return -1
        } else {
            return this.queue[this,this.tail]
        }
    }

    isEmpty(): boolean {
        return this.head === this.tail && (this.head === -1 || this.tail === -1)
    }

    isFull(): boolean {
        return this.tail + 1 === this.head || this.head === 0 && this.tail === this.queue.length -1
    }
}
var obj = new MyCircularQueue(8)
obj.enQueue(3)
obj.enQueue(5)
obj.enQueue(9)
obj.enQueue(0)
// obj.enQueue(4)
// obj.deQueue()
console.log(obj)
/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */