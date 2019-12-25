/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// var wordBreak = function(s, wordDict) {
//     let N = s.length
//     let dp = new Array(N + 1).fill(false)
//     dp[0] = true
//     for(let i = 1; i <= N; i++) {
//         for(let j = 0; j <= i; j++) {
//             if(dp[j] && wordDict.includes(s.substring(j, i))) {
//                 dp[i] = true
//                 break
//             }
//             else dp[i] = false
//         }
//     }
//     return dp[N]
// }


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
    let N = s.length
    let arr = dfs(0, N)
    return arr.map(item => {
        return item.join(" ")
    })
    function dfs(start, end) {
        let temp = []
        if (start === end) {
            return [[]]
        }
        for (let i = start; i < end; i++) {
            if (wordDict.includes(s.substring(start, i + 1))) {
                dfs(i + 1, end).forEach((item) => {
                    item.unshift(s.substring(start, i + 1))
                    temp.push(item)
                })
            }
        }
        return temp
    }
};
let s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    wordDict = ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]
console.log(wordBreak(s, wordDict))