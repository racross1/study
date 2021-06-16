// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

//find middle of array for root
//left pointer for left subtree
//right pointer for right subtree
//pointers moving middle out

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }



// Input: 
nums1 = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]

//recursively construct tree with construct tree helper that gets middle of current subtree using left and right bounds

//so for each call, we are getting the middle of the array and setting it as the root, then we set the left and right nodes of that one
//as the root of their own new subtrees
var sortedArrayToBST = function(nums) {
    if (!nums) return null
    //variable just for console logs
    let call = 1

    return constructTree(nums, 0, nums.length - 1)

    function constructTree(nums, left, right) {
        console.log("call#:", call)
        call++

        console.log("nums: ", nums)
        console.log("left: ", left)
        console.log("right: ", right)
        //so basically when the moving left or right pointer overtakes the stationary left or right pointer
        //(for left subtree, initial left stays stationary and right moves from the middle in
        //for right subtree, initial right stays stationary and the right pointer moves from the middle out
        if (left > right) return null 

        
        let mid = Math.floor(left + (right - left) / 2)
        console.log("mid: ", mid)

        let current = new TreeNode(nums[mid])

        current.left = constructTree(nums, left, mid - 1)
        current.right = constructTree(nums, mid + 1, right)

        console.log("current: ", current)
        return current

    }
    
};


console.log(sortedArrayToBST(nums1))


//note on something I didn't initially get:
    //in the mid - getting function above is Math.floor(left + (right - left) / 2). 
    //The left + is there for the right subtree because you take the difference between the left and right bounds 
    //and then have to offset it by the distance the right subtree is from the beginning of the array


// call#: 1
// nums:  [ -10, -3, 0, 5, 9 ]
// left:  0
// right:  4
// mid:  2
    //left bound  = 0, right bound = 4 (beginning and end of the tree because first call with root)
    //mid = index 2 which is root of whole tree

// call#: 2
// nums:  [ -10, -3, 0, 5, 9 ]
// left:  0
// right:  1
// mid:  0
    //left bound = 0, right bound = 1 (middle minus 1)
    //mid = 0 (-10 which is now node.left of root), and the new center / root of its own subtree

// call#: 3
// nums:  [ -10, -3, 0, 5, 9 ]
// left:  0
// right:  -1
    //left = 0 right = -1
    //checking left node of -10
    //returns null because right > left i.e. right pointer has passed bound of array

// call#: 4
// nums:  [ -10, -3, 0, 5, 9 ]
// left:  1
// right:  1
// mid:  1
    //left  = 1 right = 1, mid = 1 which is -3 which is now right child of -10

// call#: 5
// nums:  [ -10, -3, 0, 5, 9 ]
// left:  1
// right:  0
    //left = 1 right = 0
    //checking for left child of -3
    //previous root index was 1 so right bound is mid - 1 and left bound is prior mid so left > right and this returns null


// call#: 6
// nums:  [ -10, -3, 0, 5, 9 ]
// left:  2
// right:  1
// current:  TreeNode { val: -3, left: null, right: null }
// current:  TreeNode {
//   val: -10,
//   left: null,
//   right: TreeNode { val: -3, left: null, right: null }
// }
    //left = 2, right = 1
    //looking for right child of -3
    //returns null because mid is prior mid of 1 and left is mid + 1 and right is prior mid
    //so right child of -3 is null



// call#: 7
// nums:  [ -10, -3, 0, 5, 9 ]
// left:  3
// right:  4
// mid:  3
    //starting on right subtree
    //calls 1-6 where left subtree, now that we have that built out, we start on right
    //left = 3 (original mid + 1)
    //right = 4 (original right bound)
    //mid = 3 which will be new right node of root, and will be first root of right subtree


// call#: 8
// nums:  [ -10, -3, 0, 5, 9 ]
// left:  3
// right:  2
    //check for left child of 5 (current right child of root/0)
    //left = 3, right = 2
    //will return null because left > right
    //therefore left node of 5 = null



// call#: 9
// nums:  [ -10, -3, 0, 5, 9 ]
// left:  4
// right:  4
// mid:  4
    //check for right node of 5
    //left = 4
    //right = 4
    //mid = 4
    //right node of 5 / index 3 is now 9 / index 4. after this we just need to check the left and right children of 9


// call#: 10
// nums:  [ -10, -3, 0, 5, 9 ]
// left:  4
// right:  3
    //left child of 9 is null



// call#: 11
// nums:  [ -10, -3, 0, 5, 9 ]
// left:  5
// right:  4
    //right child of 9 is null
    //so now we finally return our current
    //which we return out of our overall function
// current:  TreeNode { val: 9, left: null, right: null }
// current:  TreeNode {
//   val: 5,
//   left: null,
//   right: TreeNode { val: 9, left: null, right: null }
// }
// current:  TreeNode {
//   val: 0,
//   left: TreeNode {
//     val: -10,
//     left: null,
//     right: TreeNode { val: -3, left: null, right: null }
//   },
//   right: TreeNode {
//     val: 5,
//     left: null,
//     right: TreeNode { val: 9, left: null, right: null }
//   }
// }
// TreeNode {
//   val: 0,
//   left: TreeNode {
//     val: -10,
//     left: null,
//     right: TreeNode { val: -3, left: null, right: null }
//   },
//   right: TreeNode {
//     val: 5,
//     left: null,
//     right: TreeNode { val: 9, left: null, right: null }
//   }
// }


















// //Previous answer


// var sortedArrayToBST1 = function(nums) {
//     if(nums == null || nums.length == 0) {
//         return null
//     }
   
//    return constructBST(nums, 0, nums.length - 1)
  
// };

// function constructBST(nums, left, right) {
//    if (left > right) {
//        return null
//    }
       
//    let mid = Math.floor(left + (right - left) / 2)
//    let curr = new TreeNode(nums[mid])
       
//    curr.left = constructBST(nums, left, mid - 1)
//    curr.right = constructBST(nums, mid + 1, right)
       
//    return curr
//    }