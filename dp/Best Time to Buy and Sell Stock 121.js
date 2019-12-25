/*
 * @Author: Zhaolq 
 * @Date: 2019-10-06 14:16:21 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-10-06 14:42:41
 */
/**
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

注意你不能在买入股票前卖出股票。

示例 1:

输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
示例 2:

输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let N = prices.length
    if(N <= 1) return 0
    // let i = 0
    // let j = 1
    // let max = 0  
    // while(j < N) {
    //     if(prices[i] < prices[j]) {
    //         max = prices[j] - prices[i] < max ? max : prices[j] - prices[i]
    //         j++
    //     } else {
    //         i = j
    //         j ++
    //     }
    // }
    // return max
    let index = 0
    let f = new Array(N)
    f[0] = 0
    for(let i = 1; i < N; i ++) {
        if(prices[i] - prices[index] > 0) {
            f[i] = prices[i] - prices[index] > f[i - 1] ? prices[i] - prices[index] : f[i - 1]
        } else {
            f[i] = f[i - 1]
            index = i
        }
    }
    return f[N - 1]
};
let arr = [7,1,5,3,6,4]
console.log(maxProfit(arr))