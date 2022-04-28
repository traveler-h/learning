/**
 * Definition for a binary tree node.
 * 请完成一个函数，输入一个二叉树，该函数输出它的镜像
 * 输入：root = [4,2,7,1,3,6,9]
 * 输出：[4,7,2,9,6,3,1]
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


function mirrorTree(root: TreeNode | null): TreeNode | null {
    if (root === null) return null
    let old: TreeNode | null = root.left
    root.left = root.right
    root.right = old
    mirrorTree(root.left)
    mirrorTree(root.right)
    return root
};

const tree: TreeNode = {
    val: 4,
    left: {
        val: 2,
        left: { val: 1, left: null, right: null },
        right: { val: 3, left: null, right: null },
    },
    right: {
        val: 7,
        left: { val: 6, left: null, right: null },
        right: { val: 9, left: null, right: null }
    }
}
mirrorTree(tree)

export { }
