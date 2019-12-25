/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let N = nums.length
    if(N < 1) return null
    /**
     * 方法一，利用indexOf和lastIndexOf来进行判断
     */
    // for(let i = 0; i < N; i++) {
    //     if(nums.lastIndexOf(nums[i]) === i && nums.indexOf(nums[i]) === i) {
    //         return nums[i]
    //     }
    // }  
    /**
     * 方法二。利用异或计算
     * 0 ^ num[i] = num[i]
     * num[i] ^ num[i] = 0
     */
    let temp = 0
    for(let i = 0; i < N; i++) {
        temp ^= nums[i]
    }  
    return temp
};

console.log(1^1)