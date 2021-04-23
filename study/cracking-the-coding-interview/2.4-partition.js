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
    let leftDummy = new ListNode()
    let rightDummy = new ListNode()
    let leftIter = leftDummy
    let rightIter = rightDummy
    let iter = head 

    while (iter){
        if (iter.val < x){
            leftIter.next = iter 
            leftIter = iter
        } else if (iter.val >= x){
            rightIter.next = iter 
            rightIter = iter
        }

        iter = iter.next
    }

    rightIter.next = null
    leftIter.next = rightDummy.next

    return leftDummy.next
    


    
};

