/**
 * 给定两条线段（表示为起点start = {X1, Y1}和终点end = {X2, Y2}），如果它们有交点，请计算其交点，没有交点则返回空值。

要求浮点型误差不超过10^-6。若有多个交点（线段重叠）则返回 X 值最小的点，X 坐标相同则返回 Y 值最小的点。

 */
/**
 * @param {number[]} start1
 * @param {number[]} end1
 * @param {number[]} start2
 * @param {number[]} end2
 * @return {number[]}
 */
var intersection = function (start1, end1, start2, end2) {
    if (start1[0] > end1[0]) [start1, end1] = [end1, start1]
    if(start1[0] === end1[0]) {
        if(start1[1] > end1[1]) [start1, end1] = [end1, start1]
    }
    if (start2[0] > end2[0]) [start2, end2] = [end2, start2]
    if(start2[0] === end2[0]) {
        if(start2[1] > end2[1]) [start2, end2] = [end2, start2]
    }
    let k1, k2, b1, b2
    if (start1[0] - end1[0] === 0) {
        if (start2[0] - end2[0] === 0) {
            if (start1[0] === start2[0]){ 
                if(start2[1] > end1[1] || end2[1] < start1[1]) return []
                return start1[1] < start2[1] ? start2 : start1
            }
            else return []
        }
        k2 = (start2[1] - end2[1]) / (start2[0] - end2[0])
        b2 = start2[1] - k2 * start2[0]
        if (start2[0] > start1[0] || end2[0] < start1[0]) return []
        let x = start1[0]
        let y = k2 * x + b2
        if(y < start1[1] || y > end1[1]) return []
        return [x, y]
    }

    if (start2[0] - end2[0] === 0) {
        k1 = (start1[1] - end1[1]) / (start1[0] - end1[0])
        b1 = start1[1] - k1 * start1[0]
        if (start1[0] > start2[0] || end1[0] < start2[0]) return []
        let x = start2[0]
        let y = k1 * x + b1
        if(y < start2[1] || y > end2[1]) return []
        return [x, y]
    }

    k1 = (start1[1] - end1[1]) / (start1[0] - end1[0])
    b1 = start1[1] - k1 * start1[0]
    k2 = (start2[1] - end2[1]) / (start2[0] - end2[0])
    b2 = start2[1] - k2 * start2[0]
    // 平行
    if (k1 === k2 && b1 !== b2) return []
    // 重叠
    if (k1 === k2 && b1 === b2) {
        if (end1[0] < start2[0] || start1[0] > end2[0]) return []
        return start1[0] < start2[0] ? start2 : start1
    }
    // 判断交点坐标
    let x = (b2 - b1) / (k1 - k2)
    if (x > end1[0] || x < start1[0] || x > end2[0] || x < start2[0]) return []
    let y = k1 * x + b1
    let res = [x, y]
    return res
};
let start1 = [1,1]
let end1 = [-1,1]
let start2 = [1,0]
let end2 = [-3,2]
let res = intersection(start1, end1, start2, end2)
console.log(res)