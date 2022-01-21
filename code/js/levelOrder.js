// Definition for a binary tree node.
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
    var rootList = [root];
    var res = [];
    // console.log(rootList)
    // return[[1]]
    while (rootList.length > 0) {
        var size = rootList.length;
        console.log(size);
        var itemList = [];
        for (var i = 0; i < size; i++) {
            var cur = rootList.shift();
            itemList.push(cur.val);
            console.log(cur);
            cur.left && rootList.push(cur.left);
            cur.right && rootList.push(cur.right);
        }
        res.push(itemList);
        console.log(res);
    }
}
;
var tree = {
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null }
    }
};
levelOrder(tree);
