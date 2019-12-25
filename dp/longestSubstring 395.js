/**
 * 找到给定字符串（由小写字符组成）中的最长子串 T ， 要求 T 中的每一字符出现次数都不少于 k 。输出 T 的长度。

示例 1:

输入:
s = "aaabb", k = 3

输出:
3

最长子串为 "aaa" ，其中 'a' 重复了 3 次。
示例 2:

输入:
s = "ababbc", k = 2

输出:
5

最长子串为 "ababb" ，其中 'a' 重复了 2 次， 'b' 重复了 3 次。
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
    let N = s.length
    console.log(merge(0, N - 1))


    function merge(start, end) {
        let i = start, j = end
        let charNum = new Map()
        for (let i = start; i <= end; i++) {
            if (!charNum.has(s[i])) {
                charNum.set(s[i], 1)
            } else {
                charNum.set(s[i], charNum.get(s[i]) + 1)
            }
        }
        while(i < j) {
            if(charNum.get(s[i]) < k) i++
            else if(charNum.get(s[j]) < k) j--
            else break
        }
        if(j - i + 1 < k) return 0
        for(let m = i + 1; m < j; m++) {
            if(charNum.get(s[m]) < k) {
                return Math.max(merge(i, m - 1), merge(m + 1, j))
            }
        }
        return j - i + 1
    }
};   

let s = "ababacb"
let k = 3
longestSubstring(s, k)