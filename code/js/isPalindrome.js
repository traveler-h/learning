function isPalindrome(head) {
    if (head == null || head.next == null)
        return true;
    var slow = head;
    var fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    console.log(slow, fast);
    var left;
    var right;
    if (fast == null) {
        left = head;
        right = reverse(slow);
        console.log(right, left);
    }
    else {
        left = head;
        right = reverse(slow.next);
        console.log(right, left);
    }
    while (right && right.next) {
        if (right.val != left.val)
            return false;
        right = right.next;
        left = left.next;
    }
    return true;
    // // 重新定义一个指针，指回头部
    // let left = head;
    // // 反转后半部分链表
    // let right = reverse(slow);
    // console.log(left, right)
    // while (right != null) {
    //     if (left.val != right.val) {
    //         console.log("false")
    //         return false;
    //     }
    //     left = left.next;
    //     right = right.next;
    // }
    // return true;
}
;
// 反转链表
function reverse(head) {
    var result = null;
    var curr = head;
    while (curr != null) {
        var temp = curr.next;
        curr.next = result;
        result = curr;
        curr = temp;
    }
    return result;
}
var node = { val: 1, next: { val: 2, next: null } };
isPalindrome(node);
