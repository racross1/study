// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

 

// Example 1:

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.

// From leetcode solution

// Recall that there are two different techniques we can use to implement a dynamic programming solution; memoization and tabulation.

// Memoization is where we add caching to a function (that has no side effects). In dynamic programming, it is typically used on recursive functions for a top-down solution that starts with the initial problem and then recursively calls itself to solve smaller problems.

// Tabulation uses a table to keep track of subproblem results and works in a bottom-up manner: solving the smallest subproblems before the large ones, in an iterative manner. Often, people use the words "tabulation" and "dynamic programming" interchangeably.
// For most people, it's easiest to start by coming up with a recursive brute-force solution and then adding memoization to it. After that, they then figure out how to convert it into an (often more desired) bottom-up tabulated algorithm.


//MEMOIZATION

//pseudocode from leetcode solution
// define function LCS(text1, text2):
//     # If either string is empty there, can be no common subsequence.
//     if length of text1 or text2 is 0:
//         return 0

//     letter1 = the first letter in text1
//     firstOccurence = first position of letter1 in text2

//     # The case where the line *is not* part of the optimal solution
//     case1 = LCS(text1.substring(1), text2)

//     # The case where the line *is* part of the optimal solution
//     case2 = 1 + LCS(text1.substring(1), text2.substring(firstOccurence + 1))
   
//     return maximum of case1 and case2



//first solution I looked at from video, 



//Bottom up DP solution from this video:https://www.youtube.com/watch?v=Ua0GhsJSlWM

//in the problem, there are a series of sub problems: for each char, either
    // The first letter of each string is the same.
    // The first letter of each string is different.

    // For the first case, we solve the subproblem that removes the first letter from each, and add 1. 
    // In the grid, this subproblem is always the diagonal immediately down and right.

    // For the second case, we consider the subproblem that removes the first letter off the first word, and then the subproblem that removes the first letter off the second word. 
    // In the grid, these are subproblems immediately right and below.

// Putting this all together, we iterate over each column in reverse, starting from the last column (we could also do rows, the final result will be the same). 
// For a cell (row, col), we look at whether or not text1.charAt(row) == text2.charAt(col) is true. 
// if it is, then we set grid[row][col] = 1 + grid[row + 1][col + 1]. 
// Otherwise, we set grid[row][col] = max(grid[row + 1][col], grid[row][col + 1]).

//the above makes sense because you are starting at the end of one of the substrings and seeing the max length substring at that char
//if char is equal to char, you add 1 to the diagonal preceding it
    //that is because the diagonal preceding it is the max substring for the substrings of the 2 strings that don't have this newly matched char
//if char is not equal to char you give it the max of max of 1 above and max of 1 below
    //that is because if current char is not equal you want to keep recorded the max share chars for current col substring at each char of other string
    //this will be max of prior string1 with current string2 or prior string 2 with current srtring 1
//animated walk through in leetcode really helped me grasp this.


/*
in the below, we go diagonally and add 1 when chars match because that means we are eliminating those 2 matched chars and want to find the max substrings
of the remainder of the 2 strings

because the cell diagonally represents the max substring of the strings excluding the current, so we know we can add 1 to our max

if the chars don't match we choose the max of dp array to the right and below because longest common substring at that char is longest common at same char in text 1 and rest of text 2
or same char in text 2 with rest of text 1

*/

var longestCommonSubsequence = function(text1, text2) {
    //first thing, create 2 d array and fill with 0s (with extra last row and col of 0s for blank strings)
    //Array from takes arg 1: array-like obj with length property and indexed elements ,arg 2: map function
    //in the below case we use an arrow function to have new array at each index of array and fill each new array with 0
    //new Array constructor just takes a length property
    const table = Array.from({length: text1.length + 1}, () => new Array(text2.length + 1).fill(0))
    //start in bottom right cell of table (leaving 1 row and 1 col of 0s ont the ends)
    for (let i = text1.length - 1; i >= 0; i--){
        for (let j = text2.length - 1; j >= 0; j--){
            //iterating through each char for current char of text i
            //if chars match, set current table entry equal to 1 + diagonal position of table
            //else, set it to max of below char or left char
            if (text1[i] === text2[j]){
                table[i][j] = 1 + table[i + 1][j + 1]
            } else {
                table[i][j] = Math.max(table[i+1][j], table[i][j+1])
            }
        }
    }

    return table[0][0]
}

let text1 = "abcde", text2 = "ace"

console.log(longestCommonSubsequence (text1, text2))