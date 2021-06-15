/**
 * 给你一个用字符数组 tasks 表示的 CPU 需要执行的任务列表。其中每个字母表示一种不同种类的任务。任务可以以任意顺序执行，并且每个任务都可以在 1 个单位时间内执行完。在任何一个单位时间，CPU 可以完成一个任务，或者处于待命状态。

然而，两个 相同种类 的任务之间必须有长度为整数 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。

你需要计算完成所有任务所需要的 最短时间 。
 */
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  const freq = _.countBy(tasks);
  console.log(freq);
  // 最多的执行次数
  const maxExec = Math.max(...Object.values(freq));
  // 具有最多执行次数的任务数量  
  let maxCount = 0;
  Object.values(freq).forEach(v => {
      if (v === maxExec) {
          maxCount++;
      }
  })

  return Math.max((maxExec - 1) * (n + 1) + maxCount, tasks.length);

};
leastInterval(["B","A","A","A","A","A","A","C","D","E","F","G"], 2); 