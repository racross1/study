// class LinkedListNode {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// let head = new LinkedListNode("head");

// let x = [1, 1, 1, 1, 4, 10, 10, 3, 10, 9, 5, 5, 5, 8];

// for (let ele of x) {
//     let y = new LinkedListNode(ele);
//     let pointer = head;
//     while (pointer.next != null) {
//         pointer = pointer.next;
//     }
//     pointer.next = y;
// }

// function removeDup(currentNode = sll) {
// 	const seen = {};
// 	let lastUnique;
// 	while (currentNode) {
// 		if (seen[currentNode.value]) {
// 			lastUnique.next = currentNode.next;
// 		} else {
// 			seen[currentNode.value] = true;
// 			lastUnique = currentNode;
// 		}
// 		currentNode = currentNode.next;
// 	}
// }

// removeDup(head);

// let outputNode = head;
// while (outputNode) {
// 	outputNode = outputNode.next;
// 	if (outputNode) {
// 		console.log(outputNode.value);
// 	}
// }

'https://javascript.plainenglish.io/removing-duplicates-from-a-sorted-linked-list-c9e0e62d2c96'
'https://medium.com/basecs/whats-a-linked-list-anyway-part-1-d8b7e6508b9d'

var deleteDuplicates = function(head) {
    // sets current node to be head of list
    let current = head
    // runs until we are at the end of the list
    while (current !== null && current.next !== null) { 
        // checks to see if the current value and the next value are the same
        if (current.val === current.next.val){  
            // skips over the duplicate and the next value becomes 2x next
            current.next = current.next.next            
            // current value and the next value are not the same
        } else {  
            // moves to the next node on the list to run through the while again
            current = current.next 
        }
    
    }
    // returns the linked list with no duplicates
    return head  
};