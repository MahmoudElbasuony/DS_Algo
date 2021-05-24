export class GraphEdge {
  constructor(startVertx, endVertex, weight = 1) {
    if (!startVertx || !endVertex)
      throw new Error("edge requires start vertex and end vertex");
    this._startVertex = startVertx;
    this._endVertex = endVertex;
    this._weight = weight;
  }
  getStartVertex() {
    return this._startVertex;
  }
  getEndVertex() {
    return this._endVertex;
  }
  getWeight() {
    return this._weight;
  }
  getKey() {
    const startVertexKey = this._startVertex.getKey();
    const endVertexKey = this._endVertex.getKey();
    return `${startVertexKey}_${endVertexKey}`;
  }
  setStartVertex(vertex) {
    if (!vertex) throw new Error("edge requires start vertex");
    this._startVertex = vertex;
    this._startVertex.appendEdge(this);
  }
  setEndVertex(vertex) {
    if (!vertex) throw new Error("edge requires end vertex");
    this._endVertex = vertex;
    this._endVertex.appendEdge(this);
  }
  setWeight(weight = 1) {
    this._weight = weight;
  }
  reverse() {
    [this._startVertex, this._endVertex] = [this._endVertex, this._startVertex];
  }
}
