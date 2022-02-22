/**
 * 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。
 * 求所有子数组的和的最大值。
 * 要求时间复杂度为O(n)。
 * 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */
var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
function maxSubArray(nums) {
    if (nums.length === 0)
        return 0;
    var max = nums[0];
    var pre = 0;
    nums.forEach(function (item) {
        pre = Math.max(pre + item, item);
        console.log(pre);
        max = Math.max(max, pre);
    });
    return max;
}
;
maxSubArray(nums);
