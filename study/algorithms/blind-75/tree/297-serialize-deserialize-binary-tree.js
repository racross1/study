// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

 
// Example 1:


// Input: root = [1,2,3,null,null,4,5]
// Output: [1,2,3,null,null,4,5]
// Example 2:

// Input: root = []
// Output: []

// serialize using reversed postorder dfs traversal, so that when serializing you can pop and then go left, right
//in serializer base case is if !node return result.push(null) (because we want leaf nodes to point to null)
// for serializing have build helper with basically a preorder traversal. no args for build helper 
// at start of build helper, pop curval, and if curval = null return null). 
//in build helper, preorder traversal as follows (just call build function)
// const node = new TreeNode(curVal)
        //build has no args, just call it in order (left then right)
        // node.left = build()
        // node.right = build()

// At the end of the build function return new node, at the end of the serialize function return build()


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);
 

var serialize = function(root) {
    let result = []

    function serializer(node){
        //if no node return result with null pushed on
        //this is our base case
        console.log('***NODE:', node)
        if (!node) return result.push(null)
        console.log('result', result)
        
        //postorder with right first, and no check for if node exists (because we want to push null onto arr)
        serializer(node.right)
        serializer(node.left)
        result.push(node.val)

        console.log('result2', result)
        
    }
    
    serializer(root)
    return result
    
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    function build () {
        //curval = last on arr because we serialized with postorder
        let curVal = data.pop()
        
        //if curVal is null, return null (so that since it is right or left of a node, we show that node.left = null)
        if (curVal == null) return null
        
        //preorder traversal
        const node = new TreeNode(curVal)
        //build has no args, just call it in order (left then right)
        node.left = build()
        node.right = build()
        
        //return node because in call stack it is left or right. At the end of the call stack you return original node
        return node
    }
    //return return of build which is node
    return build()
};


deserialize(serialize(root))

//below my initial attempt, not used / doesn't quite work
// ____________________________________________________________________________________________________________________________
// serialize using reversed postorder dfs traversal, so that when serializing you can pop. for serializing have build helper with basically a preorder traversal (before that pop curval, and if curval = null return null). At the end of the build function return new node, at the end of the serialize function return build


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */


// var serialize = function(root) {
//     let result = []

//     function postorderTraverse(root){
//         if (!root) return 

//         root.left && postorderTraverse(root.left)
//         root.right && postorderTraverse(root.right)

//         result.push(root.val)
//     }
    
//     return String(result)
// };

// /**
//  * Decodes your encoded data to tree.
//  *
//  * @param {string} data
//  * @return {TreeNode}
//  */
// var deserialize = function(data) {
//     let arr = Array.from(data)

//     function build(arr){
//         let curVal = arr.pop()
//         if (curVal === null) return null

//         let newNode =  new TreeNode(curVal)

//         newNode.right = build(arr)
//         newNode.left = build(arr)
        
//         return newNode
//     }


//     return build(root)
    
// };

// /**
//  * Your functions will be called as such:
//  * deserialize(serialize(root));
//  */