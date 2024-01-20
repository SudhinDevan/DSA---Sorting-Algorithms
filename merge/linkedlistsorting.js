class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    addNode(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.size++
        }
        else {
            let tail = this.head
            while (tail.next) {
                tail = tail.next
            }
            tail.next = node
            this.size++
        }
    }
    getMiddle(h) {
        if (h == null) {
            return h
        }
        let middle = h, second = h
        while (second.next != null && second.next.next != null) {
            middle = middle.next
            second = second.next.next
        }
        return middle
    }
    mergeSort(h) {
        if (h == null || h.next == null) {
            return h
        }
        var mid = this.getMiddle(h)
        var nextmid = mid.next
        mid.next = null
        var left = this.mergeSort(h)
        var right = this.mergeSort(nextmid)
        var sortedlist = this.merge(left, right)
        return sortedlist
    }
    merge(left, right) {
        var result = null
        if (left == null) {
            return right
        }
        if (right == null) {
            return left
        }
        if (left.value <= right.value) {
            result = left
            result.next = this.merge(left.next, right)
        }
        else {
            result = right
            result.next = this.merge(left, right.next)
        }
        return result
    }
    print() {
        if (this.isEmpty()) {
            console.log("empty")
            return
        }
        else {
            let curr = this.head
            let list = ` `
            while (curr) {
                list += `${curr.value} `
                curr = curr.next
            }
            console.log(list)
        }
    }
    printlist(head) {
        var list = ``
        while (head != null) {

            list += `${head.value} `
            head = head.next;
        }
        console.log("The sorted linked list is: ", list)
    }
}
const l1 = new LinkedList()
l1.addNode(4)
l1.addNode(5)
l1.addNode(3)
l1.addNode(2)
l1.addNode(9)
l1.addNode(3)
console.log("Linked list :")
l1.print()
let head = l1.mergeSort(l1.head)
l1.printlist(head)