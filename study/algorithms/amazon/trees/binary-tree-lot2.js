function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);


console.log(root)

//my latest submission
var levelOrder = function(root) {
    let output = []

    
    function levelOrderTraverse(root, level){
        if (!root) return

        if (!output[level]){
            output[level] = [root.val]
        } else {
            output[level].push(root.val)
        }

        levelOrderTraverse(root.left, level + 1)
        levelOrderTraverse(root.right, level + 1)
    }

    levelOrderTraverse(root, 0)
    return output   
}

//attempt with queue unsuccessful, copied below approach

var levelOrderQ = function(root) {
     // If root is null return an empty array
     if(!root) return []
    
     const queue = [root] // initialize the queue with root
     const output = [] // declare output array
     
     while(queue.length !== 0){
        const queueLength = queue.length // Get the length prior to dequeueing
        const currLevel = [] // Declare this level
        // loop through to exhaust all options and only to include nodes at currLevel
        for(let i = 0; i < queueLength; i++){
            // Get next node
            const current = queue.shift()
            
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
            // After we add left and right for current, we add to currLevel
            currLevel.push(current.val)
        }
        // Level has been finished. Push into output array
        output.push(currLevel)
    }
     return output

}




// console.log(levelOrder(root))
console.log(levelOrderQ(root))







//here is an approach with queue that works:
//has a nested for loop for each level so that we create the level array before moving on to the next one

var levelOrderQDiscussion = function(root) {
    // If root is null return an empty array
    if(!root) return []
    
    const queue = [root] // initialize the queue with root
    const levels = [] // declare output array
    
    while(queue.length !== 0){
       const queueLength = queue.length // Get the length prior to dequeueing
       const currLevel = [] // Declare this level
       // loop through to exhaust all options and only to include nodes at currLevel
       for(let i = 0; i < queueLength; i++){
           // Get next node
           const current = queue.shift()
           
           if(current.left){
               queue.push(current.left)
           }
           if(current.right){
               queue.push(current.right)
           }
           // After we add left and right for current, we add to currLevel
           currLevel.push(current.val)
       }
       // Level has been finished. Push into output array
       levels.push(currLevel)
   }
    return levels
}















//previous solution

var levelOrder1 = function(root) {
    let result = []

     function lot(root, l){
         if(!root) return 

         if (result[l]){
             result[l].push(root.val)
         } else {
             result[l] = [root.val]
         }

         lot(root.left, l+1)
         lot(root.right, l+1)
     }

     lot(root, 0)
    
     return result
    
};