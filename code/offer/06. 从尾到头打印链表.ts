/**
 * 输入：head = [1,3,2]
 * 输出：[2,3,1]
 */

// Definition for singly-linked list.
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/**
 *
 * @param head
 * @returns number[]
 * 1、先统计链表的长度
 * 2、建立与链表长度相同是数组
 * 3、遍历链表，push进数组中
 * 时间复杂度：O(N)
 * 空间复杂度：O(N)
 */
function reversePrint(head: ListNode | null): number[] {
    if (head === null) return [];
    let length = 0;
    let root: ListNode = head;
    while (root.next) {
        root = root.next;
        length++;
    }
    let res: number[] = new Array(length);
    while (length >= 0 && head) {
        res[length--] = head.val;
        head = head.next;
    }
    return res;
}

const head = { val: 1, next: { val: 2, next: { val: 3, next: null } } };


/**
 *
 * @param head
 * 官方解法一：递归
 * 时间复杂度：O(N) 遍历一遍链表
 * 空间复杂度：O(N) 使用栈空间O(N)
 */
function reversePrint1(head: ListNode | null): number[] {
    let temp: number[] = new Array();
    function recur(head: ListNode | null): void {
        if (head == null) return;
        recur(head.next);
        temp.push(head.val);
    }
    recur(head);
    let res = new Array(temp.length);
    for (let i = 0; i < res.length; i++) res[i] = temp[i];
    return res;
}


/**
 * 使用栈： 后进先出LIFO
 * 时间复杂度O(N)
 * 空间复杂度O(N)
 */
function reversePrint2(head: ListNode | null): number[] {
    let stack: number[] = []
    if (head === null) return []
    let root: ListNode = head
    while (root) {
        stack.push(root.val)
        root = root.next
    }
    const length = stack.length
    let res: number[] = new Array(length)
    for (let i: number = 0; i < length; i++) {
        res[i] = stack.pop()
    }
    console.log(res)
    return res
}
console.time('方法一')
reversePrint(head);
console.timeEnd('方法一')
console.time('方法二')
reversePrint1(head)
console.timeEnd('方法二')
console.time('方法三')
reversePrint2(head)
console.timeEnd('方法三')