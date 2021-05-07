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
 var groupAnagrams = function(strs) {
    // if (strs.length < 2) {
    //     return [strs]
    // } 

    
    
    let words = {}
    let output = {}
    let blanks = []

     for (let i = 0; i < strs.length; i++){
        if (strs[i] === ""){
           blanks.push('')
        } 
         for (let j = 0; j < strs[i].length; j++){
           
            if (!words[strs[i]]){
                words[strs[i]] = strs[i].charCodeAt(j) 
            } else {
            words[strs[i]] += strs[i].charCodeAt(j) 
            }
         }

     }

     console.log(words)


     for (key in words){
      //   console.log(key)
         if (!output[words[key]]) {
            // if (key === '') {
            //     output[words[key]] = 
            // } else {
            output[words[key]] = [key]
         } else {
             output[words[key]].push(key)
         }

     }

   //   console.log('words: ', words)
   //   console.log(words.length)
   //   console.log('blanks: ', blanks)
   //   console.log('output: ', output)

     //add conditional to check if words and blanks.length respectively are 0 or not
  return Object.values(words).length > 0 ? [...Object.values(output), ...blanks] : blanks
    
};

// console.log(groupAnagrams(strs1))
console.log(groupAnagrams(strs2))
// console.log(groupAnagrams(strs3))
// console.log(groupAnagrams(strs4))
