"use strict";
/**
 * 递归 暴力求解
 */
// 输入蛋糕价格列表 priceList ，求重量为 n 蛋糕的最高售价
const priceList = [0, 2, 3, 6, 7, 11, 15];
const n = 6;
function maxCakePrice(n, priceList) {
    if (n <= 1)
        return priceList[n]; // 蛋糕重量 <= 1 时直接返回
    let res = 0;
    for (let i = 0; i < n; i++) // 从 n 种组合种选择最高售价的组合作为 f(n)
        res = Math.max(res, maxCakePrice(i, priceList) + priceList[n - i]);
    return res; // 返回 f(n)
}
maxCakePrice(n, priceList);
/**
 * 记忆化递归
 */
// 输入蛋糕价格列表 priceList ，求重量为 n 蛋糕的最高售价
function maxCakePrice1(n, priceList, dp) {
    if (n <= 1)
        return priceList[n]; // 蛋糕重量 <= 1 时直接返回
    let res = 0;
    for (let i = 0; i < n; i++) { // 从 n 种组合种选择最高售价的组合作为 f(n)
        let f_i = dp[i] != 0 ? dp[i] : maxCakePrice1(i, priceList, dp);
        res = Math.max(res, f_i + priceList[n - i]);
    }
    dp[n] = res; // 记录 f(n) 至 dp 数组
    return res; // 返回 f(n)
}
function maxCakePriceMemorized(n, priceList) {
    let dp = new Array(n + 1).fill(0);
    return maxCakePrice1(n, priceList, dp);
}
maxCakePriceMemorized(n, priceList);
/**
 * 动态规划
 */
// 输入蛋糕价格列表 priceList ，求重量为 n 蛋糕的最高售价
function maxCakePrice2(n, priceList) {
    if (n <= 1)
        return priceList[n]; // 蛋糕重量 <= 1 时直接返回
    let dp = new Array(n + 1).fill(0); // 初始化 dp 列表
    for (let j = 1; j <= n; j++) { // 按顺序计算 f(1), f(2), ..., f(n)
        for (let i = 0; i < j; i++) // 从 j 种组合种选择最高售价的组合作为 f(j)
            dp[j] = Math.max(dp[j], dp[i] + priceList[j - i]);
    }
    return dp[n];
}
maxCakePrice2(n, priceList);
