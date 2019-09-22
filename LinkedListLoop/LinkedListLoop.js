class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const findLoopEntry = LinkedList => {
  if (LinkedList.head === null || LinkedList.head.next === null) { 
    return -1; 
  }

  let slowRunner = LinkedList.head;
  let fastRunner = slowRunner;

  slowRunner = slowRunner.next;
  fastRunner = fastRunner.next.next;

  while (fastRunner && fastRunner.next && fastRunner !== slowRunner) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;
  }

  if (fastRunner === slowRunner) {
    slowRunner = LinkedList.head;

    while (slowRunner !== fastRunner) {
      slowRunner = slowRunner.next;
      fastRunner = fastRunner.next;
    }
    return slowRunner;
  }
  return -1; 
};

export { LinkedList, Node, findLoopEntry };