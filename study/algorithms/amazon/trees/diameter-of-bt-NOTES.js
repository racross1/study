//my implementation of the first solution below with notes on each stage in the iteration

var diameterOfBinaryTreeFinal = function(root) {
    if (!root) return 0
    let max = 0
    //this variable for console log illustration only
    let call = 0

    const maxDepth = function(node) {
        call++
        console.log('call #: ', call)
        console.log('node: ', node)
        
        if (!node) return 0
        
        
        let left = maxDepth(node.left)
        let right = maxDepth(node.right)
        console.log('left: ', left)
        console.log('right: ', right)
        
        max = Math.max(max, left + right)
        console.log('max: ',max)
        console.log('Math.max(left, right) + 1: ', Math.max(left, right) + 1)
        return Math.max(left, right) + 1

    }
    
    maxDepth(root)
    return max
    
};

root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTreeFinal(root))





// call #:  1
// node:  TreeNode {
//   val: 1,
//   left: TreeNode {
//     val: 2,
//     left: TreeNode { val: 4, left: null, right: null },
//     right: TreeNode { val: 5, left: null, right: null }
//   },
//   right: TreeNode { val: 3, left: null, right: null }
// }
    //call1: the node is root and we don't return anythinig because to get left we need to call the function again (walk down the tree)


// call #:  2
// node:  TreeNode {
//   val: 2,
//   left: TreeNode { val: 4, left: null, right: null },
//   right: TreeNode { val: 5, left: null, right: null }
// }
    //no return value, still walking down the tree



// call #:  3
// node:  TreeNode { val: 4, left: null, right: null }
    //we got to node 4 which is the bottom of the leftmost subtree
    //now we try to go to the left again in call 4



// call #:  4
// node:  null
    //left of node 4, is null, so this will return 0 for left variable



// call #:  5
// node:  null
// left:  0
// right:  0
// max:  0
// Math.max(left, right) + 1:  1
    //left node of 4 is null, so that will return 0 for right variable
    //we now move on to the next part of the recursive function
    //where max = Math.max(max, left + right) which = Math.max(0, 0 + 0) so max = 0
    //we then return 1 for 4 because we return Math.max(left, right) + 1
    //so basically we return a value of 1 at node 4 (i.e. max height at 4 is 1)
 

// call #:  6
// node:  TreeNode { val: 5, left: null, right: null }
    //no we bubble back up the call stack:
    //that whole operation was for the left subtree of node 2 (or left value for that call of the function)
    //so now we go to the right of 2, which gets us to node 5



// call #:  7
// node:  null
    //check the left child of 5 and it's null, so this will return 0 for the variable "left"



// call #:  8
// node:  null
// left:  0
// right:  0
// max:  0
// Math.max(left, right) + 1:  1
// left:  1
// right:  1
// max:  2
// Math.max(left, right) + 1:  2
    //check right child of 5 and that will return 0 because right child of 5 is null
    //we now have 2 values for left and right variables: 0 and 0
    //max will remain 0 
    //we then return 1 because the max of left and right is max of 0 and 0 and then we add 1
    //so we have returned 1 for node 5 because that is the max height at 5
    //we stay within this call because we are bubbling back up to node 2
    //now we have a new max of 2 because left = 1 and right = 1 and left + right = 2
    //we then return 2 because left and right are both 1 so our Math.max statement evaluates to 1 and we add 1. 
    //so we return a value of 2 fo node 2



// call #:  9
// node:  TreeNode { val: 3, left: null, right: null }
    //we now bubble back up to the root call of the function. all those calls to now were just the left subtree of the root
    //so we still need to get our right variable for that call of the helper function
    //this gives us node 3 which is the first node in the right subtree of the root.



// call #:  10
// node:  null
    //we check left of 3 and it's null, so our left var will return 0



// call #:  11
// node:  null
// left:  0
// right:  0
// max:  2
// Math.max(left, right) + 1:  1
// left:  2
// right:  1
// max:  3
// Math.max(left, right) + 1:  3
// 3

    //we check our right child of node 3 and it's null so we get 0 for our right var now
    //we keep our max of 2 since Math.max of (2, 0+0) is obviously 2
    //this returns 1 for node 3 since max of 0,0 + 1 = 1
    //now we've bubbled back up to our root. We have the left variable which has a value of 2, and we have the right variable,
    //which has a value of 1
    //now we check Math.max(2, 2+ 1) and our new max is 3
    //our call stack is empty so we've finsihed our recursion and we return the max which is 3
    
    
    //FOR REFERENCE The tree in the above example looks like this:

//         [1]
//        /   \
//    [2]     [3]
//   /   \
//  [4]  [5]