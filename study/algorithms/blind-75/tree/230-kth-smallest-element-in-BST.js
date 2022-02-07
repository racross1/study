

// inorder traversal with function in scope of main function and result in main function
//and then just get result at k-1


var kthSmallest = function(root, k) {
    let result = []
    
    function inorder(root){
        if(!root) return
        
        root.left && inorder(root.left)
        result.push(root.val)
        root.right && inorder(root.right)
        
    }
    
    inorder(root)
    
    return result[k-1]
    
    
};

//Working Solution with ITERATIVE INORDER TRAVERSAL


var kthSmallest = function(root, k) {
    let result = []
    let stack = []
    let cur = root

    while(cur || stack.length){
        while(cur){
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        result.push(cur.val)
        cur = cur.right
    }
    
    return result[k-1]
};
