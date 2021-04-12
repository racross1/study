// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

 
// Follow up: Could you solve it without converting the integer to a string?
//SEE BELOW FOR SOLVE WITHOUT TURNING X TO STRING


var isPalindrome = function(x) {
    let num = x
    if (x < 0) {
        return false
    } else if (x / 10 < 1) {
         return true 
    } else {
        let digits = []
        while (x > 0){
            digits.push(x % 10)
                x = parseInt(x / 10)
            }
    
    return num === parseInt(digits.join(''))}
    
};



// var num = 278;
// var digits = [];
// while (num > 0) {
//     digits.push(num % 10);
//     num = parseInt(num / 10);
// }
// digits.reverse();
// console.log(digits);



// Example 1:

// Input: 
let x1 = 121
// Output: true
// Example 2:

// Input: 
let x2 = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: 
let x3 = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Example 4:

// Input: 
let x4 = -101
// Output: false
 
let x5 = 123

// Constraints:

// -231 <= x <= 231 - 1
console.log(isPalindrome(x1))



