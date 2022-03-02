// Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

/*
fast and slow pointers. Reminder cases: if at start when p1 = head if !p1.next, head = head.next, return head. 
Then after you offset p2, if !p2. head = p1.next; return head. 
And then for while loop to advance both while (p2 !== null && p2.next !== null)

*/
const removeNthFromEnd = function(head, n) {
    let p1 = head
    if (!p1.next) {
        head = head.next
        return head
   }
   
    let p2 = offsetPointer(head, n)
    
    if (!p2) {
        head = p1.next
        return head
    }

    while (p2 !== null && p2.next !== null){
        p1 = p1.next
        p2 = p2.next

    }
 
   p1.next = p1.next.next

    return head

};

const offsetPointer = function(head, n){
   let p2 = head
   while (n--) {
       p2 = p2.next
     
   }

   return p2
}

