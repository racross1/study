
// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. 
// A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any path.


//is there a limit to the length of the sequence?

//adjacent nodes connected if
    // they are right and left nodes sharing a root
    // iterating through tree, keep track of sum of paths
    //dfs?

    root.val[left.val, right.val]

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
 var maxPathSum = function(root) {
    if(!root || (!root.left && !root.right)) return root.val 
    let paths = []
    
   
     function getPaths(root){
         if(!root) return 

         
         if (root.left || root.right){
             let path = [root.val]
             if(root.left){
                 path.push(root.left.val)
             }
             
             if(root.right){
                 path.push(root.right.val)
             }

  //get sum in here?
             //max could be right, could be root, could be left
                //[0] [1] [2]
             //could be root + left
             // [0][1]
             //could be root.right
             // [1][2]            
                 paths.push(path.filter(n => n != null))
    
             }

         getPaths(root.left)
         getPaths(root.right)
     }
 
     getPaths(root)

     // let pathSums = paths.map(n => n.reduce((a,b) => a+b))
    // let pathSums = paths.map(n=>{
    //      let bigSide = n.sort((a,b) => b-a)[0]
    //      return Math.max(bigSide, n.reduce((a,b) => a+b))
    //  })
     //need a pathsums function to get max sum of each triplet
     
     

     return pathSums.length > 0 ? pathSums.reduce((a,b) => Math.max(a,b)) : 0

};



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

//latest version in leetcode IDE
 var maxPathSum = function(root) {
     let paths = []
   
     function getPaths(root){
         if(!root) return 

         let path = [root.val, root.left.val, root.right.val]

         //if a given root doesn't have 2 leaves we don't need to get the path, we just need to add whever node it does have to 
         //our traversal function
         if (!path.includes(null)){
             paths.push(path)
         } 

         
       
 
         getPaths(root.left)
         getPaths(root.right)
     }
 
     getPaths(root)

     let pathSums = paths.map(n => n.reduce((a,b) => a+b))

     return pathSums.reduce((a,b) => Math.max(a,b))

};


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