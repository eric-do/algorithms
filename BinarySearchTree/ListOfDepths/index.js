import { LinkedList, Node } from '../../LinkedList';

const createListArray = (node, opts) => {
  if (!opts) {
    const arr = [];
    createListArray(node, { arr, level: 0 });
    return arr;
  } else {
    if (!node) { return }
    const { arr, level } = opts;
    if (!arr[level]) {
      const list = new LinkedList();
      arr[level] = list;
    }
    arr[level].addToTail(node);
    createListArray(node.left, { arr, level: level + 1 });
    createListArray(node.right, { arr, level: level + 1 });
  }
}

export { createListArray }