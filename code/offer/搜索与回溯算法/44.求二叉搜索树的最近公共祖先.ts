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
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null, parentRooot: TreeNode | null): TreeNode | null {
    console.log(root,parentRooot, 'root');
    if(root === null || root === p || root === q) return parentRooot   
    if(p && q) {
        if(root.val > p.val && root.val > q.val) {
            return lowestCommonAncestor(root.left, p, q, root)
        }
        if(root.val < p.val && root.val < q.val) {
            return lowestCommonAncestor(root.right, p, q, root)
        }
    } else if(!p && q) {
        if(root.val > q.val) {
            return lowestCommonAncestor(root.left, p, q, root)
        } else {
            return lowestCommonAncestor(root.right, p, q, root)
        }
    } else if(p && !q) {
        if(root.val > p.val) {
            return lowestCommonAncestor(root.left, p, q, root)
        } else {
            return lowestCommonAncestor(root.right, p, q, root)
        }
    } else {
        return lowestCommonAncestor(root.left, p, q, root)
    }
    return parentRooot
};

// function lowestCommonAncestor (root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
//     if(root === null || root.val === p.val|| root.val === q.val) return root
// 	if(root.val > p.val && root.val > q.val) {
//         return lowestCommonAncestor(root.left, p, q)
//     }else if(root.val < p.val && root.val < q.val) {
//         return lowestCommonAncestor(root.right, p, q)
//     } else {
//         return root
//     }
// }
const root: TreeNode = {
    val: 6,
    left: {
        val: 2,
        left: {
            val: 0,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: {
                val: 3,
                left: null,
                right: null
            },
            right: {
                val: 5,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 8,
        left: {
            val: 7,
            left: null,
            right: null
        },
        right: {
            val: 9,
            left: null,
            right: null
        }
    }
}
const p: TreeNode = {
    val: 2,
    left: null,
    right: null
}
const q: TreeNode = {
    val: 4,
    left: null,
    right: null
}
// const p = null
// const q = null
console.log(lowestCommonAncestor(root,p,q, root));
export {}
