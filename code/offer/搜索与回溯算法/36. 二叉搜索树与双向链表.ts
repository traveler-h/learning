
// Definition for a Node.
class Node {
    val: number
    left: Node | null
    right: Node | null
    constructor(val: number, left: Node | null, right: Node | null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

};

/**
 * @param {Node} root
 * @return {Node}
 */
const treeToDoublyList = function (root: Node | null): Node | null {
    let pre: any = null, head : Node | any = null
    const dfs = (cur: Node | null) => {
        if (cur === null) return
        dfs(cur.left)
        if (pre !== null) pre.right = cur
        else head = cur;
        cur.left = pre;
        pre = cur;
        dfs(cur.right);
    }
    if (root === null) return null
    dfs(root);
    // 将最后一个节点的尾指针指向head，将第一个节点的头指针指向最后一个节点
    head.left = pre;
    pre.right = head;
    return head;

};
const root: Node = {
    val: 4,
    left: {
        val: 2,
        left: { val: 1, left: null, right: null },
        right: { val: 3, left: null, right: null }
    },
    right: { val: 5, left: null, right: null }
}
treeToDoublyList(root)
export { }
