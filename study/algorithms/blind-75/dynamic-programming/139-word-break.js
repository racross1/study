

//dynamic programming and BFS both seem to work. Below are 2 Dp solutions (that seem to start at different ends of the string, but have similar logic)
//see BFS and DFS solutions as well
//how do you know this can be BFS and DFS?

//dynamic programming approach from this video:
'https://www.youtube.com/watch?v=Sx9NNgInc3A'

 var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length + 1).fill(false)
    //base case
    dp[s.length] = true
    
    //start at last index and keep going until we get to index 0
    for (let i = s.length; i >= 0; i--){
        for (let word of wordDict){
            //check if it is in s for us to compare them
            //and check if s from i to length of word being looked at are equal
            if (i + word.length <= s.length && s.substring(i, i + word.length) == word){
                dp[i] = dp[i + word.length]
                
                //if dp of i is true we break out of the for loop and go to the next letter in the string.
                if (dp[i]) break
                
            }
        }
    }
    
    return dp[0]
    
};

//dp appraoch from top javascript solution on leetcode
'https://leetcode.com/problems/word-break/discuss/397927/Clean-JavaScript-solution-(BFS-Dynamic-Programming)'

const wordBreak = (s, wordDict) => {
    if (wordDict == null || wordDict.length === 0) return false;
  
    const set = new Set(wordDict);
    const dp = Array(s.length + 1).fill(false);
    dp[0] = true;
  
    for (let end = 1; end <= s.length; end++) {
      for (let start = 0; start < end; start++) {
        const w = s.slice(start, end);
        if (dp[start] === true && set.has(w)) {
          dp[end] = true;
          break;
        }
      }
    }
    return dp[s.length];
  };