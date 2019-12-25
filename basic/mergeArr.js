/**
 *   合并两个有序数组
给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = 0, j = 0
    while(i < m || j < n) {
        if(i === m) nums1.push(nums2[j++])
        else if(j === n) nums1.push(nums1[i++])
        else {
            if(nums1[i] <= nums2[j]) {
                nums1.push(nums1[i++])
            } else nums1.push(nums2[j++])
        }
    }
    console.log(nums1)
    // let temp1 = nums1.shift()
    // let temp2 = nums2.shift()
    // let count = 0, i = 0, j = 0
    // while(count < (m + n)) {
    //     if(temp1 <= temp2) {
    //         if(i === m) {
    //             nums1.push(temp2)
    //             console.log(nums1)
    //             temp1 = nums1.shift()
    //             temp2 = nums2.shift()
    //             j++
    //             count ++
    //         } else{
    //             nums1.push(temp1)
    //             console.log(nums1)
    //             temp1 = nums1.shift()
    //             i++
    //             count ++
    //         }
    //     } else {
    //         nums1.push(temp2)
    //         console.log(nums1)
    //         temp2 = nums2.shift()
    //         j++
    //         count ++
    //     }
    // }
    // console.log(nums1)
};
merge([1,2,3,0,0,0],3,[2,5,6],3)