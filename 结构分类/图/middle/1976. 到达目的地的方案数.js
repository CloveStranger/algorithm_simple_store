// 你在一个城市里，城市由 n 个路口组成，路口编号为 0 到 n - 1 ，某些路口之间有 双向 道路。输入保证你可以从任意路口出发到达其他任意路口，且任意两个路口之间最多有一条路。

// 给你一个整数 n 和二维整数数组 roads ，其中 roads[i] = [ui, vi, timei] 表示在路口 ui 和 vi 之间有一条需要花费 timei 时间才能通过的道路。你想知道花费 最少时间 从路口 0 出发到达路口 n - 1 的方案数。

// 请返回花费 最少时间 到达目的地的 路径数目 。由于答案可能很大，将结果对 109 + 7 取余 后返回。

// 示例 1：

// 输入：n = 7, roads = [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]
// 输出：4
// 解释：从路口 0 出发到路口 6 花费的最少时间是 7 分钟。
// 四条花费 7 分钟的路径分别为：
// - 0 ➝ 6
// - 0 ➝ 4 ➝ 6
// - 0 ➝ 1 ➝ 2 ➝ 5 ➝ 6
// - 0 ➝ 1 ➝ 3 ➝ 5 ➝ 6
// 示例 2：

// 输入：n = 2, roads = [[1,0,10]]
// 输出：1
// 解释：只有一条从路口 0 到路口 1 的路，花费 10 分钟。

// 提示：

// 1 <= n <= 200
// n - 1 <= roads.length <= n * (n - 1) / 2
// roads[i].length == 3
// 0 <= ui, vi <= n - 1
// 1 <= timei <= 109
// ui != vi
// 任意两个路口之间至多有一条路。
// 从任意路口出发，你能够到达其他任意路口。
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */

//tips Array.fill(x) x指向的是同一引用，如果是数组会导致数据修改产生异常
// var countPaths = function (n, roads) {
//   const dp = new Array(n).fill([]).map(() => new Array(n).fill(Infinity));
//   for (let i = 0; i < n; i++) {
//     dp[i][i] = 0; // 自己到自己的距离为 0
//   }
//   for (let i = 0; i < roads.length; i++) {
//     const [u, v, time] = roads[i];
//     dp[u][v] = time;
//     dp[v][u] = time;
//   }
//   console.log(dp);

//   for (let k = 0; k < n; k++) {
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j]);
//       }
//     }
//   }
//   let shortestPathCount = 0;
//   // 计算到达目的地的最短路径数目
//   for (let i = 0; i < n; i++) {
//     if (dp[i][n - 1] === dp[0][n - 1] - dp[i][0]) {
//       shortestPathCount++;
//     }
//   }

//   // 返回最短路径数目
//   return shortestPathCount % (10 ** 9 + 7);
// };

var countPaths = function (n, roads) {
  const mod = Math.pow(10, 9) + 7;
  const graph = new Array(n).fill(null).map(() => new Array());

  // 构建邻接表
  for (const [u, v, time] of roads) {
    graph[u].push({ node: v, time });
    graph[v].push({ node: u, time });
  }
  console.log(graph);

  const dist = new Array(n).fill(Infinity);
  const count = new Array(n).fill(0);
  const visited = new Array(n).fill(false);

  dist[0] = 0;
  count[0] = 1;

  const pq = new PriorityQueue();
  pq.enqueue({ node: 0, time: 0 });

  while (!pq.isEmpty()) {
    const { node, time } = pq.dequeue();

    if (visited[node]) continue;
    visited[node] = true;

    for (const { node: nextNode, time: nextTime } of graph[node]) {
      if (dist[nextNode] > dist[node] + nextTime) {
        dist[nextNode] = dist[node] + nextTime;
        count[nextNode] = count[node];
        pq.enqueue({ node: nextNode, time: dist[nextNode] });
      } else if (dist[nextNode] === dist[node] + nextTime) {
        count[nextNode] = (count[nextNode] + count[node]) % mod;
      }
    }
  }

  return count[n - 1];
};

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val) {
    this.values.push(val);
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.time - b.time);
  }

  isEmpty() {
    return this.values.length === 0;
  }
}

n = 7;
roads = [
  [0, 6, 7],
  [0, 1, 2],
  [1, 2, 3],
  [1, 3, 3],
  [6, 3, 3],
  [3, 5, 1],
  [6, 5, 1],
  [2, 5, 1],
  [0, 4, 5],
  [4, 6, 2],
];

const blockArr = [
  [0, 2, Infinity, Infinity, 5, Infinity, 7],
  [2, 0, 3, 3, Infinity, Infinity, Infinity],
  [Infinity, 3, 0, Infinity, Infinity, 1, Infinity],
  [Infinity, 3, Infinity, 0, Infinity, 1, 3],
  [5, Infinity, Infinity, Infinity, 0, Infinity, 2],
  [Infinity, Infinity, 1, 1, Infinity, 0, 1],
  [7, Infinity, Infinity, 3, 2, 1, 0],
];

const flArr = [
  [0, 2, 5, 5, 5, 6, 7],
  [2, 0, 3, 3, 7, 4, 5],
  [5, 3, 0, 2, 4, 1, 2],
  [5, 3, 2, 0, 4, 1, 2],
  [5, 7, 4, 4, 0, 3, 2],
  [6, 4, 1, 1, 3, 0, 1],
  [7, 5, 2, 2, 2, 1, 0],
];

// 解释：从路口 0 出发到路口 6 花费的最少时间是 7 分钟。
// 四条花费 7 分钟的路径分别为：
// - 0 ➝ 6
// - 0 ➝ 4 ➝ 6
// - 0 ➝ 1 ➝ 2 ➝ 5 ➝ 6
// - 0 ➝ 1 ➝ 3 ➝ 5 ➝ 6
console.log(countPaths(n, roads));
