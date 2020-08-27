/**
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    let N = num1.length
    let M = num2.length
    let sum = '0'
    if(num1 === '0' || num2 === '0') {
        return sum
    }
    for(let i = M - 1; i >= 0; i--) {
        let temp1 = num2[i] - '0'
        let carry = 0
        let res = ''
        for(let j = N - 1; j >= 0; j--) {
            let temp2 = num1[j] - '0'
            let tempRes = temp1 * temp2 + carry
            if(tempRes >= 10) {
                carry = 0
                while(tempRes >= 10) {
                    carry ++
                    tempRes -= 10
                }
            } else carry = 0
            res = tempRes + res


        }
        if(carry) res = carry + res
        for(let j = M - 1; j > i; j--) {
            res = res + '0'
        }
        sum = add(res, sum)
    }
    return sum
};

function add(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let ret = '';
    while (i >= 0 || j >= 0) {
        let x = 0;
        let y = 0;
        let sum;
        if (i >= 0) {
            x = a[i] - '0';
            i--;
        }
        if (j >= 0) {
            y = b[j] - '0';
            j--;
        }
        sum = x + y + carry;
        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        } else {
            carry = 0;
        }
        // 0 + ''
        ret = sum + ret;
    }
    if (carry) {
        ret = carry + ret;
    }
    return ret;
}
let res = multiply('0','456')
console.log(res)