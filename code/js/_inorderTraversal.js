class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
function inorderTraversal(root) {
    const res = [];
    const stack = [root];
    const visited = new Set();
    while (stack.length > 0) {
        const currentNode = stack.pop();
        console.log(currentNode);
        if (currentNode.right && !visited.has(currentNode.right)) {
            stack.push(currentNode.right);
        }
        res.push(currentNode.val);
        if (currentNode.left && !visited.has(currentNode.left)) {
            stack.push(currentNode.left);
        }
    }
    console.log(res);
    return res;
}
;
const roots = new TreeNode(1, { val: 4, left: null, right: null, }, { val: 2, left: { val: 3, left: null, right: null }, right: null });
inorderTraversal(roots);
