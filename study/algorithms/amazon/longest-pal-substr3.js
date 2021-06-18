//overall idea: 
//1. get potential palindrome center at current index - so as many characters as are equal to each other, 
//because can be center of palindrome
    ////if center is just single char, the while loop will increment the right pointer once and so you return left, right - 1, which == c or the center char you supplied
//2. get bounds of palindrome around current center
    //while left pointer is >= 0 and right pointer is less than string.length 
    //(basically pointers are staying on string) and also s at left === s at right
    //decrement left pointer and increment right pointer
//3. with the bounds you got above in expand around center, check if right bound - left bound found above is greater than length of current right and left.
    //if it is, reassign start and end to left and right


// Example 1:

// Input: 
let s1 = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: 
let s2 = "cbbd"
// Output: "bb"
// Example 3:

// Input: 
let s3 = "a"
// Output: "a"
// Example 4:

// Input: 
let s4 = "ac"
// Output: "a"



/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
     let start = 0 
     let end = 0

     for (let i = 0; i < s.length; i++){
         let center = getCenter(s, i)

         let bounds = expandAroundCenter(s, center[0], center[1])

         let left = bounds[0]
         let right = bounds[1]

        //  console.log('left', left)
        //  console.log('right', right)

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

console.log(longestPalindrome(s1))
console.log(longestPalindrome(s2))
console.log(longestPalindrome(s3))
console.log(longestPalindrome(s4))



//prior submission
/**
//  * @param {string} s
//  * @return {string}
//  */
//  var longestPalindrome = function(str){
//     let start = 0, end = 0;
//  for (let i = 0; i < str.length; i++) {
//      let center = getCenter(str, i);
//      let bounds = expandAroundCenter(str, center[0], center[1]);
//      let L = bounds[0], R = bounds[1];
//      if (R - L > end - start) {
//          start = L;
//          end = R;
//      }
     
//      i = center[1]; 
//  }
//  return str.substring(start, end + 1);
// }

// function expandAroundCenter(s, left, right) {

//  let leftBound = left, rightBound = right;


//  while (leftBound >= 0 && rightBound < s.length && s[leftBound] === s[rightBound]) {
//      leftBound--;
//      rightBound++;
//  }

//  return [leftBound + 1, rightBound - 1];
// }

// function getCenter(s, c){
//  let left = c, right = c 

//  while(s[left] === s[right] && right <= s.length) right++

//  return [left, right - 1]
// }
