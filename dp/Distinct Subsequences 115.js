/*
 * @Author: Zhaolq 
 * @Date: 2019-10-06 09:49:11 
 * @Last Modified by:   Zhaolq 
 * @Last Modified time: 2019-10-06 09:49:11 
 */
/**
 * 给定一个字符串 S 和一个字符串 T，计算在 S 的子序列中 T 出现的个数。

一个字符串的一个子序列是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）

示例 1:

输入: S = "rabbbit", T = "rabbit"
输出: 3
解释:

如下图所示, 有 3 种可以从 S 中得到 "rabbit" 的方案。
(上箭头符号 ^ 表示选取的字母)

rabbbit
^^^^ ^^
rabbbit
^^ ^^^^
rabbbit
^^^ ^^^
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    let M = s.length
    let N = t.length
    if(M < N) return 0
    let f = new Array(M + 1)
    for(let i = 0; i <= M; i++) {
        f[i] = new Array(N + 1)
    }
    f[0][0] = 1
    for(let i = 1; i <= N; i++) {
        f[0][i] = 0;
    }
    for(let i = 1; i <= M; i++) {
        f[i][0] = 1;
    }
    for(let i = 1; i <= M; i++) {
        for(let j = 1; j <= N; j++) {
            if(j > i) f[i][j] = 0
            else {
                if(s[i - 1] === t[j - 1]) {
                    f[i][j] = f[i - 1][j] + f[i - 1][j - 1]
                } else f[i][j] = f[i - 1][j]
            }
        }
    }
    return f[M][N]
};