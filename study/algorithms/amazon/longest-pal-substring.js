


//having a hard time understanding the below
// Expand Around Center solution
// T O(N^2)
// S O(1)

//for this one, for each increment of i
//i is the left bound, and the right bound is i + j. where i = 0 and j = 0, 1, 2, 3, 4, 5, and therefore 
//right = 0 and left = 0, 1, 2, 3, 4, 5 
//right = 1 and left = 1, 2, 3, 4, 5

//while j is less than 2 so that you account for odd and even length palindromes?

//while loop so that while s[left] (s[i]) exists, and while s[i] === s[i+j] decrement left and increment right
var longestPalindrome = function(s) {
    var max = '';
    for (var i = 0; i < s.length; i++) {
      // this loop is to take into account 
      // different palindromes like 'aba' and 'abba'
      for (var j = 0; j < 2; j++) {
        var left = i;
        var right = i + j;
        while (s[left] && s[left] === s[right]) {
          left--;
          right++;
        }
        // here imagine we get into string like
        // "sabbad", then
        // right = 5
        // left = 0
        // and actual length of "abba" should be "4"
        // 5 - 0 - 1 === 4
        if ((right - left - 1) > max.length) {
          max = s.substring(left + 1, right);
        }
          
      }
    }
    return max;
  };


//   Idea comes from optimizing recursive solution by remembering previous result. Let's say we have a 2D array dp. In each cell, it indicates whether range(i, j) can become a palindrome or not, where i, j denotes start and end index of the given string s. We can build upon base cases and expand from there:

//   base case with one character - dp[i][i] = true when i === j
//   base case with two characters - dp[i][i+1] = true when s[i] === s[i+1]
//   expand case with three or more characters - dp[i][j] = dp[i+1][j-1] && s[i] === s[j]
//   Here's an example of dp with "babad" after two base cases
'https://leetcode.com/problems/longest-palindromic-substring/discuss/428331/Javascript-DP'


  // 2D DP
var longestPalindrome = function(s) {
    
	if(s.length <= 1) return s;
	
	// construct a 2D array
    const dp = [...new Array(s.length + 1)].map(_ => new Array(s.length + 1).fill(false));
	
    let lps = '';
    
	// base case for one character
    for(let i = 0; i < s.length; i++) {
        dp[i][i] = true;
        lps = s[i];
    }
    
	// base case for two characters
    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i + 1]) dp[i][i+1] = true;
        if(dp[i][i+1]) lps = s.substring(i, i + 2);
    }

    // expand to three or more characters
    for(let i = s.length - 1; i >= 0; i--) {
        for(let j = i + 2; j < s.length; j++) {
            dp[i][j] = dp[i+1][j-1] && s[i] === s[j];
            if(dp[i][j]) lps = lps.length < (j - i + 1) ? s.substring(i, j + 1) : lps;
        }
    }
    
    return lps;
}



//attempted implementing one from this video:
//DOES NOT WORK
'https://www.youtube.com/watch?v=lo8n0ivbhog'

var largestPalindrome = function(str){
    if(str.length < 1 || str === null) return ''

    let longest = ''

    for (let i = 0; i<str.length; i++){
        let oddPal = expandfromCenter(str, i, i)
        let evenPal = expandfromCenter(str, i+1, i)

        if(oddPal.length > longest.length){
            longest = oddPal
        }

        if(evenPal.length > longest.length){
            longest = evenPal
        }

    }
return longest
   
}


function expandfromCenter(str, left, right){
    let i = 0
    while(str[lef-i] && str[left-i] === str[right + i]){
        i++
    }
    i--

    return str.slice(left - i, right + i + i)

}