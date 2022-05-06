/**
 * 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
 * 例如：
 * 给定二叉树: [3,9,20,null,null,15,7],
 * 返回其层次遍历结果：
 * [
 * [3],
 * [9,20],
 * [15,7]
 * ]
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


function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) return []
    let roots = [root]
    let res: number[][] = []
    while (roots.length > 0) {
        const currentLength = roots.length
        res.push([])
        for (let i: number = 0; i < currentLength; i++) {
            const node = roots.shift()
            res[res.length - 1].push((node as TreeNode).val)
            node?.left && roots.push(node.left)
            node?.right && roots.push(node.right)
        }
    }
    return res
};

const root: TreeNode = {
    val: 3,
    left: { val: 9, left: { val: 5, left: null, right: null }, right: null },
    right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null }
    }
}

levelOrder(root)

export { levelOrder }
