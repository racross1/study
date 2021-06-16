
// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.
function TreeNode(val, left, right) {
   this.val = (val===undefined ? 0 : val)
   this.left = (left===undefined ? null : left)
   this.right = (right===undefined ? null : right)
}


//my implementation of the first solution below
var diameterOfBinaryTreeFinal = function(root) {
    if (!root) return 0
    let max = 0
    let call = 0

    const maxDepth = function(node) {
        call++
        console.log('call #: ', call)
        console.log('node: ', node)
        
        if (!node) return 0
        
        
        let left = maxDepth(node.left)
        let right = maxDepth(node.right)
        // console.log('left.val: ', left.val)
        // console.log('right.val: ', right.val)
        console.log('left: ', left)
        console.log('right: ', right)
        
        max = Math.max(max, left + right)
        console.log('max: ',max)
        console.log('Math.max(left, right) + 1: ', Math.max(left, right) + 1)
        return Math.max(left, right) + 1

    }
    
    maxDepth(root)
    return max
    
};

root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTreeFinal(root))

//____________________




function diameterOfBinaryTree1(root) {
    let max = 0
     
     function maxDepth(root) {
         if (root === null) return 0 // if our root(num) is null then there is no path. return 0/null
         let left = maxDepth(root.left) // Assign the left  of tree to LEFT; this will be easier to call it instead of writing "maxDepth(root.left)" each time
         let right = maxDepth(root.right) //Same above
     
         
         max = Math.max(max, left + right) //if the path doesn't go through the root we just get the max of them
     }
     //since we don't know if the path will go through the root or not we will have to get the max between(path that visits the root, or the path that doesn't go through the root.)
     maxDepth(root)
     return max
 };



var diameterOfBinaryTree2 = function(root) {
    let diameter = 0;
    
    dfs(root);
    
    return diameter;
    
    function dfs(node) {
        if (!node) return 0;
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        // update diameter at every node
        diameter = Math.max(diameter, left + right);

        // update the largest number of edge so far
        return 1 + Math.max(left, right);
    }
};




//explainer on this one with name as countDiamterOfABinaryTree
'https://dev.to/alexandrshy/data-structures-binary-search-tree-in-javascript-part-2-practice-18ei#:~:text=Diameter%20of%20Binary%20Tree&text=The%20diameter%20of%20a%20binary,not%20pass%20through%20the%20root.'



const countDiameter = root => {
    if (!root) return 0;
  
    return 1 + Math.max(countDiameter(root.left), countDiameter(root.right));
  };
  
  /**
   * @param {TreeNode} root
   * @returns {number}
   */
  const diameterOfBinaryTree3 = root => {
    if (!root) return 0;
  
    const center = countDiameter(root.left) + countDiameter(root.right);
    const left = diameterOfBinaryTree(root.left);
    const right = diameterOfBinaryTree(root.right);
  
    return Math.max(center, left, right);
  };


  //another explainer:
'  https://shareablecode.com/snippets/diameter-of-binary-tree-javascript-solution-KqvD-fbzj'

/**
 * @param {TreeNode} root
 * @return {number}
 */
 const diameterOfBinaryTree4 = root => {
    const helper = root => {
      if (!root) {
        return 0;
      }
  
      const left = helper(root.left);
      const right = helper(root.right);
  
      max = Math.max(max, 1 + left + right);
  
      return 1 + Math.max(left, right);
    };
  
    let max = 0;
    helper(root);
    return max;
  };
  

  //solution using destructuring
'https://www.youtube.com/watch?v=PYvqkhp5-48'
  // Time: O(n)
// Space: worst O(n) for call stack
var diameterOfBinaryTree5 = function(root) {
    // return [diameter, height]
    const walk = (node) => {
        
        if (node === null) return [0, 0]
        const [leftDiameter, leftHeight] = walk(node.left)
        const [rightDiameter, rightHeight] = walk(node.right)
        
        return [
            Math.max(leftDiameter, rightDiameter, leftHeight + rightHeight),
            Math.max(leftHeight, rightHeight)  + 1
        ]
    }
    
    return walk(root)[0]
};