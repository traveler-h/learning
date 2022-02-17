/**
 * 二叉树中序遍历
 * 迭代
 */
class _TreeNode {
    val: number
    left: _TreeNode | null
    right: _TreeNode | null
    constructor(val?: number, left?: _TreeNode | null, right?: _TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}
function _inorderTraversal(root: _TreeNode | null): number[] {
    const res: number[] = [];
    const stack: (_TreeNode | number)[] = [root];
    const visited = new Set();
    while (stack.length > 0) {
      const currentNode: (_TreeNode | number) = stack.pop();
      if (typeof currentNode != "number") {
        if (currentNode.right && !visited.has(currentNode.right)) {
          stack.push(currentNode.right)
        }
        stack.push(currentNode.val);
        if (currentNode.left && !visited.has(currentNode.left)) {
          stack.push(currentNode.left)
        } 
      } else {
        res.push(currentNode)
      }
    }
    return res;
};
const roots = new _TreeNode(1, {val: 4, left: null, right: null,}, { val: 2, left: { val: 3, left: null, right: null }, right: null })
_inorderTraversal(roots)