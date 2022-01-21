class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
var addTwoNumbers = function (l1, l2) {
    // “一般递归的特点”：
    // 1 2种实现 —— dfs（深度优先搜索） 和 bfs（广度优先搜索）
    // 2 3个核心
    // 1）确定返回值得类型及其含义
    // 2）确定递归的出口条件及对应的值
    // 3）递归处理的函数体
    const dfs = (l1, l2, carry) => {
        // 其实可以简写成 if (!l1 && !l2 && !carry)。
        // 1）下面3行是递归出口
        if (l1 === null && l2 === null && carry === 0) {
            return null;
        }
        // 2）下面7-8行是递归处理的函数体
        // 此时必定是 l1、l2或carry中存在“真值”（即有 非null 或 非0 值）
        const val_1 = l1 ? l1.val : 0, val_2 = l2 ? l2.val : 0, next_1 = l1 ? l1.next : null, next_2 = l2 ? l2.next : null, sum = (val_1 + val_2 + carry);
        let resLink = new ListNode(sum % 10);
        // 边界：别漏了 parseInt ，别的语言也需可直接 sum/10 ！
        resLink.next = dfs(next_1, next_2, sum / 10);
        // “本次递归”的返回值
        return resLink;
    };
    return dfs(l1, l2, 0);
};
