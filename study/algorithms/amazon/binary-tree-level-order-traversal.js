// Given the root of a binary tree, 
// return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

//implementation similar to binary tree zigzag
//beats 99%s
//implementation of one with a queue below
 var levelOrder = function(root) {
     let result = []

     function lot(root, l){
         if(!root) return 

         if (result[l]){
             result[l].push(root.val)
         } else {
             result[l] = [root.val]
         }

         lot(root.left, l+1)
         lot(root.right, l+1)
     }

     lot(root, 0)
    
     return result
};

///////////implementation from discussion with queue
// We can use an inner for loop at each iteration of the while loop. 
// When the loop begins, the length of the queue represents the # of nodes at the level. 
// So by exhausting this length, we will only push the nodes into the queue that are all at the same level. 
// The table below helped me understand a bit better whats going on.
//table mentioned found in link
'https://leetcode.com/problems/binary-tree-level-order-traversal/discuss/472672/Javascript-Detailed-line-by-line-solution'



var levelOrder = function(root) {
    // If root is null return an empty array
    if(!root) return []
    
    const queue = [root] // initialize the queue with root
    const levels = [] // declare output array
    
    while(queue.length !== 0){
       const queueLength = queue.length // Get the length prior to dequeueing
       const currLevel = [] // Declare this level
       // loop through to exhaust all options and only to include nodes at currLevel
       for(let i = 0; i < queueLength; i++){
           // Get next node
           const current = queue.shift()
           
           if(current.left){
               queue.push(current.left)
           }
           if(current.right){
               queue.push(current.right)
           }
           // After we add left and right for current, we add to currLevel
           currLevel.push(current.val)
       }
       // Level has been finished. Push into output array
       levels.push(currLevel)
   }
    return levels
}