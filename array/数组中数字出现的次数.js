/**
 * 一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。
 */
/**
 * 如果只有除一个数字之外，其他数字都出现了两次，则只需将数组中的每个数字异或，得到的便是结果
 * 现在可以将整个数组分成两部分，各包含一个只出现一次的数字
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    let N = nums.length
    let sum = 0
    for(let num of nums) {
        sum ^= num
    }
    // 选取sum中任意一位不为0的位数作为分类标准
    let num1 = 0
    let num2 = 0
    let index = 1
    while((index & sum) === 0) index = index << 1
    for(let num of nums) {
        if((num & index) === 0) {
            num1 ^= num
        } else num2 ^= num
    }
    return [num1, num2]
};

singleNumbers([4,1,4,6])