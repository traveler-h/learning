"use strict";
/**
 * 暴力求解
 * 递归
 * 时间复杂度为 O(2^n)
 * 随着n的增长出现指数级爆炸
 */
function fibonacci(n) {
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
fibonacci(8); // 21
/**
 * 记忆化递归
 */
function fibonacci1(n, dp) {
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    if (dp[n] !== 0)
        return dp[n]; // 若 f(n) 以前已经计算过，则直接返回记录的解
    dp[n] = fibonacci1(n - 1, dp) + fibonacci1(n - 2, dp);
    return dp[n];
}
// 求第 n 个斐波那契数
function fibonacciMemorized(n) {
    let dp = new Array(n + 1).fill(0); // 用于保存 f(0) 至 f(n) 问题的解
    return fibonacci1(n, dp);
}
fibonacciMemorized(8);
// 借助数组辅助，动态规划
function fibonacci2(n) {
    let dp = [0, 1, 1];
    if (n <= 2)
        return dp[n];
    for (let i = 3; i <= n; ++i) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n - 1];
}
fibonacci2(8);
// 优化空间复杂度--动态规划
function fibonacci2_r(n) {
    if (n <= 0)
        return 0;
    if (n <= 1)
        return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        b = a + b;
        a = b - a;
    }
    return b;
}
fibonacci2_r(8);
