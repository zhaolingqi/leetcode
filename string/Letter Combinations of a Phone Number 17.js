/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  let arr = digits.split("");
  let res = sub(arr.slice(0));
  console.log(res);

  function sub(digits) {
    if(digits.length === 1) {
      return map[digits[0]];
    }
    let tempArr = sub(digits.slice(1));
    let N = map[digits[0]].length;
    let M = tempArr.length;
    let arr = []
    for(let i = 0; i < N; i++) {
      for(let j = 0; j < M; j++) {
        arr.push(map[digits[0]][i] + tempArr[j]);
      }
    }
    return arr;
  }
};

letterCombinations("23")