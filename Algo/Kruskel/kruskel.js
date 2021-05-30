import { Graph } from "../../DS/Graph/graph.js";
import { GraphVertex } from "../../DS/Graph/graph_vertex.js";
import { DisjointSet } from "../../DS/DisjointSet/disjointset.js";
export function kruskel(graph, startVertex) {
  if (!graph || !(graph instanceof Graph))
    throw new Error("kruskel requires valid graph");
  if (!startVertex || !(startVertex instanceof GraphVertex))
    throw new Error("kruskel requires start vertex");
  if (graph.isDirected())
    throw new Error("kruskel work only in un-directed graph");

  const minimumSpanningTree = new Graph();
  const sortedEdges = Array.prototype.sort.call(
    graph.getEdges(),
    (e, b) => e.getWeight() - b.getWeight()
  );
  const keyCallback = (graphVertex) => graphVertex.getKey();
  const disjointSet = new DisjointSet(keyCallback);
  graph.getVertices().forEach((graphVertex) => {
    disjointSet.makeSet(graphVertex);
  });

  sortedEdges.forEach((edge, indx) => {
    if (!disjointSet.inSameSet(edge.getStartVertex(), edge.getEndVertex())) {
      disjointSet.union(edge.getStartVertex(), edge.getEndVertex());
      minimumSpanningTree.addEdge(edge);
    }
  });

  return minimumSpanningTree;
}
