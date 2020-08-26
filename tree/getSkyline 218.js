/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
    let N = buildings.length
    let result = []
    if (N === 0) return result
    if (N === 1) {
        let left = buildings[0][0]
        let right = buildings[0][1]
        let y = buildings[0][2]
        result.push([left, y])
        result.push([right, 0])
        return result
    }
    // 划分子问题
    let mid = parseInt(((N + 1) / 2))
    let leftSkyLine = getSkyline(buildings.slice(0, mid))
    let rightSkyLine = getSkyline(buildings.slice(mid, N))
    let res =  merge(leftSkyLine, rightSkyLine)
    return res

    function merge(left, right) {
        let M = left.length
        let N = right.length
        let i = 0, j = 0
        let leftHeight = -1, rightHeight = -1, height = -1
        let x = -1, y = -1
        let res = []
        while (i < M && j < N) {
            let l = left[i], r = right[j]
            if (l[0] < r[0]) {
                x = l[0]
                leftHeight = l[1]
                i++
            } else {
                x = r[0]
                rightHeight = r[1]
                j++
            }
            y = Math.max(leftHeight, rightHeight)
            if(height !== y) {
                res = updateRes(res, x, y)
                height = y
            }
        }

        if(i === M) {
            while( j < N) {
                let x = right[j][0]
                let y = right[j][1]
                if(y !== height) {
                    res = updateRes(res, x, y)
                    height = y
                }
                j++
            }
        } else {
            while( i < M) {
                let x = left[i][0]
                let y = left[i][1]
                if(y !== height) {
                    res = updateRes(res, x, y)
                    height = y
                }
                i++
            }
        }
        return res
    }

    function updateRes(res, x, y) {
        let N = res.length
        if(N === 0 || res[N - 1][0] !== x) {
            res.push([x, y])
        } else {
            res[N - 1][1] = y
        }
        return res
    }

    // let N = buildings.length
    // let builds = []
    // let result = []
    // let height = null
    // for (let i = 0; i < N; i++) {
    //     builds.push([buildings[i][0], -buildings[i][1]])
    //     builds.push([buildings[i][2], buildings[i][1]])
    // }
    // builds.sort((a, b) => {
    //     if (a[0] < b[0]) return -1
    //     else if (a[0] > b[0]) return 1
    //     else {
    //         return Math.abs(a[1]) - Math.abs(b[1])
    //     }
    // })
    // console.log(builds)

    // // // 创建一个优先队列（最大堆）
    // let height = new PriorityQueue()
    // // 记录上一次的最大高度
    // let preHeight = -1
    // for (let i = 0; i < builds.length; i++) {
    //     if(builds[i][1] < 0) { // 遇到左端点，将高度加入最大堆
    //         height.insert(-builds[i][1])
    //     } else height.delete(builds[i][1])

    //     let cur = height.maxStack[1]
    //     if(preHeight !== cur) {
    //         result.push([builds[i][0], cur])
    //         preHeight = cur
    //     }
    // }

    // return result

};
console.log(getSkyline([[1,2,1],[1,2,2],[1,2,3]]))