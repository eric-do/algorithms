import { expect } from "chai"
import { LinkedList, Node, findLoopEntry } from "../LinkedListLoop/LinkedListLoop"

describe("Linked List Loop", () => {
  it("should find the start of the loop", () => {
    const LoopedLinkedList = new LinkedList();
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    const node6 = new Node(6);
    const node7 = new Node(7);
    const node8 = new Node(8);

    LoopedLinkedList.head = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node5.next = node6;
    node6.next = node7;
    node7.next = node8;
    node8.next = node4;

    const loopEntry = findLoopEntry(LoopedLinkedList);
    expect(loopEntry).to.be.an('object');
    expect(loopEntry).to.have.a.property('value');
    expect(loopEntry).to.equal(node4);
  });

  it("should return -1 for a list without a loop", () => {
    const LoopedLinkedList = new LinkedList();
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    const node6 = new Node(6);
    const node7 = new Node(7);
    const node8 = new Node(8);

    LoopedLinkedList.head = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node5.next = node6;
    node6.next = node7;
    node7.next = node8;

    const loopEntry = findLoopEntry(LoopedLinkedList);
    expect(loopEntry).to.equal(-1);
  });

  it("should return -1 for an empty linked list", () => {
    const LoopedLinkedList = new LinkedList();

    const loopEntry = findLoopEntry(LoopedLinkedList);
    expect(loopEntry).to.equal(-1);
  });
})