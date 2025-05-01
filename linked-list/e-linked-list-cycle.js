const assert = require('assert');


function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
* @param {ListNode} head
*/
function hasCycle(head) {
    let node = head;
    while (node) {
        if (node.visited) return true;
        node.visited = true;
        node = node.next
    }
    return false;
}
