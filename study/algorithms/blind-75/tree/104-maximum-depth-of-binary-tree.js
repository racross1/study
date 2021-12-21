// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2
// Example 3:

// Input: root = []
// Output: 0
// Example 4:

// Input: root = [0]
// Output: 1


//depth variable that tracks deepest. DFS that takes root and level. each time you call dfs, level + 1
//init depth variable = 0
//dfs function
    //args: root, level
        //base case: if !root return
        //if level > depth, depth + 1
        //dfs(root.left, level+1)
        //dfs(root.right, level+1)
//call dfs function
    //dfs(root, 1)
//return depth variable


var maxDepth = function(root) {
    let depth = 0

    function dfs(root, level) {
        if (!root) return

        if (level > depth) depth = level

        dfs(root.left, level + 1)
        dfs(root.right, level + 1)
    }

    dfs(root, 1)
    return depth
    
};