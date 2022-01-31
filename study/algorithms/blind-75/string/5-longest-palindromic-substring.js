// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 
// initialize start = 0 end = 0. 
// for loop through, for each i, 
//get center where you expand right while left and right are equal. 
//with new center, expand around center to get left and right bounds. 
//Then if right-leftbound is greater than start - end, start = leftbound, end = right bound.

//initialize start and end variables at 0
//for each index in s get center (i.e. expand to the right while chars are equal)
//then to find palindrome length, expand around center
var longestPalindrome = function(s) {
    let start = 0 
    let end = 0

    for (let i = 0; i < s.length; i++){
        let center = getCenter(s, i)

        let bounds = expandAroundCenter(s, center[0], center[1])

        let left = bounds[0]
        let right = bounds[1]

        if (right - left > end - start){
            start = left
            end = right
        }
        i = center[1]
    }
   
    return s.substring(start, end+1)
};


function getCenter(s, i){
   let left = i
   let right = i
   
   while(s[left] === s[right] && right < s.length) right++

   return [left, right - 1]
}

function expandAroundCenter(s, left, right){
   let lBound = left 
   let rBound = right

   while(lBound >= 0 && rBound < s.length && s[lBound] === s[rBound]){
       lBound--
       rBound++
   }

   return [lBound+1, rBound-1]
}