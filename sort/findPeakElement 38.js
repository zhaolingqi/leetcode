/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let N = nums.length
    let mid = parseInt((N - 1) / 2)
    let start = 0, end = N - 1
    while(start < end) {
        if(nums[mid] < nums[mid + 1]) {
            start = mid + 1
            mid = parseInt((start + end) / 2)
        } else {
            end = mid
            mid = parseInt((start + end) / 2)
        }
    }
    return end
};
findPeakElement([1,2,5,4,3,2,1])