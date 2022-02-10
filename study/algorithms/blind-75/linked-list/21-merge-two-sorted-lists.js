// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

/*
initialize dummy mergeHead and a curr node = mergeHead. 
Then while both lists, if one.val greater than the other.val, curr.next = one.val and one = one.next. 
within while loop, increment cur. 
Then after while loop curr.next = l1 || l2 (accounts for last one after one list runs out). then return mergeHead.next 
*/ 

var mergeTwoLists = function(l1, l2) {
    let mergeHead = {val: -1, next: null}
    
    let curr = mergeHead
    
    
    while (l1 && l2){
        
        if (l1.val < l2.val){
            curr.next = l1
            l1 = l1.next
        } else {
            curr.next = l2
            l2 = l2.next
        }
        
        curr = curr.next
    }
    
    curr.next = l1 || l2
    
    return mergeHead.next
    
};
