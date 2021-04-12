
// range:
// [-2147483648 to 2147483647]

// Given a signed 32-bit integer x, return x with its digits reversed. 
//If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).


var reverse = function(x) {
   if (String(x).length < 2) {
       return x
   } else {
       let rev = String(x).split('').reverse().join('')
       if (x < 0) {
           if (0 - parseInt(rev) < -2147483648) {
                return 0
            } else {
                return 0 - parseInt(rev)
            }
        } else {
            if (parseInt(rev) > 2147483647){
                    return 0
                } else {
                    return parseInt(rev)
                }
            } 
        }
};


// Example 1:

// Input: 
x1= 123
// Output: 321


// Example 2:

// Input: 
x2 = -123
// Output: -321
// Example 3:

// Input: 
x3 = 120
// Output: 21
// Example 4:

// Input: 
x4 = 0
// Output: 0

console.log(reverse(x4))