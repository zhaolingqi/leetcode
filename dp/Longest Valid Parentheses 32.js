//给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var N = s.length
    if(N === 0) return 0
    var dp = new Array(N)
    dp.fill(0)
    for(let i = 1; i < N; i++) {
        if(s[i] === '(') continue
        else if(s[i] === ')') {
            if(s[i - 1] === '(') {
                if(i < 2) {
                    dp[i] = 2
                    continue
                }
                dp[i] = dp[i - 2] + 2
                continue
            } else if(s[i - 1] === ')'){
                if(s[i - dp[i - 1] - 1] === '(') {
                    if(i - dp[i - 1] - 2 < 0) {
                        dp[i] = dp[i - 1] + 2
                        continue
                    }
                    dp[i] = dp[i - 1] + dp[i - dp[i - 1] - 2] + 2
                    continue
                } 
            }
        }
    }
    return(Math.max.apply(null, dp))
};
console.log(longestValidParentheses("()))"))