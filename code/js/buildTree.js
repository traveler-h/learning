// Definition for a binary tree node.
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
function buildTree(inorder, postorder) {
    let post_idx;
    const idx_map = new Map();
    const helper = (in_left, in_right) => {
        console.log('in_left: ', in_left, '       inright: ', in_right);
        // 如果这里没有节点构造二叉树了，就结束
        if (in_left > in_right) {
            return null;
        }
        // 选择 post_idx 位置的元素作为当前子树根节点
        const root_val = postorder[post_idx];
        const root = new TreeNode(root_val);
        console.log('root: ==> ', root);
        // 根据 root 所在位置分成左右两棵子树
        const index = idx_map.get(root_val);
        // 下标减一
        post_idx--;
        // 构造右子树
        root.right = helper(index + 1, in_right);
        console.log('root.right: ==> ', root.right);
        // 构造左子树
        root.left = helper(in_left, index - 1);
        console.log('root.left: ==> ', root.left);
        console.log('root: =======> ', root);
        return root;
    };
    // 从后序遍历的最后一个元素开始
    post_idx = postorder.length - 1;
    // 建立（元素，下标）键值对的哈希表
    // let idx = 0;
    inorder.forEach((val, idx) => {
        idx_map.set(val, idx);
    });
    console.log('idx_map: ===> ', idx_map);
    return helper(0, inorder.length - 1);
}
const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];
buildTree(inorder, postorder);
