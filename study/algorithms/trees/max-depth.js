function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


// Ruby
// def max_depth(root)
//   root ? 1 + [max_depth(root.left), max_depth(root.right)].max : 0
// end


var maxDepth = function(root) {
    if(root === undefined || root===null){
        return 0
    }
    
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1
    
};


root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);


console.log(maxDepth(root))