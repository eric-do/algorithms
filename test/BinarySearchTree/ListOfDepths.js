import { expect } from 'chai';
import { createBST } from '../../BinarySearchTree/MinimalHeight';
import { createListArray } from '../../BinarySearchTree/ListOfDepths';

describe('List of Depths', () => {
  it('should create an array of linked lists', () => {
    const arr = [4, 2, 5, 1, 6, 5, 7];
    const tree = createBST(arr);
    const arrayList = createListArray(tree);
    expect(arrayList.length).to.equal(3);
  });
})