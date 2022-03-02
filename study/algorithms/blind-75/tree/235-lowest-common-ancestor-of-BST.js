/*
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: 
“The lowest common ancestor is defined between two nodes p and q 
as the lowest node in T that has both p and q as descendants 
(where we allow a node to be a descendant of itself).”
*/

/*
recursive solution

recursively call function and check 1(if root.val is greater than p and q vals) return call of fn with root.left
2) otherwise if root.val is less than p and q vals return function call with root.right
otherwise return root, because that means that root.val is either equal to one of the vals or greater than 1 and less than 1 (i.e. they are its left and right children)


*/

var lowestCommonAncestor = function(root, p, q) {
    if(root.val < p.val && root.val < q.val){
        return lowestCommonAncestor(root.right, p, q)
    }
    
    if(root.val > p.val && root.val > q.val){
        return lowestCommonAncestor(root.left, p, q)
    }

    return root
};





/*
iterative solution from leetcode

for iterative solution, just use while root and do the above checks. and set root to right or left, else break the loop and at the bottom return root
*/
'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/discuss/541362/JavaScript-Iterative-Recursive'

var lowestCommonAncestor = function(root, p, q) {
    while (root) {
        if (root.val < p.val && root.val < q.val) {
            root = root.right;
        }
        else if (root.val > p.val && root.val > q.val) {
            root = root.left;
        } else {
            break;
        }
    }
    return root;
};