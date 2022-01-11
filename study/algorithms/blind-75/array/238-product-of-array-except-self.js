// Given an integer array nums, return an array answer such that answer[i] 
// is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

/*
input: array
output: array
edge cases: nums = []

approach: 
    - nums multiplied by ints before and ints after
    - 2 passes of array: 
        left to right starting at index 1 (offset)
        right to left starting at index nums.length - 2 (offset)


    

*/

//my implementation from memory/ hint

var productExceptSelf = function(nums) {
    let ans = []
    let rightMult = 1
    let leftMult = 1

    for (let i = nums.length - 1; i >= 0; i--){
        ans[i] = rightMult
        rightMult *= nums[i]
    }

    for (let i = 0; i < nums.length; i++){
        ans[i] *= leftMult
        leftMult *= nums[i]
    }

    return ans

}


//explanation of left and right multiplier arrays and of optimized version above:
'https://leetcode.com/problems/product-of-array-except-self/discuss/796378/Two-JS-Solutions'
/*
We have to return an array so we will create a result array.
res[i]  = the product of elements on the left of i and elements on the right of i
        = left[i-1] * right[i+1], 
        where left[i] is the product of elements from 0 to i and right[i] is the product of elements from end of array to i
We will fill these two arrays, left[] and right[], and then iterate through result array and fill it with correct products. 
*/
var productExceptSelf = function(nums) {
  if (nums === null || nums.length <= 1) {
      return [];
  }
  let n = nums.length;
  let left = new Array(n), right = new Array(n), res = new Array(n);
  for (let i = 0; i < n; i++) {
      left[i] = i > 0 ? nums[i] * left[i-1] : nums[i];
  }
  for (let i = n-1; i >= 0; i--) {
      right[i] = i < n-1 ? nums[i] * right[i+1] : nums[i];
  }
  for (let i = 1; i < n-1; i++) {
      res[i] = left[i-1] * right[i+1];
  }
  res[0] = right[1];
  res[n-1] = left[n-2];
  return res;
  // T.C: O(N)
  // S.C: O(N), even though we assume that the output array is not counted as extra space,
  // we use two extra arrays of length n
};
/*
Add optimisation to the solution above.

Instead of using two arrays left[] and right[], we will keep track of product from left and product from right.
Hence, at each i, res[i] = productFromLeft * productFromRight. Since we can't have access to productFromLeft and
productFromRight at the same time without storing them somewhere, we will set res[i] to productFromLeft when
iterating from the start and we will multiply productFromRight to each res[i] as we iterate through from the end.
*/

var productExceptSelf = function(nums) {
  if (nums === null || nums.length <= 1) {
      return [];
  }
  let productFromLeft = 1, productFromRight = 1;
  let res = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
      res[i] = productFromLeft;
      productFromLeft *= nums[i];
  }
  for (let i = nums.length-1; i >= 0; i--) {
      res[i] *= productFromRight;
      productFromRight *= nums[i];
  }
  return res;
  // T.C: O(N)
  // S.C: O(1), assuming that we do not count the output array as extra space
}




//Another example, similar, but using left and right arrays with logic explanation (above explanation explains both ways (so is preferred)):
'https://leetcode.com/problems/product-of-array-except-self/discuss/694266/Javascript-Solution-(No-Division)-(With-Explanation)'
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
[1,2,3,4]
The array should be multiplication of all values except the index that we are currenty on:
[2x3x4 (not 1), 
1x3x4 (not 2), 
1x2x4 (not 3), 
1x2x3  (not 4)] = [24, 12, 8 , 6]

In this problem, if division was allowed:
1. We run a loop on array and get 1x2x3x4 = 24.
2. we run another array, and for each index:
  24/1 = 24
  24/2 = 12
  24/3 = 8
  24/4 = 6
------------------------------------------------
Without division:

we create 2 arrays:

1 array with incremental multiplication from left, 1 array with incremental multiplication from right.

at the start index of these arrays, we'll have 1 (as no multiplication prior to it).

left arr = [1, (1)x1, (1x1)x2, (1x1x2)x3] = [1, 1, 2, 6]

right arr = [(1x4x3)x2, (1x4)x3, (1)x4 ,1] = [24, 12, 4, 1]

now, at each index, in left array, we'll have mutiple of left elements prior that index.

In right array, we'll have mutiple of right elements ahead of that index.

So, we'll multiply [1, 1, 2, 6] X  [24, 12, 4, 1] at each index.

Result = [24, 12, 8, 6]

1 array 

*/
var productExceptSelf = function(nums) {

  let leftArr = [];
  let leftMultiplication = 1;

  for (let i=0; i < nums.length; i++) {
    leftArr[i] = leftMultiplication;
    leftMultiplication *=  nums[i];
  }
    
  let rightArr = [];
  let rightMultiplication = 1;

  for (let i=nums.length-1; i >= 0; i--) {
    rightArr[i] = rightMultiplication;
    rightMultiplication *= nums[i];
    rightArr[i] *= leftArr[i]; //this additional step saves us from having another iteration. We can do the multiplication at the spot.
  }
  
  return rightArr;
  
};