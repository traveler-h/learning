function removeElements(head, val) {
    if (head == null) {
        return null;
    }
    head.next = removeElements(head.next, val);
    console.log(head, 'head');
    console.log(head.val == val ? head.next : head.val, head.val == val, '0');
    return head.val == val ? head.next : head;
}
removeElements({ val: 1, next: { val: 2, next: { val: 6, next: { val: 3, next: { val: 4, next: { val: 5, next: { val: 6, next: null } } } } } } }, 6);
