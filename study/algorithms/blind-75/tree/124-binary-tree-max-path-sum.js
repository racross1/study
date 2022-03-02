// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. 
// Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.

 
// Example 1:

// Input: root = [1,2,3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
// Example 2:


// Input: root = [-10,9,20,null,null,15,7]
// Output: 42
// Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.


// this video: https://www.youtube.com/watch?v=6cA_NDtpyz8
// example we want to go bottom up, so we do a postorder traversal
// - if you were to print out the nodes of a tree with postorder traversal, it'd be the nodes from bottom to top, and that's what we want here, because we want to get the max path sum at each subtree and roll it up to the overall max path sum at each node

// - To start have a max variable you initialize to -inifinity, because we can have neg numbers in our nodes
// - traverse nodes down to the bottom of the tree, return 0 max path sums to the leaf nodes
// - At each node we compute its max path by computing the left plus the right, plus the node
// - if max sum from a node is -5, we want ot return a max sum of 0, because adding a negative number will only make the node above it smaller. So we want to bound our sums at 0

// Order of processing at each node (below example starting at leaf nodes):
// - Get left node max path sum, return 0 if null
// - Get right node max path sum, return 0 if null
// - At node, compute new max: Math.max(max, left + right + node val)
// - Then, return a val to parent of current node, if val is negative, return 0 because anything plus a negative value will be made smaller
// - so return that amount to current node, then we go right child 
// - right child is leaf so return left and right vals of 0 to it
// - compute new max: Math.max(max, (0 + 0 + leaf))
// - then decide what to return to node: get max of left and right side
// - return that val to parent node and then at parent node compute new max: left + right + root.val
// - from that node we now need to choose whether we want to include our left child sum or our right child sum because we can't choose both, so we return the (max between left and right) + root 

// below is 0(n) time complexity where n is number of nodes in tree because with postorder we have to touch every node at least once
// o(h) space complexity where h is the height of the tree, because we will have h recursive calls

var maxPathSum = function(root) {
    let max = -Infinity

    //initialize another function to perform postorder traversal
    function postorder(root){
        //base case is if root is null
        if (!root) return 0
        //now make recursive calls to left and right subtree and bound them at 0
        let left = Math.max(postorder(root.left), 0)
        let right = Math.max(postorder(root.right), 0)

        // when we come out of these calls we're going to compute our new maximum
        max = Math.max(max, left + right + root.val)
        //Then we return max of left and right and then add root val to it
        //reason we want to do this is because we want to make sure we only have a single line going down. We don't want multiple branches, so we choose the max child sum
        return Math.max(left, right) + root.val
    }

    //in max path sum call postorder function
    //and return whatever max is when we're done traversing
    postorder(root)
    return max
}
