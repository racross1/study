// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


// Ruby
// def max_depth(root)
//   root ? 1 + [max_depth(root.left), max_depth(root.right)].max : 0
// end



//this solution very fast, but I do not currently understand how it returns the count
//as I understand it:
    //each call to the function returns the max result of root.left and root.right and then adds 1 to that
    //i think maybe it is the adding 1 that does it?
    //so the exit function is to return 0 when you get to the bottom of the tree
    //with left and right recursive calls you get to the bottom of the tree
    // with each call you are adding 1 to the call
//GREAT walk through of the recursive solution here:
    'https://www.youtube.com/watch?v=YT1994beXn0'
//the missing piece was that when you get down to the bottom of the tree, both left and right will return 0,
//so the bottom root will return 0 + 1
//we then return to the recursion of the node above the bottom node. 
//the return value of 1 for the bottom-most left node is compared against the same process for the right
//the current node will then return the max of 1 and the max height of what is to the right of the node 
// it does this recursively until we get back to the root

//beats on 98%
var maxDepth = function(root) {
    if(root === undefined || root===null){
        return 0
    }
    //the results of this comment confuse me more
    // console.log(`root.val: ${root.val}`, Math.max(maxDepth(root.left),maxDepth(root.right)) + 1)
    
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1
    
};


root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.left.right = new TreeNode(7);


// console.log(maxDepth(root))

// maxDepth(root)


//an alternative approach from this Youtube video in JS that uses a counter for the level:
'https://www.youtube.com/watch?v=a4LNgiIcBTU'

//also beats on 98%
const maxDepth2 = function(root) {
    let mxDepth = 0 

    let dfs = (node, level) => {
        if (node === null) return 

        if (level > mxDepth) mxDepth = level 
        dfs(node.left, level + 1)
        dfs(node.right, level + 1)
    }

    dfs(root, 1)
    return mxDepth

}

console.log(maxDepth2(root))
