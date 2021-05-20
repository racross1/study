'https://leetcode.com/explore/interview/card/amazon/77/linked-list/2979/'
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Input: head = [1,2]
// Output: [2,1]

// Input: head = []
// Output: []

// my initial idea: could do a dummy linked list 
//and then simply move on through and pop off the end each time and add the last node to the new list


//from vid - may need to be adapted
'https://www.youtube.com/watch?v=UCv-EmtvPe4'
function reverseList(head){
    let prev = null
    let next = null 

    while(head != null){
        next = head.next
        head.next = prev
        prev = head
        head = next
    }

    return prev
}