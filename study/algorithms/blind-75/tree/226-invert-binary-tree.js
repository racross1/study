// Given the root of a binary tree, invert the tree, and return its root.

// Example 1:


// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Example 2:


// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:

// Input: root = []
// Output: []



//**** the following is my practice go at writing out the problem and solving on my own
//input: root of binary tree
//output: root of binary tree (flipped version of input)
//edge cases: empty input.

//Brainstorm Notes
    //root will be the same on both trees
    //will involve swap root.left = root.right
    //can make a new empty tree or swap in existing tree


//Implementation Notes
    //traversal where left and right nodes are swapped each pass
    //base case: if !root return

function invertBT(root){
    //recursive dfs where nodes are swapped at each pass and base case is if !root return
    function swapNodes(root){
        //base case
        if (!root) return

        //perform swap
        let temp = root.left
        root.left = root.right
        root.right = temp

        //call next loop for root.left and root.right
        swapNodes(root.left)
        swapNodes(root.right)
    }

    swapNodes(root)

    return root

}


//BFS and DFS (non-recursive) versions from discussion. Just swap the left and right of each node when you process

// DFS
function invertTree(root) {
    const stack = [root];
  
    while (stack.length) {
      const n = stack.pop();
      if (n != null) {
        [n.left, n.right] = [n.right, n.left];
        stack.push(n.left, n.right);
      }
    }
  
    return root;
  }
  
  // BFS
  function invertTree(root) {
    const queue = [root];
  
    while (queue.length) {
      const n = queue.shift();
      if (n != null) {
        [n.left, n.right] = [n.right, n.left];
        queue.push(n.left, n.right);
      }
    }
  
    return root;
  }

  //recursive function where you just use the function itself (no helper function for the recursion)

  function invertTree(node) {
    if (node !== null) {
        const tmp = node.left;
        node.left = invertTree(node.right);
        node.right = invertTree(tmp);
    }
    return node;
};