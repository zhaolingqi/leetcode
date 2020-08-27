/**
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
    let N = nums1.length
    let M = nums2.length
    if(N > M) {
        [nums1, nums2] = [nums2, nums1]
        let temp = M
        M = N
        N = temp
    }
    let start = 0, end = N
    let midLen = Math.floor((M + N + 1) / 2)
    while(start <= end) {
        let i = Math.floor((start + end) / 2)
        let j = midLen - i
        if(nums1[i] < nums2[j - 1]) {
            start = i + 1
        } else if (nums1[i - 1] > nums2[j]) {
            end = i - 1
        } else {
            let maxLeft = 0
            if(i === 0) maxLeft = nums2[j - 1]
            else if(j === 0) maxLeft = nums1[i - 1]
            else maxLeft = Math.max(nums1[i - 1], nums2[j - 1])
            if((N + M) % 2 === 1) return maxLeft
            let minRight = 0
            if(i === N) minRight = nums2[j]
            else if(j === M) minRight = nums1[i]
            else minRight = Math.min(nums1[i], nums2[j])

            return (minRight + maxLeft) / 2
        }
    }
    return 0.0
};
let res = findMedianSortedArrays([1],[2,3])
console.log(res)