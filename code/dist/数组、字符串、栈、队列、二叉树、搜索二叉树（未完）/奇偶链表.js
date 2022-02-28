"use strict";
/**
 *
 * @param head
 * @returns
 * 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。
 * 请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。
 * 请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数
 */
function oddEvenList(head) {
    if (!head || !head.next || !head.next.next)
        return head;
    let evenHead = head.next; //even链表的头节点，需要后续拿来拼接到odd链末尾
    let odd = head, even = odd.next; //两个指针分别用来指向odd节点和even节点
    while (even && even.next) { //结束条件
        odd.next = even.next; //odd的下一个节点在even节点的后面
        odd = odd.next; //odd指向下一个节点
        even.next = odd.next; //even节点的下一个节点在odd后面
        even = even.next; //even指向下一个节点
    }
    odd.next = evenHead; //链接两个链
    return head; //返回
}
const head = {
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
            },
        },
    },
};
oddEvenList(head);
