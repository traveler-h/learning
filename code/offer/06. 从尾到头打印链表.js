/**
 * 输入：head = [1,3,2]
 * 输出：[2,3,1]
 */
// Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
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
function reversePrint(head) {
    if (head === null)
        return [];
    var length = 0;
    var root = head;
    while (root.next) {
        root = root.next;
        length++;
    }
    var res = new Array(length);
    while (length >= 0 && head) {
        res[length--] = head.val;
        head = head.next;
    }
    return res;
}
var head = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
/**
 *
 * @param head
 * 官方解法一：递归
 * 时间复杂度：O(N) 遍历一遍链表
 * 空间复杂度：O(N) 使用栈空间O(N)
 */
function reversePrint1(head) {
    var temp = new Array();
    function recur(head) {
        if (head == null)
            return;
        recur(head.next);
        temp.push(head.val);
    }
    recur(head);
    var res = new Array(temp.length);
    for (var i = 0; i < res.length; i++)
        res[i] = temp[i];
    return res;
}
/**
 * 使用栈： 后进先出LIFO
 * 时间复杂度O(N)
 * 空间复杂度O(N)
 */
function reversePrint2(head) {
    var stack = [];
    if (head === null)
        return [];
    var root = head;
    while (root) {
        stack.push(root.val);
        root = root.next;
    }
    var length = stack.length;
    var res = new Array(length);
    for (var i = 0; i < length; i++) {
        res[i] = stack.pop();
    }
    console.log(res);
    return res;
}
console.time('方法一');
reversePrint(head);
console.timeEnd('方法一');
console.time('方法二');
reversePrint1(head);
console.timeEnd('方法二');
console.time('方法三');
reversePrint2(head);
console.timeEnd('方法三');
