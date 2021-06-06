// function getMinimumSwaps(arr) {
//   if (!arr || !(arr instanceof Array) || arr.length === 0)
//     throw new Error("getMinimumSwaps() requires none empty valid array");
//   let minimumNumberOfSwaps = 0;

//   const newArr = [...arr];

//   for (let i = 0; i < newArr.length; i++) {
//     const el = newArr[i];
//     const correctPosition = (el - 1) % arr.length;
//     if (correctPosition !== i) {
//       [newArr[correctPosition], newArr[i]] = [
//         newArr[i],
//         newArr[correctPosition],
//       ];
//       minimumNumberOfSwaps++;
//       i--;
//     }
//   }

//   return minimumNumberOfSwaps;
// }

// // console.log(
// //   getMinimumSwaps([
// //     2, 31, 1, 38, 29, 5, 44, 6, 12, 18, 39, 9, 48, 49, 13, 11, 7, 27, 14, 33,
// //     50, 21, 46, 23, 15, 26, 8, 47, 40, 3, 32, 22, 34, 42, 16, 41, 24, 10, 4, 28,
// //     36, 30, 37, 35, 20, 17, 45, 43, 25, 19,
// //   ])
// // );

// function getMaximumSubSetSum(arr) {
//   if (!arr || !(arr instanceof Array))
//     throw new Error("getMaximumSubSetSum(arr) requires an array");
//   const allPossibleSubSetsMap = getAllPossibleSubSets(arr);
//   let maxSum = 0;
//   allPossibleSubSetsMap.forEach((_, sum) => {
//     if (sum > maxSum) maxSum = sum;
//   });
//   return maxSum;
// }

// function getAllPossibleSubSets(arr) {
//   const subsets = [];
//   const extractSubsetRecursive = (subArr = arr, current = []) => {
//     if (!subArr.length) {
//       //   const sum = current.reduce((ac, v) => ac + v, 0);
//       //   subsets.set(sum, [...current]);
//       subsets.push([...current]);
//       return;
//     }
//     subArr.forEach((val, indx) => {
//       current.push(val);
//       extractSubsetRecursive(subArr.slice(indx + 2), current);
//       current.pop();
//     });
//   };

//   extractSubsetRecursive();

//   return subsets;
// }

// // 2, 1, 5, 8, 4
// // 3, 7, 4, 6, 5
// // 3, 5, -7, 8, 10
// console.log(getAllPossibleSubSets([2, 1, 5, 8, 4, ...Array(1000).fill(0)]));



// import { DisjointSet } from "../../DS/DisjointSet/disjointset.js";

// function calculateCost(n, edges) {
//   const disjoint = new DisjointSet();
//   let sum = 0;
//   let connectedVerticiesCount = 0;
//   edges.forEach(edgeStr => {
//     const edge = edgeStr.split("").map(Number);
//     const vertex1 = edge[0];
//     const vertex2 = edge[1];
//     if (!disjoint.find(vertex1)) { disjoint.makeSet(vertex1); connectedVerticiesCount++; }
//     if (!disjoint.find(vertex2)) { disjoint.makeSet(vertex2); connectedVerticiesCount++; }
//     if (!disjoint.inSameSet(vertex1, vertex2)) { disjoint.union(vertex1, vertex2);  }
//   });
//   disjoint.sizes().forEach(s => sum += Math.ceil(Math.floor(s)));
//   sum += (n - connectedVerticiesCount);
//   return sum;
// }

// console.log(calculateCost(5 , ['1 2','2 5', '5 8']));
