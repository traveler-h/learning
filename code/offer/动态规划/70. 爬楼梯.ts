/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 输入：n = 2
 * 输出：2
 * 解释：有两种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶
 * 2. 2 阶
 * 
 * 输入：n = 3
 * 输出：3
 * 解释：有三种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶 + 1 阶
 * 2. 1 阶 + 2 阶
 * 3. 2 阶 + 1 阶
 */

// res: [1, 2, 3, 5, 8, 13, 21...]

/**
 * 方法一： 暴力递归 
 * 时间复杂度：O(2^n)
 * 空间复杂度：O(N)
 */
function climbStairs(n: number): number {
    if (n === 1) return 1
    if (n === 2) return 2
    return climbStairs(n - 1) + climbStairs(n - 2)
};

const res = climbStairs(6)
console.log(res)

/**
 * 方法二： 记忆化递归 
 * 时间复杂度：O(N)
 * 空间复杂度：O(N)
 */
function climbStairs2(n: number): number {

    function climbStairsMemo(n: number, dp: number[]): number {
        if (n === 1) return 1
        if (n === 2) return 2
        if (dp[n] > 0) return dp[n]
        return climbStairsMemo(n - 1, dp) + climbStairsMemo(n - 2, dp)
    }
    let dp: number[] = new Array(n + 1).fill(0)
    return climbStairsMemo(n, dp)
};

const res_2 = climbStairs2(6)
console.log(res_2)


/**
 * 方法三：动态规划（数组）
 * 时间复杂度：O(N)
 * 空间复杂度：O(N)
 */

function climbStairs3(n: number): number {
    let dp: number[] = [1, 2]
    if (n < 2) return dp[n]
    let res: number = 0
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 2] + dp[i - 1]
    }
    return dp[dp.length - 1]
}

const res_3 = climbStairs3(6)
console.log(res_3)

/**
 * 方法四： 动态规划(滚动数组)
 * 时间复杂度：O(N)
 * 空间复杂度：O(1)
 */

function climbStairs4(n: number): number {
    if (n === 1) return 1
    if (n === 2) return 2
    let a = 1, b = 2
    for (let i = 2; i < n; i++) {
        b = a + b
        a = b - a
    }
    return b
}

const res_4 = climbStairs4(6)
console.log(res_4)

/**
 * 方法五： 矩阵快速幂
 * 时间复杂度：同快速幂，O(logn)。
 * 空间复杂度：O(1)。
 */
const climbStairs5 = function (n: number) {
    const q = [[1, 1], [1, 0]];
    const res = pow(q, n);
    return res[0][0];
};

const pow = (a: number[][], n: number) => { // 返回 a 的 n 次幂，即 a^n
    let ret: number[][] = [[1, 0], [0, 1]];
    while (n > 0) {
        if ((n & 1) === 1) { // if n 为奇数
            ret = multiply(ret, a);
        }
        n >>= 1; // n向右移一位
        a = multiply(a, a);
    }
    return ret;
}

const multiply = (a: number[][], b: number[][]) => { // 矩阵乘法
    const c: number[][] = new Array(2).fill(0).map(() => new Array(2).fill(0));
    for (let i: number = 0; i < 2; i++) {
        for (let j: number = 0; j < 2; j++) {
            c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j];
        }
    }
    return c;
}

const res_5 = climbStairs5(6)
console.log(res_5)
/**
 * 方法六：通项公式
 * 复杂度分析：代码中使用的 pow 函数的时空复杂度与 CPU 支持的指令集相关
 */
const climbStairs6 = function (n: number): number {
    const sqrt5: number = Math.sqrt(5);
    const fibn: number = Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1);
    return Math.round(fibn / sqrt5);
};

const res_6 = climbStairs6(6)
console.log(res_6)
