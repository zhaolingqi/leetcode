/**
 * 分割字符串
 * 给定一个字符串 *s*，将 *s* 分割成一些子串，使每个子串都是回文串。
 * 返回 *s* 所有可能的分割方案。
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let N = s.length
    // console.log(s.split(''))
    // s[i,j]是否是回文串
    let arr = []
    var dp = new Array(N)
    for (let i = 0; i < N; i++) {
        dp[i] = new Array(N)
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j <= i; j++) {
            if (s[i] === s[j] && (j + 1 >= i - 1 || dp[j + 1][i - 1])) dp[j][i] = true
            else dp[j][i] = false
        }
    }
    //dp[i][j] 表示s[i,j]是否是回文字符串

    return (partitionHelper(s, 0, N))

    function partitionHelper(s, start, end) {
        let temp = []
        if (start === end) {
            return [[]]
        }
        for (let i = start; i < N; i++) {
            if (dp[start][i]) {
                partitionHelper(s, i + 1, end).forEach((item) => {
                    item.unshift((s.substring(start, i + 1)))
                    temp.push(item)
                })
            }
        }
        return temp
    }

};
console.log(partition("aabaa"))