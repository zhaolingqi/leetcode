/*
 * @Author: Zhaolq 
 * @Date: 2019-10-07 19:55:19 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-10-08 11:07:03
 */

/**
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

说明：

拆分时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。
示例 1：

输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。

 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    //暴力匹配
    // let N = s.length
    // if(N === 0) return true
    // let M = wordDict.length
    // let memo = new Array(N).fill(0)
    // return subWordBreak(s, wordDict, 0, memo)
    
    // function subWordBreak(s, wordDict, start, memo) {
    //     let N = s.length
    //     if(N === start) return true
    //     if(memo[start] !== 0) return memo[start]
    //     for(let i = start + 1; i <= N; i++) {
    //         if(wordDict.find((e) => {return e === s.substring(start, i)}) && subWordBreak(s, wordDict, i, memo)) {
    //             return memo[start] = true
    //         }
    //     }
    //     return memo[start] = false
    // }

    //动态规划
    let N = s.length
    let dp = new Array(N + 1).fill(false)
    dp[0] = true  
    for(let i = 1; i <= N; i++) {
        for(let j = 0; j <= i; j++) {
            if(dp[j] && wordDict.find((e) => {return e === s.substring(j, i)})) {
                dp[i] = true
                break
            } 
            else dp[i] = false
        }
    }
    console.log(dp)
    return dp[N]
};

let s = 
"leetcode"
let word = ["leet", "code"]
console.log(wordBreak(s,word))