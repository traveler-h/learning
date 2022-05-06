"use strict";
exports.__esModule = true;
/**
 * 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，
 * 第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。
 * 给定二叉树: [3,9,20,null,null,15,7],
 * 返回其层次遍历结果：
 * [
 *   [3],
 *   [20,9],
 *   [15,7]
 * ]
 */
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
    var count = 0;
    var res = [];
    while (roots.length > 0) {
        count++;
        var currentLevelLength = roots.length;
        res.push([]);
        for (var i = 0; i < currentLevelLength; i++) {
            if ((count & 1) === 1) {
                var currentNode = roots.shift();
                res[res.length - 1].push(currentNode.val);
                (currentNode === null || currentNode === void 0 ? void 0 : currentNode.left) && roots.push(currentNode.left);
                (currentNode === null || currentNode === void 0 ? void 0 : currentNode.right) && roots.push(currentNode.right);
            }
            else {
                var currentNode = roots.pop();
                res[res.length - 1].push(currentNode.val);
                (currentNode === null || currentNode === void 0 ? void 0 : currentNode.right) && roots.unshift(currentNode.right);
                (currentNode === null || currentNode === void 0 ? void 0 : currentNode.left) && roots.unshift(currentNode.left);
            }
        }
    }
    console.log(res);
    return res;
}
;
var levelOrder_1 = function (root) {
    if (root === null)
        return [];
    var queue = [root];
    var res = [];
    while (queue.length > 0) {
        var tmp = [];
        for (var i = queue.length; i > 0; i--) {
            var node = queue.pop();
            if (res.length % 2 == 0)
                tmp.push(node.val);
            else
                tmp.unshift(node.val);
            (node === null || node === void 0 ? void 0 : node.left) && queue.push(node.left);
            (node === null || node === void 0 ? void 0 : node.right) && queue.push(node.right);
            console.log(queue);
        }
        console.log(tmp);
        res.push(tmp);
    }
    console.log(res);
    return res;
};
var levelOrder_2 = function (root) {
    if (root === null)
        return [];
    var roots = [root];
    var res = [];
    while (roots.length > 0) {
        var tmp = [];
        for (var i = roots.length; i > 0; i--) {
            var node = roots.shift();
            tmp.push(node.val);
            (node === null || node === void 0 ? void 0 : node.left) && roots.push(node.left);
            (node === null || node === void 0 ? void 0 : node.right) && roots.push(node.right);
        }
        if (res.length % 2 == 1)
            tmp.reverse();
        res.push(tmp);
    }
    console.log(res);
    return res;
};
var root = {
    val: 1,
    left: { val: 2, left: { val: 4, left: null, right: null }, right: null },
    right: {
        val: 3,
        left: null,
        right: { val: 5, left: null, right: null }
    }
};
var root1 = {
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null }
    }
};
levelOrder_2(root1);
