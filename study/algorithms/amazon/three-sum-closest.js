// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. 
// Return the sum of the three integers. You may assume that each input would have exactly one solution.

 

// Example 1:

// Input: 
let nums1 = [-1,2,1,-4] 
let target1 = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

//track closest sum. use i, j k pointers


//new set so no dupes 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//mine with help accepted. Another with a similar idea + different implementation below
 var threeSumClosest = function(nums, target) {
     //map of target - each num
     //

     nums = nums.sort((a,b) => a-b)
     let closest = Infinity 
     

     for (let i = 0; i < nums.length - 2; i++){
         let j = i + 1
         let k = nums.length - 1
         while (j < k){
             let sum = nums[i] + nums[j] + nums[k]

             if (Math.abs(sum - target) < Math.abs(closest - target)) closest = sum
             if (sum > target) k--
             else j++
         }
     }
     return closest
}
    

console.log(threeSumClosest(nums1, target1))




// time: O(N^2); space: O(1)
var threeSumClosest = function(nums, target) {
    let len = nums.length
        
    nums.sort((a, b) => a - b)
    
    let result = nums[0] + nums[1] + nums[2]

    for(let i = 0; i< len - 2 ; i++) {
        let j = i + 1
        let k = len - 1
        
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            let dif = sum - target
            if (Math.abs(sum - target) < Math.abs(result - target)){
                result = sum
            }
            if (dif < 0) {
                j++
            } else if (dif > 0) {
                k--
            } else if (!dif) {
                return target
            }   
        }
    }
    
    return result
};
