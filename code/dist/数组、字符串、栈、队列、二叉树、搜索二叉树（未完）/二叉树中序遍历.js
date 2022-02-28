"use strict";
/**
 * 二叉树中序遍历
 * 递归
 */
// Definition for a binary tree node.
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
// 递归：
function inorderTraversal(root) {
    if (root == null) {
        return [];
    }
    ;
    const result = [];
    inorder(root, result);
    return result;
    function inorder(root, result) {
        if (root == null)
            return;
        inorder(root.left, result);
        result.push(root.val);
        inorder(root.right, result);
    }
}
const head = new TreeNode(1, { val: 4, left: null, right: null, }, { val: 2, left: { val: 3, left: null, right: null }, right: null });
inorderTraversal(head);
