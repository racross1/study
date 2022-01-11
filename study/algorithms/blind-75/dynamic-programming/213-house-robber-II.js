// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
// Example 2:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 3:

// Input: nums = [1,2,3]
// Output: 3
 

//  HOUSE ROBBER I:


// var rob = function(nums) {
//     if (!nums.length) return 0;
//     if (nums.length === 1) return nums[0];
//     if (nums.length === 2) return Math.max(nums[0], nums[1]);
    
//     let maxAtTwoBefore = nums[0];
//     let maxAtOneBefore = Math.max(nums[0], nums[1]);
    
//     for (let i = 2; i < nums.length; i++) {
//         const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);
        
//         maxAtTwoBefore = maxAtOneBefore;
//         maxAtOneBefore = maxAtCurrent;
//     }
    
//     return maxAtOneBefore;
// };

// HOUSE ROBBER II:

/*
What is different from 1 to 2?

Can't use both first and last

if max includes nums[0] cannot include nums[nums.length - 1]

flag to denote?

for first comparison, make it 1 before and 2 before + last

*/


//this one works but is slow
//use houserobber 1 solution as helper and return max of houserob 1 for nums excluding first house, and nums excluding last
function rob(nums){
    if (nums.length == 0) return 0
    if (nums.length == 1) return nums[0]
    if (nums.length == 2) return Math.max(nums[0], nums[1])
    
    let arr1 = nums.slice(1)
    let arr2 = nums.slice(0, nums.length-1)

    return Math.max(robHelper(arr1), robHelper(arr2))

}

function robHelper(nums){
    let maxAtOneBefore = Math.max(nums[0], nums[1])
    let maxAtTwoBefore = nums[0]

    for (let i = 2; i < nums.length; i++){
        let currentMax = Math.max(maxAtOneBefore, maxAtTwoBefore + nums[i])
        maxAtTwoBefore = maxAtOneBefore
        maxAtOneBefore = currentMax
    }

    return maxAtOneBefore
}