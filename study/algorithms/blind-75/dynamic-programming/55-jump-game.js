// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.


//WORKING SOLUTION
//start goal at last index. loop through from right to left. if i + nums i >= goal, goal = i
//at end return true if goal = 0, false if goal is anything else

var canJump = function(nums) {
    let goal = nums.length - 1
    
    for (let i = nums.length - 1; i >= 0; i--){
        if (i + nums[i] >= goal){
             goal = i
        }
    }
    return goal === 0
};








/*my next try with solution help: DOES NOT WORK*/

var canJump = function(nums) {
    if (!nums.length) return false
    if (nums.length == 1) return true
    if (nums[0] == 0) return false
    //loop through and move goalpost each time
    let goal = nums.length - 1
    
    for (let i = nums.length - 2; i >= 0; i--){
        if (nums[i] === 0) continue

        
        for(let jumps = 1; jumps <= nums[i]; jumps++){
            if (i + jumps === goal) {
                i = goal
                break
            } 
        }
        if (goal === 0) return true
    }
    return false
};






/*my initial try: DOES NOT WORK*/

var canJump = function(nums) {
    if (!nums.length) return false
    if (nums.length == 1) return true
    if (nums[0] == 0) return false
    
    
    let dp = new Array(nums.length).fill(false)
    let target = nums.length - 1
    
    dp[0] = true
    
    let stack = [0]
    
    while(stack.length != 0){
        let cur = stack.pop()
        let curChar = nums[cur]
        if (curChar === 0) continue
        
        //travel to each index you can get to from curChar and mark them as true in dp array, if we've already seen curChar's connection, continue
        for (let i = 1; i <= curChar; i++){
            if (dp[i]) continue
            if (i >= nums.length) break
            if (cur + i === target) return true
            dp[i] = true
            stack.push(i)   
        }
    }
    return false
};