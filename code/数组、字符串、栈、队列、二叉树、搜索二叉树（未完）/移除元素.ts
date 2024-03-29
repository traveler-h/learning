//  Definition for singly-linked list.
declare class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null);
    //  {
    //      this.val = (val===undefined ? 0 : val)
    //      this.next = (next===undefined ? null : next)
    //  }
}
/**
 * 
 * @param head 
 * @param val 
 * @returns 
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 */
function removeElements(head: ListNode | null, val: number): ListNode | null {
    if(head == null){
        return null;
    }
    head.next = removeElements(head.next, val);
    console.log(head, 'head')
    console.log( head.val == val ? head.next : head.val, head.val == val, '0')
    return head.val == val ? head.next : head;
}

removeElements({ val: 1, next: { val: 2, next: { val: 6, next: {val: 3, next: {val: 4, next: {val: 5, next: {val: 6, next: null}}}} } } }, 6);
