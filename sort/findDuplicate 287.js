/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let N = nums.length
    // for(let i = 0; i < N;i ++) {
    //     if(nums.lastIndexOf(nums[i]) !== i) return nums[i]
    // }
    let set = new Set()
    for(let i = 0; i < N; i++) {
        if(set.has(nums[i])) return nums[i]
        else set.add(nums[i])
    }
    
};