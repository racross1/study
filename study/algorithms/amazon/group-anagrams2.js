







//prior solution
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//  var groupAnagrams = function(strs) { 
//     let words = {}
//     let output = {}
//     let blanks = []

//      for (let i = 0; i < strs.length; i++){
//         if (strs[i] === ""){
//            blanks.push('')
//         } 
//          for (let j = 0; j < strs[i].length; j++){
           
//             if (!words[strs[i]]){
//                 words[strs[i]] = strs[i].charCodeAt(j) 
//             } else {
//             words[strs[i]] += strs[i].charCodeAt(j) 
//             }
//          }

//      }