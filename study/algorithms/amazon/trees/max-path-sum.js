
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