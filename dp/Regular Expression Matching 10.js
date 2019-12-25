/**
 * 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

'.' 匹配任意单个字符
'*' 匹配零个或多个前面的那一个元素
所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
 */
  
var isMatch = function(s, p) {
    function match(s, p) {
        if(p.length === 0) return (s.length === 0)
        var flag = (s.length !== 0) && (s[0] === p[0] || p[0] === '.')
        if(p.length >= 2 && p[1] === '*') {
            return match(s, p.slice(2)) || (flag && match(s.slice(1), p))
        } else {
            return flag && match(s.slice(1), p.slice(1))
        }
    }
    return match(s, p)
}

console.log(isMatch("","b*"))