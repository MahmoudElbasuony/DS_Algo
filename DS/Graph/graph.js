import { GraphEdge } from "./graph_edge.js";
import { GraphVertex } from "./graph_vertex.js";

export class Graph {
  constructor(isDirected = false) {
    this._vertices = new Map();
    this._edges = new Map();
    this._isDirected = isDirected;
  }

  addEdge(edge) {
    let startVertex = this.getVertexByKey(edge.getStartVertex().getKey());
    let endVertex = this.getVertexByKey(edge.getEndVertex().getKey());

    if (this._edges.has(edge.getKey())) {
      throw new Error("edge already added");
    } else {
      this._edges.set(edge.getKey(), edge);
    }

    if (!startVertex) {
      this.addVertex(edge.getStartVertex());
      startVertex = edge.getStartVertex();
    }

    if (!endVertex) {
      this.addVertex(edge.getEndVertex());
      endVertex = edge.getEndVertex();
    }

    if (this._isDirected) {
      startVertex.appendEdge(edge);
    } else {
      startVertex.appendEdge(edge);
      endVertex.appendEdge(edge);
    }

    return this;
  }

  deleteEdge(edge) {
    if (!this._edges.has(edge.getKey())) throw new Error("edge not found");
    this._edges.delete(edge.getKey());
    edge.getStartVertex().deleteEdge(edge);
    edge.getEndVertex().deleteEdge(edge);
    return this;
  }

  findEdge(startVertex, endVertex) {
    const vertex = this.getVertexByKey(startVertex.getKey());
    if (!vertex) return null;
    return vertex.findEdge(endVertex);
  }

  addVertex(vertex) {
    if (!vertex && !(vertex instanceof GraphVertex))
      throw new Error("addVertex() required graph vertex");
    this._vertices.set(vertex.getKey(), vertex);
    return this;
  }

  reverse() {
    this._edges.forEach((edge) => {
      this.deleteEdge(edge);
      edge.reverse();
      this.addEdge(edge);
    });
    return this;
  }

  getVerticesIndices() {
    const verticesIndices = new Map();
    this.getVertices().forEach((v, indx) => {
      verticesIndices.set(v.getKey(), indx);
    });
    return verticesIndices;
  }

  getAdjacencyMatrix() {
    const allVertices = this.getVertices();
    const allVerticesIndices = this.getVerticesIndices();
    const adjacencyMatrix = Array(allVertices.length)
      .fill(null)
      .map(() => {
        return Array(allVertices.length).fill(Infinity);
      });
    allVertices.forEach((vertex, indx) => {
      vertex.getNeighbors().forEach((neighbor) => {
        const neighborIndx = allVerticesIndices.get(neighbor.getKey());
        const edge = this.findEdge(vertex, neighbor);
        adjacencyMatrix[indx][neighborIndx] = edge.getWeight();
      });
    });
    return adjacencyMatrix;
  }

  getEdges() {
    return Array.from(this._edges.values());
  }
  getVertices() {
    return Array.from(this._vertices.values());
  }
  getNeighbors(vertex) {
    if (!vertex || !(vertex instanceof GraphVertex))
      throw new Error("addVertex() required graph vertex");
    return vertex.getNeighbors();
  }
  getVertexByKey(key) {
    return this._vertices.has(key) ? this._vertices.get(key) : null;
  }
  getWeight() {
    let weight = 0;
    this.getEdges().forEach((edge) => {
      weight += edge.getWeight();
    });
    return weight;
  }
  isDirected() {
    return this._isDirected;
  }
}
