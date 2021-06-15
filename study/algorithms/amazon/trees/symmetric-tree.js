// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

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
 * @return {boolean}
 */

//my initial try, see below for examples with explanation
//  var isSymmetric = function(root) {
//     if (!root) false //should this actually be true?
//     let leftTree = []
//     let rightTree = []
    
//     if(root.left && root.right && (root.left.val == root.right.val)) {
     

//         lot(root.left, 'left', 0)
//         lot(root.right, 'right', 0)


//     } else {
//         return false
//     }

//     function lot(root, side, level){
        

//         if (side == 'left'){
//             if (leftTree[level]) {
//             leftTree[level].push(root.val)
//             } else {
//                 leftTree[level] = []
//             }
//         } else {
//             rightTree.push(root.val)
//         }

//         lot(root.left, side, level)
//         lot(root.right, side, level)
//     }
    
//     return leftTree.slice(1).join('') == rightTree.slice(1).reverse.join('') ? true : false

    
// };


////solutions with explanation - preorder DFS, iterative DFS, BFS


// The idea is to check whether the tree's left and right subtrees are mirroring each other, we can use preorder traversal:

var isSymmetric = function(root) {
    if (!root) { // Sanity check
        return true;
    }

    // Check if tree s & t are mirroring each other
    function isMirror(s, t) {
        if (!s && !t) {
            return true; // Both nodes are null, ok
        }
        if (!s || !t || s.val !== t.val) {
            return false; // Found a mismatch
        }
        // Compare the left subtree of `s` with the right subtree of `t`
        // and the right subtree of `s` with the left subtree of `t`
        return isMirror(s.left, t.right) && isMirror(s.right, t.left);
    }

    return isMirror(root.left, root.right);
};
// As it's preorder DFS, time complexity is O(n), and space complexity is O(1) if we ignore the recursion stack which is the height of the tree.

// The question asks us to implement the solution iteratively, and it's easy to convert the above preorder to make it traverse iteratively using stack:

function isMirror(p, q) {
    // Create two stacks
    var s1 = [p], s2 = [q];

    // Perform preorder traversal
    while (s1.length > 0 || s2.length > 0) {
        var n1 = s1.pop(), n2 = s2.pop();

        // Two null nodes, let's continue
        if (!n1 && !n2) continue;

        // Return false as long as there is a mismatch
        if (!n1 || !n2 || n1.val !== n2.val) return false;

        // Scan tree s from left to right
        // and scan tree t from right to left
        s1.push(n1.left); s1.push(n1.right);
        s2.push(n2.right); s2.push(n2.left);

        
    }

    return true;
}
// Time complexity is still O(n), and space complexity is the height of the tree.

// Another solution is to use BFS, we just need to traverse both subtrees in level order, one from left to right, 
// and the other is right to left, let's modify the above isMirror function to the following:

function isMirror(s, t) {
    var q1 = [s], q2 = [t];

    // Perform breadth-first search
    while (q1.length > 0 || q2.length > 0) {
        // Dequeue
        var n1 = q1.shift(), n2 = q2.shift();

        // Two null nodes, let's continue
        if (!n1 && !n2) continue;

        // Return false as long as there is a mismatch
        if (!n1 || !n2 || n1.val !== n2.val) return false;

        // Scan tree s from left to right
        // and scan tree t from right to left
        q1.push(n1.left); q1.push(n1.right);
        q2.push(n2.right); q2.push(n2.left);
    }

    return true;
}
// Time complexity is O(n) and space complexity is the width of the tree.

