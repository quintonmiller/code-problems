export class LinkedList {

    public head: LinkedListNode;
    public tail: LinkedListNode;

    constructor(vals: any[] = []) {
        for (const val of vals) {
            this.add(val);
        }
    }

    add(val: any): LinkedList {

        const newNode = new LinkedListNode(val);

        if (!this.head) {
            this.head = this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        return this;
    }

    toArray() {

        const vals: any[] = [];
        let temp: LinkedListNode = this.head;

        while (temp) {
            vals.push(temp.value);
            temp = temp.next;
        }

        return vals;
    }
}

export class LinkedListNode {

    public value: any;
    public next: LinkedListNode;

    constructor(val: any, nextNode: LinkedListNode = null) {

        this.value = val;
        this.next = nextNode;
    }
}
