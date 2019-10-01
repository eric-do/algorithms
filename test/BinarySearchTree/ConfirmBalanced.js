import { expect } from 'chai';
import { BinarySearchTree } from '../../BinarySearchTree';
import { confirmBalanced } from '../../BinarySearchTree/ConfirmBalanced'

describe('ConfirmBalancedTree', () => {
  it('should return true for a balanced tree', () => {
    const tree1 = new BinarySearchTree(2);
    const tree2 = new BinarySearchTree(1);
    const tree3 = new BinarySearchTree(3);

    tree1.left = tree2;
    tree1.right = tree3;
    expect(confirmBalanced(tree1)).to.equal(true);
  });

  it('should return false for an unbalanced tree', () => {
    const tree1 = new BinarySearchTree(2);
    const tree2 = new BinarySearchTree(1);
    const tree3 = new BinarySearchTree(3);

    tree1.left = tree2;
    tree2.left = tree3;
    expect(confirmBalanced(tree1)).to.equal(false);
  });
})