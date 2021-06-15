/**
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，在字符串中增加空格来构建一个句子，
 * 使得句子中所有的单词都在词典中。返回所有这些可能的句子。

说明：

分隔时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。

 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */

var wordBreak = function (s, wordDict) {
    let strReturn = []
    let N = s.length
    let dp = new Array(N + 1).fill(false)
    let f = new Array(N + 1)
    for (let i = 0; i <= N; i++) {
        f[i] = new Array(i + 1)
    }
    f[0][0] = true
    dp[0] = true
    for (let i = 1; i <= N; i++) {
        for (let j = 0; j <= i; j++) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true
                f[i][j] = true
            }
            else f[i][j] = false
        }
    }
    let temp = []
    let tempStr
    let tempStrArr = []
    for (let i = 0; i <= N; i++) {
        if (f[N][i] === true) {
            temp.push(i)
            tempStrArr.push(s.substring(i, N))
        }
    }

    while (temp.length !== 0) {
        let j = temp.shift()
        tempStr = tempStrArr.shift()
        if (j === 0) {
            strReturn.push(tempStr)
            continue
        }
        for (let i = 0; i <= j; i++) {
            if (f[j][i] === true) {
                temp.push(i)
                tempStrArr.push(s.substring(i, j) + " " + tempStr)
            }
        }
    }
    return strReturn
};
let s =
    "catsanddog"
let word = ["cats", "dog", "sand", "and", "cat"]
console.log(wordBreak(s, word))