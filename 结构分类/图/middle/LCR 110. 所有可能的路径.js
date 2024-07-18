// 给定一个有 n 个节点的有向无环图，用二维数组 graph 表示，请找到所有从 0 到 n-1 的路径并输出（不要求按顺序）。

// graph 的第 i 个数组中的单元都表示有向图中 i 号节点所能到达的下一些结点（译者注：有向图是有方向的，即规定了 a→b 你就不能从 b→a ），若为空，就是没有下一个节点了。

// 示例 1：

// 输入：graph = [[1,2],[3],[3],[]]
// 输出：[[0,1,3],[0,2,3]]
// 解释：有两条路径 0 -> 1 -> 3 和 0 -> 2 -> 3
// 示例 2：

// 输入：graph = [[4,3,1],[3,2,4],[3],[4],[]]
// 输出：[[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
// 示例 3：

// 输入：graph = [[1],[]]
// 输出：[[0,1]]
// 示例 4：

// 输入：graph = [[1,2,3],[2],[3],[]]
// 输出：[[0,1,2,3],[0,2,3],[0,3]]
// 示例 5：

// 输入：graph = [[1,3],[2],[3],[]]
// 输出：[[0,1,2,3],[0,3]]

// 提示：

// n == graph.length
// 2 <= n <= 15
// 0 <= graph[i][j] < n
// graph[i][j] != i
// 保证输入为有向无环图 (GAD)

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const output = [];

  const findPath = (index, path) => {
    if (index === graph.length - 1) {
      output.push(path);
      return;
    }
    for (let i = 0; i < graph[index].length; i++) {
      findPath(graph[index][i], [...path, graph[index][i]]);
    }
  };

  findPath(0, [0]);

  return output;
};

var allPathsSourceTarget = function (graph) {
  const stack = [],
    ans = [];

  const dfs = (graph, x, n) => {
    console.log(stack);
    if (x === n) {
      ans.push(stack.slice());
      return;
    }
    for (const y of graph[x]) {
      stack.push(y);
      dfs(graph, y, n);
      stack.pop();
    }
  };

  stack.push(0);
  dfs(graph, 0, graph.length - 1);
  return ans;
};

graph = [[1, 2], [3], [3], []];
graph = [[4, 3, 1], [3, 2, 4], [3], [4], []];

console.log(allPathsSourceTarget(graph));
