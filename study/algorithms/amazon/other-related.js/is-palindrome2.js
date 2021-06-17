//for prior answer using regex, see general algo folder

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

//left pointer and right pointer
//while right > left


/**
 * @param {string} s
 * @return {boolean}
 */

//works and is faster than 92%
 var isPalindrome = function(s) {
     s = s.toLowerCase()
     s = s.replace(/[^0-9a-z]/g, '')

     let left = 0
     let right = s.length - 1

     while (right > left){
         if (s[right] !== s[left]){
             return false
         } else {
             right--
             left++
         }
     }

    return true

};


console.log(isPalindrome(s1))
console.log(isPalindrome(s2))



















//prior submission
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
//  var isPalindrome = function(s) {
//     let newS = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
//     if (newS.length % 2 === 0){
//         return  newS.slice(0, newS.length/2) === newS.slice(newS.length/2).split('').reverse().join('') 
//     } else {
//         return newS.slice(0, newS.length/2) === newS.slice(newS.length/2 + 1).split('').reverse().join('')   
//     }
    
// };
