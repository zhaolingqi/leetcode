/**
 * 
 * 给定一个字符串，逐个翻转字符串中的每个单词。
 * 无空格字符构成一个单词。
输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。 
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // let strArr = s.split(/\s+/g) 
    // console.log(strArr)
    // if(strArr[0] === '') strArr.shift()
    // if(strArr[strArr.length - 1] === '') strArr.pop()
    // return strArr.reverse().join(" ")


    let strArr = s.split(/\s+/g) 
    if(strArr[0] === '') strArr.shift()
    if(strArr[strArr.length - 1] === '') strArr.pop()
    let N = strArr.length
    let i = 0, j = N - 1
    while(i <= j) {
        
            let temp = strArr[i]
            strArr[i] = strArr[j]
            strArr[j] = temp
            i++
            j--

    }
    return(strArr.join(" "))
};
let res = reverseWords("  hello world!  ")