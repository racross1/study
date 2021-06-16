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


//from this video
'https://www.youtube.com/watch?v=_pP1UaL-Xi8'
let isBalanced = function(root) {
    if (root == null) {
        return true;
    }
    
    return getHeight(root) !== -1;
};

let getHeight = function(node) {
    if (node == null) {
        return 0;
    }

    //previously I was having a hard time understanding why this recursive function will start at the bottom of the tree
    //I think it's because of the call STACK - such that for each successive node, it goes to the left and the right of the node to 
    //get left and right. 
    //it hits a null condition when the tree ends and so starts iterating from the bottom of the tree up, starting at the 
    //last node on the stack (i.e. the one on the bottom)
    let left = getHeight(node.left);
    let right = getHeight(node.right);

    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
        return -1;
    }


    //this here is the part currently giving me the most trouble. 
    //for the current binary tree we get our height (i.e. max height between left and right) and add one to go up a level
    //so going back up to the lines getting left and right
    //we know that the height is the prev height plus1
    //what I still don't understand is how this height gets allocated to the left or the right nodes so that we can compare them.
    //i think it's foor the parent node - so it's the tallest point leading up to the parent, which is effectively the current tallest height at that node.
    //then for the next node, we'll have the max height for the left vs the max height for the right, and that's where we check the difference
    return Math.max(left, right) + 1;
};



//from this video
'https://www.youtube.com/watch?v=yzXPqT_GBv8'

 var isBalanced = function(root) {
    //flag to show if is balanced or not
    let flag = true

    //run recursive height function starting at root
    height(root);
    return flag;

    function height(node){
        //if there is no node, return 0
        //for root this means obvi if there is no root
        if(!node)return 0;

        //if flag has been triggered to be set to false
        if(!flag) return;

        //for first iteration, left is this function run for node left of root and node right of root
        //so bringing in what I got to above, this will start at the bottom-most left node and the bottommost right
        let left = height(node.left);
        let right = height(node.right);

        //check to make sure balance condition is still true. if the absolute difference between the left and the right 
        //is greater than 1, change the flag to false
        //check
        if(Math.abs(left-right) > 1)flag = false

        //max of height of left and height of right + 1
        //so for a given node it is returning the max height between its left and right children
        //the check condition gets broken if at any point the difference exceeds 1
        return Math.max(left,right)+1
    }
};











//from leetcode discussion

//  The idea - DFS O(N)
//  Postorder DFS to find the height of every node
//  If any subtree is not balanced, encrypt the information as Infinity
 var isBalanced = function(root) {
     
    //this is similar to the 2 above - recurse starting at bottom and check / increment the height each time
    //this one is a little more intuitive to me because each left and right node get their own incrementer 
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

//this one seems a little gnarlier - I think I prefer the above 3+
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