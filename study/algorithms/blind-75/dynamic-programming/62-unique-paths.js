// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

// Example 1:


// Input: m = 3, n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down



//this solution faster and more intuitive
//solution from this video:
'https://www.youtube.com/watch?v=IlEsdxuD4lY'
    //work back from the end. unique paths to each cell = unique ways to get to one above and unique ways to get to one to the left of it
    //bottom row and right-most col will always be filled with 1. 
    //so go through and initialize first row of 1s and solve for each row above it by making new row, going for right to left and setting newRow[j] = to newRow[j+1] (right) + row[j] (above: i.e. row above at same index)
    //see illustration:
    'assets/Screen Shot 2022-01-09 at 6.34.35 PM.png'
var uniquePaths = function(m, n) {
    //start with row (this is going to be the bottom row)
    let row = new Array(n).fill(1)

    //compute new row which is going to be above the old row
        //want to do m - 1 rows because we've already set the bottom row
        //this doesn't have to be a for loop (will try with a while loop). For loop might be confusing because you're really just filling in m - 1 rows
    for(let i = 0; i < m - 1; i++){
        //create your new row to be filled
        let newRow = new Array(n).fill(1)
        //going right to left in that row and startign at n-2 because we know first column will be 1 as well
        for(let j = n - 2; j >= 0; j--) {
            //set new row at index j = to newRow j + 1 (which remember is filled in with 1 to start) + row below it at same index
            newRow[j] = newRow[j + 1] + row[j]
        }
        //then set row below = to new row and solve for net row
        row = newRow
    }
    
    //at end return row 0 becaues this will be starting point
    return row[0]
}

//solution from this video (not as fast or as intuitive as one above): 
    'https://www.youtube.com/watch?v=F7dgkLuJV-4'
//solution is unique ways to get to one above plus unique ways to get to one to the right
//solution to those is unique ways to get to one above it and one below it etc.

//generate the steps for each row, use one array and do the iteration


//time: O (m * n)
//space: O(m)
var uniquePaths = function(m, n) {
    const dp = new Array(m).fill(1)
    while (n > 1) {
        for (let i = 1; i < m; i++){
            dp[i] += dp[i-1]
        }
        n--
    }
    return dp[m-1]
};


