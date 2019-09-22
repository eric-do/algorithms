import { expect } from "chai"
import { LinkedList, Node } from ".";
import { findLinkedListIntersection } from "../../LinkedList/LinkedListIntersect"

describe("Linked List Intersection", () => {
  it("should find the intersecting node if one exists", () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    const l1Node1 = new Node(1);
    const l1Node2 = new Node(2);
    const l2Node1 = new Node(3);
    const l2Node2 = new Node(4);
    const l2Node3 = new Node (5);
    const m1 = new Node(6);
    const m2 = new Node(7);
    const m3 = new Node(8);

    list1.head = l1Node1;
    l1Node1.next = l1Node2;
    l1Node2.next = m1;

    list2.head = l2Node1;
    l2Node1.next = l2Node2;
    l2Node2.next = l2Node3;
    l2Node3.next = m1;

    m1.next = m2;
    m2.next = m3;

    const intersection = findLinkedListIntersection(list1, list2);
    expect(intersection).to.equal(m1);
  });

  it("should return -1 if an intersecting node doesn't exist", () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    const l1Node1 = new Node(1);
    const l1Node2 = new Node(2);
    const l2Node1 = new Node(3);
    const l2Node2 = new Node(4);
    const l2Node3 = new Node (5);

    list1.head = l1Node1;
    l1Node1.next = l1Node2;
    l1Node2.next = null;

    list2.head = l2Node1;
    l2Node1.next = l2Node2;
    l2Node2.next = l2Node3;
    l2Node3.next = null;

    const intersection = findLinkedListIntersection(list1, list2);
    expect(intersection).to.equal(-1);
  });

  it("should return -1 if either list heads are null", () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    
    const l2Node1 = new Node(3);
    const l2Node2 = new Node(4);
    const l2Node3 = new Node (5);

    list2.head = l2Node1;
    l2Node1.next = l2Node2;
    l2Node2.next = l2Node3;
    l2Node3.next = null;

    const intersection = findLinkedListIntersection(list1, list2);
    expect(intersection).to.equal(-1);
  });
})