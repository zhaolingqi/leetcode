/**
 * 你将会获得一系列视频片段，这些片段来自于一项持续时长为 T 秒的体育赛事。这些片段可能有所重叠，也可能长度不一。
 * 视频片段 clips[i] 都用区间进行表示：开始于 clips[i][0] 并于 clips[i][1] 结束。
 * 我们甚至可以对这些片段自由地再剪辑，例如片段 [0, 7] 可以剪切成 [0, 1] + [1, 3] + [3, 7] 三部分。
 * 我们需要将这些片段进行再剪辑，并将剪辑后的内容拼接成覆盖整个运动过程的片段（[0, T]）。
 * 返回所需片段的最小数目，如果无法完成该任务，则返回 -1 。
 */
function videoStitching(clips: number[][], T: number): number {
  let dp: Array<number> = new Array(T + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for(let i = 0; i <= T; i++) {
    for(const clip of clips) {
      if(clip[0] < i && clip[1] >= i) {
        dp[i] = Math.min(dp[i], dp[clip[0]] + 1);
      }
    }
  }
  return dp[T] === Number.MAX_SAFE_INTEGER ? -1 : dp[T];
};