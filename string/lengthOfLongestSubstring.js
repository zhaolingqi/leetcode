var lengthOfLongestSubstring = function(s) {
    let que = []
    let N = s.length
    let arr = s.split("")
    let map = new Map()
    que.push(arr[0])
    map.set(arr[0], 1)
    let max = 1
    for(let i = 1; i < N; i++) {
        let temp = arr[i]
        if(map.has(temp)) {
            while(temp !== que[0]) {
                let temp2 = que.shift()
                map.delete(temp2)
            }
            map.delete(que.shift())
        }
        que.push(temp)
        map.set(temp, 1)
        max = Math.max(max, que.length)
    }
    return max
};
lengthOfLongestSubstring("abcabcbb")