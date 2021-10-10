// Merge Two Sorted Lists (iterative):
var mergeTwoLists = function(l1, l2) {
    // case 1: both lists are empty
    if (l1 === null && l2 === null) return null;
    
    // case 2: one of the lists is empty [case 2 code accounts for case 1]
    if (l1 === null || l2 === null) return l1 || l2;
    
    // case 3: both of the lists have nodes
    const dummyHead = new ListNode();
    let cur = dummyHead;
    
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    
    if (l1 !== null) {
        cur.next = l1;
    }
    
    if (l2 !== null) {
        cur.next = l2;
    }
    
    return dummyHead.next;
};