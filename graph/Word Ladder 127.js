/**
 * 给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则：

每次转换只能改变一个字母。
转换过程中的中间单词必须是字典中的单词。
说明:

如果不存在这样的转换序列，返回 0。
所有单词具有相同的长度。
所有单词只由小写字母组成。
字典中不存在重复的单词。
你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
示例 1:

输入:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

输出: 5

解释: 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog",
     返回它的长度 5。
示例 2:

输入:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

输出: 0

解释: endWord "cog" 不在字典中，所以无法进行转换。
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    // 对wordList列表做预处理，找出所有的通用状态，如dog的通用状态为 *og,d*g,do*，并将其存入map中
    // 其中通用状态为键， 值为所有具有该状态的单词
    let N = beginWord.length
    if (N !== endWord.length) return 0
    let map = new Map()
    wordList.forEach((word) => {
        let length = word.length
        for (let i = 0; i < length; i++) {
            let newWord = word.substring(0, i) + '*' + word.substring(i + 1)
            if (!map.has(newWord)) {
                let arr = []
                arr.push(word)
                map.set(newWord, arr)
            } else {
                let arr = map.get(newWord)
                arr.push(word)
                map.set(newWord, arr)
            }
        }
    })
    console.log(map)
    let queue = []
    queue.push([beginWord, 1])
    // 使用visted数组维护单词访问状态，确保单词只被访问一次
    let visited = new Set()
    visited.add(beginWord)
    while (queue.length > 0) {
        let node = queue.shift()
        let word = node[0]
        let level = node[1]
        for (let i = 0; i < N; i++) {
            let newWord = word.substring(0, i) + '*' + word.substring(i + 1)
            if (map.has(newWord)) {
                let arr = map.get(newWord)
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] === endWord) {
                        return ++level
                    }
                    if (!visited.has(arr[i])) {
                        visited.add(arr[i])
                        queue.push([arr[i], level + 1])
                    }
                }
            }
        }
    }
    return 0
};
let beginWord = "a"
let endWord = "c"
let wordList = ["a", "b", "c"]
console.log(ladderLength(beginWord, endWord, wordList))