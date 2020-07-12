/**
 * 给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。

'?' 可以匹配任何单个字符。
'*' 可以匹配任意字符串（包括空字符串）。
两个字符串完全匹配才算匹配成功。
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function(s, p) {
//     if(p.length === 0) return s.length === 0
//     p = simplify(p)
//     var flag = s.length !== 0 && (s[0] === p[0] || p[0] === '?')
//     if(p[0] === '*') {
//         if(p.length === 1) return true
          
//         return s.length !== 0 && isMatch(s.slice(1), p)|| isMatch(s, p.slice(1))
//     }
//     return flag && isMatch(s.slice(1), p.slice(1))
// }
var isMatch = function(s, p) {
    if(p.length === 0) return s.length === 0
    p = simplify(p)
    let M = s.length
    let N = p.length
    let f = new Array(M + 1)
    for(let i = 0; i <= M; i++) {
        f[i] = [];
        for(let j = 0; j <= N; j++) {
            f[i][j] = false
        }
    }
    f[0][0] = true
    for(let i = 1; i <= N; i++) {
        f[0][i] = f[0][i - 1] && p[i - 1] === '*'
    }
    for(let i = 1; i <= M; i++) {
        for(let j = 1; j <= N; j++) {
            if(s[i - 1] === p[j - 1] || p[j - 1] === '?')
                f[i][j] = f[i - 1][j - 1]
            if(p[j - 1] === '*')
                f[i][j] = f[i][j - 1] || f[i - 1][j]
        }
    }
    return f[M][N]
}
console.log(isMatch("aa", "*"));

// 简化字符串p,将连续多个*简化为单个*
function simplify(p) {
    var temp = ""
    for(let i = 0; i < p.length; i++) {
        if(p[i] !== '*') temp += p[i]
        else {
            if(temp.length === 0 || temp[temp.length - 1] !== '*') temp += p[i]
        }
    }
    return temp
}