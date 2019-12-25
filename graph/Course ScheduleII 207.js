/**
 * 现在你总共有 n 门课需要选，记为 0 到 n-1。

在选修某些课程之前需要一些先修课程。 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示他们: [0,1]

给定课程总量以及它们的先决条件，判断是否可能完成所有课程的学习？

示例 1:

输入: 2, [[1,0]] 
输出: true
解释: 总共有 2 门课程。学习课程 1 之前，你需要完成课程 0。所以这是可能的。
示例 2:

输入: 2, [[1,0],[0,1]]
输出: false
解释: 总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0；并且学习课程 0 之前，你还应先完成课程 1。这是不可能的。
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {

    // BFS方法

    let indegrees = new Array(numCourses).fill(0)
    let queue = []
    let res = []
    for (let i = 0; i < prerequisites.length; i++) {
        indegrees[prerequisites[i][0]] ++
    }
    for(let i = 0; i <numCourses; i++) {
        if(indegrees[i] === 0) {
            queue.push(i)
        }
    }
    while(queue.length > 0) {
        let pre = queue.shift()
        res.push(pre)
        numCourses --
        for (let i = 0; i < prerequisites.length; i++) {
            if(prerequisites[i][1] !== pre) continue
            if(--indegrees[prerequisites[i][0]] === 0) queue.push(prerequisites[i][0])
        }
    }
    if(numCourses === 0) return res
    else return 0
};
console.log(canFinish(4, [[1,0],[2,0],[3,1],[3,2]]))