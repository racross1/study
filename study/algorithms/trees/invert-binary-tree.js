// youtube explanation:
'https://youtu.be/8QyteJVc3qs'


//on leetcode:
'https://leetcode.com/problems/invert-binary-tree'


 /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
//  * @param {TreeNode} root
//  * @return {TreeNode}
//  */
var invertTree = function(root) {
    if(root){
        var temp = root.left
        root.left = root.right
        root.right = temp
        
        invertTree(root.right)
        invertTree(root.left)
    }
    return root
};