// Length of last word 

// https://leetcode.com/problems/length-of-last-word/

// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.
// A word is a maximal substring consisting of non-space characters only.
//  
// Example 1:
// Input: s = "Hello World"
// Output: 5

// Example 2:
// Input: s = " "
// Output: 0

// Example 3:
// Input: s = “a "
// Output: 1
//  


// Mine:

var lengthOfLastWord = function(s) {
    if (s.trim().length === 0){
        return 0
    } else if (s.trim().length === 1 ){
        return 1
    } else {
    return s.trim().split(" ").pop().split("").length
    }
};



// One line
var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
};
