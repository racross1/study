// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

//Mine - works here and in repl.it, but NOT in leetcode. Why???
// var moveZeroes = function(nums) {
//     let newNums = nums.filter(n => n !== 0)
//     let numZeroes = nums.length - newNums.length 
//     for (let i = 0; i < numZeroes; i++){
//         newNums.push(0)
//     }

//     return newNums
// };


//from solutions

var moveZeroes = function(nums) {
    const len = nums.length;
    let i;
    for (i = 0; i < len; i++) {
        if (nums[i] === 0) {
            nums.push(nums.splice(i, 1));
            i = i - 1;
        }
    }
    
};

    
// Example 1:

// Input: 
nums1 = [0,1,0,3,12]
// Output: [1,3,12,0,0]


// Example 2:

// Input: 
nums2 = [0]
// Output: [0]

nums3 = [0,0,1]
//Expected: [1,0,0]



console.log(moveZeroes(nums1))