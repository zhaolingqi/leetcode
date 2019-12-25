/*
 * @Author: Zhaolq 
 * @Date: 2019-10-06 09:38:56 
 * @Last Modified by:   Zhaolq 
 * @Last Modified time: 2019-10-06 09:38:56 
 */
/**
 * 给定三个字符串 s1, s2, s3, 验证 s3 是否是由 s1 和 s2 交错组成的。

示例 1:

输入: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
输出: true
示例 2:

输入: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
输出: false
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    let K = s3.length
    let M = s1.length
    let N = s2.length
    if(K === 0 && M === 0 && N === 0) return true
    if(K !== M + N) return false
    var f = new Array(M + 1)
    for(let i = 0; i <= M; i++) {
        f[i] = new Array(N + 1)
    }
    f[0][0] = true
    for(let i = 1; i <= N; i++) {
        if(s2[i - 1] === s3[i - 1]) {
            f[0][i] = f[0][i - 1]
        } else f[0][i] = false
    }
    for(let i = 1; i <= M; i++) {
        if(s1[i - 1] === s3[i - 1]) {
            f[i][0] = f[i - 1][0]
        } else f[i][0] = false
    }
    for(let i = 1; i <= M; i++) {
        for(let j = 1; j <= N; j++) {
            // s1的前i个字符、s2的前j个字符和s3的前i + j个字符是否交错插入
            if(s1[i - 1] === s3[i + j - 1] && s2[j - 1] !== s3[i + j - 1]) {
                f[i][j] = f[i - 1][j]
            } else if(s1[i - 1] !== s3[i + j - 1] && s2[j - 1] === s3[i + j - 1]) {
                f[i][j] = f[i][j - 1]
            } else if(s1[i - 1] === s3[i + j - 1] && s2[j - 1] === s3[i + j - 1]) {
                f[i][j] = f[i - 1][j] || f[i][j - 1]
            } else f[i][j] = false
        }
    }
    return f[M][N]
};