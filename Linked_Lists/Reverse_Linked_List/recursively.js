// Recursive Solution:
var reverseList = function(head) {
    let prevNode = null
    let currNode = head
    
    function reverse(prevNode, currNode) {
        if (!currNode) {
            return prevNode
        }
        const nextNode = currNode.next
        currNode.next = prevNode
        return reverse(currNode, nextNode)
    }
    
    return reverse(prevNode, currNode)
};