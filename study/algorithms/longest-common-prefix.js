// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
//  var longestCommonPrefix = function(strs) {
//      let prefix = strs[0].split('')

//      strs.slice(1).forEach(s => {
//          s.split('').forEach((letter, idx) => {
//              if (letter !== prefix[idx]){
//                  prefix.splice(idx)
//              }
//          })
//      })


//      return prefix.join('')
// };

// Javascript solution
function longestCommonPrefix(strs) {
    if (strs.length === 0) return '';
    const first = strs[0];
  
    for (let i = 0; i < first.length; i++) {
      for (let j = 1; j < strs.length; j++) {
        const other = strs[j];
        if (other[i] !== first[i]) {
          return other.slice(0, i);
        }
      }
    }
  
    return first;
  }



// Example 1:

// Input: 
let strs1 = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: 
let strs2 = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.



console.log(longestCommonPrefix(strs1))

// console.log(strs1[0][0])
