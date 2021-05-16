// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

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
 * @return {boolean}
 */


//solution from discussion, which I worked to implement on my own as well. additional example below that which uses similar logic
//  This is a very classic BST problem, we just need to scan every single node in the tree 
//  and see if the node's value matches the BST rules, 
//  that is all the values in node's left subtree are less than the value in node, 
//  and all the values in node's right subtree are greater than the value in node, 
//  if we found a node that doesn't satisfy the rules, simply return false from the recursion.

var isValidBST = function(root) {
    if (!root) {
        return true; // Sanity check for passing test case '[]'
    }

    function helper(root, min, max) {
        if (!root) {
            return true; // We hit the end of the path
        }
        
        if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
            return false; // current node's val doesn't satisfy the BST rules
        }
        
        // Continue to scan left and right
        //max the root can be on the left side of the tree is root
        //min the root can be on right side of tree is root.val
        return helper(root.left, min, root.val) && helper(root.right, root.val, max);
    }
    
    return helper(root, null, null);
};

//more concise version of the one above. similar idea of using min and max initially starting at null and using recursion
//instead of using helper function, modifies inputs with default values of null for min and max

var isValidBST = function(root, min=null, max=null) {
    if (!root) return true;
    if (min && root.val <= min.val) return false;
    if (max && root.val >= max.val) return false;
    return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};



//  var isValidBST = function(root) {
//     let queue = []
//      let seen = new Set()

//      queue.push(root)

//      while (!queue.length > 0) {
//          currentNode = queue.shift()
         
//          if (!seen.has(currentNode)){
//              if (currentNode.left){
//                  if (currentNode.val < currentNode.left.val) {
//                      return false
//                  } else {
//                      queue.push(currentNode.left)
//                  }
//              }
             
//              if (currentNode.right){
//                  if (currentNode.val > currentNode.right){
//                      return false
//                  } else {
//                      queue.push(currentNode.right)
//                  }
//              }
         
//          //process node
//         seen.add(currentNode)
//         }

//     }

//      return true
// };


//  var isValidBST = function(root) {
//      let queue = []
//      let seen = new Set()

//      queue.push(root)

//      while (!queue.length > 0){
//          currentNode = queue.pop()
         
//          //need condition for if current node = null
         
//          if (!seen.has(currentNode)){
         
//          //process node
//         seen.add(currentNode)
        
//         //return false if node relationships incorrect
//         if(currentNode.left > currentNode || currentNode.right < currentNode){
//              return false
//          }


//         //assuming still valid at this stage, add left and right nodes to your queue
//         if (currentNode.left){
//              queue.unshift(currentNode.left)
//         }

//         if (currentNode.right){
//             queue.unshift(currentNode.right)
//        }
//      }

//      queue = queue.slice(1)
//     }

//      return true
    
// };