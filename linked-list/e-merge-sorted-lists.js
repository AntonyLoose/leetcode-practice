import { ListNode } from "./linked-list.js";

/**
 * @param {ListNode | null} list1
 * @param {ListNode | null} list2
 */
function mergeTwoLists(list1, list2) {
    let h1 = list1;
    let h2 = list2;
    const head = new ListNode();
    let current = head;

    while (h1 || h2) {
        const val1 = h1?.val ?? Infinity;
        const val2 = h2?.val ?? Infinity;

        if (val1 < val2) {
            current.next = new ListNode(h1.val);
            h1 = h1.next;
        } else {
            current.next = new ListNode(h2.val);
            h2 = h2.next;
        }

        current = current.next
    }

    return head.next;
}
