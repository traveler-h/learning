/**
 * 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少
 * 输入: [7,1,5,3,6,4]
 * 输出: 5
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，
 * 最大利润 = 6-1 = 5 。注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格
 */
const nums: number[] = [7,1,5,3,6,4]
function maxProfit(prices: number[]): number {
    let max = 0
    for (let i = 1; i < prices.length; i++) { // 1, 2, 3, 4, 5
        let min = prices[i - 1] // 7, 1, 1, 1, 1
        if (min < prices[i]) { // f, t, t, t, t
            max = Math.max(max, prices[i] - min) // 4, 4, 5, 5
            prices[i] = min // prices[2] = 1, prices[3] = 1, prices[4] = 1, prices[5] = 1
        }
    }

    return max
};
maxProfit(nums)