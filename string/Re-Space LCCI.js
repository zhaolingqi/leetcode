/**
 * 哦，不！你不小心把一个长篇文章中的空格、标点都删掉了，并且大写也弄成了小写。
 * 像句子"I reset the computer. It still didn’t boot!"已经变成了"iresetthecomputeritstilldidntboot"。
 * 在处理标点符号和大小写之前，你得先把它断成词语。当然了，你有一本厚厚的词典dictionary，
 * 不过，有些词没在词典里。假设文章用sentence表示，设计一个算法，把文章断开，要求未识别的字符最少，返回未识别的字符数。
 *  注意：本题相对原题稍作改动，只需返回未识别的字符数
 * 输入：
dictionary = ["looked","just","like","her","brother"]
sentence = "jesslookedjustliketimherbrother"
输出： 7
解释： 断句后为"jess looked just like tim her brother"，共7个未识别字符。
 */
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function(dictionary, sentence) {
  let set = new Set(dictionary);
  let N = sentence.length;
  if(N < 1) return 0;
  let max = -1;
  let min = Number.MAX_SAFE_INTEGER;
  let res = [];
  dictionary.forEach((e, index) => {
    const len = e.length;
    max = len > max ? len : max;
    min = len < min ? len : min
  });
  let dp = new Array(N + 1);
  dp[0] = 0;
  for(let i = 1; i < min; i++) {
    dp[i] = i;
  }
  for(let i = min; i <= N; i++) {
    dp[i] = dp[i - 1] + 1;
    for(let j = i - max > 0 ? i - max + 1 : 1; j <= i - min + 1; j++) {
      const temp = sentence.slice(j - 1, i);
      if(set.has(temp)) {
        dp[i] = Math.min(dp[i], dp[j - 1]);
      }
    }
  }
  console.log(dp);
  return dp[N];
};
const dictionary = ["potimzz"];
const sentence = "potimzzpotimzz";
respace(dictionary, sentence);
