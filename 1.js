/**
 * 给定形如 www.toutiao.com 的 URL，将其转换成 com.toutiao.www 的形式，要求必须原地操作。
 * （就只能在给定的string上进行操作，不能新建变量来缓存操作结果，不能用split、splice、slice等会新建一个缓存变量的东东。反正这里我一点头绪都没有。）
 */
function reverseString(str) {
  // 分别反转，再总体反转
  
}

var length = 10;
function fn() {
 return this.length+1;
}
var obj = {
 length: 5,
 test1: function() {
  return fn();
 }
};
obj.test2=fn;
//下面代码输出是什么
console.log(obj.test1()) //11
console.log(fn()===obj.test2()) // 11 6



console.log('begin')
setTimeout(() => {
    console.log('setTimeout 1')
    Promise.resolve().then(() => {
        console.log('promise 1')
        setTimeout(() => {
            console.log('setTimeout2 between promise1&2')
        })
    }).then(() => {
        console.log('promise 2')
    })
}, 0)
console.log('end')

// begin
// end 
// setTimeout 1
// promise 1
// promise 2
// setTimeout2 between promise1&2