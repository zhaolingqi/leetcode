/**
 * 由 n 个连接的字符串 s 组成字符串 S，记作 S = [s,n]。例如，["abc",3]=“abcabcabc”。

如果我们可以从 s2 中删除某些字符使其变为 s1，则称字符串 s1 可以从字符串 s2 获得。例如，根据定义，"abc" 可以从 “abdbec” 获得，但不能从 “acbbe” 获得。

现在给你两个非空字符串 s1 和 s2（每个最多 100 个字符长）和两个整数 0 ≤ n1 ≤ 106 和 1 ≤ n2 ≤ 106。现在考虑字符串 S1 和 S2，其中 S1=[s1,n1] 、S2=[s2,n2] 。

请你找出一个可以满足使[S2,M] 从 S1 获得的最大整数 M 。
 */
/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function(s1, n1, s2, n2) {
    if(n1 === 0) return 0
    let s1cnt = 0
    let s2cnt = 0
    let index = 0
    let recall = new Map()
    let pre_loop = []
    let in_loop = []
    while(true) {
        ++s1cnt
        for(let ch of s1) {
            if(ch === s2[index]) {
                index++
                if(index === s2.length) {
                    s2cnt++
                    index = 0
                }
            }
        }

        if(s1cnt === n1) {

            return Math.floor(s2cnt / n2)
        }

        if(recall.has(index)) {
            let [s1cnt_prime, s2cnt_prime] = recall.get(index)
            pre_loop = [s1cnt_prime, s2cnt_prime]
            console.log(s1cnt, 's1cnt', s2cnt)
            in_loop = [s1cnt - s1cnt_prime, s2cnt - s2cnt_prime]
            break
        } else {
            recall.set(index, [s1cnt, s2cnt])
        }
    }
    // ans 存储的是 S1 包含的 s2 的数量，考虑的之前的 pre_loop 和 in_loop
    let ans = pre_loop[1] + Math.floor((n1 - pre_loop[0]) / in_loop[0]) * in_loop[1]
    // / S1 的末尾还剩下一些 s1，我们暴力进行匹配
    let rest = (n1 - pre_loop[0]) % in_loop[0]
    console.log(rest)
    for(let i = 0; i < rest; i++) {
        for(let ch of s1) {
            if(ch === s2[index]) {
                index++
                if(index === s2.length) {
                    ans++
                    index = 0
                }
            }
        }
    }
    return Math.floor(ans / n2)
};

getMaxRepetitions("aaa",10,"aaaaa",1)