/**
 * 给你一个二维整数数组 nums ，其中 nums[i] 是由 不同 正整数组成的一个非空数组，
 * 按 升序排列 返回一个数组，数组中的每个元素在 nums 所有数组 中都出现过。
 * 
 * 例子；
 * 输入：nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
 * 输出：[3,4]
 */
function intersection(nums: number[][]): number[] {
    let n = nums.length;
    let firstItem = nums[0]
    for (let i = 0; i < n; i++) {
        firstItem = firstItem.filter(item => new Set(nums[i]).has(item))
    }
    return firstItem.sort((a, b) => a - b)
};

/**
 * arr.filter() && set.has()
 * const arr1 = [1,2,3,4,5]
 * const set2 = new Set([3,4,5,9])
 * console.log(arr1.filter(item => set2.has(item)))
 * 
 * 结果： [3, 4, 5]
 * 
 * 
 * set.has()
 * const set1 = new Set([1, 2, 3, 4, 5])
 * set1.has(1)
 * 
 * 结果： true
 */
