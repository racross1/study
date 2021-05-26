//CtCI wants the middle mode removed, leetcode has a version where you return the middle node. 
//solving for the latter here and then will implement former 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let count = 0
    let current = head
    
    while(current && current.next){
        count++
        current = current.next
    }

    let midNode = Math.ceil(count/2)
    current = head

    while(midNode--){
        current = current.next
    }

    return current


};

// console.log(Math.ceil(5/2))
// console.log(Math.ceil(6/2))
// console.log(Math.ceil(11/2))

var testFn = function(num){
    while(num-- && num > 0){
        console.log(num)
    }
}

testFn(6)

// fast and slow pointer to find middle!
// Fast pointer will move two steps at a time while slow pointer move one step at a time. So when fast pointer reach at the end of the linked list, slow pointer will be at the middle of the linked list.

/*
initial state
f
1 -> 2 -> 3 -> 4 -> 5
s

1st loop
		  f
1 -> 2 -> 3 -> 4 -> 5
     s
	 
2nd loop
		            f
1 -> 2 -> 3 -> 4 -> 5
          s

when f reach end of the linked list, s will be at the middle.

f = fast pointer
s = slow pointer
*/

var middleNode = function(head) {
    let fast = slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};



//remove middle node

//add prev pointer to be previous of the slow pointer so that you can set prev.next to prev.next.next, 
//effectively removing middle node

var removeMiddleNode = function(head) {
    let fast = slow = head;
    let prev
    while (fast && fast.next) {
        prev = slow
        fast = fast.next.next;
        slow = slow.next;
        
    }

    prev.next = prev.next.next
    return head;
};