"use strict";
exports.__esModule = true;
/**
 *  Definition for a binary tree node.
 */
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function isSubStructure(A, B) {
    return (A !== null && B !== null) && (isSameTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B));
}
;
function isSameTree(A, B) {
    if (B === null)
        return true;
    if (A === null || A.val !== B.val)
        return false;
    return isSameTree(A.left, B.left) && isSameTree(A.right, B.right);
}
