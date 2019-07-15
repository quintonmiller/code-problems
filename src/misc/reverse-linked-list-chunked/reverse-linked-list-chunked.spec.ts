import { LinkedList } from "../../utils/LinkedList";
import { reverseLinkedListChunked } from "./reverseLinkedListChunked";

fdescribe('Reverse Linked List Chunked', () => {

    test('1', () => {

        const k = 3;
        const linkedList = new LinkedList([1, 2, 3, 4, 5, 6, 7]);
        const expected = [3,2,1,6,5,4,7];

        linkedList.head = reverseLinkedListChunked(linkedList.head, k);

        expect(linkedList.toArray()).toEqual(expected);
    });

    test('2', () => {

        const k = 1;
        const linkedList = new LinkedList([1]);
        const expected = [1];

        linkedList.head = reverseLinkedListChunked(linkedList.head, k);

        expect(linkedList.toArray()).toEqual(expected);
    });

    test('3', () => {

        const k = 2;
        const linkedList = new LinkedList([1]);
        const expected = [1];

        linkedList.head = reverseLinkedListChunked(linkedList.head, k);

        expect(linkedList.toArray()).toEqual(expected);
    });

    test('4', () => {

        const k = 2;
        const linkedList = new LinkedList([1, 2]);
        const expected = [2, 1];

        linkedList.head = reverseLinkedListChunked(linkedList.head, k);

        expect(linkedList.toArray()).toEqual(expected);
    });

    test('5', () => {

        const k = 1;
        const linkedList = new LinkedList([1, 2, 3]);
        const expected = [1, 2, 3];

        linkedList.head = reverseLinkedListChunked(linkedList.head, k);

        expect(linkedList.toArray()).toEqual(expected);
    });
});
