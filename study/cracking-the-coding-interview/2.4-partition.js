//run through ll and if value is less than pivot, make it the new root
//leetcode problem seems to be similar enough to CtCI version:

// leetcode instructions

// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

'https://leetcode.com/problems/partition-list/'

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} x
//  * @return {ListNode}
//  */


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// Input: 
head = [1,4,3,2,5,2]
x = 3
// Output: [1,2,2,4,3,5]

var partition = function(head, x) {
    //new nodes for dummy lists
    let leftDummy = new ListNode()
    let rightDummy = new ListNode()
    //iters starting at dummy heads
    let leftIter = leftDummy
    let rightIter = rightDummy
    //iter starting at actual head
    let iter = head 

    //while iter through list has not reached end
    while (iter){
        //if less than x 
        if (iter.val < x){
            //add iter to left iter
            leftIter.next = iter 
            //move left iter to its own tail
            leftIter = iter
        } else if (iter.val >= x){
            rightIter.next = iter 
            rightIter = iter
        }

        iter = iter.next
    }

    //make end of right end of list
    rightIter.next = null
    //attach everything after right dummy to end of left list to connect and remove rd 
    leftIter.next = rightDummy.next

    //return left dummy.next to give new list with ldummy removed
    return leftDummy.next
    


    
};

