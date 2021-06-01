// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.



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
 

//from leetcode discussion

//  The idea - DFS O(N)
//  Postorder DFS to find the height of every node
//  If any subtree is not balanced, encrypt the information as Infinity
 var isBalanced = function(root) {
     
     let dfs = function(node) {
         if (!node) return 0;
         let left = 1 + dfs(node.left);
         let right = 1 + dfs(node.right);
         if (Math.abs(left - right) > 1) return Infinity;
         return Math.max(left, right);
     }
     
     return dfs(root)==Infinity?false:true;
 };
//  The idea - DFS O(N^2)
//  Standard Top-Down recursion
 var isBalanced = function(root) {
     if (!root) return true;
     
     let height = function(node) {
         if (!node) return 0;
         return 1 + Math.max(height(node.left), height(node.right));
     }
     
     return Math.abs(height(root.left) - height(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right);
 }






















//below does not work
var isBalanced = function(root) {
     return findMinHeight(root) >= findMaxHeight(root) - 1
    
};

function findMinHeight(node){
    if (node == null) return -1

    let left = findMinHeight(node.left)
    let right = findMinHeight(node.right)

    if (left < right){
        return left + 1
    } else {
        return right + 1
    }
}

function findMaxHeight(node){
    if (node == null) return -1

    let left = findMaxHeight(node.left)
    let right = findMaxHeight(node.right)

    if (left > right){
        return left + 1
    } else {
        return right + 1
    }
}


// from Beau Teaches JS notes (to help). 
//note, in that file is within class (hence use of "this")

  function isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1)
  }
 function findMinHeight(node = this.root) {
      if (node == null) {
          return -1;
      };
      let left = this.findMinHeight(node.left);
      let right = this.findMinHeight(node.right);
      if (left < right) {
          return left + 1;
      } else {
          return right + 1;
      };
  }
 function findMaxHeight(node = this.root) {
      if (node == null) {
          return -1;
      };
      let left = this.findMaxHeight(node.left);
      let right = this.findMaxHeight(node.right);
      if (left > right) {
          return left + 1;
      } else {
          return right + 1;
      };
  }