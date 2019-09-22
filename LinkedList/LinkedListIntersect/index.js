/**
 * Give two singly linked lists, determine if the two lists intersect.
 * Return the interseting node.
 * @param {*} list1 
 * @param {*} list2 
 * @return node
 * 
 * Input: 2 linked lists
 * Output: intersecting node or -1
 * Constraints: O(1) space
 * Edge cases: empty linked lists
 */
const findLinkedListIntersection = (list1, list2) => {
  // Return -1 if either list is empty
  // Get length of both lists
  // Remove the difference in length so both need to iterate the same
  // amount to reach intersection
  if (!list1.head || !list2.head) { return -1 }
  let list1Length = 1;
  let list2Length = 1;
  let difference = 0;
  let runner1 = list1.head;
  let runner2 = list2.head;

  list1Length = getListLength(list1);
  list2Length = getListLength(list2);
  difference = list1Length - list2Length;
  
  if (difference > 0) {
    for (let i = 0; i < difference; i++) {
      runner1 = runner1.next;
    }
  } else {
    for (let j = difference; j < 0; j++) {
      runner2 = runner2.next;
    }
  }

  while (runner1 && runner1 !== runner2) {
    runner1 = runner1.next;
    runner2 = runner2.next;
  }
  
  return runner1 ? runner1 : -1;
}

const getListLength = list => {
  let length = 1;
  let runner = list.head;

  while (runner.next) {
    runner = runner.next;
    length++;
  }
  return length;
}

const getChoppedNode = (list, count) => {

}

export { findLinkedListIntersection };