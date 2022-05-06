/**
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，
 * 找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
 * 叶子节点 是指没有子节点的节点
 * 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * 输出：[[5,4,11,2],[5,8,4,5]]
 * 
 * 输入：root = [1,2,3], targetSum = 5
 * 输出：[]
 * 
 * 输入：root = [1,2], targetSum = 0
 * 输出：[]
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
function pathSum(root: TreeNode | null, target: number): number[][] {
    if (root === null) return []
    let res: number[][] = []
    const treeDFS = (node: TreeNode | null, target: number, tmp: number[]) => {
        if (node === null ) return []
        const _tmp = [...tmp]
        _tmp.push(node.val)
        node.left && treeDFS(node.left, target, _tmp)
        node.right && treeDFS(node.right, target, _tmp)
        const currentSum = _tmp.reduce((pre, cur) => (pre + cur), 0)
        if (currentSum === target && node.left === null && node.right === null) {
            res.push(_tmp)
            return res
        }
        return tmp
    }
    treeDFS(root, target, [])
    console.log(res, 'res')
    return res
};


const root: TreeNode = {
    val: 5,
    left: {
        val: 4,
        left: {
            val: 11,
            left: { val: 7, left: null, right: null },
            right: { val: 2, left: null, right: null }
        },
        right: null
    },
    right: {
        val: 8,
        left: { val: 13, left: null, right: null },
        right: {
            val: 4,
            left: { val: 5, left: null, right: null },
            right: { val: 1, left: null, right: null }
        }
    }
}
const targetSum = 22
const root1: TreeNode = { val: 1, left: { val: 2, left: null, right: null}, right: null}
const targetSum1 = 1

pathSum(root, targetSum)
pathSum(root1, targetSum1)

export default pathSum
