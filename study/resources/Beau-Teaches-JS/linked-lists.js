// instructions, including code:
'https://www.youtube.com/watch?v=9YddVVsdG5A'

function LinkedList(){
    //start with these because we don't have a head or any nodes yet
    let length = 0
    let head = null

    //linked list made of nodes, so this is how we will make a node
    //pass in an element
    //this.element set to element
    //this.next set to null
    //element is the element, next is the link
    let Node = function (element){
        this.element = element
        this.next = null
    }

    //simple fn just returns the size
    this.size = function(){
        return length
    }

    //' ' just returns the head
    this.head = function() {
        return head
    }

    //function to add a node
    //create new Node 
    //pass in element. element is set to element and next is set to null
    // if head === null that means there are no nodes in the list yet
    // so we just set the head = to the node
    this.add = function(element){
        let node = new Node(element)
        if(head === null){
            head = node
    // else we set the currentNode = to the head. that just means we're going to start at the head node
    // which you always have to do if you're doing anything to a linked list
        } else {
            let currentNode = head
    //while currentNode.next (while not equal to null)
    //the link = currentNode.next. the link of the last node = null
    //so before the end of the list, the currentNode.next does not = null
    //just means that while there is a next node, currentNote = currentNode.next. just a way to hop from node to node
   
            while(currentNode.next){
                currentNode = currentNode.next
            }
    //once there is no currentNode.next we're at the end of the list
    //the end of the list is where we want to add the new node
    //so we set the currentNode.next = node
            currentNode.next = node
        }
    //and we just increment the length after we've added that node on to the end
        length++
    }

    //the remove method
    //takes element and searches the linked list to find and remove the element
    //so you're passing in the element that you want to remove
    //and we always start at the head
    //and we also need to know the previous node when we're removing something

    this.remove = function(element){
        let currentNode = head
        let previousNode

    //if current node.element = element, that just means the head node is the element we're trying to remove
    //we have to set the head to currentNode.next so that it's pointing to the next element
        if(currentNode.element === element){
            head = currentNode.next
    //if the head node is not the element we're looking for, we go to the else
        } else {
    //while the node we're on does not equal the node we're looking for
    //previousNode is gonna equal the current node
    //and the currentNode is gonna equal currentNode.next
    //which just means we're going to keep going through this while loop/ keep jumping to the next node
    //until we find the node we're looking for.
            while(currentNode.element !== element) {
                previousNode = currentNode
                currentNode = currentNode.next
            }

    //now previousNode will skip over node being removed to point to the node that was the next node of the node we're now removing
            previousNode.next = currentNode.next
        }
    //and then we just decrement the length
        length--
    }

    this.isEmpty = function(){
        return length === 0
    }

    //to get the index of a specific element
    //go from node to node until we find the element we're looking for

    this.indexOf = function(element) {
    //start at the head
        let currentNode = head 
        let index = -1

    //while there is a current node (not null)
        while(currentNode){
    //we increment the index. so if we start at the beginning, the idx is now 0 
            index++
    //so if currentNode.element = element, return index (so if it's the furst element)
            if(currentNode.element === element){
                return index
            }

    //if not, we're going to continue doing this while loop and just hop from node to node
            currentNode = currentNode.next
        }
    //if we go through the whole while loop and don't find anything, we return -1, which just means the element is not in the list
        return -1
    }


    //now find element at index. pass in index
    this.elementAt = function(index) {
        let currentNode = head 
        let count = 0 
    //while we haven't yet gotten to the index
    //go through while loop til count = index and then return element
        while (count < index){
            count++
            currentNode = currentNode.next
        }

        return currentNode.element
    }

    //can add in middle of list.

    this.addAt = function(index, element){
        let node = new Node(element)
        
        let currentNode = head 
        let previousNode
        let currentIndex = 0

    //so if index is greater than length, that means we're passing an index that's bigger than the linked list
    //so we can't add at that index
        if(index > length){
            return false
        }

    //if index === 0, that means we're trying to add to the head node

        if(index === 0){
    //so the next node will be the currentNode which is the current head
    //and we set the head equal to the node we passed in
            node.next = currentNode 
            head = node 
    //else while current index is less than index we'll go through til we find the correct index
    //keep going through while loop til find the correct.
        } else {
            while(currentIndex < index){
                currentNode++
                previousNode = currentNode 
                currentNode = currentNode.next
            }
    //once we get to that index, we set node.next = to currentNode
    //we set previous node.next = to the node we passed in
    // then we just increment the length
            node.next = currentNode 
            previousNode.next = node
        }
        length++
    }

    //similar to addAt. a lot of similar lines
    //except we're not going to create a new node

    this.removeAt = function(index){
        let currentNode = head
        let previousNode 
        let currentIndex = 0 

    //if index is less thatn 0 or index is >= length 
    //return null (so we cannot remove a negative idx or an idx greater than the length of the list)
        if(index < 0 || index >= length){
            return null
        }
    //if idx is 0 it's the head node
    //so we just set the head node to the currentNode.next. so head pointer will be on next element
        if(index === 0) {
            head = currentNode.next 
    //this part just like addAt. just keep going through each element on the list

        } else {
            while(currentIndex < index){
                currentIndex++
                previousNode = currentNode
                currentNode = currentNode.next 
            }

    //take out node
            previousNode.next = currentNode.next
        }
    //decrement length and then return the node that we're removing
        length--
        return currentNode.element
    }
}

var conga = new LinkedList()
conga.add('Kitten')
conga.add('Puppy')
conga.add('Dog')
conga.add('Cat')
conga.add('Fish')
console.log(conga.size())
console.log(conga.elementAt(3))
console.log(conga.indexOf("Puppy"))
console.log(conga.size())