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

