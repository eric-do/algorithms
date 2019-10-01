const confirmBalanced = tree => {
  // I: tree
  // O: bool - true if balanced
  // C: none
  // E: null tree

  // If tree is null, return true
  // Get left height
  // Get right height
  // Compare heights
  // Return false if heigh difference >= 2
  // Continue recursion until base case - no more nodes; return true

  const getHeight = tree => {
    return tree ? Math.max(getHeight(tree.left), getHeight(tree.right)) + 1 : -1;
  };

  if (!tree) { 
    return true;
  }

  const diff = Math.abs(getHeight(tree.left) - getHeight(tree.right));

  if (diff > 1) {
    return false;
  } else {
    return confirmBalanced(tree.left) && confirmBalanced(tree.right);
  }
};

export { confirmBalanced };
