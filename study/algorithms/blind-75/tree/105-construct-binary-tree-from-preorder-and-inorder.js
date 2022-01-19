// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

 

// Example 1:


// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]
// Example 2:

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]
 

//one way to do recursion with self function
//base case if no nodes in either arr, return null
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return null
    
    let root = new TreeNode(preorder[0])
    let pivot = inorder.indexOf(preorder[0])
    
    root.left = buildTree(preorder.slice(1,pivot+1), inorder.slice(0, pivot))
    root.right = buildTree(preorder.slice(pivot+1), inorder.slice(pivot + 1))
    
    return root
    
}

//this one closer to the method I tried
//from solutions on leetcode

var buildTree = function(preorder, inorder) {
    if (inorder.length < 1) return null;

    const rootVal = preorder.shift();
    const rootIndex = inorder.indexOf(rootVal);
    const rootNode = new TreeNode(rootVal);

    const left = inorder.slice(0, rootIndex);
    const right = inorder.slice(rootIndex + 1);

    rootNode.left = buildTree(preorder, left);
    rootNode.right = buildTree(preorder, right);

    return rootNode;
    
};
