/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 */
/**
 * @param {number} n
 * @return {string[]}
 */

// 暴力法，首先列出所有括号可能，在判断是否是有效括号序列
// var generateParenthesis = function(n) {

//     let res = []
//     let temp = new Array(2 * n)
//     generateAll(temp, 0, res)
//     console.log(res)
//     function generateAll(temp, pos, res) {
//         if(pos === temp.length) {
//             if(valid(temp)) {
//                 res.push(temp.join(""))
//                 return
//             }
//         } else {
//             temp[pos] = '('
//             generateAll(temp, pos + 1, res)
//             temp[pos] = ')'
//             generateAll(temp, pos + 1, res)
//         }
//     }

//     function valid(str) {
//         let count = 0
//         for(let s of str) {
//             if(s === '(') count++
//             else count--
//             if(count < 0) return false
//         }
//         return count === 0
//     }
// };
var generateParenthesis = function (n) {

    let res = []
    let temp = new Array(2 * n)
    generateAll(temp, 0, res, 0, 0)
    console.log(res)


    function generateAll(temp, pos, res, left, right) {
        if (pos === temp.length) {
            res.push(temp.join(""))
            return

        } else {
            if (left < n) {
                temp[pos] = '('
                generateAll(temp, pos + 1, res, left + 1, right)
            }
            if (right < left) {
                temp[pos] = ')'
                generateAll(temp, pos + 1, res, left, right + 1)
            }
        }
    }

};
// generateParenthesis(3)


var isValid = function(s) {
    let temp = s.split("")
    if(temp.length < 1) return true
    let stack = []
    for(let ch of temp) {
        if(/\(|\{|\[/.test(ch)) {
            temp.push(ch)
        } else {
            let ch2 = temp.pop()
            if(ch2 === '(' && ch === ')') continue
            if(ch2 === '[' && ch === ']') continue
            if(ch2 === '{' && ch === '}') continue
            else return false
        }
    }
    return stack.length === 0
};

console.log(isValid('['))