/**
 * 给定长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

示例:

输入: [1,2,3,4]
输出: [24,12,8,6]
说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。

进阶：
你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let N = nums.length
    let output = new Array(N)
    let left = new Array(N - 1)
    let right = new Array(N - 1)
    left[0] = nums[0]
    right[0] = nums[N - 1]
    for(let i = 1; i < N - 1; i++) {
        left[i] = left[i - 1] * nums[i]
    }
    for(let i = 1; i < N - 1; i++) {
        right[i] = right[i - 1] * nums[N - 1 - i]
    }
    output[0] = right[N - 2]
    output[N - 1] = left[N - 2]
    for(let i = 1; i < N - 1; i++) {
        output[i] = left[i - 1] * right[N - 2 - i]
    }
    return output
};
productExceptSelf([2,3,4,5,6])