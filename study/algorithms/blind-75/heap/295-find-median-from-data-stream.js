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


/**
 * initialize your data structure here.
 */
 var MedianFinder = function() {
    this.median = 0; // keep track of median with every addition
    this.upper = new MinHeap(); // to store larger half of the numbers
    this.lower = new MaxHeap(); // to store smaller half of the numbers
  };
  
  /** 
   * @param {number} num
   * @return {void}
   */
  MedianFinder.prototype.addNum = function(num) {
    //if minheap is shorter than maxheap
    //and we can assume they will only differ by 1 since we are keeping balanced, 
    //so adding a num will make them equal in size, which is why when we calc the median below it's sum of both roots / 2
    if (this.upper.size < this.lower.size) {
        //then if num passed in is greater than or equal to median
      
        if (num >= this.median) {
            //add num to minheap
            this.upper.add(num);
            ///else (i.e. num is less than median)
        } else {
            //extract a num from max heap and add it to min heap
            //then add num to maxHeap
        this.upper.add(this.lower.extract());
        this.lower.add(num);
        }
        this.median = (this.lower.peek() + this.upper.peek()) / 2;
    //else if maxheap is smaller than minheap
    } else if (this.lower.size < this.upper.size) {
        //of num is greater than or equal to the median
        if (num >= this.median) {
            //take a node off of min heap and add it to max heap
            this.lower.add(this.upper.extract());
            //add num to min heap
            this.upper.add(num);
      } else {
          //otherwise (i.e. num is less than median)
          //add to max heap
          this.lower.add(num);
      }
      this.median = (this.lower.peek() + this.upper.peek()) / 2;
      //else if heaps are the same size
    } else {
        //if num is greater than or equal to the median
        if (num >= this.median) {
            //add num to minheap
            this.upper.add(num);
            //median will be root of minheap
            this.median = this.upper.peek();
        //else (i.e. num is less than median)
        } else {
        //add num to maxHeap (lower)
        this.lower.add(num);
        //median is root of maxHeap
        this.median = this.lower.peek();
      }
    }
  };
  //min heap is greater half of the nums because we want min and max roots to be next to each other
  //so with [1, 2, 3, 4, 5, 6] root of min heap would be 4 and bottom-most node would be 6, root of max heap would be 3, bottom-most would be 1

  /**
   * @return {number}
   */
  MedianFinder.prototype.findMedian = function() {
    //if there's no vals in either heap, return null
    if (this.upper.size === 0 && this.lower.size === 0) {
      return null;
    }
    //if maxHeap is larger than minHeap, median = root of maxheap
    if (this.lower.size > this.upper.size) {
      return this.lower.peek();
    }
    //if minheap is larger than maxheap, median = root of minheap  
    if (this.upper.size > this.lower.size) {
      return this.upper.peek();
    }
    //otherwise (they exist and they're equal in size)
    //median is root + root / 2
    return (this.lower.peek() + this.upper.peek()) / 2;
  };
  
  
  /** 
   * Your MedianFinder object will be instantiated and called as such:
   * var obj = new MedianFinder()
   * obj.addNum(num)
   * var param_2 = obj.findMedian()
   */
  
  class Heap {
    //overall heap class with size and heap (vals) properties 
    constructor() {
      this.size = 0;
      this.heap = [];
    }
    /**
     * Swap two given nodes
     */
    //helper function to swap using destructuring
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    /**
     * Find parent index
     */

    //helper functions to find parent index and left and right children (uses 0 index array)
    parent(i) {
      return Math.floor((i - 1) / 2);
    }
    /**
     * Find left child index
     */
    left(i) {
      return 2 * i + 1;
    }
    /**
     * Find right child index
     */
    right(i) {
      return 2 * i + 2;
    }
  }
  
  class MinHeap extends Heap {
    /**
     * Insert new node with given value into the Min Heap. The node bubbles up
     * until it is at the correct position.
     */
    add(v) {
        //push node onto heap
        this.heap.push(v);
        //get heap size (seems like you could just increment size property here and save and O(n) operation)
        this.size = this.heap.length;
          
        //let index = last item in heap
        let index = this.heap.length - 1;
        //while index is > 0 (is not root) && this heap[index] is less than its parent (parent helper is really handy here)
        while (index > 0 && this.heap[index] < this.heap[this.parent(index)]) {
            //swap current index with its parent
            this.swap(index, this.parent(index));
            //we are bubbling up the added node, so we want to keep tabs on it
            //so index being examined becomes parent
            index = this.parent(index);
      }
    }
    /**
     * Look up the top of the heap.
     */
    peek() {
        //self explanatory, look at top of heap and if it's not there return null
        return this.heap[0] || null;
    }
    /**
     * Find the correct position for the node with given index.
     */
    //this one I don't immediately recognize
    //I think it might be the same as bubble down
    //given the smallest index i (so this is index 0 after index.pop() is made index 0 and needs to be bubbled down)
    heapify(i) {
        //get left and right children (these helpers return their indexes)
        const left = this.left(i);
        const right = this.right(i);
        //smallest index = i (so 0 to start)
        let smallestIndex = i;
      
        //if left index is less than size (i.e. it exists)
        //and left child val is less than val at current smalles index (on first pass this will be val at 0)
        //smallest Index = left
        if (left < this.size && this.heap[left] < this.heap[smallestIndex]) {
            smallestIndex = left;
        }
        //if right child is less than size (exists)
        //and right child is less than val at smallest index 
        //(note this isn't an else if, so this may have been reassigned above to prior left child)
        //basically we're just getting the smaller of the left and right children
        if (right < this.size && this.heap[right] < this.heap[smallestIndex]) {
            smallestIndex = right;
        }
        //if smallest index is not i (i.e the index we were passed at this start)
        //so basically if i was reassigned to either the left or right children
        if (smallestIndex !== i) {
            //swap i and the smaller of its left and right children
            this.swap(i, smallestIndex);
            //continue to bubble down the node originally passed 
            //(it is now at 'smallestIndex') because node at i was swapped with node at smallestIndex
            this.heapify(smallestIndex);
        }
    }
    /**
     * Remove the top of the heap.
     */
    extract() {
        //first get min (root)
        const min = this.heap[0];
      
      //if there is more than 1 node in the heap, we need to put the last one at the root and bubble it down (heapify)
      if (this.size > 1) {
        //set root to popped node (last one)
        this.heap[0] = this.heap.pop();
        //heapify / bubble down the newly placed last node
        this.heapify(0);
      } else {
        //if heap size is 1 (or 0), just pop off the only node there (the min)
        this.heap.pop();
      }
      
      //recalculate size
      this.size = this.heap.length;
  
      //return the newly extracted min
      return min;
    }
  }
  
  class MaxHeap extends Heap {
    add(v) {
      this.heap.push(v);
      this.size = this.heap.length;
      
      let index = this.heap.length - 1;
      while (index > 0 && this.heap[index] > this.heap[this.parent(index)]) {
        this.swap(index, this.parent(index));
        index = this.parent(index);
      }
    }
    
    peek() {
      return this.heap[0] || null;
    }
    
    heapify(i) {
      const left = this.left(i);
      const right = this.right(i);
      let largestIndex = i;
      
      if (left < this.size && this.heap[left] > this.heap[largestIndex]) {
        largestIndex = left;
      }
      if (right < this.size && this.heap[right] > this.heap[largestIndex]) {
        largestIndex = right;
      }
      if (largestIndex !== i) {
        this.swap(i, largestIndex);
        this.heapify(largestIndex);
      }
    }
    
    extract() {
      const max = this.heap[0];
      
      if (this.size > 1) {
        this.heap[0] = this.heap.pop(); 
        this.heapify(0);
      } else {
        this.heap.pop();
      }
      this.size = this.heap.length;
  
      return max;
    }
  }