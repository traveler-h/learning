/**
 * 反转链表
 * 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 */
// Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
/**
 * 方法一： 迭代（双指针）
 * @param head
 * @returns
 */
function reverseList(head) {
    if (head === null || head.next === null)
        return head;
    var result = null;
    while (head) {
        var temp = null;
        temp = head;
        head = head.next;
        temp.next = result;
        result = temp;
    }
    console.log(result);
    return result;
}
/**
 * 方法二： 递归
 * 考虑使用递归法遍历链表，当越过尾节点后终止递归，在回溯时修改各节点的 next 引用指向。
 * recur(cur, pre) 递归函数：
 * 终止条件：当 cur 为空，则返回尾节点 pre （即反转链表的头节点）；
 * 递归后继节点，记录返回值（即反转链表的头节点）为 res ；
 * 修改当前节点 cur 引用指向前驱节点 pre ；
 * 返回反转链表的头节点 res ；
 * reverseList(head) 函数：
 * 调用并返回 recur(head, null) 。传入 null 是因为反转链表后， head 节点指向 null
 */
function reverseList1(head) {
    function recur(cur, pre) {
        if (cur === null)
            return pre;
        var res = recur(cur.next, cur);
        cur.next = pre;
        return res;
    }
    console.log(recur(head, null));
    return recur(head, null);
}
var head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
// reverseList(head)
reverseList1(head);
