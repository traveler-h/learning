/**
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
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
// 中序遍历
const inorder = [9,3,15,20,7]
// 前序遍历
const preorder = [3,9,20,15,7]

function buildTree(preorder: number[], inorder: number[]) {
    let pre_idx = 0
    const idx_map = new Map()
    inorder.forEach((item: number, index: number) => {
        idx_map.set(item, index)
    })
    const helper = (in_left: number, in_right: number) => {
        console.log(`in_left: ${in_left}, in_right: ${in_right}`)
        // 0, 4 | 1, 4
        if (in_left > in_right) {
            return null;
        }
        const root_val = preorder[pre_idx] //3  9   20
        const root = new TreeNode(root_val) // 3    9
        const index = idx_map.get(root_val) // 1    0
        pre_idx++ // 1  2

        console.log(`index: ${index}, pre_idx: ${pre_idx}`)
        // 1, 1 |  0, 2
        root.left = helper(in_left, index - 1)
        // helper(2, 4) | helper(1, 4)
        console.log('root.left:  ', root.right)

        root.right = helper(index + 1, in_right)
        console.log('root.right:  ', root.left)

        console.log('root:   ', root)
        return root
    }
    return helper(0, inorder.length - 1)
}

buildTree(preorder, inorder)
 
