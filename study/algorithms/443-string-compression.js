// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

'https://leetcode.com/problems/string-compression/'

// Input: 
let chars1 = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

// Input
let chars2 = ["a","a","a","b","b","a","a"]

// Expected
// ["a","3","b","2","a","2"]

let chars3 = ['a']

let chars4 = ['a', 'b']

/**
 * @param {character[]} chars
 * @return {number}
 *

//my solution below which beats on 83%
//only want to count consecutive items
//no count if count = 1
//function that loops through and checks if item before i was equal to s[i]
    //if not, leave as is
    //if item = s[i]

    //curr pointer in s to point to current letter
    //starts off with s = chars[0], curr = chars[0]
    //count = 1
    //if next = curr, count++
    //if next != curr and count > 1, add count to s, add char[i] to s, count = 1, curr = char[i]
    //if next != curr and count = 1, add char[i] to s, curr = char[i], count = 1
 var compress = function(chars) {
    

    let curr = chars[0]
    let s = chars[0]
    let count = 1

    for (let i = 1; i < chars.length; i++){
        if (chars[i] !== curr && count > 1){
            s += count 
            s += chars[i]
            curr = chars[i]
            count = 1
        } else if (chars[i] !== curr){
            s += chars[i]
            curr = chars[i]
            count = 1
        } else {
            count++
        }

    }
    
    if (count > 1){
        s += count
    }

    chars.length = 0
    chars.push(...s.split(''))
    
    return chars.length
    
}





//below version doesn't mod original chars array
//  var compress2 = function(chars) {
    
//     let hash = {}
//     let s = ''

//     for (let i = 0; i < chars.length; i++){
//         if (hash[chars[i]]){
//             hash[chars[i]]++
//         }else {
//             hash[chars[i]] = 1
//         }
//     }

//      for (item in hash){
//         s += item
//         s += hash[item]
//     }
    
//     chars.length = 0 
//     chars.push(...s.split(''))
   
  
//     return chars.length
// }

console.log(compress(chars1))
console.log(compress(chars2))
console.log(compress(chars3))
console.log(compress(chars4))


//*** a solution similar to mine in that it uses pointers and a count but then after the else statement in first for loop 
//does something different (i think modifying actaul chars array instead of workaround in mine)

/**
 * @param {character[]} chars
 * @return {number}
 */
 var compress = function(chars) {
    //if no length (i.e. blank) return 0
    if (!chars.length) return 0;
    //see towards end of function, j seems to be pointer of index at which to insert
    let j = 0;
    let cur = chars[0];
    let counter = 0;
    //looping through chars
    for (let i = 0; i <= chars.length; i++) {
    //if current index of chars = current increment counter
    //for first index not starting at 1 because we increment the counter for the zero index which will equal the variable becasuse that's what we initially assignment the variable to
        if (chars[i] === cur) {
        counter++;
      } else {
    //else (i.e. if current index !== current pointer)
        
        //chars at index j (for for first index this would be 0) equals current pointer
        chars[j] = cur;
        //then if counter is greater than 1
        if (counter > 1) {
            // s = counter to string
          const s = counter.toString();
          //loop through counter s
          
          for (let k = 0; k < s.length; k++) {
              //chars of next j = s at current index of k
              chars[++j] = s[k];
            }
        }
        //0therwise if counter not greater than 1
        //increment j, which seems to be the index at which to insert
        j++;
        //current = current index of chars
        cur = chars[i];
        //counter = 1
        counter = 1;
      }
    }
    //j is the counter of the index at which to insert, and so in the end it will be the length of the compressed string 
    return j;
  };