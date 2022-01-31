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

// Time Complexity: O(n*klog(k)) where n is the length of input array and k is the maximum length of a string in input array
// Space Complexity: O(n)

const groupAnagrams = strs => {
   //create a map
   const map = {};
   
   for (let str of strs) {
      //for each string in array key = sorted string 
      const key = [...str].sort();

//if the key (i.e. the sorted string) is not in the map, allocate a blank array for it
       if (!map[key]) {
           map[key] = [];
       }
//after that, no matter what, push the string into the map (this way you don't have to do separate steps for creating key for string and pushing string into that key)
       map[key].push(str);
   }

//map object keys are sorted strings, values are the strings as they appear in the input. values of map gives array of strings grouped by key
   return Object.values(map);
};