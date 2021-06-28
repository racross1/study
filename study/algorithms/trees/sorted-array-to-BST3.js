// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.



function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }



// Input: 
let nums1 = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]


//find the middle --> that is the root
//do this for subtrees left and right


var sortedArrayToBST = function(nums) {
    console.log(nums)
}

sortedArrayToBST(nums1)