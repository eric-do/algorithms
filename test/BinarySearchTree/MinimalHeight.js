import { expect } from 'chai';
import { createBST } from '../../BinarySearchTree/MinimalHeight';

describe('Minimal height', () => {
  it('should create a binary search tree from a sorted array', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6];
    const tree = createBST(arr);
    expect(tree.getDepth()).to.equal(2);
    tree.left.value === 1;
    tree.left.left.value === 0;
    tree.left.left.left === null;
    tree.left.left.right === null;
    tree.left.right.value === 2;
    tree.left.right.left === null;
    tree.left.right.right === null;

    tree.right.value === 5;
    tree.right.left.value === 4;
    tree.right.left.left === null;
    tree.right.left.right === null;
    tree.right.right.value === 6;
    tree.right.right.left === null;
    tree.right.right.right === null;
  });
})