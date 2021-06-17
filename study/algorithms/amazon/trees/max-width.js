
// Given the root of a binary tree, return the maximum width of the given tree.

// The maximum width of a tree is the maximum width among all levels.

// The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes are also counted into the length calculation.

// It is guaranteed that the answer will in the range of 32-bit signed integer.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

root = new TreeNode(1);
root.left = new TreeNode(3);
root.right = new TreeNode(2);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(9);



//currently creating extra array of nulls. revist to fix!
//also left and right pointer function will default to full length of arr if not specified
var widthOfBinaryTree = function(root) {
    if (!root) return null

//idea:
//shovel nulls in
//check first and last 
        //if 0 is null, first non-null == first
        //if last is null, first non-null = last (use pointers?)
    let max = -Infinity
    let q = [root]

    while (q.length > 0){
        let currLevel = []
        
        let qLength = q.length
        if (qLength > max) max = qLength
        

        //missing: need to check for max width of level and position of nodes
        for (let i = 0; i < qLength; i++) {
            let curr = q.shift()
            if (curr === null){
                currLevel.push(null)
            } else {
            
            currLevel.push(curr.val)
            q.push(curr.left)
            q.push(curr.right)

            }
    
        }
        console.log('curlevel: ', currLevel)
        let left = 0
        let right = currLevel.length - 1
        let leftBoundSet = false
        let rightBoundSet = false
        while (!leftBoundSet && !rightBoundSet){
            if (currLevel[left] === null) {
                left++
            } else {
                leftBoundSet = true
            }

            if (currLevel[right] === null) {
                right--
            } else {
                rightBoundSet = true
            }
        }
        
        let width = right - left
        if (width > max) max = width
        
    }

    return max
};


//Solution of mine that counts only existing nodes (doesn't include nulls between start and endpoint, which for this problem it needs to apparently). My approach would work great for max sum.
var widthOfBinaryTree1 = function(root) {
    //do level order with queue and keep track of max

    if (!root) return null


    let max = -Infinity
    let q = [root]

    while (q.length > 0){
        let qLength = q.length
        if (qLength > max) max = qLength 

        for (let i = 0; i < qLength; i++) {
            let curr = q.shift()
            if (curr.left){
                q.push(curr.left)
            }

            if(curr.right){
                q.push(curr.right)
            }
        }
    }

    return max
};

console.log(widthOfBinaryTree(root))