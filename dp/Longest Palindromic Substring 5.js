/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 */
/**
 * 
 * @param {string} s
 * @return {string}     
 */
var longestPalindrome = function(s) {
    let N = s.length
    let c = []
    for(let i = 0; i < N; i++) {
        c.push([])
        for(let j = 0; j < N; j++) {
            if(i === j) c[i][j] = true
        }
    }
    let maxLen = 1
    let index = 0
    for(let i = 0; i < N - 1; i++) {
        if(s[i] === s[i + 1]) {
            c[i][i + 1] = true
            maxLen = 2
            index = i
        }
    }
    for (let len = 3; len <= N; len++) {
        for (let i = 0; i <= N - len; i++) {
            if(s[i] === s[i + len - 1] && c[i + 1][i + len - 2]) {
                c[i][i + len - 1] = true
                if(maxLen < len) {
                    maxLen = len
                    index = i
                }
            }
        }
    }
    // console.log(index, maxLen)
    return s.slice(index, index + maxLen)
}
console.log(longestPalindrome("bbbbcccc"))