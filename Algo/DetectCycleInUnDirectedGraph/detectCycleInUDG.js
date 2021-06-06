import { DisjointSet } from "../../DS/DisjointSet/disjointset.js";
import { Graph } from "../../DS/Graph/graph.js";
export function detectCyclesInUnDirectedGraph(graph) {
  if (!graph || !(graph instanceof Graph))
    throw new Error("checkCycleInDirectedGraph() requires valid graph");

  let hasCycle = false;
  const vertices = graph.getVertices();
  if (vertices.length === 0) return hasCycle;
  const disjointSet = new DisjointSet((v) => v.getKey());
  vertices.forEach((vertix) => disjointSet.makeSet(vertix));
  const edges = graph.getEdges();
  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    const startVertex = edge.getStartVertex();
    const endVertix = edge.getEndVertex();
    if (disjointSet.inSameSet(startVertex, endVertix)) {
      hasCycle = true;
      break;
    } else {
      disjointSet.union(startVertex, endVertix);
    }
  }

  return hasCycle;
}
