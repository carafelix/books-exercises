
class Edge {
    constructor(src, dest, weight) {
      this.src = src;
      this.dest = dest;
      this.weight = weight;
    }
  }
    
  class Graph {
    constructor(V, E) {
      this.V = V;
      this.E = E;
      this.edge = [];
    }
  }
    
  function createGraph(V, E) {
    const graph = new Graph(V, E);
    for (let i = 0; i < E; i++) {
      graph.edge[i] = new Edge();
    }
    return graph;
  }


const graph = createGraph(5,8);

graph.edge[0] = new Edge(0, 1, -1);
graph.edge[1] = new Edge(0, 2, 4);
graph.edge[2] = new Edge(1, 2, 3);
graph.edge[3] = new Edge(1, 3, 2);
graph.edge[4] = new Edge(1, 4, 2);
graph.edge[5] = new Edge(3, 2, 5);
graph.edge[6] = new Edge(3, 1, 1);
graph.edge[7] = new Edge(4, 3, -3);

console.log(graph)
  