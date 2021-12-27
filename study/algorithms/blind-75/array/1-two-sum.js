// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]



var twoSum = function(nums, target) {
    //loop through arr to create hash where key = target - current value and val = index. 
    //if current value is not undefined in hash, return current index and value of the result

    let hash = {}

    for (let i = 0; i < nums.length; i++){
        if (hash[nums[i]] !== undefined){
            return [hash[nums[i]], i]
        } else {
            hash[target - nums[i]] = i
        }
    }

}


let nums = [2,7,11,15], target = 9
console.log(twoSum(nums, target))