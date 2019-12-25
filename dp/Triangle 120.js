/*
 * @Author: Zhaolq 
 * @Date: 2019-10-06 10:20:32 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-10-06 14:12:31
 */
/**
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

例如，给定三角形：

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

说明：

如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。

 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let N = triangle.length
    if(N === 0) return 0
    // let f = new Array(N)
    // for(let i = 0; i < N; i++) {
    //     f[i] = new Array(i + 1)
    // }
    // f[0][0] = triangle[0][0]
    // for(let i = 1; i < N; i++) {
    //     for(let j = 0; j <= i; j++) {
    //         if(j === 0) f[i][j] = f[i - 1][j] + triangle[i][j]
    //         else if(j === i) f[i][j] = f[i - 1][i - 1] + triangle[i][j]
    //         else {
    //             f[i][j] = Math.min(f[i - 1][j] + triangle[i][j], f[i - 1][j - 1] + triangle[i][j])
    //         }
    //     }
    // }
    // return (Math.min.apply(null, f[N - 1]))

    let f = new Array(N + 1).fill(0)
    for(let i = N - 1; i >= 0; i--) {
        for(let j = 0; j <= i; j ++) {
            f[j] = Math.min(f[j], f[j + 1]) + triangle[i][j]
        }
    }
    return f[0]
};

var tri = [
[-10]
]
console.log(minimumTotal(tri))