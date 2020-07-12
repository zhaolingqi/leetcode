/**
 * 给定两个单词（beginWord 和 endWord）和一个字典 wordList，找出所有从 beginWord 到 endWord 的最短转换序列。转换需遵循如下规则：
 * 每次转换只能改变一个字母。
 * 转换过程中的中间单词必须是字典中的单词。
 */
// 对wordList列表做预处理，找出所有的通用状态，如dog的通用状态为 *og,d*g,do*，并将其存入map中
// 其中通用状态为键， 值为所有具有该状态的单词
var findLadders = function (beginWord, endWord, wordList) {
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
    // console.log(map)
    let queue = []
    let res = []
    let temp = []
    queue.push([beginWord, 1])
    // 使用visted数组维护单词访问状态，确保单词只被访问一次
    let visited = new Set()
    visited.add(beginWord)
    while (queue.length > 0) {
        let node = queue.shift()
        let word = node[0]
        let level = node[1]
        console.log(word, level)
        for (let i = 0; i < N; i++) {
            let newWord = word.substring(0, i) + '*' + word.substring(i + 1)
            if (map.has(newWord)) {
                let arr = map.get(newWord)
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] === endWord) {
                        ++level
                        break;
                    }
                    if (!visited.has(arr[i])) {
                        visited.add(arr[i])
                        temp.push(arr[i])
                        queue.push([arr[i], level + 1])
                    }
                }
            }
        }
    }
    return 0
};
let beginWord = "hit"
let endWord = "cog"
let wordList = ["hot", "dot", "dog", "lot", "log", "cog"]
console.log(findLadders(beginWord, endWord, wordList))