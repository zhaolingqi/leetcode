/**
 * 给定一个二维平面，平面上有 n 个点，求最多有多少个点在同一条直线上。

示例 1:

输入: [[1,1],[2,2],[3,3]]
输出: 3
解释:
^
|
|        o
|     o
|  o  
+------------->
0  1  2  3  4
示例 2:

输入: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
输出: 4
解释:
^
|
|  o
|     o        o
|        o
|  o        o
+------------------->
0  1  2  3  4  5  6
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let N = points.length
    if(N < 2) return points.length
    let maxCounts = []
    for(let i = 0; i < N - 1; i++) {
        maxCounts[i] = 1
        let coincident = 0
        let vertical = 1
        let lineMap = new Map()
        for(let j = i + 1; j < N; j++) {
            if((points[j][1] - points[i][1]) === 0 && (points[j][0] - points[i][0]) === 0) {
                coincident ++ // 重合点数目
                continue
            }
            if((points[j][0] - points[i][0]) === 0) {
                // 在同一条垂直线上
                vertical++
                continue
            }
        
            // let slope = ((points[j][1] - points[i][1]) * 1000 / (points[j][0] - points[i][0]) * 1000) / 1000
            let slope = `${(points[j][1] - points[i][1])}/${(points[j][0] - points[i][0])}`
            console.log(slope)
            if(!lineMap.has(slope)) {
                lineMap.set(slope, 2)
                maxCounts[i] = Math.max(2, maxCounts[i])
            } else {
                lineMap.set(slope, lineMap.get(slope) + 1)
                maxCounts[i] = Math.max(lineMap.get(slope), maxCounts[i])
            }
        }
        maxCounts[i] = Math.max(maxCounts[i], vertical)
        maxCounts[i] += coincident
    }
    console.log(maxCounts)
    return Math.max(...maxCounts)
};
maxPoints([[1,1],[2,2],[3,3]])