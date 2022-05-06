"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
/**
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，
 * 找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
 * 叶子节点 是指没有子节点的节点
 * 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * 输出：[[5,4,11,2],[5,8,4,5]]
 *
 * 输入：root = [1,2,3], targetSum = 5
 * 输出：[]
 *
 * 输入：root = [1,2], targetSum = 0
 * 输出：[]
 */
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function pathSum(root, target) {
    if (root === null)
        return [];
    var res = [];
    var treeDFS = function (node, target, tmp) {
        if (node === null)
            return [];
        var _tmp = __spreadArray([], tmp, true);
        _tmp.push(node.val);
        node.left && treeDFS(node.left, target, _tmp);
        node.right && treeDFS(node.right, target, _tmp);
        var currentSum = _tmp.reduce(function (pre, cur) { return (pre + cur); }, 0);
        if (currentSum === target && node.left === null && node.right === null) {
            res.push(_tmp);
            return res;
        }
        return tmp;
    };
    treeDFS(root, target, []);
    console.log(res, 'res');
    return res;
}
;
var root = {
    val: 5,
    left: {
        val: 4,
        left: {
            val: 11,
            left: { val: 7, left: null, right: null },
            right: { val: 2, left: null, right: null }
        },
        right: null
    },
    right: {
        val: 8,
        left: { val: 13, left: null, right: null },
        right: {
            val: 4,
            left: { val: 5, left: null, right: null },
            right: { val: 1, left: null, right: null }
        }
    }
};
var targetSum = 22;
var root1 = { val: 1, left: { val: 2, left: null, right: null }, right: null };
var targetSum1 = 1;
pathSum(root, targetSum);
pathSum(root1, targetSum1);
exports["default"] = pathSum;
