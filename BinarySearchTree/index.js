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
    const getHeight = tree => {
      return tree ? Math.max(getHeight(tree.left), getHeight(tree.right)) + 1 : -1;
    };
    return getHeight(this);
  }
}

export { BinarySearchTree };