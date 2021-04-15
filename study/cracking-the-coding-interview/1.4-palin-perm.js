//Given a string, write a function to check if it is a permutation of a palindrome. 
//A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
//The palindrome does not need to be limited to just dictionary words. 
//You can ignore casing and non-letter characters.




let str1 = 'taco tac'
let str2 = 'taco9 cat'
let str3 = 'TACO!CAT'
let str4 = 'abscfg'
let str5 = 'aabbccc'
let str6 = 'aabb'
let str7 = 'taco cart'
let str8 = 't+xC9q@4' 
let str9 = 'tacoo cart'




//mine

//input: string
//output: boolean
//edge: blank spaces, only numbers

//check if number of occurrences of letters are equal, or if total length is odd, all equal with one odd # of occurences

//to lowercase
//check if length of string is odd or even
//if even, check if all occurences of each letter are even
//non-letter chars don't count
function palinPerm(str){
    let modStr = str.toLowerCase().replace(/[^A-Za-z']/g, "")
    let hash = {}

    for (let i = 0; i < modStr.length; i++) {
        if (!hash[modStr[i]]) {
            hash[modStr[i]] = 1
        } else {
            hash[modStr[i]]++
        }
    }


    if (modStr.length % 2 === 0){
        for (item in hash) {
            if (hash[item] % 2 !== 0){
                return false 
            }
        }
        return true

    } else {
        let oddOne = false

        for (item in hash) {
            if (hash[item] % 2 !== 0) {
                if (oddOne) {
                    return false
                } else {
                    oddOne = item
                }
            }
        }

        if (!oddOne){
            return false
        }

        return true
    }
}

// console.log(palinPerm(str1))
// console.log(palinPerm(str2))
// console.log(palinPerm(str3))
// console.log(palinPerm(str4))
// console.log(palinPerm(str5))
// console.log(palinPerm(str6))
// console.log(palinPerm(str7))

//experimenting with regex:include also numbers 
console.log(str8.replace(/[^A-Za-z0-9]/g, ''))

//solution from chirping mermaid which also uses hash but instead of final for / in 
//uses add/ delete chars from hash
//also has charCount and if statement checking for blanks instead of regex
//if statement at end also efficient

/**
CTCI - 1.4
Palindrome Permutation:
Given a string, write a function to check if it is a permutation of a palindrome.  
A palindrome is a word or phrase that is the same forwards and backwards.  
A permutation is a rearrangement of letters.  
The palindrome does not need to be limited to just dictionary words.
EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat", "atco cat", etc.)
I: String
O: Boolean
C: optimize
E: empty string, even and odd chars, spaces between and in front and at end, more than 2 of the same char
time complexity: linear
space complexity: linear
*/

let palPerm = (s) => {
    //if even: there must be two of every char
    //if odd: there must be only one unique char
  
    //use hash table to store letters
    //if we see the same letter again, delete from hash
    //check hash at the end: odd - 1 key left, even - no keys left
    //skip spaces
  
    let hash = {};
    let charCount = 0;
  
    for (let i = 0; i < s.length; i++) {
      let c = s[i];
      if (c === ' ') {
        continue;
      }
      if (hash[c]) {
        delete hash[c];
      } else {
        hash[c] = true;
      }
      charCount++;
    }
    if (charCount % 2 === 0) {
      return Object.keys(hash).length === 0;
    } else {
      return Object.keys(hash).length === 1;
    }
  };
  
  console.log(
    palPerm('taco cat') === true,
    palPerm('atco cat') === true,
    palPerm(' rac  ecar rara ') === true,
    palPerm('chirpingmermaid') === false,
    palPerm('aabbc') === true,
    palPerm('aaaabbbbcc') === true,
    palPerm('aabc') === false,
    palPerm('') === true
  );