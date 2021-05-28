// Given the root of a binary tree, return the inorder traversal of its nodes' values.

'https://leetcode.com/problems/binary-tree-inorder-traversal/'

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
 * @return {number[]}
 */

//concept from Beau teaches JS tutorial (code in study file)
 var inorderTraversal = function(root) {
    //create result arr
    let result = []
    
    function inOrderTraversal(node){
        //if node is null return. This will mean once you get to the end of the tree
        if(!node) return 
        
        //if node.left exists, recursive call to left node
        node.left && inOrderTraversal(node.left)
        //once it's gotten to the bottom of this left subtree (i.e. there is no node.left), 
        //push the data of this node to the results table
        result.push(node.val)
        //after the above (i.e. after checked if this node has left leaves, pushed this node itself to result)
        //if there's a node.right (after you've pushed the node itself since the order for this is lnr) call this function for node.right 
        node.right && inOrderTraversal(node.right)
    }
    
    inOrderTraversal(root)
    
    return result
    
};