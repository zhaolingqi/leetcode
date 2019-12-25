/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let N = strs.length
    if(N < 1) return ''
    let minLength = Number.POSITIVE_INFINITY
    for(let i = 0; i < N; i++) {
        minLength = Math.min(minLength, strs[i].length)
    }

    let prefix = ''
    for (let i = 0; i < N; i++) {
        strs[i] = strs[i].split('')
    }
    prefix += strs[0][0]
    let j = 0
    while (j < minLength) {
        for (let i = 0; i < N; i++) {
            if (strs[i].shift() !== prefix[j]) {
                return prefix.substring(0, j)
            }
        }
        prefix += strs[0][0]
        j++
    }
    console.log(prefix.substring(0, j))
    return prefix.substring(0, j)
};
console.log(longestCommonPrefix(["afaf", "vsda", "fqeqe"]))