export function bellmanFord(graph, startVertex) {
  const distances = new Map();
  const previousVertices = new Map();

  graph.getVertices().forEach((vertex) => {
    previousVertices.set(vertex.getKey(), null);
    distances.set(vertex.getKey(), Infinity);
  });
  distances.set(startVertex.getKey(), 0);

  // We need (|V| - 1) iterations.
  for (let i = 0; i < graph.getVertices().length - 1; i++) {
    // During each iteration go through all vertices.
    distances.forEach((distance, vertexKey) => {
      const vertex = graph.getVertexByKey(vertexKey);
      // Go through all vertex edges.
      graph.getNeighbors(vertex).forEach((neighbor) => {
        const edge = graph.findEdge(vertex, neighbor);
        // Find out if the distance to the neighbor is shorter in this iteration
        // then in previous one.
        const distanceToVertex = distance;
        const distanceToNeighbor = distanceToVertex + edge.getWeight();
        if (distanceToNeighbor < distances.get(neighbor.getKey())) {
          distances.set(neighbor.getKey(), distanceToNeighbor);
          previousVertices.set(neighbor.getKey(), vertex);
        }
      });
    });
  }

  return {
    distances: distances.entries(),
    previousVertices: distances.entries(),
  };
}
