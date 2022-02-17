// Definition for a binary tree node.
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
/**
 * 
 * @param root 
 * @returns 
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 */
function isSymmetric(root: TreeNode | null): boolean {
    return isSymmetricChild(root.left, root.right)
}

function isSymmetricChild(root1: TreeNode | null, root2: TreeNode | null): boolean {
    if (root1 === null && root2 === null) return true
    if (root1 === null || root2 === null) return false
    return root1.val === root2.val && isSymmetricChild(root1.left, root2.right) && isSymmetricChild(root1.right, root2.left)
}
