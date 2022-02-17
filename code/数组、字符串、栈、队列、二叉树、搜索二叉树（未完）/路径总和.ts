/**
 * 路径总和
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。
 * 判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
 * 如果存在，返回 true ；否则，返回 false 。
 */
// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    // 如果根节点为空，或者叶子节点也遍历完了也没找到这样的结果，就返回false
    if (root === null) return false
    // 如果到叶子节点了，并且剩余值等于叶子节点的值，说明找到了这样的结果，直接返回true
    if (root.left === null && root.right === null) {
        return root.val === targetSum
    }
    //分别沿着左右子节点走下去，然后顺便把当前节点的值减掉，左右子节点只要有一个返回true，
    //说明存在这样的结果
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)

};