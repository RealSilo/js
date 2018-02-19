function bfs(graph, root) {
  let nodesLen = {};

  graph.forEach((node, index) => {
    nodesLen[index] = Infinity;
  });

  nodesLen[root] = 0;

  let queue = [root];
  let current;

  while (queue.length > 0) {
    current = queue.shift();

    let connections = graph[current];
    let connectedIdx = [];

    connections.forEach((value, index) => {
      if (value === 1) {
        connectedIdx.push(index);
      }
    });

    connectedIdx.forEach((value) => {
      if (nodesLen[value] == Infinity) {
        nodesLen[value] = nodesLen[current] + 1;
        queue.push(value);
      }
    });
  }

  return nodesLen;
}

const graph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0 ,0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
];

console.log(bfs(graph, 0));