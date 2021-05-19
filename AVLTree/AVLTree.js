import { BinarySearchTree } from "../BinarySearchTree/BST.js";

export class AVLTree extends BinarySearchTree {
  insert(key, value) {
    const result = super.insert(key, value);
    let node = super.getRoot().find(key);
    while (node) {
      this.balance(node);
      node = node.getParent();
    }
    return result;
  }

  delete(key) {
    const result = super.delete(key);
    this.balance(this.getRoot());
    return result;
  }

  balance(startNode) {
    const nodeBalance = startNode.getbalanceFactor();
    if (nodeBalance > 1) {
      // then left is long
      const nodeLeftBalance = startNode.getLeft().getbalanceFactor();
      if (nodeLeftBalance < 0) {
        this.rotateLeftRight(startNode);
      } else if (nodeLeftBalance > 0) {
        this.rotateLeftLeft(startNode);
      }
    } else if (nodeBalance < -1) {
      // right is long
      const nodeRightBalance = startNode.getRight().getbalanceFactor();
      if (nodeRightBalance < 0) {
        this.rotateRightRight(startNode);
      } else if (nodeRightBalance > 0) {
        this.rotateRightLeft(startNode);
      }
    }
  }

  rotateLeftLeft(rootNode) {
    const leftNode = rootNode.getLeft();
    rootNode.setLeft(null);

    // Make left node to be a child of rootNode's parent.
    if (rootNode.getParent()) {
      rootNode.getParent().setLeft(leftNode);
    } else if (rootNode === this.getRoot()) {
      // If root node is root then make left node to be a new root.
      this.setRoot(leftNode);
    }

    // If left node has a right child then detach it and
    // attach it as a left child for rootNode.
    if (leftNode.hasRight()) {
      rootNode.setLeft(leftNode.getRight());
    }

    // Attach rootNode to the right of leftNode.
    leftNode.setRight(rootNode);
  }
  rotateLeftRight(rootNode) {
    // Detach left node from rootNode since it is going to be replaced.
    const leftNode = rootNode.getLeft();
    rootNode.setLeft(null);

    // Detach right node from leftNode.
    const leftRightNode = leftNode.getRight();
    leftNode.setRight(null);

    // Preserve leftRightNode's left subtree.
    if (leftRightNode.hasLeft()) {
      leftNode.setRight(leftRightNode.getLeft());
      leftRightNode.setLeft(null);
    }

    // Attach leftRightNode to the rootNode.
    rootNode.setLeft(leftRightNode);

    // Attach leftNode as left node for leftRight node.
    leftRightNode.setLeft(leftNode);

    // Do left-left rotation.
    this.rotateLeftLeft(rootNode);
  }
  rotateRightLeft(rootNode) {
    // Detach right node from rootNode since it is going to be replaced.
    const rightNode = rootNode.getRight();
    rootNode.setRight(null);

    // Detach left node from rightNode.
    const rightLeftNode = rightNode.getLeft();
    rightNode.setLeft(null);

    if (rightLeftNode.hasRight()) {
      rightNode.setLeft(rightLeftNode.getRight());
      rightLeftNode.setRight(null);
    }

    // Attach rightLeftNode to the rootNode.
    rootNode.setRight(rightLeftNode);

    // Attach rightNode as right node for rightLeft node.
    rightLeftNode.setRight(rightNode);

    // Do right-right rotation.
    this.rotateRightRight(rootNode);
  }
  rotateRightRight(rootNode) {
      // Detach right node from root node.
    const rightNode = rootNode.getRight();
    rootNode.setRight(null);

    // Make right node to be a child of rootNode's parent.
    if (rootNode.getParent()) {
      rootNode.getParent().setRight(rightNode);
    } else if (rootNode === this.getRoot()) {
      // If root node is root then make right node to be a new root.
      this.setRoot(rightNode);
    }

    // If right node has a left child then detach it and
    // attach it as a right child for rootNode.
    if (rightNode.hasLeft()) {
      rootNode.setRight(rightNode.getLeft());
    }

    // Attach rootNode to the left of rightNode.
    rightNode.setLeft(rootNode);
  }
}
