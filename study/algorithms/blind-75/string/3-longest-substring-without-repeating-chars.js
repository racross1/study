// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

// //at each pass, i want to see if I want to add a char to my maxstring

// initialize, maxLen, maxStr, and charIndex. 
// Loop through and assing temp char to current car. 
// char index is index of cur char in maxstring. 
// if char index is greater than -1, maxstring = substring of maxstring atarting at char index + 1 
// (so that you grab the string starting after the repeated character). 
// Then add current char to maxstr, 
// and get max len (max of max string length and current maxlenth)

//the below (my implementation based on above summary)

//revised summary: 
    //init maxStr and maxLen to track answer. loop through string and each time, see if current char has an index in current max string. 
    //If it does, set max string = to substring of max string starting at index in max string after repeated character
    //then no matter what, add temp char to maxStr. then get maxLen with max of maxlen and length of maxstr

var lengthOfLongestSubstring = function(s) {
    let maxStr = ""
    let maxLen = 0

    for (let i = 0; i < s.length; i++){
        let tempChar = s[i]

        let curIndex = maxStr.indexOf(tempChar)

        if (curIndex > -1){
            maxStr = maxStr.substring(curIndex + 1)
        }

        maxStr += tempChar

        maxLen = Math.max(maxStr.length, maxLen)
    }

    return maxLen

}


//solution with sliding window
'https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/475803/JavaScript-Sliding-Window'


//mine above seems to be similar time to the sliding window below

//create seen set, longest var and l var
//loop through with right pointer, and while seen has s[r], delete s[l] and increment l pointer
//after while loop add s[r] to seen set
//then get longest with max of longest and right pointer - left pointer + 1 (+ 1 becuase we are getting length and arrs = 0th index)
//could also just do seen.size
function lengthOfLongestSubstring(s) {
    let seen = new Set();
    let longest = 0;
    let l = 0;
    for (let r = 0; r < s.length; r++) {
      while (seen.has(s[r])) {
        seen.delete(s[l]);
        l++;
      }
      seen.add(s[r]);
      longest = Math.max(longest, r - l + 1);
    }
    return longest;
  };