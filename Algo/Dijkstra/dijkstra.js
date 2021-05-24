import { PriortyQueue } from "../../DS/PriorityQueue/priorityQueue.js";
import { Graph } from "../../DS/Graph/graph.js";
import { GraphVertex } from "../../DS/Graph/graph_vertex.js";

export function dijkstra(graph, startVertex) {
  if (!graph || !(graph instanceof Graph))
    throw new Error("dijkstra requires valid graph");
  if (!startVertex || !(startVertex instanceof GraphVertex))
    throw new Error("dijkstra requires start vertex");

  const distances = new Map();
  const previousVertices = new Map();
  const visitedVertices = new Map();

  graph.getVertices().forEach((vertex) => {
    distances.set(vertex, Infinity);
    previousVertices.set(vertex, null);
  });
  distances.set(startVertex, 0);
  const pq = new PriortyQueue();
  pq.enqueue(startVertex, distances.get(startVertex));

  while (!pq.isEmpty()) {
    const { element: currentVertex, priority: cost } = pq.dequeue();
    currentVertex.getNeighbors().forEach((neighbor) => {
      const edge = graph.findEdge(currentVertex, neighbor);
      const neighborNextCost = cost + edge.getWeight();
      const neighborCurrentCost = distances.get(neighbor);

      if (neighborCurrentCost > neighborNextCost) {
        distances.set(neighbor, neighborNextCost);
        if (pq.hasValue(neighbor)) {
          pq.changePriority(neighbor, neighborNextCost);
        }
        previousVertices.set(neighbor, currentVertex);
      }

      if (!pq.hasValue(neighbor)) {
        pq.enqueue(neighbor, neighborNextCost);
      }
    });
    visitedVertices.set(currentVertex.getKey(), currentVertex);
  }

  return {
    distances: distances.entries(),
    previousVertices: previousVertices.entries(),
  };
}
