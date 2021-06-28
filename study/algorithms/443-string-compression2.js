// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.


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

//input: array
//output: num
//at least O n

//count each occurence of each letter => hash
//order does now matter 
//create obj, 
//create array using obj (Object.entries)
//array.split()


//want to be able to look back and see
//curr pointer for current index



//review this solution:
var compress = function(chars) {
    //if no chars, return 0
    if (!chars.length) return 0;
    let j = 0;
    //cur set to first item in chars
    let cur = chars[0];
    //counter starts at 0
    let counter = 0;
    for (let i = 0; i <= chars.length; i++) {
        //increment counter if chars[i] == curr
      if (chars[i] === cur) {
        counter++;
      } else {
          //otherwise chars[j] = curr
        chars[j] = cur;
        //if counter > 1
        if (counter > 1) {
            //s = counter to string
          const s = counter.toString();
          //iterate over stringified counter 
          //replace subsequent chars in k with digits of stringified j
          for (let k = 0; k < s.length; k++) {
            //increment j to move it to the right of curr 
            j++
            //for each subsequent one replace with digit of k
             chars[j] = s[k]
          }
        }
        //increment j once more as this is the index of current insertion point
        j++;
        cur = chars[i];
        counter = 1;
      }
    }
    //
    return j;
  };





// var compress = function(chars) {
//     let s = []
//     let curr = chars[0]
//     let count = 1

//     for (let i = 1; i < chars.length; i++){
//         let pointer = chars[i]
        
//         if(pointer != curr || i === chars.length - 1){
//             s.push(curr)
//             if (count > 1){
//                 s.push(count)
//             }
           
//             count = 1
//             curr = pointer

//         } else {
//             count++
//         }

//         console.log('curr', curr)
//         console.log('i', i)
//         console.log('count', count)

//     }


//     return s.join('').length

// }

console.log(compress(chars1))
console.log(compress(chars2))
console.log(compress(chars3))
console.log(compress(chars4))