import { Graph } from "../../DS/Graph/graph.js";
import { GraphVertex } from "../../DS/Graph/graph_vertex.js";
import { PriortyQueue } from "../../DS/PriorityQueue/priorityQueue.js";
export function prime(graph, startVertex) {
  if (!graph || !(graph instanceof Graph))
    throw new Error("prime requires valid graph");
  if (!startVertex || !(startVertex instanceof GraphVertex))
    throw new Error("prime requires start vertex");
  if (graph.isDirected())
    throw new Error("prime work only in un-directed graph");

  const minimumSpanningTree = new Graph();
  const queue = new PriortyQueue();
  const visitedVertcies = new Map();

  visitedVertcies.set(startVertex.getKey(), startVertex);
  startVertex.getEdges().forEach((edge) => {
    queue.enqueue(edge, edge.getWeight());
  });

  while (!queue.isEmpty()) {
    const { element: currentMinEdge, priority: weight } = queue.dequeue();

    let nextMinVertex = null;
    if (!visitedVertcies.has(currentMinEdge.getEndVertex().getKey())) {
      nextMinVertex = currentMinEdge.getEndVertex();
    } else if (!visitedVertcies.has(currentMinEdge.getStartVertex().getKey())) {
      nextMinVertex = currentMinEdge.getStartVertex();
    }

    if (nextMinVertex) {
      minimumSpanningTree.addEdge(currentMinEdge);
      visitedVertcies.set(nextMinVertex.getKey(), nextMinVertex);
      nextMinVertex.getEdges().forEach((edge) => {
        if (
          !visitedVertcies.has(edge.getStartVertex().getKey()) ||
          !visitedVertcies.has(edge.getEndVertex().getKey())
        )
          queue.enqueue(edge, edge.getWeight());
      });
    }
  }

  return minimumSpanningTree;
}
