// Definition for a binary tree node.
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    return TreeNode;
}());
function isSymmetric(root) {
    return isSymmetricChild(root.left, root.right);
}
function isSymmetricChild(root1, root2) {
    if (root1 === null && root2 === null)
        return true;
    if (root1 === null || root2 === null)
        return false;
    return root1.val === root2.val && isSymmetricChild(root1.left, root2.right) && isSymmetricChild(root1.right, root2.left);
}
