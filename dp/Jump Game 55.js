/**
 * 给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个位置。
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let N = nums.length
    // let flags = new Array(N).fill(false)
    // flags[0] = true
    // for(let i = 0; i < N - 1; i++) {
    //     if(flags[i]) {
    //         for(let j = 1; j <= nums[i]; j++) {
    //             flags[i + j] = true
    //         }
    //     }
    // }
    // console.log(flags, flags[N - 1])

    let maxLength = nums[0]
    for(let i = 1; i < N - 1; i++) {
        if(i <= maxLength) {
            maxLength = i + nums[i] > maxLength ? i + nums[i] : maxLength
        } else return false
    }
    return maxLength >= N - 1
};

console.log(canJump([2,3,1,1,4]))