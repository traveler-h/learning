"use strict";
// Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
/**
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的
 */
function mergeTwoLists(list1, list2) {
    if (list1 == null || list2 == null) {
        return list1 ? list1 : list2;
    }
    const newList = new ListNode(0);
    let node = newList;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            node.next = list1;
            list1 = list1.next;
        }
        else {
            node.next = list2;
            list2 = list2.next;
        }
        node = node.next;
    }
    return newList.next;
}
;
const list1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
const list2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };
mergeTwoLists(list1, list2);
