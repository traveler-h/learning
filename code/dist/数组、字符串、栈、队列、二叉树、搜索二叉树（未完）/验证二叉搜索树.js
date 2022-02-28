"use strict";
// Definition for a binary tree node.
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
var isValidBST = function (root) {
    let stack = [];
    let inorder = -Infinity;
    while (stack.length || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (root.val <= inorder) {
            return false;
        }
        inorder = root.val;
        root = root.right;
    }
    return true;
};
// 递归
const helper = (root, lower, upper) => {
    if (root === null) {
        return true;
    }
    console.log(root);
    console.log(lower, upper);
    if (root.val <= lower || root.val >= upper) {
        return false;
    }
    return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
};
var isValidBST1 = function (root) {
    return helper(root, -Infinity, Infinity);
};
const root1 = {
    val: 2,
    left: {
        val: 1, left: null, right: null
    },
    right: {
        val: 3, left: null, right: null
    }
};
const root2 = {
    val: 5,
    left: {
        val: 1, left: null, right: null
    },
    right: {
        val: 4,
        left: { val: 3, left: null, right: null },
        right: { val: 6, left: null, right: null }
    }
};
// isValidBST(root1) // true
isValidBST(root2); // false
