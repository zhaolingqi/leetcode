/**
 * 给定一个二维网格 board 和一个字典中的单词列表 words，找出所有同时在二维网格和字典中出现的单词。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。

示例:

输入: 
words = ["oath","pea","eat","rain"] and board =
[
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]

输出: ["eat","oath"]
说明:
你可以假设所有输入都由小写字母 a-z 组成。
 */

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    let N = words.length
    let arr = []
    for(let i = 0; i < N; i++) {
        if(exist(board, words[i])) {
            arr.push(words[i])
        }
    }
    console.log(arr)
    return arr
};
// 给定一个二维网格和一个单词，找出该单词是否存在于网格中。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
// 示例:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// 给定 word = "ABCCED", 返回 true.
// 给定 word = "SEE", 返回 true.
// 给定 word = "ABCB", 返回 false.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let N = board.length
    if (N < 1) return false
    let M = board[0].length
    let flags = new Array(N)
    for (let i = 0; i < N; i++) {
        flags[i] = new Array(M).fill(false)
    }
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (board[i][j] === word[0]) {
                flags[i][j] = true
                if (existHelper(1, i, j)) return true
                else flags[i][j] = false
            }
        }
    }
    return false
    function existHelper(start, i, j) {
        var dx = [0, -1, 0, 1]
        var dy = [-1, 0, 1, 0]
        if (start === word.length) return true
        // 可以上下左右四个方向
        for (let k = 0; k < 4; k++) {
            let x = i + dx[k]
            let y = j + dy[k]
            if (x >= 0 && x < N && y >= 0 && y < M && !flags[x][y]) {
                if (board[x][y] === word[start]) {
                    flags[x][y] = true
                    if (existHelper(start + 1, x, y)) return true
                    else flags[x][y] = false
                }
            }
        }
        return false
    }
}
let board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
    word = ["oath","pea","eat","rain"]
console.log(findWords(board, word))