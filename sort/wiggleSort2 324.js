/**
 * 摆动排序II
 * 给定一个无序的数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。

示例 1:

输入: nums = [1, 5, 1, 1, 6, 4]
输出: 一个可能的答案是 [1, 4, 1, 5, 1, 6]
示例 2:

输入: nums = [1, 3, 2, 2, 3, 1]
输出: 一个可能的答案是 [2, 3, 1, 3, 1, 2]
说明:
你可以假设所有输入都会得到有效的结果。

进阶:
你能用 O(n) 时间复杂度和 / 或原地 O(1) 额外空间来实现吗？
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
    let N = nums.length
    let i = 0
    nums.sort((a, b) => {
        return a - b
    })
    let mid = parseInt((N) / 2)
    if (N % 2 !== 0) {
        mid++
    }
    let smaller = nums.slice(0, mid)
    let larger = nums.slice(mid, N)
    console.log(smaller, larger)
    for (i = 0; i < parseInt(N / 2); i++) {
        nums[2 * i] = smaller[smaller.length - 1 - i]
        nums[2 * i + 1] = larger[parseInt(N / 2) - 1 - i]
    }
    if (N % 2 !== 0) nums[2 * i] = smaller[smaller.length - 1 - i]
    console.log(nums)
};
wiggleSort([1,5,1,1,6,4])