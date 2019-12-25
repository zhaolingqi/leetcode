/**
 *   字符串中的第一个唯一字符
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

案例:

s = "leetcode"
返回 0.

s = "loveleetcode",
返回 2.


注意事项：您可以假定该字符串只包含小写字母。
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    // let N = s.length
    // if (N === 1) return 0
    // for (let i = 0; i < N; i++) {
    //     let temp = 0
    //     for (let j = 0; j < N; j++) {
    //         if (s[i] === s[j] && i !== j) break
    //         if (j === N - 1) return i
    //     }
    // }
    // return -1
    let N = s.length
    let map = new Map()
    for(let i = 0; i < N; i++) {
        if(!map.has(s[i])) {
            map.set(s[i], 1)
        } else {
            let val = map.get(s[i])
            val++
            map.set(s[i], val)
        }
    }
    for(let i = 0; i < N; i++) {
        if(map.get(s[i]) === 1) {
            return i
        }
    }
    return -1
};
let s = "dddccdbbaa"
console.log(firstUniqChar(s))