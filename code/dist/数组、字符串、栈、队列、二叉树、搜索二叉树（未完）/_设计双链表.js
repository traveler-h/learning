"use strict";
function _ListNode(val = 0, pre = null, next = null) {
    return {
        val,
        pre,
        next,
    };
}
class _MyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    get(index) {
        if (index < 0 || index >= this.length)
            return -1;
        let node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        console.log(node.val);
        return node.val;
    }
    addAtHead(val) {
        let cur = _ListNode(val);
        if (this.head == null) {
            this.head = cur;
            this.tail = cur;
            this.length++;
        }
        else {
            this.head.pre = cur;
            cur.next = this.head;
            this.head = cur;
            this.length++;
        }
    }
    addAtTail(val) {
        if (this.head == null) {
            this.addAtHead(val);
        }
        else {
            let cur = _ListNode(val);
            let node = this.head;
            for (let i = 0; i < this.length - 1; i++) {
                node = node.next;
            }
            node.next = cur;
            cur.pre = node;
            this.tail = cur;
            this.length++;
        }
    }
    addAtIndex(index, val) {
        if (index == 0) {
            this.addAtHead(val);
        }
        else if (index == this.length) {
            this.addAtTail(val);
        }
        else if (index > this.length) {
            return;
        }
        else {
            let node = this.head;
            let cur = _ListNode(val);
            for (let i = 0; i < index; i++) {
                node = node.next;
            }
            cur.pre = node.pre;
            node.pre.next = cur;
            node.pre = cur;
            cur.next = node;
            this.length++;
        }
    }
    deleteAtIndex(index) {
        if (index < 0 || index >= this.length) {
            return;
        }
        let node = this.head;
        if (index == 0) {
            this.head = this.head.next;
            // this.head.pre = null;
        }
        else {
            for (let i = 0; i < index; i++) {
                node = node.next;
            }
            if (node.next) {
                node.pre.next = node.next;
                node.next.pre = node.pre;
            }
            else {
                this.tail = node.pre;
            }
        }
        this.length--;
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
_obj.addAtHead(2);
_obj.deleteAtIndex(1);
_obj.addAtHead(2);
_obj.addAtHead(7);
_obj.addAtHead(3);
_obj.addAtHead(2);
_obj.addAtHead(5);
_obj.addAtTail(5);
_obj.get(0);
_obj.get(1);
_obj.get(2);
_obj.get(3);
_obj.get(4);
_obj.get(5);
_obj.deleteAtIndex(6);
_obj.deleteAtIndex(4);
// console.log(_obj, _obj.length);
