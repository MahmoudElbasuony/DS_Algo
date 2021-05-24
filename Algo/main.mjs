import { Graph } from "../DS/Graph/graph.js";
import { GraphEdge } from "../DS/Graph/graph_edge.js";
import { GraphVertex } from "../DS/Graph/graph_vertex.js";
import { dijkstra } from "./Dijkstra/dijkstra.js";
import { bellmanFord } from "./Bellman-Ford/bellman_ford.js";

const graph = new Graph(true);
const vertx1 = new GraphVertex(1, "a");
const vertx2 = new GraphVertex(2, "b");
const vertx3 = new GraphVertex(3, "c");

graph.addVertex(vertx1).addVertex(vertx2).addVertex(vertx3);

const edge1 = new GraphEdge(vertx1, vertx3, 1);
const edge2 = new GraphEdge(vertx1, vertx2, 3);
const edge3 = new GraphEdge(vertx2, vertx3, 2);

graph.addEdge(edge1).addEdge(edge2).addEdge(edge3);

// print shortest path from vertex 1 to all vertices [MST]
console.log(dijkstra(graph, vertx1));
console.log(bellmanFord(graph, vertx1));