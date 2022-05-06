"use strict";
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
exports.__esModule = true;
exports.levelOrder = void 0;
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
function levelOrder(root) {
    if (root === null)
        return [];
    var roots = [root];
    var res = [];
    while (roots.length > 0) {
        var currentLength = roots.length;
        res.push([]);
        console.log(roots);
        for (var i = 0; i < currentLength; i++) {
            var node = roots.shift();
            res[res.length - 1].push(node.val);
            (node === null || node === void 0 ? void 0 : node.left) && roots.push(node.left);
            (node === null || node === void 0 ? void 0 : node.right) && roots.push(node.right);
        }
    }
    return [];
}
exports.levelOrder = levelOrder;
;
var root = {
    val: 3,
    left: { val: 9, left: { val: 5, left: null, right: null }, right: null },
    right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null }
    }
};
levelOrder(root);
