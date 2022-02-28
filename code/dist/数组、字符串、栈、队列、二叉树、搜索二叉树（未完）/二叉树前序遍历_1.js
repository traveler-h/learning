"use strict";
// Definition for a binary tree node.
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
// 迭代：
/**
 *
 * @param root
 * @returns
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

 
 */
function preorderTraversal(root) {
    if (root === null)
        return [];
    let result = [];
}
