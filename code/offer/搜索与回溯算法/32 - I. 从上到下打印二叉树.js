"use strict";
/**
 * 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
 * 例子：
 * [3,9,20,null,null,15,7],
 * [3,9,20,15,7]
 */
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
function levelOrder(root) {
    if (root === null)
        return [];
    var treeArray = [root];
    var res = [root.val];
    while (treeArray.length > 0) {
        var cur = treeArray.shift();
        if (cur === null)
            return res;
        if (cur === null || cur === void 0 ? void 0 : cur.left) {
            treeArray.push(cur.left);
            res.push(cur.left.val);
        }
        if (cur === null || cur === void 0 ? void 0 : cur.right) {
            treeArray.push(cur.right);
            res.push(cur.right.val);
        }
    }
    console.log(res);
    return res;
}
;
var root = {
    val: 1,
    left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: null
    },
    right: {
        val: 3, left: null, right: { val: 5, left: null, right: null }
    }
};
levelOrder(root);
