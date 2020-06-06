/**
 * 给你一个字符串 s ，请你返回满足以下条件的最长子字符串的长度：每个元音字母，即 'a'，'e'，'i'，'o'，'u' ，在子字符串中都恰好出现了偶数次。
 */
/**
 * a e i o u
 * 对于一个区间，我们可以用两个前缀和的差值，得到其中某个字母的出现次数。
 * 我们对每个元音字母维护一个前缀和，定义 pre[i][k] 表示在字符串前 i 个字符中，第 k 个元音字母一共出现的次数。
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
    const n = s.length;
    const pos = new Array(1 << 5).fill(-1);
    let ans = 0, status = 0;
    pos[0] = 0;
    for (let i = 0; i < n; ++i) {
        const ch = s.charAt(i);
        if (ch === 'a') {
            status ^= 1<<0;
        } else if (ch === 'e') {
            status ^= 1<<1;
        } else if (ch === 'i') {
            status ^= 1<<2;
        } else if (ch === 'o') {
            status ^= 1<<3;
        } else if (ch === 'u') {
            status ^= 1<<4;
        }
        if (pos[status] >= 0) {
            ans = Math.max(ans, i + 1 - pos[status]);
        } else {
            pos[status] = i + 1;
        }
    }
    return ans;
};
let res = findTheLongestSubstring('aaeeiioosdfsagdsdga')
console.log(res)