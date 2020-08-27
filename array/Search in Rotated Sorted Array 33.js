/**
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是 O(log n) 级别。

 */
/**
 * 二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let N = nums.length
    if(N === 2) {
        for(let i = 0; i < N; i++) {
            if(nums[i] === target) return i
        }
        return -1
    }
    let start = 0, end = N - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        // 中间值在前半个递增序列中
        if (nums[mid] > nums[start]) {
            if (target > nums[mid]) {
                start = mid + 1
            } else if (target < nums[mid]) {
                if (target < nums[start]) {
                    start = mid + 1
                } else if (target > nums[start]) {
                    end = mid - 1
                } else return start
            } else return mid
        }
        // 中间值在后半个递增序列中
        else if (nums[mid] < nums[start]) {
            if (target < nums[mid]) {
                end = mid - 1
            } else if (target > nums[mid]) {
                if (target < nums[end]) {
                    start = mid + 1
                } else if (target > nums[end]) {
                    end = mid - 1
                } else return end
            } else return mid
        } else {
            for(let i = start; i <= end; i++) {
                if(nums[i] === target) return i
            }
            return -1
        }
    }
    return -1
};

let res = search([1,2,3,4,5],5)
console.log(res)