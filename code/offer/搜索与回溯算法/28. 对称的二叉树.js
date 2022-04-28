"use strict";
exports.__esModule = true;
/** 请实现一个函数，用来判断一棵二叉树是不是对称的。
 * 如果一棵二叉树和它的镜像一样，那么它是对称的。
 * 示例 1：
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 * 示例 2：
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
*/
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function isSymmetric(root) {
    if (root === null)
        return true;
    var compare = function (left, right) {
        if (left === null && right === null)
            return true;
        if (left === null || right === null || left.val !== right.val)
            return false;
        return compare(left.left, right.right) && compare(left.right, right.left);
    };
    console.log(compare(root.left, root.right));
    return compare(root.left, root.right);
}
;
var tree = {
    val: 1,
    left: {
        val: 2,
        left: { val: 3, left: null, right: null },
        right: { val: 4, left: null, right: null }
    },
    right: {
        val: 9,
        left: { val: 4, left: null, right: null },
        right: { val: 3, left: null, right: null }
    }
};
isSymmetric(tree);
