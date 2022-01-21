function oddEvenList(head) {
    if (head == null || head.next == null || head.next.next == null)
        return head;
    var node = head;
    var temp = head.next;
    var oNode = node;
    var tNode = temp;
    while (oNode && oNode.next && oNode.next.next) {
        oNode.next = oNode.next.next;
        oNode = oNode.next;
        tNode.next = tNode.next.next;
        tNode = tNode.next;
    }
    oNode.next = temp;
    console.log(node.next);
    return node;
}
var head = {
    val: 2,
    next: {
        val: 3,
        next: {
            val: 5,
            next: {
                val: 4,
                next: {
                    val: 6,
                    next: {
                        val: 1,
                        next: null
                    }
                }
            }
        }
    }
};
oddEvenList(head);
