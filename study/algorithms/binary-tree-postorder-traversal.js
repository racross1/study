









//lrn

//post order recursive works but stack version having issues
var postorderTraversal = function(root) {
    let result = []
    
    function poOT(node){
        if (!node) return
        
        node.left && poOT(node.left)
        node.right && poOT(node.right)
        result.push(node.val)
        
    }
    
    poOT(root)
    return result
    
};



//version using stack that simply reverses (or kind of uses a queue for) preorder traversal
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    if (!root) return [];
    
    var result = [], stack = [root];
    
    while (stack.length) {
        var node = stack.pop();
        // insert the node val to the front
        result.unshift(node.val);

        if (node.left) stack.push(node.left); // left first
        if (node.right) stack.push(node.right); // then right
    }
    
    return result;
};




//my attempt at this using stack (below does not work)

var postorderTraversal = function(root) {
    let result = []
    let stack = [root]
    
    while(stack.length){
        let node = stack.pop()
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
        result.push(node.val)
        
    }
    
    return result
    
};