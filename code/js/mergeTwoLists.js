// Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function mergeTwoLists(list1, list2) {
    if (list1 == null || list2 == null) {
        return list1 ? list1 : list2;
    }
    var newList = new ListNode(0);
    var cur = newList;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            cur.next = list1;
            list1 = list1.next;
        }
        else {
            cur.next = list2;
            list2 = list2.next;
        }
        cur = cur.next;
    }
    // cur.next = list1 ? list1 : list2;
    console.log(newList);
    return newList.next;
}
;
var list1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
var list2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };
mergeTwoLists(list1, list2);
