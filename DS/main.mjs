// import { Trie } from './Trie/trie.js';

// const trie = new Trie();
// trie.insertWord('Mahmoud');
// trie.insertWord('Mohamed');
// trie.insertWord('Mohanad');

// trie.foreach(console.log);

// import { MaxHeap } from "./PriorityQueue/maxHeap.js";
// 4, 10, 3, 5, 1
// const heap = new MaxHeap();
// heap.insert(4);
// heap.insert(10);
// heap.insert(3);
// heap.insert(5);
// heap.insert(1);
// console.log(heap.sort());
// const ascSorted = MaxHeap.heapify([3, 7, 2, 10, 4, 9, 8, 5, 1, 6]).sort();
// console.log(ascSorted);
// console.log(heap.extractRoot());
// console.log(heap.extractRoot());
// console.log(heap.extractRoot());
// console.log(heap.extractRoot());
// console.log(heap.extractRoot());

// import {PriortyQueue} from './PriorityQueue/priorityQueue.js';
// const priortyQueue = new PriortyQueue();
// priortyQueue.enqueue(4,1);
// priortyQueue.enqueue(1,5);
// priortyQueue.enqueue(3,4);

// console.log(priortyQueue.dequeue());
// console.log(priortyQueue.dequeue());

// import {LinkeList} from  './LinkedList/LinkedList.js';
// const list = new LinkeList;
// list.prepend(2);
// list.add(1);
// list.add(2);
// list.add(1);

// console.log(`removing result : ${list.remove(1)}`);
// console.log(list.contains(2));
// console.log(list.contains(1));
// console.log(`size is ${list.getSize()}`);

// import {DoublyLinkedList} from './DoublyLinkedList/DoublyLinkedList.js';

// const dlist = new DoublyLinkedList;

// dlist.add(1);
// dlist.add(2);
// dlist.prepend(2);
// console.log(dlist.contains(2));
// dlist.remove(2);
// console.log(dlist.contains(2));
// console.log(`size is ${dlist.getSize()}`);

// import { BinarySearchTree } from "./BinarySearchTree/BST.js";

// const bst = new BinarySearchTree();
// bst.insert(3, "c");
// bst.insert(2, "c");
// bst.insert(5, "c");
// bst.insert(4, "c");
// bst.insert(1, "c");

// console.log(`size before deletion ${bst.size()}`);
// console.log(bst.delete(2));
// console.log(`size after deletion ${bst.size()}`);

// console.log(bst.contains(1));
// console.log(bst.contains(-1));
// console.log(bst.contains(5));

// console.log("In Order");
// bst.traverseInOrder((el) => {
//   console.log(el);
// });

// console.log("Post Order");
// bst.traversePostOrder((el) => {
//   console.log(el);
// });

// console.log("Pre Order");
// bst.traversePreOrder((el) => {
//   console.log(el);
// });

// console.log("size is : " + bst.size());

// import { AVLTree } from "./AVLTree/AVLTree.js";
// const bst = new AVLTree();
// bst.insert(3, "c");
// bst.insert(2, "c");
// bst.insert(5, "c");
// bst.insert(4, "c");
// bst.insert(1, "c");

// bst.delete(2);

// bst.traverseInOrder(console.log);

import { DisjointSet } from "./DisjointSet/disjointset.js";
const disjoint = new DisjointSet();
disjoint.makeSet(1);
disjoint.makeSet(2);
disjoint.union(1, 2);
console.log(
  `{${Object.values(disjoint.items)
    .map((v) => v.getKey())
    .join(",")}}`
);
console.log(`are {1,2} already in same set ?  ${disjoint.inSameSet(1, 1)}`);
