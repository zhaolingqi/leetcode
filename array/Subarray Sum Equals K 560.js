/**
 * 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {

    /**
     * 枚举
     */

    // let N = nums.length
    // let count = 0
    // for(let i = 0; i < N; i++) {
    //     let sum = 0
    //     for(let j = i; j >= 0; j--) {
    //         sum += nums[j]
    //         if(sum === k) count ++
    //     }
    // }
    // return count

    /**
     * 优化
     * 前缀和+哈希表
     */
    let map = new Map();
    map.set(0, 1);
    let count = 0, pre = 0;
    for (const x of nums) {
        pre += x;
        if (map.has(pre - k)) count += map.get(pre - k);
        if (map.has(pre)) map.set(pre, map.get(pre) + 1);
        else map.set(pre, 1);
    }
    return count;

};
subarraySum([-1, -3, -6, 2, 3, 2], 2)