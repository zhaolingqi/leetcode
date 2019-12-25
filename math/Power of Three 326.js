/**
 * 给定一个整数，写一个函数来判断它是否是 3 的幂次方。

示例 1:

输入: 27
输出: true
示例 2:

输入: 0
输出: false
示例 3:

输入: 9
输出: true
示例 4:

输入: 45
输出: false
进阶：
你能不使用循环或者递归来完成本题吗？
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    // let i = Math.log2(n) / Math.log2(3)
    // console.log(i % 1)
    // return i % 1 === 0
    if(n <= 0)return false
    while(n > 1) {
        if(n % 3 === 0) {
            n = n / 3
        } else return false
    }
    return true
};
console.log(isPowerOfThree(1))