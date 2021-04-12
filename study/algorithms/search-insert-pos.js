// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
//If not, return the index where it would be if it were inserted in order.

'https://leetcode.com/problems/search-insert-position/'

// Example 1:

// Input: 
let nums1 = [1,3,5,6]
let target1 = 5
// Output: 2
// Example 2:

// Input: 
let nums2 = [1,3,5,6]
let target2 = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Example 4:

// Input: nums = [1,3,5,6], target = 0
// Output: 0
// Example 5:

// Input: nums = [1], target = 0
// Output: 0

// My solution - works
var searchInsert = function(nums, target) {
if (nums.includes(target)){
    return nums.indexOf(target)
} else if (!nums.find(x => x < target)) {
    return 0
} else if (!nums.find(x => x > target)) {
    return nums.length
} else {
    return nums.indexOf(nums.find(n => n > target))
}
   
};


// more concise:

const searchInsert2 = function(nums, target) {
 
    let i = 0;
    while(nums[i] < target) i++;
    
    return i;
}


//binary search also stated as option by many in discussion 

//binary search implementation
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while(start<=end) {
        const mid = Math.floor((start + end)/2);
        if(nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid -1;
        }   
    }
    return start;
};


console.log(searchInsert(nums2, target2))


  // for (let i = nums.find(n => nums[x] < target); i < nums.length; i++){
        
    //     console.log(`${nums[i]} and ${nums[i+1]}`)
    // }

    //here is where loop through to find index

     //indexOf val else find place where i is less than and i + 1 is greater than