/**
 * 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，
 * 第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。
 * 给定二叉树: [3,9,20,null,null,15,7],
 * 返回其层次遍历结果：
 * [
 *   [3],
 *   [20,9],
 *   [15,7]
 * ]
 */
/**
 * Definition for a binary tree node.
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

function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) return []
    let roots = [root]
    let count: number = 0
    let res: number[][] = []
    while (roots.length > 0) {
        count++
        const currentLevelLength = roots.length
        res.push([])
        for (let i: number = 0; i < currentLevelLength; i++) {
            if ((count & 1) === 1) {
                const currentNode = roots.shift()
                res[res.length - 1].push((currentNode as TreeNode).val)
                currentNode?.left && roots.push(currentNode.left)
                currentNode?.right && roots.push(currentNode.right)
            }
            else {
                const currentNode = roots.pop()
                res[res.length - 1].push((currentNode as TreeNode).val)
                currentNode?.right && roots.unshift(currentNode.right)
                currentNode?.left && roots.unshift(currentNode.left)
            }
        }
    }
    console.log(res)
    return res
};
const levelOrder_1 = (root: TreeNode | null): number[][] => {
    if (root === null) return []
    let queue: TreeNode[] = [root]
    let res: number[][] = []
    while (queue.length > 0) {
        let tmp: number[] = []
        for (let i: number = queue.length; i > 0; i--) {
            const node = queue.pop();
            if (res.length % 2 == 0) tmp.push((node as TreeNode).val);
            else tmp.unshift((node as TreeNode).val);
            node?.left && queue.push(node.left);
            node?.right && queue.push(node.right);
            console.log(queue)

        }
        console.log(tmp)
        res.push(tmp);
    }
    console.log(res)
    return res;
}
const levelOrder_2 = (root: TreeNode | null): number[][] => {
    if(root === null) return []
    let roots: TreeNode[] = [root]
    let res: number[][] = []
    while(roots.length > 0) {
        let tmp: number[] = []
        for(let i: number = roots.length; i > 0; i--) {
            let node = roots.shift();
            tmp.push((node as TreeNode).val);
            node?.left && roots.push(node.left);
            node?.right && roots.push(node.right);
        }
        if(res.length % 2 == 1) tmp.reverse();
        res.push(tmp);
    }
    console.log(res)
    return res;
}
const root: TreeNode = {
    val: 1,
    left: { val: 2, left: { val: 4, left: null, right: null }, right: null },
    right: {
        val: 3,
        left: null,
        right: { val: 5, left: null, right: null }
    }
}
const root1: TreeNode = {
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null }
    }
}

levelOrder_2(root1)
// levelOrder(root)
export { }
