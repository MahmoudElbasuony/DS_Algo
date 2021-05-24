export class GraphVertex {
  constructor(value, key = undefined) {
    if (value === undefined) throw new Error("value is required");
    this._value = value;
    this._key = key || value;
    this._edges = [];
  }
  getValue() {
    return this._value;
  }
  setValue(val) {
    this._value = val;
  }
  getKey() {
    return this._key;
  }
  setKey(key) {
    if (key === undefined || key === null)
      throw new Error("setKey() requires key");
    this._key = key;
  }
  getEdges() {
    return this._edges;
  }
  getNeighbors() {
    return this._edges.map((edge) =>
      edge.getStartVertex() === this
        ? edge.getEndVertex()
        : edge.getStartVertex()
    );
  }
  hasEdge(edge) {
    return !!this._edges.find(edge);
  }
  hasNeighbor(vertex) {
    const vert = this._edges.find(
      (edge) =>
        edge.getStartVertex() === vertex || edge.getEndVertex() === vertex
    );
    return !!vert;
  }
  deleteEdge(edge) {
    const matchedEdgeIndx = this._edges.indexOf(edge);
    if (matchedEdgeIndx > -1) {
      this._edges.splice(matchedEdgeIndx, 1);
    }
  }
  deleteEdges() {
    this._edges.forEach(this.deleteEdge);
  }
  appendEdge(edge) {
    this._edges.push(edge);
    return this;
  }
  findEdge(vertex) {
    const edge = this._edges.find(
      (edge) =>
        edge.getStartVertex() === vertex || edge.getEndVertex() === vertex
    );
    return edge;
  }
  deleteAllEdges() {
    this._edges.forEach(this.deleteEdge);
    return this;
  }
}
