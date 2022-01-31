// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// Example 1:


// Input: root = [2,1,3]
// Output: true
// Example 2:


// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.
 
/*
recursive and on initial call, use root, min = null and max = null
in helper check if min != null or max != null and if it is, check against BST property
then at end of helper return 
    helper(root.left, min, root.val) && helper(root.right, root.val, max)
to check left and right subtrees
*/

//another try again to make sure I get it
function isValidBST(root){
    if (!root) return true
    return helper(root, null, null)
}

function helper(root, min, max){
    if(!root) return true

    if(min != null && root.val <= min) return false
    if(max != null && root.val >= max) return false

    return helper(root.left, min, root.val) && helper(root.right, root.val, max)
}

















var isValidBST = function(root) {
    if (!root) return true
    
    return helper(root, null, null)
};

function helper(root, min, max) { 
    if (!root) return true
    
    if(min !== null && root.val <= min) return false
    if(max !== null && root.val >= max) return false
    
    return helper(root.left, min, root.val) && helper(root.right, root.val, max)
}

//iteratively
function isValidBST(root){
    if (!root) return true

    let stack = [[root, null, null]]

    while(stack.length != 0){
        let cur = stack.pop()
        let val = cur[0].val
        
        let min = cur[1]
        let max = cur[2]
        
     
        if ((min != null && val <= min) || (max != null && val >= max) ) return false

        if (cur[0].left != null) stack.push([cur[0].left, cur[1], val])
        
        if (cur[0].right != null) stack.push([cur[0].right, val, cur[2]])  
         
    }

    return true
}