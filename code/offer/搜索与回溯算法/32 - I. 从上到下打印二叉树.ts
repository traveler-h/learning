/**
 * 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
 * 例子：
 * [3,9,20,null,null,15,7],
 * [3,9,20,15,7]
 */

/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function levelOrder(root: TreeNode | null): number[] {
    if (root === null) return []
    let treeArray = [root]
    let res = [root.val]
    while (treeArray.length > 0) {
        const cur = treeArray.shift()
        if (cur === null) return res
        if (cur?.left) {
            treeArray.push(cur.left)
            res.push(cur.left.val)
        }
        if (cur?.right) {
            treeArray.push(cur.right)
            res.push(cur.right.val)
        }
    }
    console.log(res)
    return res
};
const root: TreeNode = {
    val: 1,
    left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: null
    },
    right: {
        val: 3, left: null, right: {val: 5, left: null, right: null}

    }
}

levelOrder(root)

export { }
