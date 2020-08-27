/**
 * 给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字符的最小子串。
 */
/**
 * 滑动窗口加两个哈希表
 * 一个哈希表map1存放滑动窗口中的所有字符
 * 另一个哈希表map2存放t中的所有字符
 * 
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let map1 = new Map()
    let map2 = new Map()
    // 将t中的所有字符映射到map2中
    for (let i = 0; i < t.length; i++) {
        if (map2.has(t[i])) {
            map2.set(t[i], map2.get(t[i]) + 1)
        } else {
            map2.set(t[i], 1)
        }
    }
    let left = 0, right = 0
    let N = s.length
    let minLength = Number.POSITIVE_INFINITY
    let minLeft = -1, minRight = -1
    while (right < N) {

        if (map2.has(s[right])) {
            if (map1.has(s[right])) {
                map1.set(s[right],map1.get(s[right]) + 1)
            } else {
                map1.set(s[right], 1)
            }
        }
        while(check(map1, map2) && left <= right) {
            if(right - left + 1 < minLength) {
                minLeft = left
                minRight = right
                minLength = right - left + 1
            }
            if(map2.has(s[left])) {
                map1.set(s[left],map1.get(s[left]) - 1)
            }
            left++
        }
        right++
    }
    // console.log(minLeft, minRight, minLength, s.slice(minLeft, minRight + 1))
    return s.slice(minLeft, minRight + 1)
    /**
     * 判断map1是否包含map2中的全部字符，且出现次数大于等于map2中的出现次数
     * @param {Map} map1 
     * @param {Map} map2 
     */
    function check(map1, map2) {
        let iter = map2.keys()
        let next = iter.next()
        while(next.value) {
            let key = next.value
            let val = map2.get(key)
            if(!map1.has(key)) return false
            if(map1.get(key) < val) {
                return false
            }
            next = iter.next()
        }
        return true
    }
};
let S = "ADOBECODEBANC", T = "ABC"
minWindow(S, T)