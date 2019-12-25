/**
 *   有效的字母异位词
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
说明:
你可以假设字符串只包含小写字母。

进阶:
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 */

/**
* @param {string} s
* @param {string} t
* @return {boolean}
*/
// var isAnagram = function (s, t) {
//     let N = s.length
//     if(t.length !== N) return false
//     t = t.split("")
//     let flags = new Array(N).fill(false)
//     for(let i = 0; i < N; i++) {
//         let index = t.indexOf(s[i])
//         if(index < 0) return false
//         t.splice(index, 1)
//     }
//     return true
// };

var isAnagram = function (s, t) {
    let N = s.length
    if (t.length !== N) return false
    t = t.split("")
    s = s.split("")
    t.sort(ss)
    s.sort(ss)
    console.log(s, t)
    for (let i = 0; i < N; i++) {
        if (t[i] !== s[i]) return false
    }
    return true
    function ss(a, b) {
        if (a < b) { 
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    }
};
let s = "anagram",
    t = "nagaram"
console.log(isAnagram(s, t))