
/*
best solution seems to be to split ll in half, reverse second half, and then merge first and second halves
see below versions from follow along with neetcode and a version that I find really readable that uses helper functions for each part 
see also alternative version which adds nodes to a stack and then uses pop() or shift() for node.next depending on whether i (as you iterate stack.length times) is odd or even.
*/


/*2 HALVES APPROACH WITH HELPER FUNCTIONS*/

  //another solution with approach similar to neetcode
  'https://leetcode.com/problems/reorder-list/discuss/590017/Intuitive-JavaScript-Solution'

  var reorderList = function(head) {
    if (head === null) {
      return;
    }
    /**
     * The goal is to reverse the second half of the list and merge it onto
     * the first half of the list. The first half will have at most one more
     * element than the second half.
     */

    /*
        split list into halves and return second half
        reverse second
        merge head and second
    */
    let second = split(head);
    second = reverse(second);
    merge(head, second);
  };
  
  function split(node) {
    let fast = node;
    let slow = node;
    
    while (fast !== null) {
      if (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
      } else {
        fast = null;
      }
    }
    
    //second half equals slow.next
    //slow.next = null: break the connection to the second half
    const secondHalf = slow.next;
    slow.next = null;
    
    //for this helper, return the second half
    return secondHalf;
  }
  
  //reverse linked list (pass this helper second half of the ll)
  function reverse(node) {
    let curr = node;
    let prev = null;
    let next = null;
    
    while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    
    return prev;
  }
  
  //merge the first and second halves
  function merge (l1, l2) {
    let l1Next = null;
    let l2Next = null;
    
    while(l2 !== null) {
      l1Next = l1.next;
      l2Next = l2.next;
      
      l1.next = l2;
      l2.next = l1Next;
      
      l1 = l1Next;
      l2 = l2Next;
    }
  }

//2 HALVES solution from neetcode video:
'https://www.youtube.com/watch?v=S5bfdUTrKLM'

var reorderList = function(head) {
    let slow = head
    let fast = head.next
    
    while (fast && fast.next){
        slow = slow.next
        fast = fast.next.next 
    }
    
    //get seconf half of the list
    let secondHalf = slow.next
    //break the link
    slow.next = null
    prev = null
    //reverse second half of the list
    while(secondHalf){
        let temp = secondHalf.next
        secondHalf.next = prev
        prev = secondHalf
        secondHalf = temp
    }
    
    //merge the 2 halves of the list
    secondHalf = prev
    let firstHalf = head
    
    while(secondHalf){
        let temp1 = firstHalf.next
        let temp2 = secondHalf.next
        
        firstHalf.next = secondHalf
        secondHalf.next = temp1
        firstHalf = temp1
        secondHalf = temp2
    }   
}


//ALTERNATIVE solution from leetcode discuss:
'https://leetcode.com/problems/reorder-list/discuss/345596/Simple-JS-Solution'

/*
process the nodes via a stack
    push all the nodes onto the stack
    then get stack length
    if index is even node.next == stack.shift
    otherwise(index is odd) node.next = stack.pop(
    set node to node.next for next loop
after loop node.next = null (end of list)
    )
*/
var reorderList = function (head) {
    let stack = [], node = head
    if (!node) return
    while (node) {
      stack.push(node)
      node = node.next
    }
  
    let len = stack.length
    node = head
    for (let i = 0; i < len; i++) {
      if (i % 2 === 0)
        node.next = stack.shift()
      else
        node.next = stack.pop()
      node = node.next
    }
    node.next = null
  };

  