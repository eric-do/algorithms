const confirmGraphRouteDFS = (graph, node1, node2) => {
  // I: Graph, start node, end node
  // O: true/false
  // C: none
  // E: empty graph

  // For each element in node1's children rray
  // If element is node1, descend children until node2 is found
  // Flag each visited node so we don't cycle through all its desendents
  // again if encountered
  const recursiveSearch = (array) => {
    for (const node of array) {
      if (node === node2) {
        return true;
      }
      if (node.children.length > 0 && !node.visited) {
        node.visited = true;
        return recursiveSearch(node.children);
      }
    }
    return false;
  }

  return recursiveSearch(node1.children);
};

const confirmGraphRouteBFS = (graph, node1, node2) => {
  // Push node1's children to a queue
  // If node2 is not in the queue, dequeue and push children to queue
  if (node1.children.leng = 0) { return false }
  const queue = [...node1.children];

  while (queue.length > 0) {
    const current = queue.shift();
    current.visited = true;
    if (current === node2) {
      return true;
    } else if (current.children.length > 0) {
      current.children.forEach(child => {
        if (!child.visited) {
          queue.push(child);
        }
      });
    }
  }
  return false;
};

export { confirmGraphRouteBFS, confirmGraphRouteDFS };