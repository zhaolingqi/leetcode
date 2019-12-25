/**
 * 中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。

例如，

[2,3,4] 的中位数是 3

[2,3] 的中位数是 (2 + 3) / 2 = 2.5

设计一个支持以下两种操作的数据结构：

void addNum(int num) - 从数据流中添加一个整数到数据结构中。
double findMedian() - 返回目前所有元素的中位数。
示例：

addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3) 
findMedian() -> 2
进阶:

如果数据流中所有整数都在 0 到 100 范围内，你将如何优化你的算法？
如果数据流中 99% 的整数都在 0 到 100 范围内，你将如何优化你的算法？
 */
/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
    this.arr = []
    this.len = 0
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    // 插入排序
    // 找到要插入的位置
    if (this.len === 0) {
        this.arr.push(num)
        this.len = this.arr.length
    } else {
        let i = 0
        while (i < this.len) {
            if (this.arr[i] < num) {
                i++
            } else {
                break
            }
        }
        for (let j = this.len; j > i; j--) {
            this.arr[j] = this.arr[j - 1]
        }
        this.arr[i] = num
        this.len = this.arr.length
    }
    console.log(this.arr, this.len)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if(this.len % 2 === 0) return (this.arr[this.len / 2] + this.arr[this.len / 2 - 1]) / 2
    else return this.arr[parseInt(this.len / 2)]
};
/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
var obj = new MedianFinder()
obj.addNum(1)
obj.addNum(4)
obj.addNum(6)
obj.addNum(12)
obj.addNum(3)
obj.addNum(5)
obj.addNum(9)

var param_2 = obj.findMedian()
console.log(param_2)