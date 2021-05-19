// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

 

// Example 1:

// Input: 
let nums1 = [3,2,1,5,6,4]
let k1 = 2
// Output: 5
// Example 2:

// Input: 
let nums2 = [3,2,3,1,2,4,5,5,6]
let k2 = 4
// Output: 4


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//start with sorting and getting kth element. see if a way to optimize
//for some reason this approach beat 99% on both time and space?
 var findKthLargest = function(nums, k) {
     return nums.sort((a,b) => b - a)[k - 1]
};

console.log(findKthLargest(nums1, k1))

//my implementation with quick select
var findKthLargest = function(nums, k) {
    return quickSelect(nums, 0, nums.length - 1, k);

};

function quickSelect(arr, start, end, k) {
    const pivotIndex = partition(arr, start, end);
    const indexOfK = arr.length - k
    
    //I kept most of the quick select below but changed this part to be more intuitive to me
   if (indexOfK > pivotIndex) {
    return quickSelect(arr, pivotIndex + 1, end, k);
} else if (indexOfK < pivotIndex) {
    return quickSelect(arr, start, pivotIndex - 1, k);
}
return arr[pivotIndex];
};

function partition(arr, start, end) {

const pivot = arr[end];
let i = start;
let j = end - 1;

while(i <= j) {    
    //moving i and j from separate ends in order to cut down on time
    while (arr[i] < pivot) {
        i += 1;
    } 
    while (arr[j] > pivot) {
        j -= 1;
    }
    if(i <= j) {
        swap(arr, i, j);
        i += 1;
        j -= 1;
    }   
}

//after all those while loops exhausted, swap pivot with current i
swap(arr, i, end);

//after pivot swapped into prior i position you have the final index of the pivot. return it
// return the final index where the pivot value is.
return i;
}

function swap(arr, i, j) {
[arr[i], arr[j]] = [arr[j], arr[i]];
}





//solution using quick select
const findKthLargest = (nums, k) => {
    return quickSelect(nums, 0, nums.length - 1, k);
};

const quickSelect = (nums, lo, hi, k) => {
    // use quick sort's idea
    // put nums that are <= pivot to the left
    // put nums that are  > pivot to the right
    for (var i = lo, j = lo; j < hi; j++) {
        if (nums[j] <= nums[hi]) {
            swap(nums, i++, j);
        }
    }
    swap(nums, i, j);
    
    // count the nums that are >= pivot
    const m = hi - i + 1;
    // pivot is the one!
    if (m === k) return nums[i];
    // pivot is too small, so it must be on the right
    if (m > k) return quickSelect(nums, i + 1, hi, k);
    // pivot is too big, so it must be on the left
    return quickSelect(nums, lo, i - 1, k - m);
};
// Note: this is using Lomuto's partition scheme, to make the quick sort faster, usually we can randomly pick a pivot point like so:

// const quickSelect = (nums, lo, hi, k) => {
//   const p = Math.floor(Math.random() * (hi - lo + 1)) + lo;
//   swap(nums, p, hi);
//   ...
// }


//Another solution using quick sort
// * @param {number[]} nums
// * @param {number} k
// * @return {number}
// */

var findKthLargest = function(nums, k) {
   return quickSelect(nums, 0, nums.length - 1, k);
};

function quickSelect(arr, start, end, k) {
   const pivotIndex = partition(arr, start, end);
   /**
    * Use pivotIndex as the seperater. If k is smaller than the length of the 
    * right side of the array, the target is in the right side of the array. 
    * If k is larger, the target is in the left side of the array. 
    */
   if (k < arr.length - pivotIndex) {
       return quickSelect(arr, pivotIndex + 1, end, k);
   } else if (k > arr.length - pivotIndex) {
       return quickSelect(arr, start, pivotIndex - 1, k);
   }
   // pivotIndex is the index of the target if k equals to the length of the 
   // right side of the array.
   return arr[pivotIndex];
};

function partition(arr, start, end) {
   /**
    * Use the last element as pivot for simplicity. Randomized pivot 
    * is a better way to avoid worst case where the the largest or the smallest 
    * element is always selected.
    */
   const pivot = arr[end];
   let i = start;
   let j = end - 1;
   // move all numbers smaller than pivot to the left and larger to the right
   while(i <= j) {    
       while (arr[i] < pivot) {
           i += 1;
       } 
       while (arr[j] > pivot) {
           j -= 1;
       }
       if(i <= j) {
           swap(arr, i, j);
           i += 1;
           j -= 1;
       }   
   }
   // Swap pivot value to the position so that all numbers larger than pivot value 
   // is on the right, and smaller on the left.
   swap(arr, i, end);
   // return the final index where the pivot value is.
   return i;
}

function swap(arr, i, j) {
   [arr[i], arr[j]] = [arr[j], arr[i]];
}


//heap version 

var findKthLargest = function(nums, k) {
    
    // ============ Min Heap Class
    class MinHeap {
        
        constructor(capacity) {
            this.capacity = capacity;
            this.value = [];
        }
        
        add(val) {
            this.value.push(val);
            this.bubbleUp(this.value.length-1);
            if(this.value.length > this.capacity) this.remove();
        }
        
        remove() {
            this.swap(0, this.value.length-1);
            const min = this.value.pop();
            this.trickleDown(0);
            return min;
        }
        
        bubbleUp(idx) {
            const parent = Math.floor((idx-1)/2);
            let max = idx;
            
            if(parent >= 0 && this.value[parent] > this.value[max]) max = parent;
            
            if(max !== idx) {
                this.swap(max, idx);
                this.bubbleUp(max);
            }
        }
        
        trickleDown(idx) {
            const leftChild = 2 * idx + 1;
            const rightChild = 2 * idx + 2;
            let min = idx;
            
            if(leftChild < this.value.length && this.value[leftChild] < this.value[min]) min = leftChild;
            if(rightChild < this.value.length && this.value[rightChild] < this.value[min]) min = rightChild;
            
            if(min !== idx) {
                this.swap(min, idx);
                this.trickleDown(min);
            }
        }
        
        swap(i, j) {
            [this.value[i], this.value[j]] = [this.value[j], this.value[i]];
        }
    }
    // ==============
    
    const minHeap = new MinHeap(k);
    
    for(let n of nums) minHeap.add(n);
    
    return minHeap.remove();
};