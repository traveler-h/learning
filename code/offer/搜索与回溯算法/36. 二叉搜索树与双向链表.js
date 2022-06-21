"use strict";
exports.__esModule = true;
// Definition for a Node.
var Node = /** @class */ (function () {
    function Node(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
    return Node;
}());
;
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
    var pre = null, head = null, res = [];
    var dfs = function (cur) {
        if (cur === null)
            return;
        dfs(cur.left);
        res.push(cur.val);
        console.log(res);
        if (pre !== null)
            pre.right = cur;
        else
            head = cur;
        cur.left = pre;
        pre = cur;
        dfs(cur.right);
    };
    if (root === null)
        return null;
    dfs(root);
    head.left = pre;
    pre.right = head;
    console.log(head);
    return head;
};
var root = {
    val: 4,
    left: {
        val: 2,
        left: { val: 1, left: null, right: null },
        right: { val: 3, left: null, right: null }
    },
    right: { val: 5, left: null, right: null }
};
treeToDoublyList(root);
