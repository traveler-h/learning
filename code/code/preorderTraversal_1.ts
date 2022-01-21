
// Definition for a binary tree node.
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
// 迭代：
/**
 * 
 * @param root 
 * @returns 
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

 
 */

function preorderTraversal(root: TreeNode | null): number[] {
    if(root === null) return []
    let result: number[] = []
    
}

