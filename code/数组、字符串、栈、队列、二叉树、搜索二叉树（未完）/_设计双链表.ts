/**
 * @description 设计双链表
 * @param [[],[1],[3],[1,2],[1],[1],[1]]
 * @function["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]
 * @returns [null,null,null,null,2,null,3]
 */
interface _ListNode {
    val: number;
    next: _ListNode | null;
    pre: _ListNode | null;
}
function _ListNode(
    val: number = 0,
    pre: _ListNode | null = null,
    next: _ListNode | null = null
): _ListNode {
    return {
        val,
        pre,
        next,
    };
}
class _MyLinkedList {
    head: _ListNode | null;
    tail: _ListNode | null;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    get(index: number): number {
        if (index < 0 || index >= this.length) return -1
        let node: _ListNode = this.head;
        for (let i: number = 0; i < index; i++) {
            node = node.next;
        }
        console.log(node.val);
        return node.val;
    }

    addAtHead(val: number): void {
        let cur: _ListNode = _ListNode(val);
        if (this.head == null) {
            this.head = cur;
            this.tail = cur;
            this.length++;
        } else {
            this.head.pre = cur;
            cur.next = this.head;
            this.head = cur;
            this.length++;
        }
    }

    addAtTail(val: number): void {
        if (this.head == null) {
            this.addAtHead(val);
        } else {
            let cur: _ListNode = _ListNode(val);
            let node: _ListNode = this.head;
            for (let i: number = 0; i < this.length - 1; i++) {
                node = node.next;
            }
            node.next = cur;
            cur.pre = node;
            this.tail = cur;
            this.length++;
        }
    }

    addAtIndex(index: number, val: number): void {
        if (index == 0 ) {
            this.addAtHead(val);
        } else if (index == this.length) {
            this.addAtTail(val);
        } else if(index > this.length) {
            return
        } else {
            let node: _ListNode = this.head;
            let cur: _ListNode = _ListNode(val);
            for (let i: number = 0; i < index; i++) {
                node = node.next;
            }
            cur.pre = node.pre;
            node.pre.next = cur;
            node.pre = cur;
            cur.next = node;
            this.length++;
        }
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.length) {
            return;
        }
        let node: _ListNode = this.head;
        if (index == 0) {
            this.head = this.head.next;
            // this.head.pre = null;
        } else {
            for (let i: number = 0; i < index; i++) {
                node = node.next;
            }
            if (node.next) {
                node.pre.next = node.next;
                node.next.pre = node.pre;
            } else {
                this.tail = node.pre
            }
        }
        this.length--
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

var _obj = new _MyLinkedList();
_obj.addAtHead(2)
_obj.deleteAtIndex(1)
_obj.addAtHead(2)
_obj.addAtHead(7)
_obj.addAtHead(3)
_obj.addAtHead(2)
_obj.addAtHead(5)
_obj.addAtTail(5)
_obj.get(0)
_obj.get(1)
_obj.get(2)
_obj.get(3)
_obj.get(4)
_obj.get(5)
_obj.deleteAtIndex(6)
_obj.deleteAtIndex(4)
// console.log(_obj, _obj.length);
