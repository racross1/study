//leetcode:
'https://leetcode.com/problems/two-sum/'

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
//my own solution after watching youtube explanation followed by discussion solutions:
var twoSum = function(nums, target) {
    let prevVals = {}
    
    for (let i = 0; i < nums.length; i++){
        let currentNum = nums[i]
        let needed = target - currentNum
        let neededIdx = prevVals[needed]
        
        if (neededIdx != null) {
            return [neededIdx, i]
        } else {
            prevVals[currentNum] = i
        }
    }
    
};

// explanation:
// this is brilliant.. to anyone whos trying to understand this in plain english and basic math:

// we are looking for the two numbers that satisfy the condition (x + y = target)

// he iterates through the array knowing that for each number, there is only one complementary number that could possibly satisfy the return condition (x + y = target). 
//if we do some quick math and rearrange this equation, this means that target - y = x. 
//we already know target, and each time we iterate we get a value of y. 
//therefore every time we iterate we calculate what the complementary x must be for that given y, 
//so we save the value of complementary x as the key and we save the index of y. 
//as we pass through the loop, we simultaneously build up a database of the potential x values that will give us our answer.

// therefore, if the current number is a key in the database, we return the value of the y index we stored earlier, along with the current index, and we have our answer..

// tldr: he's a badass

var twoSum1 = function(nums, target) {
    const comp = {};
    for(let i=0; i<nums.length; i++){
   
        
        if(comp[nums[i]]>=0){
            return [comp[nums[i]] , i]
        }
        
        comp[target-nums[i]] = i
    }
    
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum2 = function(nums, target) {
	let hash = {};
	
	for(let i = 0; i < nums.length; i++) {
		const n = nums[i];
		if(hash[target - n] !== undefined) {
			return [hash[target - n], i];
		}
		hash[n] = i;
	}
	return [];
}

const twoSum3 = (nums, target) => {
    const map = {};
  
    for (let i = 0; i < nums.length; i++) {
      const another = target - nums[i];
  
      if (another in map) {
        return [map[another], i];
      }
  
      map[nums[i]] = i;
    }
  
    return null;
  };


// Input: 
nums1 = [2,7,11,15]
target1 = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: 
nums2 = [3,2,4]
target2 = 6
// Output: [1,2]
// Example 3:

// Input: 
nums3 = [3,3]
target3 = 6
// Output: [0,1]

nums4 = [3,2,3]
target4 = 6

console.log(twoSum(nums1,target1))


// Two-pass Hash Table

// eg. nums = [3,5,9,12,15], target = 21

const hashTable = {
	3: 0,
	5: 1,
	9: 2,
	12: 3,
	15: 4
}

// 1. Create a hashTable
// 2. Iterate nums
// 	2.1 Find the complement of nums[i] in the hashTable by checking the key of the hashTable object. In this way, the iteration time will be significantly reduced. If found, return [i, found]
// 3. If not found, return [0,0]
'https://leetcode.com/explore/interview/card/amazon/76/array-and-strings/508/discuss/231428/Javascript-the-3-sample-solutions-with-notes'

var twoSum4 = function(nums, target) {
    if (nums.length === 2) return [0, 1];
    const len = nums.length;
    let hashTable = {};
	for(let i = 0; i < len; i++){
		// Add a new obj to the hashTable where key = nums[i] and value = i
		hashTable[nums[i]] = i;
	}
	
    for(let i = 0; i < len; i++) {
        let complement = target - nums[i];
        let found = hashTable[complement]; // Determine whether the complement exist in the hashTable
        if(found !== undefined && found != i) return [i, found];
	}
	return [0,0];
}