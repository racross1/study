// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Example 1:

// Input: 
let s1 = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: 
let s2 = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.


//mine
var isPalindrome = function(s) {
    let newS = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    if (newS.length % 2 === 0){
        //if even
        return  newS.slice(0, newS.length/2) == newS.slice(newS.length/2).split('').reverse().join('')
        //
        //.slice(0, (newS.length - 1)/2).length
    } else {
        return newS.slice(0, newS.length/2) == newS.slice(newS.length/2 + 1).split('').reverse().join('')
        //newS.slice(0, newS.length/2).length
    }


    // return newS.slice((newS.length - 1)/2).length
    // newS.slice(0, (newS.length - 1)/2).length


    
};

console.log(isPalindrome(s1))


//SOLUTION THAT DOESNT USE REGEX

var isPalindrome = function(input) {
    var start = 0
    var end = input.length - 1
    while (start < end) {
        var s = input.charCodeAt(start)
        var e = input.charCodeAt(end)
    
        if (!isLetter(s)) {
            start++
            continue
        }
        if (!isLetter(e)) {
            end--
            continue
        }
    
        if (toLowerCase(s) !== toLowerCase(e)) {
            return false 
        } 
        start++
        end--
  }
  return true
};

var isLetter = function(code) {
    if (((code >= 48) && (code <= 57))  // numbers
    || ((code >= 65) && (code <= 90))  // uppercase
    || ((code >= 97) && (code <= 122))) {  // lowercase
        return true
    }
    else {
        return false
    }
}

var toLowerCase = function(code) {
    if (code >= 65 && code <= 90) {
        return code + 32    
    }
    else {
        return code
    }
}