// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

//an explanation and appraoch which I find way more intuitive:
//bottom up with dp array as discussed in this video:
'https://www.youtube.com/watch?v=uHAToNgAPaM'

//but note that one below it is faster (though not by much)


var climbStairsNew = function(n) {
    if (n === 1) return 1
    if (n === 2) return 2
    let dp = new Array(n+1)
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n]
    
};

console.log(climbStairsNew(5))
//fibonacci sequence starting at 1 (not 0) up to n where result at n = answer. Other ways (not using fibonnacci) below  
//climbstairs3 uses dp
//climbstairs 4 uses recursion
//used #s 3 and 4 because first fn uses waysToClimb 1 and 2 as variable names
//only one I don't currently understand is recursion (4)

//waysToClimb(n) = waysToClimb(n-1) + waysToClimb(n-2) for n > 2

var climbStairs = function(n) {
    //seed numbers
    if (n === 1) return 1
    if (n === 2) return 2
    
    //set seed nums
    let waysToClimb1 = 1
    let waysToClimb2 = 2
    let waysToClimb
    let i = 1
    
    //to implement fibonacci sequence we can do a variety of ways
    //one way is while loop
    while(n - 1 > i){
        // console.log('i',i)
        //get next in fib sequence
        // console.log('waysToClimb at start of loop', waysToClimb)
        // console.log('waysToClimb1 at start of loop', waysToClimb1)
        // console.log('waysToClimb2 at start of loop', waysToClimb2)
        waysToClimb =  waysToClimb1 +  waysToClimb2
        //move ways to climb 1 up to next char in fib squebce
        waysToClimb1 = waysToClimb2
        //move ways to climb 2 to next char in fib sequence
        waysToClimb2 = waysToClimb
        // console.log('waysToClimb at end of loop', waysToClimb)
        // console.log('waysToClimb1 at end of loop', waysToClimb1)
        // console.log('waysToClimb2 at end of loop', waysToClimb2)

        i++
    }
    
    return waysToClimb
};

// climbStairs(4)

//from leetcode discuss
/*
DP

dp[i] represents the total number of different ways to take i steps
So, we want to get dp[n].
dp[n] = dp[n-1] + dp[n-2] because we can either take 1 or 2 steps.

We have two base cases: dp[1] = 1 and dp[2] = 2 because
there is one way to take 1 step and there are two ways to take 2 steps (1 step + 1 step OR 2 step)
*/

//here he is doing something similar, just keeping answers in a new results arr
var climbStairs3 = function(n) {
    //the + 1 is for the 0th index
    let dp = new Array(n + 1);
    console.log(dp)
    dp[1] = 1, dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
        console.log(dp)
    }
    return dp[n];
    // T.C: O(N)
    // S.C: O(N)
};

// climbStairs2(4)


/*
Recursion

climbStairs(n) returns the total number of different ways of taking n steps.
Hence, climbStairs(n-1) + climbStairs(n-2) gives the result
since we can either climb 1 or 2 steps

For more optimised solution, we use an Array to keep track of results that have already been computed
*/

var climbStairs4 = function(n, memo = new Array()) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    if (memo[n] !== undefined) {
        return memo[n];
    }
   
    console.log('memo before res assign', memo)
    let res = climbStairs4(n-1, memo) + climbStairs4(n-2, memo);
    console.log('res after assign:',res)
    memo[n] = res;
    console.log('memo after memo entry assign:', memo)
    return res;
    // T.C: O(N)
    // S.C: O(N)
};

// climbStairs4(4)