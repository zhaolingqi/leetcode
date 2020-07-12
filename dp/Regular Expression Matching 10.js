/**
 * 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

'.' 匹配任意单个字符
'*' 匹配零个或多个前面的那一个元素
所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
 */
  
// var isMatch = function(s, p) {
//     function match(s, p) {
//         if(p.length === 0) return (s.length === 0)
//         var flag = (s.length !== 0) && (s[0] === p[0] || p[0] === '.')
//         if(p.length >= 2 && p[1] === '*') {
//             return match(s, p.slice(2)) || (flag && match(s.slice(1), p))
//         } else {
//             return flag && match(s.slice(1), p.slice(1))
//         }
//     }
//     return match(s, p)
// }
/**
 * 
 * @param {string} s 
 * @param {string} pattern 
 */
var isMatch = (s, pattern) => {
    let M = s.length;
    let N = pattern.length;
    if(!M) return N === 0;
    let dp = [];
    for(let i = 0; i <= M; i++) {
        dp[i] = new Array(N + 1);
    }
    dp[0][0] = true;

    //dp[i][0] = false
    for(let i = 1; i <= M; i++) {
        dp[i][0] = false;
    }

    //dp[0][j]
    for(let j = 1; j <= N; j++) {
        if(pattern[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1] || dp[0][j - 2];
        } else {
            dp[0][j] = false;
        }
    }

    for(let i = 1; i <= M; i++) {
        for(let j = 1; j <= N; j++) {
            if(pattern[j - 1] === '*') {
                if(s[i - 1] !== pattern[j - 2] && pattern[j - 2] !== '.') { // 出现0次
                    dp[i][j] = dp[i][j - 2];
                } else {
                    // 出现多次或0次，出现0次的情况为即使s[i - 1]与pattern[j - 2] 匹配上，也可以为0次
                    dp[i][j] = dp[i - 1][j] || dp[i][j - 2];
                }
            } else if(s[i - 1] === pattern[j - 1] || pattern[j - 1] === '.') {
                dp[i][j] = dp[i- 1][j - 1];
            } else dp[i][j] = false;
        }
    }
    console.log(dp)
    return dp[M][N]

};

console.log(isMatch("aaa","ab*a*c*a"))

