/**
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // if(n === 0) return 1
    // // x=0, n>=0
    // if(x === 0) {
    //     if(n > 0) return 1
    //     else return Number.POSITIVE_INFINITY
    // }
    // let flag = true // 用来表示结果是正数还是负数
    // if(x > 0) flag = true
    // else {
    //     if(n % 2 === 0) flag = true
    //     else flag = false
    //     x = -x
    // }
    // if(n < 0) {
    //     x = 1 / x
    //     n = -n
    // }
    // let res = x
    // for(let i = 1; i < n; i++) {
    //     res *= x
    // }
    // console.log(res)
    // if(flag) return res
    // return -res
    if(n === 0) return 1
    return N >= 0 ? QuickPow(x, n) : 1 / QuickPow(x, -n) 

    function QuickPow(x, n) {
        if(n === 0) return 1
        let y = QuickPow(x, Math.floor(n / 2))
        return n % 2 === 0 ? y * y : y * y * x
    }
    
};

myPow(2.00000,10)