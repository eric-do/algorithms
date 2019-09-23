import { expect } from 'chai';
import { Graph, Node } from '.';
import { confirmGraphRouteDFS, confirmGraphRouteBFS } from '../../Graph/GraphRoute';

describe('Graph route', () => {
  const getGraph = () => {
    const graph = new Graph();
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    const node6 = new Node(6);
    const node7 = new Node(7);

    graph.nodes.push(node1, node2, node3, node4, node5, node6, node7);
    node1.children.push(node2, node3, node4);
    node2.children.push(node3, node6);
    node3.children.push(node5);
    node5.children.push(node3, node6);
    node7.children.push(node6);

    return graph;
  }

  describe('DFS', () => {
    it('should return true if graph contains a valid route given start/end', () => {
      const graph = getGraph();
      const hasRoute = confirmGraphRouteDFS(graph, graph.nodes[0], graph.nodes[5]);
      expect(hasRoute).to.equal(true)
    });
  
    it('should return false if graph does not contain valid route given start/end', () => {
      const graph = getGraph();
      const hasRoute = confirmGraphRouteDFS(graph, graph.nodes[0], graph.nodes[6]);
      expect(hasRoute).to.equal(false)
    })
  
    it('should return false if starting node has no children', () => {
      const graph = new Graph();
      const start = new Node(1);
      const end = new Node(2);
  
      graph.nodes.push(start, end);
  
      const hasRoute = confirmGraphRouteDFS(graph, start, end);
      expect(hasRoute).to.equal(false)
    })
  })
  
  describe('BFS', () => {
    it('should return true if graph contains a valid route given start/end', () => {
      const graph = getGraph();
      const hasRoute = confirmGraphRouteBFS(graph, graph.nodes[0], graph.nodes[5]);
      expect(hasRoute).to.equal(true)
    });
  
    it('should return false if graph does not contain valid route given start/end', () => {
      const graph = getGraph();
      const hasRoute = confirmGraphRouteBFS(graph, graph.nodes[0], graph.nodes[6]);
      expect(hasRoute).to.equal(false)
    })
  
    it('should return false if starting node has no children', () => {
      const graph = new Graph();
      const start = new Node(1);
      const end = new Node(2);
  
      graph.nodes.push(start, end);
  
      const hasRoute = confirmGraphRouteBFS(graph, start, end);
      expect(hasRoute).to.equal(false)
    })
  })
})
