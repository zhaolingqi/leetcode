/**
 * 给你一个整数数组 nums 和一个整数 k。

如果某个 连续 子数组中恰好有 k 个奇数数字，我们就认为这个子数组是「优美子数组」。

请返回这个数组中「优美子数组」的数目。

 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    let N = nums.length
    let flags = []
    let res = 0
    let first_start = 0, first_end = 0
    let last_start = 0, last_end = 0
    for (let i = 0; i < N; i++) {
        if (nums[i] % 2 !== 0) flags.push(i)
    }
    if (flags.length < k) return 0
    if (flags.length === k) {
        first_start = 0
        first_end = flags[0]
        last_start = flags[k - 1]
        last_end = N - 1
        res += (first_end - first_start + 1) * (last_end - last_start + 1)
        return res
    }
    for (let i = 0; i <= flags.length - k; i++) {
        if (i === 0) {
            first_end = flags[i]
            last_start = flags[i + k - 1]
            last_end = flags[i + k] - 1
            res += (first_end - first_start + 1) * (last_end - last_start + 1)
        } else if (i === flags.length - k) {
            first_start = flags[i - 1] + 1
            first_end = flags[i]
            last_start = flags[i + k - 1]
            last_end = N - 1
            res += (first_end - first_start + 1) * (last_end - last_start + 1)
        } else {
            first_start = flags[i - 1] + 1
            first_end = flags[i]
            last_start = flags[i + k - 1]
            last_end = flags[i + k] - 1
            res += (first_end - first_start + 1) * (last_end - last_start + 1)
        }
    }
    console.log(res)
};
numberOfSubarrays([1,1,1,1,1], 1)