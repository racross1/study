//from this video
'https://www.youtube.com/watch?v=6JeuJRqKJrI'

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
        this.count = 0
    }

    size(){
        return this.count
    }

    insert(){
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
                if(!node.left){
                    node.left = newNode
                } else {
                    searchTree(node.left)
                }
                //if there is a left node, we call search tree / look left again


            } else if (val > node.val){
                if(!node.right){
                    node.right = newNode
                } else {
                    searchTree(node.right)
                }

            }

            //if val > node.val go right

        }
    

    }

    min(){

    }

    max(){

    }

    //dfs
    //inorder
    //preorder
    //postorder

}