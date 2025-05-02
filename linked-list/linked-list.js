// Has to be a func because of leet code
function ListNode(val, next) {
    this.val = val;
    this.next = next ?? null;
}

/**
* @param {any[]} arr
* @returns {ListNode} the head of a linked list
*/
function arr_to_linked_list(arr) {
    let node;
    for (let i = arr.length; i >= 0; i--) {
        const new_node = ListNode(arr[i], node);
        node = new_node;
    }
    return node;
}

export default {
    ListNode,
    arr_to_linked_list
}
