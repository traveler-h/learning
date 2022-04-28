/** 请实现一个函数，用来判断一棵二叉树是不是对称的。
 * 如果一棵二叉树和它的镜像一样，那么它是对称的。
 * 示例 1：
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 * 示例 2：
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
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
function isSymmetric(root: TreeNode | null): boolean {
    if (root === null) return true
    const compare = (left: TreeNode | null, right: TreeNode | null): boolean => {
        if (left === null && right === null) return true
        if (left === null || right === null || left.val !== right.val) return false
        return compare(left.left, right.right) && compare(left.right, right.left)
    }
    return compare(root.left, root.right)
};

const tree: TreeNode = {
    val: 1,
    left: {
        val:2,
        left: { val: 3, left: null, right: null },
        right: { val: 4, left: null, right: null },
    },
    right: {
        val: 9,
        left: { val: 4, left: null, right: null },
        right: { val: 3, left: null, right: null }
    }
}

isSymmetric(tree)
export { }
