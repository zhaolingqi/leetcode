/**
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
说明:

你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function (nums, k) {
//     nums.sort((a, b) => {
//         return b - a
//     })
//     console.log(nums)
//     return nums[k]
// };
var findKthLargest = function(nums, k) {
    
// 构造最大堆
    let N = nums.length
    for(let i = N; i >= 1; i--) {
        nums[i] = nums[i - 1]
    }
    for(let j = parseInt(N / 2); j >= 1; j--)
        sink(j)
    while(N > 1) {
        exch(1, N--)
        sink(1)
    }
    console.log(nums)

    function exch(a, b) {
        let temp = nums[a]
        nums[a] = nums[b]
        nums[b] = temp
        return nums
    }
    
    // 构建由k个值组成的最小堆
    // 当新进来的数比最小堆的第一个元素大时，删除第一个元素，并加入新的元素，重新堆排序
    // 堆的有序化
    // 上浮
    function swim(k) {
        while (k > 1 && nums[parseInt(k / 2)] < nums[k]) {
            exch(parseInt(k / 2), k)
            k = parseInt(k / 2)
        }
    }
    
    // 下沉
    function sink(k) {
        while(2*k <= N) {
            let j = 2*k
            if(j < N && nums[j] < nums[j + 1]) j++
            if(nums[k] > nums[j]) break;
            exch(k, j)
            k = j
        }
    }
}
findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)

