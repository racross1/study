// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

 

// Example 1:


// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true
// Example 2:


// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false
 


//solution from walk through of this video: 
'https://www.youtube.com/watch?v=E36O5SWp-LE'


//this one faster than one below
function isSubtree(s, t){
    if (!t) return true
    if (!s) return false
    if (isSameTree(s, t)) return true

    return isSubtree(s.left, t) || isSubtree(s.right, t)

    function isSameTree(s, t){
        if (!s && !t) return true
        if (s && t && s.val == t.val){
            return isSameTree(s.left, t.left) && isSameTree(s.right, t.right)
        }

        //meaning one of the trees is null or the vals don't equal
        return false 
    }
}







//the below solution works
function isSubtree(s, t){
    //edge cases
    if (s === null && t === null) return true
    if (s === null) return false
    if (t === null) return true
    if (isSameTree(s, t)) return true

    return isSubtree(s.left, t) || isSubtree(s.right, t)
}

//solution to isSame tree problem
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










//solution from leetcode

var isSubtree = function(s, t) {
    if (!s) return !t;
    return isEqual(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};

function isEqual(root1, root2) {
    if (!root1 || !root2) return !root1 && !root2;
    if (root1.val !== root2.val) return false;
    return isEqual(root1.left, root2.left) && isEqual(root1.right, root2.right);
}