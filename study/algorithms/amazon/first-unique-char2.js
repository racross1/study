// Example 1:

// Input: 
let s1 = "leetcode"
// Output: 0
// Example 2:

// Input: 
let s2 = "loveleetcode"
// Output: 2
// Example 3:

// Input: 
let s3 = "aabb"
// Output: -1


/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {

    for (let i = 0; i < s.length; i++){
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])){
            return i
        }

    }

    return -1
    
};

console.log(firstUniqChar(s1))
console.log(firstUniqChar(s2))
console.log(firstUniqChar(s3))









//prior submission
// /**
//  * @param {string} s
//  * @return {number}
//  */
//  var firstUniqChar = function(s) {
//     const seen = new Set()

//     for (let i = 0; i < s.length; i++){
//         if (!seen.has(s[i]) && !s.slice(i+1).includes(s[i])){
//             return i
//         } else {
//             seen.add(s[i])
//         }

//     }

//     return -1
    
// };