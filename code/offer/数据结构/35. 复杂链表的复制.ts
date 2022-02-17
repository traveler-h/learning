/**
 * leetcode支持js 目前无ts
 * 请实现 copyRandomList 函数，复制一个复杂链表。
 * 在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，
 * 还有一个 random 指针指向链表中的任意节点或者 null。
 * 输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
 * 输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
 */

// Definition for a ListNode.
class ListNode {
   public val: number;
   public next: ListNode | null;
   public random: ListNode | null;
   constructor(val: number, next: ListNode | null, random: ListNode | null) {
      this.val = val;
      this.next = next;
      this.random = random;
   }

};


/**
 * @param  head
 * @return 
 */
function copyRandomList(head: ListNode | null): ListNode | null {
   if (head === null) return null
   let cur: ListNode = head;
   // 1. 复制各节点，并构建拼接链表
   while (cur != null) {
      let tmp = new ListNode(cur.val, null, null);
      tmp.next = cur.next;
      cur.next = tmp;
      cur = tmp.next;
   }
   console.log(head)
   // 2. 构建各新节点的 random 指向
   cur = head;
   while (cur != null) {
      if (cur.random != null)
         cur.next.random = cur.random.next;
      cur = cur.next.next;
   }
   console.log(head)
   // 3. 拆分两链表
   cur = head.next;
   let pre: ListNode = head, res: ListNode = head.next;
   // console.log(head, 'head', head.next.next)
   while (cur.next != null) {
      pre.next = pre.next.next;
      cur.next = cur.next.next;
      pre = pre.next;
      cur = cur.next;
   }
   pre.next = null; // 单独处理原链表尾节点
   return res;      // 返回新链表头节点
}

const head = { val: 7, next: { val: 13, next: { val: 9, next: null, random: null }, random: { val: 9, next: null, random: null } }, random: null }

copyRandomList(head)
