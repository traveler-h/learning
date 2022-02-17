
// Definition for a binary tree node.
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
/**
 * 
 * @param root 
 * @returns 
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
 */

 function levelOrder(root: TreeNode | null): number[][] {
    if(root === null) return []
     let rootList = [root]
     let res: number[][] = []
    // console.log(rootList)
    // return[[1]]
    while (rootList.length > 0) {
        let size = rootList.length;
        console.log(size)
        let itemList = []
        for (let i = 0; i < size; i++) {
            let cur = rootList.shift();
            itemList.push(cur.val)
            console.log(cur)
            cur.left && rootList.push(cur.left);
            cur.right && rootList.push(cur.right);
        }
        res.push(itemList)
        console.log(res)
      }

};

const tree = {
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null }
    }
}
levelOrder(tree)