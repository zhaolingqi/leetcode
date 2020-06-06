/**
 * 给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    // let N = nums.length
    // if(N <= 1) return 0
    // let dp = new Array(N)
    // dp[0] = 0
    // for(let i = 1; i < N; i++) {
    //     let temp = Number.POSITIVE_INFINITY
    //     for(let j = 0; j < i; j++) {
    //         if(nums[j] >= i - j) {
    //             temp = temp < dp[j] + 1 ? temp : dp[j] + 1
    //         }
    //     }
    //     dp[i] = temp
    // }
    // // if(dp[N -1] === Number.POSITIVE_INFINITY) return false
    // return dp[N - 1]

    let N = nums.length
    let maxLength = 0
    let step = 0
    let lastMaxLength = 0
    for (let i = 0; i < N - 1; i++) {
        maxLength = i + nums[i] > maxLength ? i + nums[i] : maxLength
        if(i === lastMaxLength) {
            lastMaxLength = maxLength
            step++
        }
    }
    return step
};
jump([2,3,1,1,4])