"use strict";
/**
 * 给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下
 * struct Node {
 *  int val;
 *  Node *left;
 *  Node *right;
 *  Node *next;
 * }
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。
 * 如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
 * 初始状态下，所有 next 指针都被设置为 NULL。
 */
/**
 * Definition for Node.
 */
class _Node {
    constructor(val, left, right, next) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
        this.next = (next === undefined ? null : next);
    }
}
function connect(root) {
    if (root === null)
        return null;
    let stack = [root];
    while (stack.length > 0) {
        const size = stack.length;
        for (let i = 0; i < size; i++) {
            const node = stack.shift();
            if (i < size - 1) {
                console.log(i, stack[0]);
                node.next = stack[0];
            }
            if (node.left !== null) {
                stack.push(node.left);
            }
            if (node.right !== null) {
                stack.push(node.right);
            }
        }
    }
    console.log(root.left.right);
    return root;
}
;
const root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4, left: null, right: null, next: null,
        },
        right: {
            val: 5, left: null, right: null, next: null,
        },
        next: null,
    },
    right: {
        val: 3,
        left: null,
        right: {
            val: 7, left: null, right: null, next: null
        },
        next: null,
    },
    next: null,
};
connect(root);
