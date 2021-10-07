// Iterative Solution
var reverseList = function(head) {
    let prevNode = null
    let currNode = head
    while (currNode) {
        const nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }
    
    return prevNode
};