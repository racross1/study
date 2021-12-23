// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 
// Example 1:


// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:


// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:


// Input: p = [1,2,1], q = [1,1,2]
// Output: false


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

let p1 = new TreeNode(1);
p1.left = new TreeNode(2);
p1.right = new TreeNode(3);
 

let q1 = new TreeNode(1);
q1.left = new TreeNode(2);
q1.right = new TreeNode(3);

let p2 = new TreeNode(1);
p2.left = new TreeNode(2);

let q2 = new TreeNode(1);
q2.right = new TreeNode(2);


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

//input: root1, and root2
//output: boolean
//edge case: !p, !q




 var isSameTree = function(p, q) {
    function dfs(root1, root2){
        //true condition: if no root 1 and no root2 return true, this means you've gotten to the bottom of the tree without throwing false
        if (!root1 && !root2) return true
        //false condition: if no root1 OR no root2 (in the above we've already capture if both aren't there)
        //or if root vals aren't equal, return false
        //in dfs return dfs of left sub tree && dfs of right subtree (both most be true)
        if (!root1 || !root2 || root1.val !== root2.val) return false
        
        return dfs(root1.left, root2.left) && dfs(root1.right, root2.right)
        
    }

    //at end return call to dfs which will itself return a boolean
    return dfs(p,q)    
};


//from leetcode solutions (DFS): 

//you can also do the above without creating a separate dfs function
//what's important in the true and false conditions:
    //if !p && !q return true
    //if !p || !q || p.val !== q.val) return false
//and returning the call to the fn at end where it must be true for both left and right subtrees

//see below for annotated / console.logged version
function isSameTree2(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }

function isSameTree2(p, q) {
    console.log('p.val', p.val)
    console.log('q.val', q.val)
    if (!p && !q) {
        console.log('true')
        return true;
    }
    if (!p || !q || p.val !== q.val) 
    {
        console.log('false')
        return false;
    }
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }


// console.log(isSameTree2(p1, q1))

console.log(isSameTree2(p2, q2))