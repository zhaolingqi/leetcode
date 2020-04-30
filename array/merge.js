/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let N = intervals.length
    if(N <= 1) return intervals
    intervals.sort((a, b) => {
        return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
    })
    let res = []
    let start = intervals[0][0]
    let end = intervals[0][1]
    for(let i = 1; i < N; i++) {
        if(intervals[i][0] > end) {
            res.push([start, end])
            start = intervals[i][0]
            end = intervals[i][1]
        } else {
            end = Math.max(intervals[i][1], end) 
        }
    }
    res.push([start, end])
    console.log(res)
};
merge([[1,3],[2,6],[8,10],[15,18]])