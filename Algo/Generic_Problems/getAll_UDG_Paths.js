import { Graph } from "../../DS/Graph/graph.js";
import { GraphVertex } from "../../DS/Graph/graph_vertex.js";
import { kruskel } from "../Kruskel/kruskel.js";
export function getSalesPersonTravel(graph, startVertex) {
  if (!graph || !(graph instanceof Graph))
    throw new Error("getSalesPersonTravel() requires graph");
  if (!startVertex || !(startVertex instanceof GraphVertex))
    throw new Error("getSalesPersonTravel() requires graph start vertex");

  const ks_graph = kruskel(graph, startVertex);

  return ks_graph;
}
