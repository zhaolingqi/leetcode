/**
 * 一条包含字母 A-Z 的消息通过以下方式进行了编码：
'A' -> 1
'B' -> 2
...
'Z' -> 26
给定一个只包含数字的非空字符串，请计算解码方法的总数。
 */
/**
 * 示例 1:
输入: "12"
输出: 2
解释: 它可以解码为 "AB"（1 2）或者 "L"（12）。
示例 2:
输入: "226"
输出: 3
解释: 它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
 */
/**
 * @param {string} s
 * @return {number}
 */
// 考虑 0 
var numDecodings = function(s) {
    let N = s.length
    let f = new Array(N + 1)
    if(s[0] === '0') return 0
    f[0] = 1
    f[1] = 1
    var temp = 0
    for(let i = 2; i <= N; i++) {
        if(Number(s[i - 1]) !== 0) {
            if(Number(s[i - 2] + s[i - 1]) <= 26 && Number(s[i - 2]) !== 0) {
                f[i] = f[i - 1] + f[i - 2]
                // temp = f[i - 2]
            } else f[i] =  f[i - 1]
        } else {
            if(Number(s[i - 2]) > 0 && Number(s[i - 2]) < 3) {
                f[i] = f[i - 2]
            } else return 0
        }
    }
    console.log(f)
    return f[N]
};
numDecodings("112037")