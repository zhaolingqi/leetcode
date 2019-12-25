/**
 * 前 K 个高频元素
给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

示例 1:

输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
示例 2:

输入: nums = [1], k = 1
输出: [1]
说明：

你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let N = nums.length
    let map = new Map()
    for(let i = 0; i < N; i++) {
        if(!map.has(nums[i])) {
            map.set(nums[i], 1)
        } else {
            let val = map.get(nums[i])
            map.set(nums[i], val + 1)
        }
    }
    // console.log(map)
    let arr = []
    let iterator = map.entries()
    let obj = iterator.next()
    while(obj.value) {
        arr.push(obj.value)
        obj = iterator.next()
    }
    arr.sort((a, b) => {
        return b[1] - a[1]
    })
    let output = []
    for(let i = 0; i < k;i++) {
        output.push(arr[i][0])
    }
    return output
};

let nums = [2,3,3,5,5,6,6,7,8,1,1,1,2,2,3]
let k = 2
topKFrequent(nums, k)