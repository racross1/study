// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

 

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1




//from here: https://dev.to/cod3pineapple/leetcode-300-longest-increasing-subsequence-javascript-solution-m3o
// Dynamic programming
//below, original code comments have *
//so each time we find an increasing subsequence, we add 1 to the 1 at that index in the dp arr

//overall, dp arr keeps track of max increasing subseq at that index, 
//if another one gets incremented after it, increment counter and set that index equal to the new amount and also reset max
var lengthOfLIS = function (nums) {
    // *Create dp array
    const dp = Array(nums.length).fill(1)
    console.log(dp)
    // *Max subsequence length
    let max = 1
    // *Check all increasing subsequences up to the current ith number in nums
    //start at 1 because no matter what if you have 1 element in the array, it can be subseq, len 1
    // this is why max is also 1
    for (let i = 1; i < nums.length; i++) {
        // *Keep track of subsequence length in the dp array
        //j right behind i
        //someting I wasn't getting initially: for every new loop of i, j resets to 0
        for (let j = 0; j < i; j++) {
            // *Only change dp value if the numbers are increasing
            // if num ahead is greater than num behind
            console.log("i", i)
            console.log("j", j)

            console.log("nums[i]", nums[i])
            console.log("nums[j]", nums[j])
            if (nums[i] > nums[j]) {
                console.log("nums[i] > nums[j]")
                // *Set the value to be the larget subsequence length
                // new arr of 1s at index i == is max of dp at i (1) and dp[j]+1
                // j is always less than i
                console.log('dp[i]:', dp[i]) 
                console.log('dp[j] + 1:', dp[j] + 1)
                //set dp[i] to max of dp[i], or dp[j] + 1
                dp[i] = Math.max(dp[i], dp[j] + 1)
                // *Check if this subsequence is the largest
                console.log('curr max:', max)
                max = Math.max(dp[i], max)
                console.log("new max:", max)
            }
        }
    }
  return max;
};

//from neetcode video:
'https://www.youtube.com/watch?v=cjWnW0hdF1Y'


/*
work our way backwards from last index
nested loops where outer loop (i) starts at nums.length -2 
and inner loop starts at i+1
wihtin loops if nums[i] < nums[j]
dp[i] is max of dp[i] and 1 + dp[j]

O(n^2)
*/
function lengthOfLIS2(nums){
    let dp = new Array(nums.length).fill(1)

    for (let i = nums.length - 1; i >= 0; i--){
        for (let j = i+1; j < nums.length; j++){
            //only if this condition true can we update LIS dp array
            if(nums[i] < nums[j]){
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
    }
    return Math.max(...dp)

}


let nums = [10,9,2,5,3,7,101,18]

lengthOfLIS2(nums)