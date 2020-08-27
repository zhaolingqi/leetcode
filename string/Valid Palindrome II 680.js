/**
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let count = 0
    let i = 0, j = s.length - 1
    while (i <= j) {
        if (s[i] === s[j]) {
            i++
            j--
        } else {
            return isPalindrome(s.slice(i, j)) || isPalindrome(s.slice(i + 1, j + 1))
        }
    }
    return true

    function isPalindrome(s) {
        let i = 0, j = s.length - 1
        while (i <= j) {
            if (s[i] !== s[j]) return false
            i++
            j--
        }
        return true
    }
};
const res = validPalindrome('abaab')
console.log(res)