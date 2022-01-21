function _ListNode(val, pre, next) {
    if (val === void 0) { val = 0; }
    if (pre === void 0) { pre = null; }
    if (next === void 0) { next = null; }
    return {
        val: val,
        pre: pre,
        next: next
    };
}
var _MyLinkedList = /** @class */ (function () {
    function _MyLinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    _MyLinkedList.prototype.get = function (index) {
        if (index < 0 || index >= this.length) {
            console.log(-1);
            return -1;
        }
        var node = this.head;
        for (var i = 0; i < index; i++) {
            node = node.next;
        }
        console.log(node.val);
        return node.val;
    };
    _MyLinkedList.prototype.addAtHead = function (val) {
        var cur = _ListNode(val);
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
    };
    _MyLinkedList.prototype.addAtTail = function (val) {
        if (this.head == null) {
            this.addAtHead(val);
        }
        else {
            var cur = _ListNode(val);
            var node = this.head;
            for (var i = 0; i < this.length - 1; i++) {
                node = node.next;
            }
            node.next = cur;
            cur.pre = node;
            this.tail = cur;
            this.length++;
        }
    };
    _MyLinkedList.prototype.addAtIndex = function (index, val) {
        if (index == 0 || this.head == null) {
            this.addAtHead(val);
        }
        else if (index == this.length) {
            this.addAtTail(val);
        }
        else {
            var node = this.head;
            var cur = _ListNode(val);
            for (var i = 0; i < index; i++) {
                node = node.next;
            }
            cur.pre = node.pre;
            node.pre.next = cur;
            node.pre = cur;
            cur.next = node;
            this.length++;
            // console.log(this.head.next)
        }
    };
    _MyLinkedList.prototype.deleteAtIndex = function (index) {
        if (index < 0 || index >= this.length) {
            console.log("index无效");
            return;
        }
        var node = this.head;
        if (index == 0) {
            this.head = this.head.next;
            this.head.pre = null;
            console.log(this.head);
        }
        else {
            for (var i = 0; i < index; i++) {
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
    };
    return _MyLinkedList;
}());
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
