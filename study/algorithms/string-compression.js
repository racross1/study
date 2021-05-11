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
 */


//only want to count consecutive items
//no count if count = 1
//function that loops through and checks if item before i was equal to s[i]
    //if not, leave as is
    //if item = s[i]
 var compress = function(chars) {
    //curr pointer in s to point to current letter
    //starts off with s = chars[0], curr = chars[0]
    //count = 1
    //if next = curr, count++
    //if next != curr, s.push(char[i]), count = 1, curr = char[i]

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
    chars = s.split('')
    console.log(chars)
    return chars.length
    
}





//below version doesn't mod original chars array
 var compress2 = function(chars) {
    
    let hash = {}
    let s = ''

    for (let i = 0; i < chars.length; i++){
        if (hash[chars[i]]){
            hash[chars[i]]++
        }else {
            hash[chars[i]] = 1
        }
    }

     for (item in hash){
        s += item
        s += hash[item]
    }
    
    chars.length = 0 
    chars.push(...s.split(''))
   
  
    return chars.length
}

console.log(compress2(chars1))
console.log(compress2(chars2))
console.log(compress2(chars3))
console.log(compress2(chars4))