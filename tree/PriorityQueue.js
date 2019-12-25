function PriorityQueue() {
    this.maxStack = [0]
    this.num = 0

}
PriorityQueue.prototype.swim = function (i) {
    while (i > 1 && this.maxStack[parseInt(i / 2)] < this.maxStack[i]) {
        this.exch(i, parseInt(i / 2))
        i = parseInt(i / 2)
    }
}
PriorityQueue.prototype.exch = function (i, j) {
    let temp = this.maxStack[i]
    this.maxStack[i] = this.maxStack[j]
    this.maxStack[j] = temp
}
PriorityQueue.prototype.sink = function(i) {
    while (2 * i <= this.num) {
        let j = 2 * i
        if (j < this.num && this.maxStack[j] < this.maxStack[j + 1]) j++
        if (this.maxStack[i] > this.maxStack[j]) break
        this.exch(i, j)
        i = j
    }
}
PriorityQueue.prototype.insert = function (val) {
    this.maxStack.push(val)
    this.num++
    this.swim(this.num)
};
PriorityQueue.prototype.delete = function () {
    let res = this.maxStack[1]
    this.maxStack[1] = this.maxStack[this.num - 1]
    this.sink(1)
    this.maxStack.pop()
    this.num--
    return res
};
export default PriorityQueue