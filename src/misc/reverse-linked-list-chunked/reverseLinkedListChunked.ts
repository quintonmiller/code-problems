import { LinkedListNode } from "../../utils/LinkedList";

export function reverseLinkedListChunked(head: LinkedListNode, k: number): LinkedListNode {

    let curr = head;
    let next = head.next;

    for (let i = 1; i < k; i++) {

        // If we run into end of LL, break
        if (next === null) {
            break;
        }

        const prev = curr;
        curr = next;
        next = next.next;

        curr.next = prev;
    }

    if (next === null) {
        head.next = null;
    }
    else {
        head.next = reverseLinkedListChunked(next, k);
    }

    // Return new head of this portion of the linked list
    return curr;
}
