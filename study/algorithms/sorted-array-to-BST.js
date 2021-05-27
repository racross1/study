
// Given an integer array nums where the elements are sorted in ascending order, 
// convert it to a height-balanced binary search tree.

// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node 
// never differs by more than one.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */



var sortedArrayToBST = function(nums) {
    if(nums == null || nums.length == 0) {
        return null
    }
   
   //recursive function to construct BST using nums, beginning of array as left, and end of array as right 
   //with each call we will simply get the new root node of the subtree, which will be the middle of whatever our subtree is
    return constructBST(nums, 0, nums.length - 1)
  
};

function constructBST(nums, left, right) {
   //if the left is greater than the right than it's not a sorted tree
    if (left > right) {
       return null
   }
    
   //get rood node, which is middle of current tree (for successive calls it will be middle of subtrees)
   let mid = Math.floor(left + (right - left) / 2)
   //make a new node out of your new root
   let curr = new TreeNode(nums[mid])

   //recursively construct successive subtrees - the left subtree being original left bound, and right bound moved one to the left
   //vice versa with right subtree
   curr.left = constructBST(nums, left, mid - 1)
   curr.right = constructBST(nums, mid + 1, right)
    
   //I don't get how this return works tho. Does it hit the return curr when curr.left and right are null?
   return curr
   }


   //even shorter version of the above
   var sortedArrayToBST = function(nums) {
    if (!nums.length) return null;
    
    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);
    
    // subtrees are BSTs as well
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    
    return root;
};