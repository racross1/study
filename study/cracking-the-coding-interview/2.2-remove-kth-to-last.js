'https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/'

//my solution faster than the discussion solution below it!
//mine:

// Runtime: 72 ms, faster than 98.62% of JavaScript online submissions for Remove Nth Node From End of List.
// Memory Usage: 40.1 MB, less than 78.84% of JavaScript online submissions for Remove Nth Node From End of List.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

 //Input: 
 let head1 = [1,2,3,4,5]
 let n1 = 2
 //Output: [1,2,3,5]

 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)

    //  console.log(`val: ${this.val}, next: ${this.next}`)
    }


 //my solution, worked and faster than 70% of solutions   
 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
//  * @param {ListNode} head
//  * @param {number} n
//  * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
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

var offsetPointer = function(head, n){
   let i = 1
   let p2 = head
   while (i <= n) {
       p2 = p2.next
       i++
   }

   return p2
}

// console.log(head1.forEach((n, i)=> {
//     return ListNode(n, head1[i+1])
// }))


//looking at while n--: the below prints 4, 3, 2, 1, 0

// function testMinusMinus(n){
//     while(n--){
//         console.log(n)
//     }
// }

// testMinusMinus(5)


//similar solution to mine, except uses while(n--) more cleanly (without helper)


// algorithm

// To remove n-th node from the end, send node hare as far as n.
// Move node curr and hare in same speed until hare gets the last node.
// Since curr and hare has gap as n, curr has n+1-th node from the end when hare has 1th node from the end. So change curr.next to curr.next.next.
// edge case
// n = 3 linked list = [1,2,3]

// When n is same with the length of the list. We need to remove first element, instead remove next element of curr.
// In this case, you can find that hare would be null, because the last element of list points null such as [1,2,3,null]
// complexity

// Time complexity: O(N)
// Space complexity: O(1)

// * @param {ListNode} head
// * @param {number} n
// * @return {ListNode}
// */
var removeNthFromEnd3 = function(head, n) {
   //start hare and curr at head
    let hare = head, curr = head;
   //move hare to n away from head
    while (n--) {
       hare = hare.next;
   }

   //while hare and hare.next are not null
   //increment hare and curr
   while (hare && hare.next) {
       curr = curr.next;
       hare = hare.next;
   }
   //if hare is null
   //that is, when n is the same length as the list
   //we need to remove the first element instead of the next element of curr. 
   
   if (!hare) {
       head = head.next;
   } else {
     //if hare is not null, then skip over the node after curr to delete it from the list
     curr.next = curr.next.next

     //note in the version of this solution in the discussion session it had this portion written as the below
     //however I submitted with the above (i.e. without ternary) and it works
    //    curr.next = curr.next ? curr.next.next : null;
   }
   return head;
};


console.log(removeNthFromEnd3(head1, n1))