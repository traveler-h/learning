function ListNode(val, next) {
    if (val === void 0) { val = 0; }
    if (next === void 0) { next = null; }
    return {
        val: val,
        next: next
    };
}
var MyLinkedList = /** @class */ (function () {
    function MyLinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    MyLinkedList.prototype.get = function (index) {
        if (index > this.length || index < 0)
            return -1;
        var node = this.head;
        for (var i = 0; i < index; i++) {
            if (node === null)
                break;
            node = node.next;
        }
        console.log(node ? node.val : -1);
        return node ? node.val : -1;
    };
    MyLinkedList.prototype.addAtHead = function (val) {
        var oldHead = this.head;
        this.head = ListNode(val);
        this.head.next = oldHead;
        this.length++;
        if (oldHead == null)
            this.tail = this.head;
    };
    MyLinkedList.prototype.addAtTail = function (val) {
        var tailNode = ListNode(val);
        if (this.tail !== null) {
            this.tail.next = tailNode;
        }
        this.tail = tailNode;
        this.length++;
        if (this.length == 1) {
            this.head = this.tail;
        }
    };
    MyLinkedList.prototype.addAtIndex = function (index, val) {
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
            var addNode = ListNode(val);
            var node = this.head;
            for (var i = 0; i < index - 1; i++) {
                if (node == null)
                    return;
                node = node.next;
            }
            if (node == null)
                return;
            addNode.next = node.next;
            node.next = addNode;
            this.length++;
        }
    };
    MyLinkedList.prototype.deleteAtIndex = function (index) {
        var node = this.head;
        if (node == null)
            return;
        if (this.length == 1) {
            if (index < 1)
                this.head = this.tail = null;
            else
                return;
        }
        else {
            if (index == 0) {
                this.head = node.next;
            }
            else {
                for (var i = 0; i < index - 1; i++) {
                    if (node == null)
                        return;
                    node = node.next;
                    // this.length--;
                }
                if (node == null || node.next == null) {
                    return;
                }
                else if (index == this.length - 1) {
                    console.log(node);
                    node.next = null;
                    this.tail = node;
                    this.length--;
                }
                else {
                    node.next = node.next.next;
                    this.length--;
                }
            }
        }
    };
    return MyLinkedList;
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
var obj = new MyLinkedList();
obj.addAtHead(24);
obj.get(1);
obj.addAtTail(18);
obj.deleteAtIndex(1);
obj.get(1);
// obj.addAtTail(30)
console.log(obj);
