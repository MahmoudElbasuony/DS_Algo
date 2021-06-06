import { Graph } from "../../DS/Graph/graph.js";

export function checkCycleInDirectedGraph(graph) {
  if (!graph || !(graph instanceof Graph))
    throw new Error("checkCycleInDirectedGraph() requires valid graph");

  const cycles = [];
  if (graph.getVertices().length === 0) return { cycles };

  const checkCycelInDFS = (node, current = []) => {
    if (current.includes(node)) {
      cycles.push([...current.map((n) => n.getKey())]);
      return true;
    } else {
      current.push(node);
    }
    const vertecies = node.getNeighbors();
    for (let i = 0; i < vertecies.length; i++) {
      const vertex = vertecies[i];
      const hasCycle = checkCycelInDFS(vertex, current);
      if (hasCycle) break;
      else current.pop();
    }
    return false;
  };

  graph.getVertices().forEach((vertex) => {
    checkCycelInDFS(vertex);
  });

  return { cycles };
}
