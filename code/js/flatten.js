var ListNode = /** @class */ (function () {
    function ListNode(val, prev, next, child) {
        this.val = val === undefined ? 0 : val;
        this.prev = prev === undefined ? null : prev;
        this.next = next === undefined ? null : next;
        this.child = child === undefined ? null : child;
    }
    return ListNode;
}());
function flatten(head) {
    var node = head;
    console.log(node);
    if (!node)
        return node;
    while (node) {
        if (!node.child) {
            node = node.next;
        }
        else {
            var temp = node.next;
            node.next = node.child;
            flatten(node.next);
        }
        console.log(node);
    }
}
var head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: {
                        val: 6,
                        next: null,
                        child: null
                    },
                    child: null
                },
                child: null
            },
            child: {
                val: 7,
                next: {
                    val: 8,
                    next: {
                        val: 9,
                        next: {
                            val: 10,
                            next: null,
                            child: null
                        },
                        child: null
                    },
                    child: {
                        val: 11,
                        next: {
                            val: 12,
                            next: null,
                            child: null
                        },
                        child: null
                    }
                },
                child: null
            }
        },
        child: null
    }, child: null
};
