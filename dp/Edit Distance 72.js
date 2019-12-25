/**
 * 给定两个单词 word1 和 word2，计算出将 word1 转换成 word2 所使用的最少操作数 。

你可以对一个单词进行如下三种操作：

插入一个字符
删除一个字符
替换一个字符
*/
/**
 * 示例 1:

输入: word1 = "horse", word2 = "ros"
输出: 3
解释: 
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')
示例 2:

输入: word1 = "intention", word2 = "execution"
输出: 5
解释: 
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')

 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let M = word1.length
    let N = word2.length
    var f = []
    for(let i = 0; i <= M; i ++) {
        f[i] = new Array(N + 1)
    }
    for(let i = 0; i <= N; i++) {
        f[0][i] = i  
    }
    for(let i = 0; i <= M; i++) {
        f[i][0] = i
    }
    for(let i = 1; i <= M; i++) {
        for(let j = 1; j <= N; j++) {
            if(word1[i - 1] === word2[j - 1]) {
                f[i][j] = f[i - 1][j - 1]
            } else {
                f[i][j] = Math.min(f[i - 1][j - 1] + 1, f[i][j - 1] + 1, f[i - 1][j] + 1)
            }
        }
    }
    console.log(f[M][N])
    return f[M][N]
};
minDistance("","")