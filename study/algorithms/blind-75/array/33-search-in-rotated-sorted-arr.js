// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1

//solution from leetcode to walk through
'https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/273622/Javascript-Simple-O(log-N)-Binary-Search-Solution'

//EXPLANATION TO GO WITH LEETCODE SOLUTION:

/*
Let's take some examples and see how we can simplify the condition.

Original sorted array
[1, 2, 3, 4, 5, 6, 7]

After rotation, it might be something like
[3, 4, 5, 6, 7, 1, 2]
[6, 7, 1, 2, 3, 4, 5]
[1, 2, 3, 4, 5, 6, 7] <-- rotated and end up the same
and etc..

When you divide the rotated array into two halves, using mid index, at least one of subarray should remain sorted ALWAYS.

[3, 4, 5, 6, 7, 1, 2]
-> [3, 4, 5] [ 6, 7, 1, 2]
the left side remains sorted

[6, 7, 1, 2, 3, 4, 5]
-> [6, 7, 1] [2, 3, 4, 5]
the right side remains sorted

[1, 2, 3, 4, 5, 6, 7]
-> [1, 2, 3] [4, 5, 6, 7]
Both sides remain sorted.

If you know one side is sorted, the rest of logic becomes very simple.
If one side is sorted, check if the target is in the boundary, otherwise it's on the other side.

IF smallest <= target <= biggest
  then target is here
ELSE
  then target is on the other side
*/

//same function as below, just no console.logs
var search2 = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      
      if (nums[mid] === target) {
        return mid;
      }
      
      // When dividing the roated array into two halves, one must be sorted.
      
      // Check if the left side is sorted
      //if nums left is less than or equal to mid, that means left side is sorted
      if (nums[left] <= nums[mid]) {
        //then, within sorted left side, if nums[left] is less than or equal to target and
        //target is less than or equal to nums[mid], that means target is within the range of the left side
        if (nums[left] <= target && target <= nums[mid]) {
          // target is in the left
          right = mid - 1;
          
        } else {
          //else, left side is sorted and target is not within that sorted range (so it must be on the other side)
          // target is in the right
          left = mid + 1;
        }
      } 
      
      // Otherwise, the right side is sorted
      else {
          //and within the sorted right side, if the mid value is less than or equal to target, and
          //the target is less than or equal to the right value
        if (nums[mid] <= target && target <= nums[right]) {
          // that means the target falls within the sorted right range
          // target is in the right
          //so we want to make left equal to mid + 1
          left = mid + 1;
  
        } else {
            //otherwise, right side is sorted, and target doesn't fall within range, so it's on the left side
          // target is in the left
          right = mid - 1;
        }
      }
      
      
    }
      
    return -1;
  };

//same function as above, just with console.logs
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    //count is my own variable added for console logging purposes
    let count = 0
    console.log('nums:', nums)
    console.log('target:', target)
    while (left <= right) {
        count++
        console.log("loop number:", count)
        console.log('left:', left)
        console.log('right:', right)
      let mid = Math.floor((left + right) / 2);
        console.log('mid:', mid)
      
      if (nums[mid] === target) {
        return mid;
      }
      
      // When dividing the roated array into two halves, one must be sorted.
      
      // Check if the left side is sorted
      if (nums[left] <= nums[mid]) {
          console.log('nums[left]:', nums[left], '<=', 'nums[mid]:', nums[mid])
        if (nums[left] <= target && target <= nums[mid]) {
          // target is in the left
          right = mid - 1;
          
        } else {
          // target is in the right
          left = mid + 1;
        }
      } 
      
      // Otherwise, the right side is sorted
      else {
        if (nums[mid] <= target && target <= nums[right]) {
          // target is in the right
          left = mid + 1;
  
        } else {
          // target is in the left
          right = mid - 1;
        }
      }
      
      
    }
      
    return -1;
  };

  let nums = [4,5,6,7,0,1,2], target = 2

  console.log(search(nums, target))



  //my implementation of the above which I got working:

  var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1

    
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        
        if (nums[mid] === target) return mid
        
        //left side is sorted
        if (nums[left] <= nums[mid]){
            //target is in the left side
            if(nums[left] <= target && target <= nums[mid]){
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if(nums[mid] <= target && target <= nums[right]){
                left = mid + 1 
            } else {
                right = mid - 1
            }
        }
         
    }
  
    return -1
    
};