// 给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，
//返回一个长度为 n + 1 的数组 ans 作为答案。
/**
 * 
 * @param n 
 * @returns 
 * 时间复杂度O(n^2)
 * 空间复杂度O(n)
 */
function countBits(n: number): number[] {
    let _res = []
    for (let i = 0; i <= n; i++) {
        let count = 0
        for (let j of i.toString(2)) {
            if (j === '1') {
                count++
            }
        }
        _res.push(count)
    }
    return _res
};

const res = countBits(5)
console.log(res)


/**
 * 方法一：Brian Kernighan 算法
 * Brian Kernighan 算法的原理是：对于任意整数 x，令 x=x & (x−1)，
 * 该运算将 x 的二进制表示的最后一个 1 变成 0。
 * 因此，对 x 重复该操作，直到 x 变成 0，则操作次数即为 x 的「一比特数」。
 * 对于给定的 n，计算从 0 到 n 的每个整数的「一比特数」的时间都不会超过 O(logn)，
 * 因此总时间复杂度为 O(nlogn)。
 * 空间复杂度为O(1)，除返回数组外，其余空间为常数级
 * @param n 
 */
function countBits1(n: number): number[] {
    const bits: number[] = new Array(n + 1).fill(0);
    const countOnes = (x: number) => {
        let ones: number = 0;
        while (x > 0) {
            x &= (x - 1);
            ones++;
        }
        return ones;
    }
    for (let i = 0; i <= n; i++) {
        bits[i] = countOnes(i);
    }
    return bits
}

const res_1 = countBits1(5)
console.log(res_1)


/**
 * 方法二：动态规划——最高有效位
 * 方法一需要对每个整数使用 O(logn) 的时间计算「一比特数」。
 * 可以换一个思路，当计算 i 的「一比特数」时，如果存在 0 <= j < i，
 * j 的「一比特数」已知，且 i 和 j 相比，i 的二进制表示只多了一个 1，
 * 则可以快速得到 i 的「一比特数」。
 * 令bits[i] 表示 i 的「一比特数」，
 * 则上述关系可以表示成：bits[i]=bits[j]+1。
 * 对于正整数 x，如果可以知道最大的正整数 y，使得 y <= x 且 y 是 2 的整数次幂，
 * 则 y 的二进制表示中只有最高位是 1，其余都是 0，此时称 y 为 x 的「最高有效位」。
 * 令 z=x−y，显然 0 <= z < x，则 bits[x]=bits[z]+1。
 * 为了判断一个正整数是不是 2 的整数次幂，可以利用方法一中提到的按位与运算的性质。
 * 如果正整数 y 是 2 的整数次幂，则 y 的二进制表示中只有最高位是 1，其余都是 0，
 * 因此 y & (y−1)=0。由此可见，正整数 y 是 2 的整数次幂，当且仅当 y & (y−1)=0。
 * 显然，0 的「一比特数」为 0。使用 highBit 表示当前的最高有效位，
 * 遍历从 1 到 n 的每个正整数 i，进行如下操作。
 * 如果 i & (i−1)=0，则令 highBit=i，更新当前的最高有效位。
 * i 比 i−highBit 的「一比特数」多 1，由于是从小到大遍历每个整数，
 * 因此遍历到 i 时，i−highBit 的「一比特数」已知，
 * 令 bits[i]=bits[i−highBit]+1。
 * 时间复杂度：O(n)。对于每个整数，只需要 O(1) 的时间计算「一比特数」。
 * 空间复杂度：O(1)。除了返回的数组以外，空间复杂度为常数。
 * @param n 
 * 
 */
const countBits2 = function(n: number): number[] {
    const bits: number[] = new Array(n + 1).fill(0);
    let highBit: number = 0
    for (let i: number = 1; i <= n; i++) {
        if ((i & (i - 1)) == 0) {
            highBit = i;
        }
        bits[i] = bits[i - highBit] + 1
    }
    return bits
}

const res_2 = countBits2(5)
console.log(res_2)


/**
 * 方法三：动态规划——最低有效位
 * 方法二需要实时维护最高有效位，当遍历到的数是 2 的整数次幂时，需要更新最高有效位。
 * 如果再换一个思路，可以使用「最低有效位」计算「一比特数」。
 * 对于正整数 x，将其二进制表示右移一位，等价于将其二进制表示的最低位去掉，
 * 得到的数是 ⌊x/2⌋。如果 bits[⌊ x/2 ⌋] 的值已知，则可以得到 bits[x] 的值：
 * 如果 x 是偶数，则 bits[x]=bits[⌊ x/2 ⌋]
 * 如果 x 是奇数，则 bits[x]=bits[⌊ x/2 ⌋] + 1
 * 上述两种情况可以合并成：bits[x] 的值等于 bits[x]=bits[⌊ x/2 ⌋] 的值加上 x 除以 2 的余数。
 * 由于 ⌊x/2⌋可以通过 x >> 1 得到，x 除以 2 的余数可以通过 x & 1 得到，
 * 因此有：bits[x]=bits[x >> 1]+(x & 1)。
 * 遍历从 1 到 n 的每个正整数 i，计算 bits 的值。最终得到的数组 bits 即为答案。
 * 时间复杂度：O(n)。对于每个整数，只需要 O(1) 的时间计算「一比特数」。
 * 空间复杂度：O(1)。除了返回的数组以外，空间复杂度为常数。
 * @param n 
 */
function countBits3(n: number): number[] {
    const bits: number[] = new Array(n + 1).fill(0);
    for (let i: number = 1; i <= n; i++) {
        bits[i] = bits[i >> 1] + (i & 1);
    }
    return bits;
}
const res_3 = countBits3(5)
console.log(res_3)


/**
 * 方法四：动态规划——最低设置位
 * 定义正整数 x 的「最低设置位」为 x 的二进制表示中的最低的 1 所在位。
 * 例如，10 的二进制表示是 1010 ，其最低设置位为 2，对应的二进制表示是 10。
 * 令 y = x & (x−1)，则 y 为将 x 的最低设置位从 1 变成 0 之后的数，
 * 显然 0 <= y < x，bits[x] = bits[y] + 1。
 * 因此对任意正整数 x，都有 bits[x] = bits[x & (x−1)]+1。
 * 遍历从 1 到 n 的每个正整数 i，计算 bits 的值。最终得到的数组 bits 即为答案。
 * 时间复杂度：O(n)。对于每个整数，只需要 O(1) 的时间计算「一比特数」。
 * 空间复杂度：O(1)。除了返回的数组以外，空间复杂度为常数。
 * @param n 
 */
function countBits4(n: number): number[] {
    const bits: number[] = new Array(n + 1).fill(0);
    for (let i: number = 1; i <= n; i++) {
        bits[i] = bits[i & (i - 1)] + 1;
    }
    return bits;
}

const res_4 = countBits4(6)
console.log(res_4)

