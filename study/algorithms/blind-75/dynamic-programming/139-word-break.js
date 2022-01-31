// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

//from this long dp youtube video: 
'https://www.youtube.com/watch?v=oBt53YbR9Kk'

//****recursive without memoization

function wordBreak3(s, wordDict){
    if (s === '') return true
    console.log('s:', s)
    for(let word of wordDict){
        console.log('word of wordDict:', word)
        if (s.indexOf(word) === 0){
            //if word from wordDict is beginning of string
            //get suffix (i.e. remainder of string not including word found)
            const suffix = s.slice(word.length)
            //next make recursive call
            //function is going to return boolean, so if call stack returns true
            if (wordBreak(suffix, wordDict) === true){
                return true
            }
        }
    }
    console.log('false!')
    return false
}

//recursive WITH memoization (recursive dp)
//SLOW
/*
un-memoized
    Time: O n^m * m
    Space: O m^2


memoized
    Time: O n * m^2
    Space: O m^2

*/
function wordBreak4(s, wordDict, memo={}){
    if (s === '') return true
    if (memo[s]) return true
   
    for(let word of wordDict){
        
        if (s.indexOf(word) === 0){
            memo[s] = word
            //if word from wordDict is beginning of string
            //get suffix (i.e. remainder of string not including word found)
            const suffix = s.slice(word.length)
            //next make recursive call
            //function is going to return boolean, so if call stack returns true
            if (wordBreak(suffix, wordDict) === true){
                return true
            }
        }
    }
    
    return false
}


//dynamic programming and BFS both seem to work. Below are 2 Dp solutions (that seem to start at different ends of the string, but have similar logic)
//see BFS and DFS solutions as well
//how do you know this can be BFS and DFS?

//dynamic programming approach from this video:
'https://www.youtube.com/watch?v=Sx9NNgInc3A'

function wordBreak(s, wordDict, memo={}){
    if (s === '') return true
    if (s in memo) return memo[s]
   
    for(let word of wordDict){
        
        if (s.indexOf(word) === 0){
            //if word from wordDict is beginning of string
            //get suffix (i.e. remainder of string not including word found)
            const suffix = s.slice(word.length)
            //next make recursive call
            //function is going to return boolean, so if call stack returns true
            if (wordBreak(suffix, wordDict, memo) === true){
                memo[s] = true
                return true
            }
        }
    }
    
    memo[s] = false
    return false
}

//***** THIS ONE IS FASTEST SO FAR AND ONE I WAS ABLE TO IMPLEMENT, USE THIS ONE FOR STUDY */
//dp appraoch from top javascript solution on leetcode
'https://leetcode.com/problems/word-break/discuss/397927/Clean-JavaScript-solution-(BFS-Dynamic-Programming)'
//my notes: 
    /*
        create set of word dict words
        create dp array of string length + 1 length and fill with false
        base case, dp of 0 = true (blank string can be gotten no matter what)
        window: end = 1, start = 0
        end is outer loop
        start is inner loop
        dp is tracking if string up to that char is in wordDict
        so that is why condition for each word slice is if start of word is true, and this current word is in dict
        then dp[end], that is, dp ending at this index is true 

    */

const wordBreak2 = (s, wordDict) => {
    if (wordDict == null || wordDict.length === 0) return false;

    const set = new Set(wordDict);
    const dp = Array(s.length + 1).fill(false);
    dp[0] = true;
  
    console.log('s:', s)
    console.log('set:', set)
    for (let end = 1; end <= s.length; end++) {
      for (let start = 0; start < end; start++) {
        const w = s.slice(start, end);
        console.log('start:', start)
        console.log('end', end)
        console.log('w:', w)
        if (dp[start] === true && set.has(w)) {
          dp[end] = true;
          break;
        }
      }
    }
    console.log('dp:', dp)
    return dp[s.length];
  };

  //MY IMPLEMENTATION (WORKS)
  function wordBreak(s, wordDict){
    if (wordDict === [] || wordDict === null) return false
    
    let set = new Set(wordDict)
    let dp = new Array(s.length + 1).fill(false)
    
    dp[0] = true
    
    for (let end = 1; end <= s.length; end++){
        for(let start = 0; start < end; start++){
            const word = s.slice(start, end)
            if (set.has(word) && dp[start] === true){
                dp[end] = true
                break
            }
        }
    }
    
    return dp[s.length]
    
}

  let s1 = "leetcode", wordDict1 = ["leet","code"]
  let s2 = "applepenapple", wordDict2 = ["apple","pen"]
  console.log(wordBreak4(s1, wordDict1))
//   console.log(wordBreak3(s2, wordDict2))

