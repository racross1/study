/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

//currently seems to be an issue in order of adding and
 
 const nums1 = [-10,-3,0,5,9]
//  Output: [0,-3,9,-10,null,5]
//  Explanation: [0,-10,5,null,-3,null,9] is also accepted:

var sortedArrayToBST = function(nums) {
    let root = new TreeNode(nums[Math.floor(nums.length/2)])
    
    let leftPointer = Math.floor(nums.length/2) - 1
    let rightPointer = Math.floor(nums.length/2) + 1

    let queue = [{node: root, side: 0}]
    
    while(queue.length){
        
        let {node: x, side: y} = queue.shift()
        let current = x

        if(y === 0) {
             let newLeft = new TreeNode(nums[leftPointer])
             let newRight = new TreeNode(nums[rightPointer])
            
              if (newLeft){
                current.left = newLeft
                queue.push({node: newLeft, side: -1})
              } else {
                current.left = null
               }

            if (newRight){
                current.right = newRight
               queue.push({node: newRight, side: 1})
            } else {
                current.right = null
            }
        }
        
        if(y === -1){
             let newLeft = new TreeNode(nums[leftPointer])
             
              if (newLeft){
                current.left = newLeft
                queue.push({node: newLeft, side: -1})
              } else {
                current.left = null
               }
        }
        
        if (y === 1){
            let newRight = new TreeNode(nums[rightPointer])
             
              if (newRight){
                current.right = newRight
                queue.push({node: newRight, side: 1})
              } else {
                current.right = null
               }
            
        }
        
       

        leftPointer-- 
        rightPointer++


    }

    return root
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

console.log(sortedArrayToBST(nums1))




// while(leftPointer > 0 && rightPointer < nums.length - 1){
//     currLeft.left = nums[leftPointer]
//     leftPointer++

//     root.right
// }
//.find to get first instance matching condition

//form left subtree and right subtree
//find middle node as pivot
//pointers moving outward to assign
// console.log(nums[Math.floor(nums.length/2)])
