// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.

 

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

//implementation following along with video:
'https://www.youtube.com/watch?v=lXVy6YWFcRM' 

function maxProduct(nums){
    //initialize with max of nums because max could be 0 or negative, so don't want to initialize with 0
    let result = Math.max(...nums)
    let curMin = 1
    let curMax = 1

    for (let n of nums){
        if (n == 0) {
            curMin = 1
            curMax = 1
            continue
        }
        let temp = curMax
        curMax = Math.max(n * curMax, n * curMin, n)
        curMin = Math.min(n * temp, n * curMin, n)
        result = Math.max(result, curMax)
    }

    return result
}


//this implementation works (my interpretation of above video without seeing solution): 

/*

keep track of max and min product up to each index in dp array. if nums[i] is 0 set both max and min to 1 at that dp index
max and min will be max and min respectively of cur * prevMax, cur * prev min and cur.

*/


function maxProduct(nums){
	
	let dp = new Array(nums.length)
	
	//0 is max, 1 is min
    if (nums[0] === 0){
        dp[0] = [1, 1]   
    } else {
        dp[0] = [nums[0], nums[0]]
    }

    let max = nums[0]

	
	for (let i = 1; i < nums.length; i++){
        let cur = nums[i]
        let prevMax = dp[i-1][0]
        let prevMin = dp[i-1][1]

        if (cur === 0){
            prevMax = 1
            prevMin = 1
        }

        let newMax = Math.max(cur * prevMax, cur * prevMin, cur)
        let newMin = Math.min(cur * prevMax, cur * prevMin, cur)
        dp[i] = [newMax, newMin]	

        max = Math.max(newMax, max)

    }

    return max

}
