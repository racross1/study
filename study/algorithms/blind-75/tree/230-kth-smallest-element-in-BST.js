// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

 

// Example 1:


// Input: root = [3,1,4,null,2], k = 1
// Output: 1
// Example 2:


// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3



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
