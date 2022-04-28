"use strict";
exports.__esModule = true;
/**
 * Definition for a binary tree node.
 */
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function mirrorTree(root) {
    console.log(root);
    if (root === null)
        return null;
    var old = root.left;
    root.left = root.right;
    root.right = old;
    mirrorTree(root.left);
    mirrorTree(root.right);
    console.log(root, 'result');
    return root;
}
;
var tree = {
    val: 4,
    left: {
        val: 2,
        left: { val: 1, left: null, right: null },
        right: { val: 3, left: null, right: null }
    },
    right: {
        val: 7,
        left: { val: 6, left: null, right: null },
        right: { val: 9, left: null, right: null }
    }
};
mirrorTree(tree);
