
// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
 

// Example 1:

// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]

// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0

//my implementation
var MedianFinder = function() {
    this.maxHeap = new MaxHeap();
    this.minHeap = new MinHeap()
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.maxHeap.peek() === null || num < this.maxHeap.peek()) {
        this.maxHeap.add(num);
    } else {
        this.minHeap.add(num);
    }
    
    if(this.maxHeap.size - this.minHeap.size > 1) {
        this.minHeap.add(this.maxHeap.remove());
    } else if(this.minHeap.size - this.maxHeap.size > 1) {
        this.maxHeap.add(this.minHeap.remove());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.maxHeap.size > this.minHeap.size) {
        return this.maxHeap.peek();
    } else if(this.maxHeap.size < this.minHeap.size) {
        return this.minHeap.peek();
    } else {
        return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    }
};


class Heap{
    constructor() {
        this.values = [null]
        this.size = 0
	}

	add(val) {
		this.values.push(val)
        this.size++
		this.bubbleUp()
	}

	peek() {
		return this.values[1] || null;
	}

}

class maxHeap extends Heap{
    bubbleUp() {
        let index = this.values.length - 1;
        let parent = Math.floor(index / 2);

        while (this.values[index] > this.values[parent]) {
            [this.values[parent], this.values[index]] = [this.values[index], this.values[parent]];
            index = parent;
            parent = Math.floor(index / 2);
        }
    }

    remove() {
        let heap = this.values
        let largest = heap[1];
        if (heap.length > 2) {
            heap[1] = heap[heap.length - 1];
            heap.splice(heap.length - 1);
            if (heap.length == 3) {
                if (heap[1] < heap[2]) {
                    [heap[1], heap[2]] = [heap[2], heap[1]];
                };
                return largest;
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
        this.size--
        return largest;
    };
}

class minHeap extends Heap{
    bubbleUp() {
        let index = this.values.length - 1;
        let parent = Math.floor(index / 2);

        while (this.values[index] < this.values[parent]) {
            [this.values[parent], this.values[index]] = [this.values[index], this.values[parent]];
            index = parent;
            parent = Math.floor(index / 2);
        }
    }

    remove() {
        let heap = this.values
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
        this.size--
        return smallest;
    };
}

    //________________________________________________________________________________________________________

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */




//solution using comparator property to differentiate between min and max heap :https://leetcode.com/problems/find-median-from-data-stream/discuss/329657/JavaScript-max-heap-%2B-min-heap
//adapt and annotate the below for reps building heap
//watch heap video (back to back SWE)
var MedianFinder = function() {
    this.maxHeap = new Heap(Heap.maxComparator);
    this.minHeap = new Heap(Heap.minComparator);
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.maxHeap.peek() === null || num < this.maxHeap.peek()) {
        this.maxHeap.add(num);
    } else {
        this.minHeap.add(num);
    }
    
    if(this.maxHeap.size - this.minHeap.size > 1) {
        this.minHeap.add(this.maxHeap.poll());
    } else if(this.minHeap.size - this.maxHeap.size > 1) {
        this.maxHeap.add(this.minHeap.poll());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.maxHeap.size > this.minHeap.size) {
        return this.maxHeap.peek();
    } else if(this.maxHeap.size < this.minHeap.size) {
        return this.minHeap.peek();
    } else {
        return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    }
};

/** 
 *  custom Heap class
 */
class Heap {
	constructor(comparator) {
		this.size = 0;
		this.values = [];
		this.comparator = comparator || Heap.minComparator;
	}

	add(val) {
		this.values.push(val);
		this.size ++;
		this.bubbleUp();
	}

	peek() {
		return this.values[0] || null;
	}

	poll() {
		const max = this.values[0];
		const end = this.values.pop();
		this.size --;
		if (this.values.length) {
			this.values[0] = end;
			this.bubbleDown();
		}
		return max;
	}

	bubbleUp() {
		let index = this.values.length - 1;
		let parent = Math.floor((index - 1) / 2);

		while (this.comparator(this.values[index], this.values[parent]) < 0) {
			[this.values[parent], this.values[index]] = [this.values[index], this.values[parent]];
			index = parent;
			parent = Math.floor((index - 1) / 2);
		}
	}

	bubbleDown() {
		let index = 0, length = this.values.length;

		while (true) {
			let left = null,
				right = null,
				swap = null,
				leftIndex = index * 2 + 1,
				rightIndex = index * 2 + 2;

			if (leftIndex < length) {
				left = this.values[leftIndex];
				if (this.comparator(left, this.values[index]) < 0) swap = leftIndex;
			}

			if (rightIndex < length) {
				right = this.values[rightIndex];
				if ((swap !== null && this.comparator(right, left) < 0) || (swap === null && this.comparator(right, this.values[index]))) {
					swap = rightIndex;
				}
			}
			if (swap === null) break;

			[this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
			index = swap;
		}
	}
}

/** 
 *  Min Comparator
 */
Heap.minComparator = (a, b) => { return a - b; }

/** 
 *  Max Comparator
 */
Heap.maxComparator = (a, b) => { return b - a; }



//___________________________________________________________________

//start of my old solution

class MedianFinder {
    
    constructor(){
        //store smaller half of the numbers
        //lo
        this.maxHeap = [null]
        //store larger half of the numbers
        //hi
        this.minHeap = [null]
    }
    

/** 
 * @param {number} num
 * @return {void}
 */
    addNum(num) {
        
        //add node to maxHeap
        //balance maxHeap
        //offer highest of MaxHeap to minHeap
        this.maxHeapAdd(num)
        let max = this.maxHeapRemove()
        
       
        this.balanceMinHeap
        
        

    };
    
    maxHeapAdd(num) {
        const heap = this.maxHeap
        heap.push(num)
        //if more than just root (bc 0 index is null)
        if (heap.length > 2) {
			let idx = heap.length - 1;
			//while heap at idx is greater than its parent. for parent/ children, recall:
            // left child index: parent index * 2
            // right child index: parent index * 2 + 1
            //so Math.floor(idx/2) will always get parent whether it's left or right node
            while (heap[idx] > heap[Math.floor(idx/2)]) {
				//if index isn't root
                if (idx >= 1) {
					//swap (because in this while loop heap at index is greater than its parent)
                    [heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
					//after that if parent was not root, new index = parent (and we start the next iter of while loop)
                    if (Math.floor(idx/2) > 1) {
						idx = Math.floor(idx/2);
					//otherwise break because that means you swapped idx with parent and have our new max
                    } else {
						break;
					};
				};
			};
		};
    }
    
    maxHeapRemove(){
        
        
    }
    
    
    balanceMinHeap() {
        
        
    }

    /**
     * @return {number}
     */
   findMedian() {

    };

}
