const assert = require('assert');

function ListNode(val, next) {
    this.val = val;
    this.next = next ?? null;
}

function arr_to_linked_list(arr) {
    let head;
    for (let i = arr.length; i >= 0; i--) {
        const new_node = new ListNode(arr[i], head);
        head = new_node;
    }
    return head;
}

/**
* @param {ListNode} l1
* @param {ListNode} l2
*/
function add_two_numbers(l1, l2) {
    let node1 = l1;
    let node2 = l2;

    let carry = 0;
    let head;
    let node;
    while (node1 || node2 || carry) {
        const d1 = node1?.val ?? 0;
        const d2 = node2?.val ?? 0;
        let sum = (d1 + d2 + carry) % 10;
        const new_node = new ListNode(sum, null);
        head = head ?? new_node;
        if (node) {
            node.next = new_node;
        }
        node = new_node;
        carry = d1 + d2 + carry >= 10 ? 1 : 0;
        node1 = node1?.next;
        node2 = node2?.next;
    }

    return head;
}

// ----- Testing ----- //

const l1 = arr_to_linked_list([2, 4, 3]);
const l2 = arr_to_linked_list([5, 6, 4]);

console.log(add_two_numbers(l1, l2));
