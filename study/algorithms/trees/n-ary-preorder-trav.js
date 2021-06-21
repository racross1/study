
// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

'https://leetcode.com/problems/n-ary-tree-preorder-traversal/'

// Nary-Tree input serialization is represented in their level order traversal. 
// Each group of children is separated by the null value (See examples)

//my solution got it first try

var preorder = function(root) {
    let result = []
    
    function preorderTrav(root){
        if (!root) return
        
        let curr = root
        let children = curr.children
        
        result.push(curr.val)
        
        if (children){
          for (child of children){
              preorderTrav(child)
          }
        }
        
    }
    
    preorderTrav(root)
    return result
    
};