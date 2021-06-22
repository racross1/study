// Example 1:

// Input: 
let nums1 = [2,7,11,15] 
let target1 = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: 
let nums2 = [3,2,4]
let target2 = 6
// Output: [1,2]
// Example 3:

// Input: 
let nums3 = [3,3]
let target3 = 6
// Output: [0,1]

var twoSum = function(nums, target) {
    let hash = {}
    
    for (let i = 0; i < nums.length; i++){
        if(hash[nums[i]] !== undefined){
            return [hash[nums[i]], i]
        }else{
            hash[target - nums[i]] = i
        }
    }
    
};



console.log(twoSum(nums1, target1))
console.log(twoSum(nums2, target2))
console.log(twoSum(nums3, target3))










//prior submission