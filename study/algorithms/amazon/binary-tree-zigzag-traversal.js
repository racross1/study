// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. 
// (i.e., from left to right, then right to left for the next level and alternate between).


let root1 = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]

let root2 = [1]
// Output: [[1]]

let root3 = []
// Output: []

//input: array reprsentation of binary tree
//output: array of arrays
//bfs storing each level. 
//how to differentiate each level
//look at solutions to see how they implement tracking level and then try out my own

var zigzagLevelOrder = function(root) {
    let result = []

    function traverseLevels(root, l){
        if (!root) return 
        if (result[l]){
            if(l % 2 === 0){
            
                result[l].push(root.val)
            
            } else {
                result[l].unshift(root.val)
            }
            
        } else {
            result[l] = [root.val]
        }

        traverseLevels(root.left, l+1)
        traverseLevels(root.right, l+1)
    }

    traverseLevels(root, 0)
    
    return result
}