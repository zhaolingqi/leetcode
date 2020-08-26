/**
 * 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    const len = s.length;
    if (len <= 1) return false;
    let subLen = 0;
    if(len === 2) {
        return s[0] === s[1];
    }
    let first = 0, last = 1;
    for(let i = 1; i < len - 1; i++) {
        first = 0;
        last = i;
        subLen = i;
        while (last < len) {
            if (s[first] === s[last]) {
                first++;
                last++;
            } else {
                break;
            }
        }
        if(last === len) return (len % subLen === 0);
    
    }
    return false;
};
const res = repeatedSubstringPattern("abcabcabc");
console.log(res);