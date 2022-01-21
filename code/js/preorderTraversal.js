// Definition for a binary tree node.
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
// 递归：
function preorderTraversal(root) {
    if (root == null) {
        return [];
    }
    ;
    var result = [];
    preorder(root, result);
    return result;
    function preorder(root, result) {
        if (root == null)
            return;
        console.log(result, root);
        preorder(root.left, result);
        console.log(result, 'l');
        result.push(root.val);
        console.log(result, 'p');
        preorder(root.right, result);
        console.log(result, 'r');
    }
}
var head = new TreeNode(1, { val: 4, left: null, right: null }, { val: 2, left: { val: 3, left: null, right: null }, right: null });
preorderTraversal(head);
