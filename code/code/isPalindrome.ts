/**
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是
 */
// Definition for singly-linked list.
declare class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null)
}


function isPalindrome(head: ListNode | null): boolean {

    if (head == null || head.next == null) return true
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    console.log(slow, fast)
    let left: ListNode;
    let right: ListNode;

    // 反转后半部分链表
    // 若链表长度为偶数
    if (fast == null) {
        left = head
        right = reverse(slow)
    } else {
        // 若链表长度为奇数， 反转链表忽略中间节点
        left = head
        right = reverse(slow.next)
    }
    

    while (right) {
        if (right.val != left.val) return false
        right = right.next
        left = left.next
    }
    return true

    // 反转前半部分链表
    // // 重新定义一个指针，指回头部
    // let left = head;
    // // 反转后半部分链表
    // let right = reverse(slow);
    // console.log(left, right)
    // while (right != null) {
    //     if (left.val != right.val) {
    //         console.log("false")
    //         return false;
    //     }
    //     left = left.next;
    //     right = right.next;
    // }
    // return true;

};
// 反转链表
function reverse(head: ListNode | null) {
    let result: ListNode | null = null
    let curr: ListNode | null = head
    while (curr != null) {
        let temp = curr.next
        curr.next = result
        result = curr
        curr = temp
    }
    return result
}

let node = { val: 1, next: { val: 2, next: null} }
isPalindrome(node)