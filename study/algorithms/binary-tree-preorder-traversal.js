

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

//nlr
//see inorder traversal comments - this is basically the same processm but with first pushing the node itself and then left traversing and then right traversing
var preorderTraversal = function(root) {
    let result = []
    
    function pot(node){
        if (!node) return
        
        result.push(node.val)
        node.left && pot(node.left)
        node.right && pot(node.right)
        
    }
    
    pot(root)
    
    return result
    
};