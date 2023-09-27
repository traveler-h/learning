/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
function calculateDepth(root: TreeNode | null): number {
    const deep = (node: TreeNode | null): number => {
        if(node === null) return 0
        return Math.max(deep(node.left),deep(node.right)+1)
    }
    return deep(root)
};
let root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: {
                val: 4,
                left: null,
                right: null
            },
            right: null
        },
        right: null
    },
    right: {
        val: 2,
        left: null,
        right: {
            val: 3,
            left: null,
            right: {
                val: 5,
                left: null,
                right: null
            }
        }
    }
}
calculateDepth(root)
export {}