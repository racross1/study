// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:


// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true

/*
boolean flag in outer functio initialized to true 
recursive getHeight function that returns 0 if !root and returns nothing if flag gets turned to false 
then assigns left and right vars and checks for balance condition 
and then returns max of left and right + 1

run recursive height function starting at root
in helper
    if there is no node return 0
    let left = helper node.left
    let right = helper node.right
    if the absolute val difference of node left and node right is greater than 1 set flag to false
    at bottom return max of left and right + 1 (this is effectively the max height between a node's left and right subtrees) + 1 for the current node
*/

var isBalanced = function(root) {
    let flag = true
    
    function getHeight(node){
        if(!flag) return
        if(!node) return 0
        
        let left = getHeight(node.left)
        let right = getHeight(node.right)
        
        //balance condition
        if(Math.abs(left - right) > 1) flag = false
           
        return Math.max(left, right) + 1
    }
    
   getHeight(root)
   return flag 
    
};