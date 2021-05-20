// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

// Example 1:

// Input: 
let haystack1 = "hello"
let needle1 = "ll"
// Output: 2
// Example 2:

// Input: 
let haystack2 = "aaaaa" 
let needle2 = "bba"
// Output: -1
// Example 3:

// Input: 
let haystack3 = ""
let needle3 = ""
// Output: 0



// Super quick and elegant one using substring
//checks if haystack at current index of for loop == first character of needle
//if it does, assigns a temp variable with haystack substring starting at the needle and going to the length of the substring
//if temp variable equals the needle, that's your answer

var strStr = function(haystack, needle) {
    if (haystack === needle || needle === "") {
        return 0;
    }
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let temp = haystack.substring(i, i + needle.length);
            if (temp === needle) {
                return i;
            }
        }
    }
    return -1;
};

console.log(strStr(haystack3, needle3))

//this one uses regex. see above for one that doesn't
var strStr = function(haystack, needle) {
    if (needle.trim().split('').length === 0){
        return 0
    } else {
        var re = new RegExp(needle)
        if (haystack.match(re)) {
            return haystack.match(re)['index']
        } else {
            return -1
        }
    }
    
};