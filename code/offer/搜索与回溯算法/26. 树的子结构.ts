/**
 *  Definition for a binary tree node.
 * 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)
 * B是A的子结构， 即 A中有出现和B相同的结构和节点值。
 * 输入：A = [1,2,3], B = [3,1]
 * 输出：false
 * 输入：A = [3,4,5,1,2], B = [4,1]
 * 输出：true
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
    return (A !== null && B !== null) && (isSameTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
};

function isSameTree(A: TreeNode | null, B: TreeNode | null): boolean {
    if (B === null) return true
    if (A === null || A.val !== B.val) return false
    return isSameTree(A.left, B.left) && isSameTree(A.right, B.right)
}

export { }
