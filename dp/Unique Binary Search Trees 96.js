/*
 * @Author: Zhaolq 
 * @Date: 2019-10-06 09:33:10 
 * @Last Modified by:   Zhaolq 
 * @Last Modified time: 2019-10-06 09:33:10 
 */
/**
 * 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？

示例:

输入: 3
输出: 5
解释:
给定 n = 3, 一共有 5 种不同结构的二叉搜索树:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3

 */

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let f = []
    f[0] = 1
    f[1] = 1
    f[2] = 2

    for(let i = 3; i <= n; i++) {
        f[i] = 0
        for(let j = 0; j <= i - 1; j++) {
            f[i] += f[j] * f[i - 1 - j]
        }
    }
    return f[n]
};