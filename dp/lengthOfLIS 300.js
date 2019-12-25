/**
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。

示例:

输入: [10,9,2,5,3,7,101,18]
输出: 4 
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
说明:

可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
你算法的时间复杂度应该为 O(n2) 。
进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?

 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let N = nums.length
    if(N < 1) return null
    let dp = new Array(N + 1).fill(1)
    for(let i = 1; i <= N; i++) {
        let max = Number.NEGATIVE_INFINITY
        for(let j = 1; j < i; j++) {
            if(nums[i - 1] > nums[j - 1]) {
                dp[i] = Math.max(max, dp[j] + 1)
                max = dp[i]
            }
        }
    }
    return Math.max(...dp)
};
lengthOfLIS([1,3,6,7,9,4,10,5,6])
