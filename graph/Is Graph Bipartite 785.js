/**
 * 给定一个无向图graph，当这个图为二分图时返回true。

如果我们能将一个图的节点集合分割成两个独立的子集A和B，并使图中的每一条边的两个节点一个来自A集合，一个来自B集合，我们就将这个图称为二分图。

graph将会以邻接表方式给出，graph[i]表示图中与节点i相连的所有节点。每个节点都是一个在0到graph.length-1之间的整数。这图中没有自环和平行边： graph[i] 中不存在i，并且graph[i]中没有重复的值。
 */
/**
 * 染色法，将两个结点相连时，则必属于不同集合，
 * 假设不同集合不同颜色，进行遍历。
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  const n = graph.length;
  // color[i] = 0 表示为染色， 1 表示A集合，2 表示B 集合
  let color = new Array.fill(0);
  for(let i = 0; i < n; i++) {
    if(color[i] === 0) {
      let que = [];
      que.push(i);
      color[i] = 1;
      while(que.length > 0) {
        let node = que.shift();
        let nColor = color[node] === 1 ? 2 : 1;
        for(const neighbor of graph[i]) {
          if(color[neighbor] === 0) {
            que.push(neighbor);
            color[neighbor] = nColor;
          } else if (color[neighbor] !== nColor) {
            return false;
          }
        }
      }
    }
  }
  return true;
};