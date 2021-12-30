// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//  set vs object: https://leetcode.com/problems/contains-duplicate/discuss/515531/Javascript-set-vs.-object

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

//input: array
//output: bool

// size of set == size of array
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length
};
