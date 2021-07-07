//from this video
'https://www.youtube.com/watch?v=6JeuJRqKJrI'

//repl with code:
'https://replit.com/@beiatrix/NoisyAridWamp'

class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(val){
        this.root = new Node(val)
        //this will just keep track of how many nodes are in the tree
        this.count = 1
    }

    size(){
        return this.count
    }

    insert(val){
        //increments the count and creates a new node
        this.count++

        let newNode = new Node(val)
        //when inserting a node, we first want to check if it's greater than the root node
        //if it's less we'll go left and if it's greater we'll go right
        //and we want to do this for every node
        //to do this, we will use a recursive function which calls itself when it sees another node
        //and we want to see whether the value we're passing in to our insert
        //function is greater than or less than they node we're looking at
        const searchTree = node => {
            //if val < node.val go left
            //if we are on a node and we look left and there is no node there
            //we can just append the node at that position
            //if there is a node at that position, we want to look left again
            //to see if there's an open space
            if(val < node.val){
                //if no left child, append new node there
                if(node.left == null){
                    node.left = newNode
                } else {
                    searchTree(node.left)
                }
                //if there is a left node, we call search tree / look left again


            } else if (val > node.val){
                if(node.right == null){
                    node.right = newNode
                
                //if right child, look right again
                } else {
                    searchTree(node.right)
                }

            }

        }
        
         //if val > node.val go right
         searchTree(this.root)
    
    }

    //to get min, go left and left and left and left until we get to the left-most leaf
    //so basically we are just traversing the left side of the tree
    min(){
        let currentNode = this.root 

        //while there exists a left child node, let's look left
        while(currentNode.left){
            currentNode = currentNode.left
        }

        //once we get to the leftmost node and we break out of the while loop
        //then we can just return the current node value

        return currentNode.val

    }

    //max method has exact same logic as min, except going right
    max(){
        let currentNode = this.root

        while(currentNode.right){
            currentNode = currentNode.right
        }

        return currentNode.val

    }

    //takes a value and sees whether it exists in the tree
    contains(val){
        let currentNode = this.root
        
        while(currentNode){
            //if we find it, return true
            if (val === currentNode.val){
                return true
            }

            //if the value is less than current, go left
            //else go right
            if (val < currentNode.val){
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        }

        //if we never find the value after we get to the end of our tree
        //just return false
        return false

    }

    //dfs

    //inorder
    dfsInOrder(){
        let result = []

        const traverse = node => {
            //if left child exists, go left again
            if (node.left) traverse(node.left)

            //capture root node val
            result.push(node.val)

            //if right child exists, go right again

            if (node.right) traverse(node.right)

        }

        return result

    }

    //preorder
    dfsPreOrder(){
        let result = []

        const traverse = node => {
            
            //capture root node val
            result.push(node.val)

            //if left child exists, go left again
            if (node.left) traverse(node.left)

            //if right child exists, go right again
            if (node.right) traverse(node.right)

        }
        return result
    }

    //postorder
    dfsPostOrder(){
        let result = []

        const traverse = node => {

            //if left child exists, go left again
            if (node.left) traverse(node.left)

            //if right child exists, go right again
            if (node.right) traverse(node.right)

            //capture root node val
            result.push(node.val)

        }
        return result
    }



    //bfs

    //dfs is searching branch by branch
    //bfs is searching level by level

    //for bfs we will be using a queue
    //expect to return all values by level
    bfs(){
        let result = []
        let queue = []

        queue.push(this.root)

        while(queue.length){
            let currentNode = queue.shift()

            result.push(currentNode)

            //if the current node has left children, we want to
            //push that left child node into the queue
            //then if the current node has a right child, we'll push that into the queue 
            
            if (currentNode.left){
                queue.push(currentNode.left)
            }

            if (currentNode.right){
                queue.push(currentNode.right)
            }
        }

        return result
    }

}


const bst = new BST(15)

bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)

console.log(bst)

