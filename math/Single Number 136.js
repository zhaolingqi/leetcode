/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {

    // 利用Array.prototypr.indexOf和Array.prototypr.lastIndexOf函数进行判断

    // let N = nums.length
    // if(N < 1) return null
    // for(let i = 0; i < N; i++) {
    //     if(nums.lastIndexOf(nums[i]) === i && nums.indexOf(nums[i]) === i) {
    //         return nums[i]
    //     }
    // }  

    // 利用map。 这个方法需要使用额外的数据空间
    // let N = nums.length
    // let set = new Set()
    // if (N < 1) return null
    // for(let i = 0; i < N; i++) {
    //     if(set.has(nums[i])) {
    //         set.delete(nums[i])
    //     } else {
    //         set.add(nums[i])
    //     }
    // }
    // let Ite = set.values()
    // console.log(Ite.next().value)
    
    // 利用位异或操作
    let N = nums.length
    let sum = 0
    for(let i = 0; i < N; i++) {
        sum = sum ^ nums[i]
    }
    return sum
};
singleNumber([4,1,2,1,2])