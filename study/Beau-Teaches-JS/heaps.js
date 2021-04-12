/* Heaps */

//youtube:
'https://www.youtube.com/watch?v=dM_JHpfFITs'

// 🔗 Heap visualization: 
'https://www.cs.usfca.edu/~galles/visualization/Heap.html'

// A binary heap is a partially ordered binary tree 
// which satisfies the heap property.
//The heap property indicates a specific relationship between child and parent nodes
//can have a max or min heap (max heap = parent node is max and child nodes are smaller. 
//Min heap vice versa.The order of nodes on the same level doesn't matter)


//with a heap there is no index 0


// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2
//actually this is Math.floor(i/2) because you divide by 2 and then round down to nearest whole number (so you can do left and right)
//^indexes. This explained ~2:45 in video

let MinHeap = function() {
	
	let heap = [null];
	
	this.insert = function(num) {
		heap.push(num);
		//length of 2 means just root since no value at idx 0
        if (heap.length > 2) {
        //find last index in heap
			let idx = heap.length - 1;
            //right side of this comparison is the parent equation (see above)
			//if less than its parent we're going to have to move it up
            while (heap[idx] < heap[Math.floor(idx/2)]) {
				//if we haven't reached the root nodexs
                if (idx >= 1) {
					//ES6 destructuring syntax
                    //parent node, node we just inserted [= switch them] node we just inserted will be first, and then parent node will be next << this is just a way to swap them
                    [heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
					//if the parent node is not the root node
                    if (Math.floor(idx/2) > 1) {
						//set index to parent node
                        //while loop, so we'll keep switching the node to its parent until it's not smaller
                        idx = Math.floor(idx/2);
					} else {
						break;
					};
				};
			};
		};
	};
	
	this.remove = function() {
		//we always remove the top node, the smallest node
        let smallest = heap[1];
		//if we have more than 1 node in the heaps
        if (heap.length > 2) {
			//set the first node equal to the last node 
            heap[1] = heap[heap.length - 1];
			//remove last index of the array completely since we've already moved that to the first index
            heap.splice(heap.length - 1);
			//only 2 nums in the tree
            if (heap.length == 3) {
				//just switch 'em if first is bigger than second
                if (heap[1] > heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};
			//if more than 2 nodes in heap
            let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			//keep moving it down til we get to the appropriate spot
            while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
				//if left node more than right node
                if (heap[left] < heap[right]) {
					//switch the root node with the left node (destructuring)
                    [heap[i], heap[left]] = [heap[left], heap[i]];
					//set index to left node. was at the top node but has now been swapped
                    i = 2 * i
				//else (means the right node is more than the left node)
                } else {
					//swap with the right node
                    [heap[i], heap[right]] = [heap[right], heap[i]];
					i = 2 * i + 1;
				};
				//set the new left and right node
                left = 2 * i;
				right = 2 * i + 1;
				//means we're at bottom of heap
                if (heap[left] == undefined || heap[right] == undefined) {
					break;
				};
			};
		//one element in the array so we just cut off the last element
        } else if (heap.length == 2) {
			heap.splice(1, 1);
		//else zero elements in the array to begin with
        } else {
			return null;
		};
        //element we set up at the top
		return smallest;
	};
  
    //common use case for heap data structure is heap sort
    //avg and worst case sorting of (O) n log n
    //just use all the code we already did - basically just remove nodes one at a time and putting them in arr which will be in order.
	this.sort = function() {
		let result = new Array();
		while (heap.length > 1) {
			result.push(this.remove());
		};
		return result;
	};

};

let MaxHeap = function() {
	
	let heap = [null];
	
	this.print = () => heap;

	this.insert = function(num) {
		heap.push(num);
		if (heap.length > 2) {
			let idx = heap.length - 1;
			while (heap[idx] > heap[Math.floor(idx/2)]) {
				if (idx >= 1) {
					[heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
					if (Math.floor(idx/2) > 1) {
						idx = Math.floor(idx/2);
					} else {
						break;
					};
				};
			};
		};
	};
	
	this.remove = function() {
		let smallest = heap[1];
		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			heap.splice(heap.length - 1);
			if (heap.length == 3) {
				if (heap[1] < heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
				if (heap[left] > heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = 2 * i
				} else {
					[heap[i], heap[right]] = [heap[right], heap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (heap[left] == undefined || heap[right] == undefined) {
					break;
				};
			};
		} else if (heap.length == 2) {
			heap.splice(1, 1);
		} else {
			return null;
		};
		return smallest;
	};

};

