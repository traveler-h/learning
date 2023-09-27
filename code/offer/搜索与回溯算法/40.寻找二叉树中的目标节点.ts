// 某公司组织架构以二叉搜索树形式记录，节点值为处于该职位的员工编号。请返回第 cnt 大的员工编号。

//Definition for a binary tree node.
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


function kthLargest(root: TreeNode | null, k: number): number {
    const array: number[] = []
    let result: number = 0
    const dfs = (node: TreeNode | null) => {
        if(node) {
            array.push(node.val)
            dfs(node.left)
            dfs(node.right)
        } else {
            return
        }
    }
    dfs(root)
    if(array.length>0) {
        result = array.sort((a, b) => b - a)[k-1]
    }
    return result
};

const exampleTree: TreeNode = {
    val: 7,
    left: {
        val: 3,
        left: {
            val: 1,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 9,
        left: null,
        right: null
    }
}

kthLargest(exampleTree, 2)

export {}