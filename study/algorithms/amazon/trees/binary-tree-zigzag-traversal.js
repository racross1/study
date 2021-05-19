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

//my implementation based on this video:
'https://dev.to/akshaymarch7/zigzag-spiral-level-order-traversal-amazon-interview-question-14jp'

var zigzagLevelOrder = function(root) {
    let result = []

    function traverseLevels(root, l){
        //check if value exists, if not return
        if (!root) return 
        //if theres something at this index
        if (result[l]){
            //check if the level is odd or even so that we know in which direction to add nodes to result
            //if level's even
            if(l % 2 === 0){
            //push result onto result array at index
                result[l].push(root.val)
            
            } else {
                //if level is even, unshift it on to the beginning of the result array at that index
                result[l].unshift(root.val)
            }
            
            //otherwise (if nothing yet exists at that index / level) create new array with that item in it
        } else {
            result[l] = [root.val]
        }

        //recursively call that function for the left and right nodes
        traverseLevels(root.left, l+1)
        traverseLevels(root.right, l+1)
    }

    //initial call of function using root and index 0
    traverseLevels(root, 0)

    return result
}