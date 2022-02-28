"use strict";
// Definition for singly-linked list.
// declare class ListNode1 {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null);
//     // {
//     //     this.val = (val===undefined ? 0 : val)
//     //     this.next = (next===undefined ? null : next)
//     // }
// }
// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//     if (!head) return null
//     let node: ListNode | null = head
//     let length: number = 0
//     while (node) {
//         node = node.next
//         length++
//     }
//     node = head
//     let temp: ListNode | null = node
//     const k: number = length - n
//     if (k == length) return head
//     if (k == 0) {
//         head = head.next
//         return head
//     }
//     for (let i: number = 0; i < k - 1; i++) {
//         temp = (temp as ListNode).next
//     }
//     if (temp == null) return null
//     temp.next = (temp.next as ListNode).next
//     return node
// };
/**
 *
 * @param head
 * @param n
 * @returns
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 */
function removeNthFromEnd(head, n) {
    let fast = head;
    if (head == null)
        return null;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    if (fast == null) {
        head.next = head.next.next;
    }
    let slow = head;
    fast = fast.next;
    console.log(fast);
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
}
removeNthFromEnd({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } }, 2);
