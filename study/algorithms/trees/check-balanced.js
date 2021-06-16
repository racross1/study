
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }


root1 = new TreeNode(3);
root1.left = new TreeNode(9);
root1.right = new TreeNode(20);
root1.right.left = new TreeNode(15);
root1.right.right = new TreeNode(7);
root1.right.right.right = new TreeNode(4);
root1.right.right.right.right = new TreeNode(5);





var isBalanced = function(root) {
    if (!root) return true 
    let flag = true
   
    function getHeight(root){

        //go through and check the height of each left and right subtree
        //compare the heights and if the absolute difference is greater than 1 set flag to false
        if (!root) return 0

        console.log("root: ", root)
       
        let left = getHeight(root.left)
        let right = getHeight(root.right)

        console.log("left: ", left)
        console.log("right: ", right)

        if(Math.abs(left - right) > 1) flag = false

        // must be the below and NOT left + 1 && right + 1
        return Math.max(left, right) + 1

    }

    getHeight(root)
    return flag
};


console.log(isBalanced(root1))









//prior solution
var isBalanced1 = function(root) {
    return findMinHeight(root) >= findMaxHeight(root) - 1
   
};

function findMinHeight(node){
   if (node == null) return -1

   let left = findMinHeight(node.left)
   let right = findMinHeight(node.right)

   if (left < right){
       return left + 1
   } else {
       return right + 1
   }
}

function findMaxHeight(node){
   if (node == null) return -1

   let left = findMaxHeight(node.left)
   let right = findMaxHeight(node.right)

   if (left > right){
       return left + 1
   } else {
       return right + 1
   }
}