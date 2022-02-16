/**
 * 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值
 * 你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。
 * 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
 * 输出: [3,3,5,5,6,7] 
 * 解释: 
 *   滑动窗口的位置                最大值
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 *  1 [3  -1  -3] 5  3  6  7       3
 *  1  3 [-1  -3  5] 3  6  7       5
 *  1  3  -1 [-3  5  3] 6  7       5
 *  1  3  -1  -3 [5  3  6] 7       6
 *  1  3  -1  -3  5 [3  6  7]      7
 */

const nums = [1, 3, -1, -3, 5, 3, 6, 7]
const k = 3

/**
 * 
 * @param nums 
 * @param k 
 * @returns 
 * 
 * 时间复杂度O(N)
 * 空间复杂度O(N)
 */
function maxSlidingWindow(nums: number[], k: number): number[] {
    if (nums.length === 0) return []
    let resArr: Array<number> = []
    for (let i: number = 0; i < nums.length - k + 1; i++) {
        let temp = nums.slice(i, i + k)
        resArr.push(Math.max(...temp))
    }
    return resArr
};

maxSlidingWindow(nums, k)
/**
 * 优先队列
 * @param nums 
 * @param k 
 * @returns 
 */
// 定义堆
class Bq {
    public arr: Array<number>
    public tree: Array<number>
    constructor(arr: Array<number>) {
        this.tree = arr.length > 0 ? arr : []
    }
    enqueue(value: number) {
        this.tree.push(value)
    }
    dequeue() {
        let maxIndex = 0
        for (let i = 0; i < this.tree.length; i++) {
            if (this.tree[i] > this.tree[maxIndex]) {
                maxIndex = i
            }
        }
        const res = this.tree.slice(maxIndex, maxIndex + 1)
        this.tree.shift()
        return res
    }

}

/**
 * 
 * @param nums 
 * @param k 
 * @returns 
 * 
 * 时间复杂度O(nlogn)
 * 空间复杂度O(N)
 */
function maxSlidingWindow1(nums: number[], k: number): number[] {

    if (nums.length === 0) return []
    const result: number[] = []
    let startQueue = new Bq(nums.slice(0, k))
    let i: number = k
    while (i <= nums.length) {
        const curMax = startQueue.dequeue()
        result.push(...curMax)
        startQueue.enqueue(nums[i])
        i += 1
    }
    return result
}
maxSlidingWindow1(nums, k)


/**
 * 单调队列
 * 
 * @param nums 
 * @param k 
 * @returns
 * 
 * 时间复杂度O(N)
 * 空间复杂度O(k)
 * 
 */
function maxSlidingWindow2(nums: number[], k: number): number[] {
    const length = nums.length
    let queue: number[] = []
    for (let i = 0; i < k; i++) {
        while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
            queue.pop();
        }
        queue.push(i);
    }
    const ans = [nums[queue[0]]]
    for (let i = k; i < length; i++) {
        while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
            queue.pop();
        }
        queue.push(i);
        while (queue[0] <= i - k) {
            queue.shift();
        }
        ans.push(nums[queue[0]]);
    }
    return ans;
}

// [1, 3, -1, -3, 5, 3, 6, 7]
maxSlidingWindow2(nums, k)

function maxSlidingWindow2_1(nums: number[], k: number): number[] {
    let res: number[] = new Array(nums.length - k + 1)
    let queue: number[] = []
    for (let right: number = 0; right < nums.length; right++) {
        // 如果队列不为空且当前考察元素大于等于队尾元素，则将队尾元素移除。
        // 直到，队列为空或当前考察元素小于新的队尾元素
        while (queue.length && nums[right] >= nums[queue[queue.length - 1]]) {
            queue.pop();
        }
        // 存储元素下标
        queue.push(right);
        // 计算窗口左侧边界
        let left: number = right - k + 1;
        // 当队首元素的下标小于滑动窗口左侧边界left时
        // 表示队首元素已经不再滑动窗口内，因此将其从队首移除
        if (queue[0] < left) {
            queue.shift();
        }
        // 由于数组下标从0开始，因此当窗口右边界right+1大于等于窗口大小k时
        // 意味着窗口形成。此时，队首元素就是该窗口内的最大值
        if (right + 1 >= k) {
            res[left] = nums[queue[0]];
        }
    }
    return res
}
maxSlidingWindow2_1(nums, k)

/**
 * 分块+预处理
 */