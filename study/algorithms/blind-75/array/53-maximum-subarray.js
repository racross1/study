// given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// a subarray is a contiguous part of an array.

// input : array
// output: int (sum of subarray)
// ec: input = []

// subarray contiguous
// not sorted
// has negative numbers

// Approach:
// dp array with max sum inclusive of each num
// also track max global

// example 1: 
// nums = [1, 2, -5, -2]
// sum = 3

// example 2: 
// nums = [1, 1, 1, 1, 1]



function maxSubArray(nums) {
	let dp = new Array(nums.length)

	let maxSum = nums[0]
	dp[0] = maxSum

	for(let i = 1; i < nums.length; i++){
		dp[i] = Math.max(dp[i -1] + nums[i], nums[i])

		maxSum = Math.max(dp[i], maxSum)
}
	
	return maxSum
}


// Update to save space (no dp array): 
function maxSubArray(nums) {

	let maxSum = nums[0]
	let maxCur = nums[0]

	for(let i = 1; i < nums.length; i++){
		maxCur = Math.max(maxCur + nums[i], nums[i])

		maxSum = Math.max(maxCur, maxSum)
}
	
	return maxSum
}
