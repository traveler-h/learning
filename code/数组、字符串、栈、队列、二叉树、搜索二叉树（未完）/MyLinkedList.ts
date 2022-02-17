/**
 * @description 设计单链表
 * @param [[],[1],[3],[1,2],[1],[1],[1]]
 * @function["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]
 * @returns [null,null,null,null,2,null,3]
 */
interface ListNode {
    val: number;
    next: ListNode | null;
}
function ListNode(val: number = 0, next: ListNode | null = null): ListNode {
    return {
        val,
        next,
    };
}
class MyLinkedList {
    head: ListNode | null;
    tail: ListNode | null;
    length: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    get(index: number): number {
        if (index > this.length || index < 0) return -1;
        let node: ListNode | null = this.head;
        for (let i: number = 0; i < index; i++) {
            if (node === null) break;
            node = node.next;
        }
        console.log(node ? node.val : -1)
        return node ? node.val : -1;
    }

    addAtHead(val: number): void {
        const oldHead = this.head;
        this.head = ListNode(val);
        this.head.next = oldHead;
        this.length++;
        if (oldHead == null) this.tail = this.head;
    }

    addAtTail(val: number): void {
        const tailNode: ListNode = ListNode(val);
        if (this.tail !== null) {
            this.tail.next = tailNode;
        }
        this.tail = tailNode;
        this.length++;
        if (this.length == 1) {
            this.head = this.tail;
        }
    }

    addAtIndex(index: number, val: number): void {
        if (index == 0) {
            this.addAtHead(val);
        } else if (index == this.length) {
            this.addAtTail(val);
        } else if (index > this.length) {
            return;
        } else {
            const addNode: ListNode = ListNode(val);
            let node = this.head;
            for (let i: number = 0; i < index - 1; i++) {
                if (node == null) return;
                node = node.next;
            }
            if (node == null) return;
            addNode.next = node.next;
            node.next = addNode;
            this.length++;
        }
    }

    deleteAtIndex(index: number): void {
        let node: ListNode | null = this.head;
        if (node == null) return;
        if (this.length == 1 ) {
            if (index < 1) this.head = this.tail = null;
            else return
        } else {
            if (index == 0) {
                this.head = node.next;
            } else {
                for (let i: number = 0; i < index - 1; i++) {
                    if (node == null) return;
                    node = node.next;
                    // this.length--;
                }
                if (node == null || node.next == null) {
                    return;
                } else if (index == this.length - 1) {
                    console.log(node)
                    node.next = null
                    this.tail = node;
                    this.length--
                } else {
                    node.next = node.next.next;
                    this.length--;
                }
            }
        }
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var obj = new MyLinkedList()
obj.addAtHead(24)
obj.get(1)
obj.addAtTail(18)
obj.deleteAtIndex(1)
obj.get(1)
// obj.addAtTail(30)
console.log(obj)

