/**
 * 扁平化多级链表
 * 深度优先搜索
 * 需重复
 */
class ListNode {
  val: number;
  prev: ListNode | null;
  next: ListNode | null;
  child: ListNode | null;
  constructor(
    val?: number,
    prev?: ListNode,
    next?: ListNode,
    child?: ListNode
  ) {
    this.val = val === undefined ? 0 : val;
    this.prev = prev === undefined ? null : prev;
    this.next = next === undefined ? null : next;
    this.child = child === undefined ? null : child;
  }
}

var flatten = function(head) {
  function dfs (node, parent = null) {
      if (!node) {
          return null
      }
      const { next, child } = node
      node.child = null
      if (parent) {
          parent.next = node
          node.prev = parent
      }

      let p = node
      if (child) {
          p = dfs(child, node)
      }
      if (next) {
          return dfs(next, p)
      }
      return p
  }
  dfs(head)
  return head
};