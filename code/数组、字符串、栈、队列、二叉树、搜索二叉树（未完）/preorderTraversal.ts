
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

/**
 * 
 * @param root 
 * @returns 
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

 
 */
// 递归：
function preorderTraversal(root: TreeNode | null): number[] {
    if (root == null) { return [] };
    const result: number[] = [];
    preorder(root, result);
    return result;

    function preorder(root: TreeNode | null, result: number[]) {
        if (root == null) return;
        result.push(root.val)
        preorder(root.left, result);
        preorder(root.right, result);
    }
}

const head = new TreeNode(1, {val: 4, left: null, right: null,}, { val: 2, left: { val: 3, left: null, right: null }, right: null })
preorderTraversal(head)