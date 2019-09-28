class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  inOrderTraversal(tree, cb) {
    if (tree) {
      this.inOrderTraversal(tree.left, cb);
      cb(tree);
      this.inOrderTraversal(tree.right, cb);
    }
  }

  getDepth() { 
    let maxDepth = 0;
    const calculateDepth = (tree, depth) => {
      if (!tree.left && !tree.right) {
        return depth;
      }
      const leftDepth = calculateDepth(tree.left, depth + 1);
      const rightDepth = calculateDepth(tree.right, depth + 1);
      const greaterDepth = Math.max(leftDepth, rightDepth);
      maxDepth = greaterDepth > maxDepth ? greaterDepth : maxDepth;
    }
    calculateDepth(this, 0);
    return maxDepth;
  }
}

export { BinarySearchTree };