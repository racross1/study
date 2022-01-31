// Given the head of a singly linked list, reverse the list, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []
 

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000



/*
initialize prev (null), curr(head), and n (undefined). While curr!=null, 4 steps: 1.) n = curr.next, 2.) curr.next = prev, 3.) prev = curr, 4.) curr = n (i.e. curr.next)
return prev
*/

var reverseList = function(head) {
    if (head == null || head.next == null) return head
    
    let prev = null
    let cur = head
    let next
    
    while (cur != null){
        //to start, store next node to be processed
        //1. store next
        next = cur.next
        //flip pointer of cur
        //2. flip pointer of cur
        cur.next = prev
        //make cur into new prev (on next loop cur.next will be set to prev)
        //3. cur is the new prev
        prev = cur
        //set cur to next
        //4. next is the new cur
        cur = next  
    }
    
    return prev
    
};

//recursive from leetcode
'https://leetcode.com/problems/reverse-linked-list/discuss/869957/Javascript-Iterative-and-Recursive-solution'

var reverseList = function(head) {
	// base case
    if (head == null || head.next == null) return head
	// go all the way to the end
    let reversedListHead = reverseList(head.next)
	// add reverse myself
    head.next.next = head;
    head.next = null;
	// go up
    return reversedListHead
};