/**
 * 给定一个单词列表，我们将这个列表编码成一个索引字符串 S 与一个索引列表 A。

例如，如果这个列表是 ["time", "me", "bell"]，我们就可以将其表示为 S = "time#bell#" 和 indexes = [0, 2, 5]。

对于每一个索引，我们可以通过从字符串 S 中索引的位置开始读取字符串，直到 "#" 结束，来恢复我们之前的单词列表。

那么成功对给定单词列表进行编码的最小字符串长度是多少呢？

 */
/**
 * 
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
    words.sort((a, b) => a.length - b.length)
    let N = words.length
    let flags = new Array(N).fill(true)
    let resArr = []
    for (let i = 0; i < N; i++) {
        if (flags[i] === true) {
            let str = words[i]
            for (let j = i + 1; j < N; j++) {
                if(compare(str, words[j])) {
                    flags[j] = false
                    str = words[j]
                }
            }
            resArr.push(str)
        }
    }
    let res = resArr.join('#') + '#'
    console.log(res.length)
    return(res.length)
    /**
     * 判断str2是否以str1结尾
     * @param {string} str1 
     * @param {string} str2 
     */
    function compare(str1, str2) {
        let N = str1.length
        let M = str2.length
        let i = N - 1, j = M - 1
        while (i >= 0) {
            if (str1[i] !== str2[j]) return false
            i--
            j--
        }
        return true
    }
};
let words = ["time","bell"]
minimumLengthEncoding(words)