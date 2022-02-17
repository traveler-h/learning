/**
 * 反转链表
 * 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 */

// Definition for singly-linked list.
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
/**
 * 方法一： 迭代（双指针）
 * 并在访问各节点时修改 next 引用指向
 * 时间复杂度： O(N)
 * 空间复杂度：O(1)
 * @param head 
 * @returns 
 */
function reverseList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return head
    let result: ListNode | null = null
    while (head) {
        let temp: ListNode | null = null
        temp = head
        head = head.next
        temp.next = result
        result = temp
    }
    console.log(result)
    return result
}

/**
 * 方法二： 递归
 * 递归遍历链表，当前节点为尾节点的下一个节点时， 终止递归，在回溯时修改各节点的 next 引用指向。
 * recur(cur, pre) 递归函数：
 * 终止条件：当 cur 为空，则返回尾节点 pre (即反转链表的头节点);
 * 递归后继节点，记录返回值（即反转链表的头节点）为 res;
 * 修改当前节点 cur 引用指向前驱节点 pre;
 * 返回反转链表的头节点 res;
 * pre一开始传入 null 是因为反转链表后， head 节点指向 null 
 * 时间复杂度：O(N)
 * 空间复杂度：O(N)
 */
function reverseList1(head: ListNode | null): ListNode | null { 
    function recur(cur: ListNode | null, pre: ListNode | null): ListNode | null {
        if (cur === null) return pre
        let res: ListNode | null = recur(cur.next, cur)
        cur.next = pre
        return res
    }
    return recur(head, null)
}

const head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } }
// reverseList(head)
reverseList1(head)