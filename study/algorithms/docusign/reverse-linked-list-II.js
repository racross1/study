// problem: https://leetcode.com/problems/reverse-linked-list-ii/



//solutions
"https://leetcode.com/problems/reverse-linked-list-ii/discuss/?currentPage=1&orderBy=most_votes&query=&tag=javascript"


//current setup: (not working with head.next)


//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
 
//solution

var reverseBetween = function(head, m, n) {
    let start = head, cur = head;
    let i = 1;
    while (i < m) {
        start = cur;
        cur = cur.next;
        i++;
    }
    let prev = null, tail = cur;
    while (i <= n) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
        i++;
    }
    start.next = prev;
    tail.next = cur;
    return m == 1 ? prev : head; 
    
};


// if m == 1, we have no need to connect start list with reversed list reversed list itself is the start (or the head)
    // Time Complexity: O(n)
    // Space Complexity: O(1)








/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    let prev = null
    let next = null 
    
    while(head != null){
        while(head.val != left){
            head = head.next
        }
        
        while(head.val != right){
            next = head.next
            head.next = prev
            prev = head
            head = next
        }   
        head = head.next
    }
        
        
};