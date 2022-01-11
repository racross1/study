// A message containing letters from A-Z can be encoded into numbers using the following mapping:

// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"
// To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

// "AAJF" with the grouping (1 1 10 6)
// "KJF" with the grouping (11 10 6)
// Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

// Given a string s containing only digits, return the number of ways to decode it.

// The test cases are generated so that the answer fits in a 32-bit integer.

 

// Example 1:

// Input: s = "12"
// Output: 2
// Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
// Example 2:

// Input: s = "226"
// Output: 3
// Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
// Example 3:

// Input: s = "06"
// Output: 0
// Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").


//indices are length of the string at that point
//0 is blank string and that is base case
function numDecodingsSOLUTION(s) {
    if (s == null || s.length === 0) return 0;
    if (s[0] === '0') return 0;
  
    //Create dp array
    const dp = new Array(s.length + 1).fill(0);
  
    //for blank str
    dp[0] = 1;
    //for str length 1 (s[0])
    dp[1] = 1;
    console.log("s", s.split(''))
    //string of length 2
    //each index s is looking back at the combinations UP TO that index s
    for (let i = 2; i <= s.length; i++) {
        console.log('i:', i, 's[i]:', s[i])
        console.log("dp", dp)
        console.log('starting dp[i]', dp[i])
      //first iter, looks back at s[1]
        //if s[1] isn't 0
    //second iter looks back at s[2]

     const a = parseInt(s[i-1])  // prior one digit
     console.log('a', a) 
     if (a > 0) {
        //first iter
            //s[2] = 0 + s[1] which is 1
        //second iter 
            //dp[3] += dp[2] which is 2 in this ex
        //if prior 1 digit isn't 0, add result at that single index
        dp[i] += dp[i - 1];
      }
  

      const b = parseInt(s[i-2] + s[i-1]) //last double digit
      console.log('b', b)
      //if b is in alphabet range
      if (b >= 10 && b <= 26) {
        //dp value at prior
        dp[i] += dp[i - 2];
      }
      console.log('ending dp[i]', dp[i])

    }
  
    return dp[s.length];
  }


let s = "122312"

numDecodingsSOLUTION(s)



//recursive solution from back to back SWE

const decodeWays = (s) => {
    const dp = Array(s.length).fill(-1)
  
    return numDecodings(s, 0, dp);
  }
  
  const numDecodings = (s, decodePointer, dp) => {
    if (decodePointer >= s.length) {
      return 1; // "" is a valid decomposition
    }
  
    // Subproblem already solved and has a value
    if (dp[decodePointer] > -1) {
      return dp[decodePointer]; 
    }
  
    let totalDecompositions = 0;
  
    // For substrings of length 1 and 2
    for (let i = 1; i <= 2; i++) {
      if (decodePointer + i <= s.length) {
  
        // Grab the substring of length 1 and 2 if they exist starting from decodePointer
        const snippet = s.substring(decodePointer, decodePointer + i);
  
        // If the snippet is valid
        // Make recursive call
        // And assign its value to totalDecompositions
        if (isValid(snippet)) {
          totalDecompositions += numDecodings(s, decodePointer + i, dp);
        }
      }
    }
  
    // Record subproblem answer to decompositions from (decodePointer)...(s.length - 1)
    dp[decodePointer] = totalDecompositions;
  
    
    return dp[decodePointer];
  }
  
  // Helper function to check weather the snippet is valid
  const isValid = (s) => {
    
    // Case when string is empty or 0 occur at begining 
    if (s.length == 0 || s.charAt(0) == '0') {
      return false;
    }
  
    const value = parseInt(s);
  
    // Value of valid snippets lie between 0 and 26
    return value >= 1 && value <= 26;
  }









































/*BELOW THIS LINE ARE NOT WORKING SOLUTIONS*/
var numDecodings = function(s) {
    if(s[0] == '0') return 0
    if (!s.length) return 0

    let dp = new Array(s.length).fill(0)
    

    for (let i = s.length - 1; i >= 0; i--){
        if (s[i] == '0') {
            dp[i] = 0
        } else {
            dp[i] = dp[i + 1]
        }

        let tempStr = s[i + 1] + s[i]
        if (parseInt(tempStr) <= 26){
            dp[i] += dp[i + 2]
        }
    }
    return dp[0]
}






//my initial try
var numDecodings = function(s) {
    if (!s.length) return 0
    if (s[0] == '0') return 0
    
    let result = new Array(s.length + 1).fill(0)
    
    //each number and the numbers next to it
    //at each idx of s check self and one after it to count total combinations up to that point
    
    //each time check if self + self -1 <=26 and greater than self 
    
    let totalSelf = 0
    let totalWithNext = 0
    let total = 0
    
    
    
    for (let i = 0; i < s.length; i++){
        if (s[i] != '0') total++
        
        let temp = parseInt(s[i]) + parseInt(s[i+1])
        
        if(temp <= 26) total++
        
        
        
    }
    
    return total
    
};
