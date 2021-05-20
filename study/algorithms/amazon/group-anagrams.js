// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: 
let strs1 = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: 
let strs2 = [""]
// Output: [[""]]
// Example 3:

// Input: 
let strs3 = ["a"]
// Output: [["a"]]

let strs4 = ["",""]

// Expected:
// [["",""]]

let strs5 = ["c","c"]
//expected: 
//[["c","c"]]


const groupAnagrams = strs => {
   //create a map
   const map = {};
   
   for (let str of strs) {
      //for each string in array key = sorted string 
      const key = [...str].sort();
console.log('key: ', key)

//if the key (i.e. the sorted string) is not in the map, allocate a blank array for it
       if (!map[key]) {
           map[key] = [];
       }
//after that, no matter what, push the string into the map (this way you don't have to do separate steps for creating key for string and pushing string into that key)
       map[key].push(str);
   }
   console.log(map)
//map object keys are sorted strings, values are the strings as they appear in the input. values of map gives array of strings grouped by key
   return Object.values(map);
};


console.log(groupAnagrams(strs1))
// console.log(groupAnagrams(strs2))
// console.log(groupAnagrams(strs3))
// console.log(groupAnagrams(strs4))
// console.log(groupAnagrams(strs5))




// input: array of strs
//output array of array of strs


//make hash with char codes
//get sums

//make hash with key of sum and value of array of strings. 
//return values of the above hash


// add additional if statement to deal with "" characters
//or convert "" to some other char
// next try additional if statement

//left off on how to get the blanks out of the words 
//make blanks a separate thing! not in the same object

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//  var groupAnagrams = function(strs) {
//     // if (strs.length < 2) {
//     //     return [strs]
//     // } 

    
    
//     let words = []
//     let output = {}
//     let blanks = []

//      for (let i = 0; i < strs.length; i++){
//         if (strs[i] === ""){
//            blanks.push('')
//         } 
//          for (let j = 0; j < strs[i].length; j++){
           
//             // if (!words[strs[i]]){
//                 words.push([strs[i], strs[i].charCodeAt(j)]) 
//          //    } else {
//          //    words[strs[i]] += strs[i].charCodeAt(j) 
//          //    }
//          // }

//      }
//    }

//      console.log('first words: ', words)


//      words.forEach(arr => {
//         if (!output[arr[1]]){
//            output[arr[1]] = [arr[0]]
//         } else{
//            output[arr[1]].push(arr[0])
//         }
//      })
     


//    //   console.log('words: ', words)
//    //   console.log(words.length)
//    //   console.log('blanks: ', blanks)
//    //   console.log('output: ', output)

//      //add conditional to check if words and blanks.length respectively are 0 or not
//   return Object.values(words).length > 0 ? [...Object.values(output), ...blanks] : [blanks]
    
// };