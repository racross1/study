// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []


//input: root
//output: 2D array


//*** iterative
//lot: aka bfs. Use queue to process nodes. Nest loops. outer loop is queue, inner loop is current level. 
//in outer loop get queueLength and init an empty arr for current level
//inner loop is for loop with queueLength as the size bound.
//within inner loop process nodes normally (i.e. get cur node and if cur.left push left to queue, if cur.right the same). at bottom of inner loop push curnode val to level
//at end of outer loop push curLevel to result arr.
//at end of function return result

var levelOrder = function(root) {
    if (!root) return []
    let result = []
    let q = [root]

    while(q.length !== 0){
        let curLevelSize = q.length
        let curLevel = []

        for (let i = 0; i < curLevelSize; i++){
            let curNode = q.shift()

            if (curNode.left){
                q.push(curNode.left)
            }

            if (curNode.right){
                q.push(curNode.right)
            }

            curLevel.push(curNode.val)
        }

        result.push(curLevel)


    }

    return result    

}

//**recursive
//init result array
//helper function that takes 2 args: node and level (where level is index in result array of level)
//with each call of helper, call with node.left or right, and level +1
//base case for helper function: if !root return


var levelOrder = function(root) {
    let result = []

    function traverse(root, level){
        if (!root) return

        //if there is no arr at this level index, create one, otherwise push node onto level at that index
        if (!result[level]){
            result[level] = []

        }
        result[level].push(root.val)

        //then call traverse for left and right
        traverse(root.left, level + 1)
        traverse(root.right, level + 1)

    }
    traverse(root, 0)
    return result

}