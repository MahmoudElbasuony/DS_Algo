import { Graph } from "../DS/Graph/graph.js";
import { GraphEdge } from "../DS/Graph/graph_edge.js";
import { GraphVertex } from "../DS/Graph/graph_vertex.js";
import { BitManipulator } from "./Bit-Manipulation/bit-manipulator.js";
import { breadthFirstSearch } from "./Breadth-First-Search/bfs.js";
import { combinationSum } from "./Combination-Sum/combsum.js";
import { depthFirstSearch } from "./Depth-First-Search/dfs.js";
import { checkCycleInDirectedGraph } from "./DetectCycleInDirectedGraph/checkCycleInDirectedGraph.js";
import { detectCyclesInUnDirectedGraph } from "./DetectCycleInUnDirectedGraph/detectCycleInUDG.js";
import { getSalesPersonTravel } from "./Generic_Problems/getAll_UDG_Paths.js";
import { rainTerraces } from "./Generic_Problems/rain-terraces.js";
import { stairCase } from "./Generic_Problems/stairCase.js";
import longestCommonSubsequence from "./Longest-Common-Sequence/lcs.js";
import { longestIncreasingSequence } from "./Longest-Increasing-Sequence/lis.js";
import btPowerSet, { Math2 } from "./Math/math.js";
import { maximumSubArraySum } from "./MaximumSubarray/msa.js";
import { permutationWithRepition } from "./Permutation/perm-with-repetion.js";
import { permutationWithoutRepition } from "./Permutation/perm-without-repition.js";
import { bitWisePowerSet } from "./PowerSet/bwps.js";
import { dpPowerSet } from "./PowerSet/dpps.js";
import shortestCommonSupersequence from "./Shortest-Common-Sequence/scs.js";
// import { dijkstra } from "./Dijkstra/dijkstra.js";
// import { bellmanFord } from "./Bellman-Ford/bellman_ford.js";

// let graph = new Graph(true);
// const vertx1 = new GraphVertex(1, "a");
// const vertx2 = new GraphVertex(2, "b");
// const vertx3 = new GraphVertex(3, "c");

// graph.addVertex(vertx1).addVertex(vertx2).addVertex(vertx3);

// const edge1 = new GraphEdge(vertx1, vertx3, 1);
// const edge2 = new GraphEdge(vertx1, vertx2, 3);
// const edge3 = new GraphEdge(vertx2, vertx3, 2);

// graph.addEdge(edge1).addEdge(edge2).addEdge(edge3);

// // print shortest path from vertex 1 to all vertices [MST]
// console.log(dijkstra(graph, vertx1));
// console.log(bellmanFord(graph, vertx1));

////////////////////  Minimum Spannig Tree \\\\\\\\\\\\\\\\\\\\\\\\\

// import { prime } from "./Prim/prim.js";
// import { kruskel } from "./Kruskel/kruskel.js";

// let graph = new Graph();
// const vertx1 = new GraphVertex(1, "a");
// const vertx2 = new GraphVertex(2, "b");
// const vertx3 = new GraphVertex(3, "c");

// graph.addVertex(vertx1).addVertex(vertx2).addVertex(vertx3);

// const edge1 = new GraphEdge(vertx1, vertx3, 1);
// const edge2 = new GraphEdge(vertx1, vertx2, 3);
// const edge3 = new GraphEdge(vertx2, vertx3, 2);

// graph.addEdge(edge1).addEdge(edge2).addEdge(edge3);

// // console.log(prime(graph, vertx1).getEdges());
// console.log(kruskel(graph, vertx1).getEdges());

// console.log(BitManipulator.getIthBit(1,0));
// console.log(BitManipulator.getIthBit(1,1));
// console.log(BitManipulator.setIthBit(1,1));
// console.log(BitManipulator.clearBit(3,1));
// console.log(BitManipulator.updateBit(1, 1 , 1));
// console.log(BitManipulator.isEven(20));
// console.log(BitManipulator.isPositive(1));
// console.log(BitManipulator.multiplyByTwo(2));
// console.log(BitManipulator.divideyByTwo(2));
// console.log(BitManipulator.switchSign(2));

// console.log(Math2.factorial(3));

// console.log(btPowerSet([1,2,3,4]));

// const arr = longestCommonSubsequence(['A','C','B','A','D'],['A','B','C','D']);
// console.log(arr);

// const arr = shortestCommonSupersequence(["g", "e", "e", "k"], ["e", "k", "e"]);
// console.log(arr.join(""));

// const arr = combinationSum([2,3,5],8);
// console.log(arr);

// const perm = permutationWithRepition(["A", "B", "C", "D"], 3);
// console.log(perm.length);

// const permWithoutRep = permutationWithoutRepition(["A", "B", "C", "D"], 3);
// console.log(permWithoutRep);

// const combination = combinationWithReptition(['A','B','C','D'], 2);
// console.log(combination);

// const lis =  longestIncreasingSequence([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]);
// console.log(lis);

// const bwPowerSet = bitWisePowerSet(['A','B','C']);
// console.log(bwPowerSet);

// const dpps = dpPowerSet(["A", "B", "C", "D", "E"]);
// console.log(dpps.length);

// const msas = maximumSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// console.log(msas.sum() , msas.toArray());

// const comSum = combinationSum([2,3,6,7], 7);
// console.log(comSum);

// const tree = {
//   root: {
//     key: 0,
//     left: {
//       key: 1,
//       left: { key: 3 },
//       right: { key: 4 },
//     },
//     right: { key: 2 },
//   },
// };

// // const bfs = breadthFirstSearch(tree.root);
// // bfs.traverse(console.log);

// const bfs = depthFirstSearch(tree.root);
// bfs.traverse(console.log);

// const graph = new Graph();
// const vertex1 = new GraphVertex(1, 1);
// const vertex2 = new GraphVertex(2, 2);
// const vertex3 = new GraphVertex(3, 3);
// const vertex4 = new GraphVertex(4, 4);
// const vertex5 = new GraphVertex(5, 5);

// graph.addVertex(vertex1);
// graph.addVertex(vertex2);
// graph.addVertex(vertex3);
// graph.addVertex(vertex4);
// graph.addVertex(vertex5);

// graph
//   .addEdge(new GraphEdge(vertex1, vertex2, 1))
//   .addEdge(new GraphEdge(vertex2, vertex3, 2))
//   .addEdge(new GraphEdge(vertex3, vertex4, 3))
//   .addEdge(new GraphEdge(vertex4, vertex2, 4))
//   .addEdge(new GraphEdge(vertex4, vertex1, 5))
//   .addEdge(new GraphEdge(vertex3, vertex5, 6));

// const { cycles } = checkCycleInDirectedGraph(graph);
// if (cycles.length) console.log("Graph has cycles", cycles);
// else console.log("Graph has no cycle");

// const hasCycle = detectCyclesInUnDirectedGraph(graph);
// console.log(hasCycle);

// const result = rainTerraces([3, 0, 0, 2, 0, 4]);
// console.log(result);

// const result = stairCase(3);
// console.log(result);


// const graph = new Graph();
// const vertex1 = new GraphVertex(1, 1);
// const vertex2 = new GraphVertex(2, 2);
// const vertex3 = new GraphVertex(3, 3);
// const vertex4 = new GraphVertex(4, 4);
// const vertex5 = new GraphVertex(5, 5);

// graph.addVertex(vertex1);
// graph.addVertex(vertex2);
// graph.addVertex(vertex3);
// graph.addVertex(vertex4);
// graph.addVertex(vertex5);

// graph
//   .addEdge(new GraphEdge(vertex1, vertex2, 1))
//   .addEdge(new GraphEdge(vertex2, vertex3, 2))
//   .addEdge(new GraphEdge(vertex3, vertex4, 3))
//   .addEdge(new GraphEdge(vertex4, vertex1, 5))
//   .addEdge(new GraphEdge(vertex3, vertex1, 6));

// const graph_result = getSalesPersonTravel(graph,vertex1);
// console.log(graph_result.getVertices().map(m=>m.getKey()));






















