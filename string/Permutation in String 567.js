/**
 * 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。

换句话说，第一个字符串的排列之一是第二个字符串的子串。

示例1:

输入: s1 = "ab" s2 = "eidbaooo"
输出: True
解释: s2 包含 s1 的排列之一 ("ba").
 

示例2:

输入: s1= "ab" s2 = "eidboaoo"
输出: False
 

注意：

输入的字符串只包含小写字母
两个字符串的长度都在 [1, 10,000] 之间
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    // let N = s1.length
    // let M = s2.length
    // if (N > M) return false

    // function getMap() {
    //     let map = new Map()
    //     for (let i = 0; i < N; i++) {
    //         if (map.has(s1[i])) {
    //             map.set(s1[i], map.get(s1[i]) + 1)
    //         } else {
    //             map.set(s1[i], 1)
    //         }
    //     }
    //     return map
    // }
    // for (let i = 0; i <= M - N; i++) {
    //     let flag = true
    //     let newMap = getMap()
    //     for (let j = i; j < i + N; j++) {
    //         if (!newMap.has(s2[j])) {
    //             flag = false
    //             break
    //         }
    //         let val = newMap.get(s2[j])
    //         if (val === 0) {
    //             flag = false
    //             break
    //         }
    //         newMap.set(s2[j], val - 1)
    //     }
    //     if(flag === true) return flag
    // }
    // return false
    let N = s1.length
    let M = s2.length
    let count = 0
    if (M < N) return false
    let s1Map = new Array(26).fill(0)
    let s2Map = new Array(26).fill(0)
    for (let i = 0; i < N; i++) {
        let s1Index = s1.charCodeAt(i) - 97
        s1Map[s1Index]++
        let s2Index = s2.charCodeAt(i) - 97
        s2Map[s2Index]++
    }
    console.log(s1Map, s2Map)
    for (let i = 0; i < 26; i++) {
        if (s1Map[i] === s2Map[i]) count++
    }
    for (let i = 0; i < M - N; i++) {
        console.log(count)
        if (count === 26) return true
        let rIndex = s2.charCodeAt(i + N) - 97
        s2Map[rIndex]++
        if (s1Map[rIndex] === s2Map[rIndex] - 1) count--
        if (s1Map[rIndex] === s2Map[rIndex]) count++
        let lIndex = s2.charCodeAt(i) - 97
        s2Map[lIndex]--
        if (s1Map[lIndex] === s2Map[lIndex] + 1) count--
        if (s1Map[lIndex] === s2Map[lIndex]) count++

    }
    return count === 26

};
console.log(checkInclusion("trinitrophenylmethylnitramine", "dinitrophenylhydrazinetrinitrophenylmethylnitramine"))