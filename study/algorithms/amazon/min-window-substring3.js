// Input: 
let s1 = "ADOBECODEBANC"
let t1 = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: 
let s2 = "a"
let t2 = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: 
let s3 = "a" 
let t3 = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.


//MIN WINDOW SUBSTRING
//initiate tracking vars: charsneeded {}, charsseen{}, chars missing int
//loop through tracking vars to give them starting vals (count needed in needed hashmap, 0 for counter and seen)

//initiate slow and fast pointers at 0
//initiate result at -infinity and infinity

//for loop with fast pointer moving to the right while it's less than string.length
    //within for loop:
    //check each char
        //if char is in seen chars hash, increment value of it
        //else, add char to hash and initialize with val of 1
        //when char count of char = char count of needed, decrement needed count
        //when char count needed = 0, look at slow pointer
        //while char count needed = 0, slow++
        //before you do that, check if char at slow is in needed hash
            //if it is, decrement in seen, and compare to needed
                //if its count in seen is < count in needed
                //increment missing counter (which will break slow pointer loop)
                //and increment slow counter no matter what - the above done because 
                //incrementing slow counter will remove that char from subarray

    //return  result[0] === -Infinity ? '' : s.slice(result[0], result[1] + 1)



                /**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let charsNeeded = {}
    let charsSeen = {}
    let charsMissing = 0

    for (let i = 0; i < t.length; i++){
        if(t[i] in charsNeeded){
            charsNeeded[t[i]] += 1
        } else {
            charsNeeded[t[i]] = 1
            charsSeen[t[i]] = 0
            charsMissing += 1
        }
    }


    let left = 0
    let right = 0

    let result = [-Infinity, Infinity]

    for (right; right < s.length; right++){
        if (s[right] in charsNeeded){
            charsSeen[s[right]] += 1

            if (charsSeen[s[right]] === charsNeeded[s[right]]){
                charsMissing -= 1
            }
        }
        
        while(charsMissing === 0){
          if (right - left < result[1] - result[0]){
              result[1] = right 
              result[0] = left
          }

          if (s[left] in charsNeeded){
              charsSeen[s[left]] -= 1

              if(charsSeen[s[left]] < charsNeeded[s[left]]){
                  charsMissing += 1
              }
          }

          left++
      }


    }

    return result[0] === -Infinity ? '' : s.slice(result[0], result[1] + 1)
    
};

console.log(minWindow(s1, t1))
console.log(minWindow(s2, t2))
console.log(minWindow(s3, t3))