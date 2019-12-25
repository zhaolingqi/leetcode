/**
 * 给定一个整数 n，返回 n! 结果尾数中零的数量。

示例 1:

输入: 3
输出: 0
解释: 3! = 6, 尾数中没有零。
示例 2:

输入: 5
输出: 1
解释: 5! = 120, 尾数中有 1 个零.
说明: 你算法的时间复杂度应为 O(log n) 。
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // 5^k < n k是使5^k最接近n的整数
    // let k = parseInt(Math.log(n)/ Math.log(5))
    // let count = 0
    // for(let i = 1; i <= k; i++) {
    //     let j = 0
    //     while(j * Math.pow(5, i) <= n) {
    //         j++
    //     }
    //     count += (j - 1)
    // }
    // console.log(count)

    let count = 0
    while(n > 5) {
        n = parseInt(n / 5)
        count += 5
    }
    return res


};

trailingZeroes(126)