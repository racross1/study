
// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. 
// A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any path.


//is there a limit to the length of the sequence?

//adjacent nodes connected if
    // they are right and left nodes sharing a root
    // iterating through tree, keep track of sum of paths
    //dfs?

//follow up to the above understanding ^ it appears I was wrong on that def. 
//next solution will be to try DFS, keep track of all paths and then use Kadane's algo again to find max












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
 * @return {number}
 */

//my own implementation was based on a misunderstanding of the problem.

//here are 3 recursive solutions with a similar approach (second one with comments). All seem to use DFS



var maxPathSum = function(root) {
    var max = -Number.MAX_VALUE;
    getMaxSum(root);
    return max;
    function getMaxSum(node) {
      if (!node) return 0;
      var leftSum = getMaxSum(node.left);
      var rightSum = getMaxSum(node.right);
      max = Math.max(max, node.val + leftSum + rightSum);
      return Math.max(0, node.val + leftSum, node.val + rightSum);
    }
  };

  


  /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    var max = -Infinity // Initialize to a very small number to handle a path of negative values
    getMaxSum(root) // Call our recursive fn to start the program
    
    return max // Once we have popped out of our recursive calls, `max` contains our maximum path sum
    
    function getMaxSum(tree) {
      if (tree == null) { return 0 } // Termination condition
      
      const leftBranch = Math.max(0, getMaxSum(tree.left)) // calculate the root to leaf sum where root is the left node
      const rightBranch = Math.max(0, getMaxSum(tree.right)) // calculate the root to leaf sum where root is the right node
      const currentPath = leftBranch + tree.val + rightBranch  // Sum the path: left -> root -> right (leaf to leaf)
      
      max = Math.max(max, currentPath) // if the current path is greater than the previous value of `max`, update `max` to the current path sum
      return tree.val + Math.max(leftBranch, rightBranch)
    }
  };



  var maxPathSum = function(root) {
    
    let max = -Infinity;
    
    function dfs(node) {
        if(!node) return 0;
        
        let left = dfs(node.left);
        let right = dfs(node.right);
        
        max = Math.max(
            left + right + node.val,
            left + node.val,
            right + node.val,
            node.val,
            max
        );
        
        return Math.max(left + node.val, right + node.val, node.val);
        
    }
    
    dfs(root);
    
    return max;
    
};















//pretty sure this solution of mine works for my prior understanding of the problem 
//which was that a "path" only referred to a root and its 2 nodes. 
//the below collects all roots and its 2 leaves and then uses Kadane's algorithm to get the max sum

 var maxPathSum = function(root) {
    if(!root || (!root.left && !root.right)) return root.val 
    let paths = []
    
   
     function getPaths(root){
         if(!root) return 

         if (root.left || root.right){
             let path = [root.val]
             if(root.left){
                 path.unshift(root.left.val)
             }
             
             if(root.right){
                 path.push(root.right.val)
             }
            
            paths.push(path.filter(n=> n != null))
    
             }

         getPaths(root.left)
         getPaths(root.right)
     }
 
     getPaths(root)
    
    function getSums(paths){
        return paths.map(path => {
            let currentMax =path[0], globalMax = path[0]
            for (let i = 1; i < path.length; i++) {
                currentMax = Math.max(path[i], currentMax + path[i])
                globalMax = Math.max(currentMax,globalMax)
            }
            return globalMax;
        })
    }

     let pathSums = getSums(paths)
     

     return pathSums.length > 0 ? pathSums.reduce((a,b) => Math.max(a,b)) : 0
}

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