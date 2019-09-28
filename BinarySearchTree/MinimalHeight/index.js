import { BinarySearchTree } from "../";
// Given a sorted array of unique integers
// Create a BST of minimal height

const createBST = arr => {
  const createFromSubArray = (arr, start, end) => {
    if (start <= end) {
      const mid = Math.ceil((start + end) / 2);
      const tree = new BinarySearchTree(arr[mid]);
      tree.left = createFromSubArray(arr, start, mid - 1);
      tree.right = createFromSubArray(arr, mid + 1, end);
      return tree;
    }
  };

  return createFromSubArray(arr, 0, arr.length - 1);
};

export { createBST };
