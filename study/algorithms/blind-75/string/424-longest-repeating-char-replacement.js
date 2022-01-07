// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
//this video explains sliding window logic well:
'https://www.youtube.com/watch?v=gqXU1UyA8pk'

/*
left pointer, right pointer, visited obj, maxCharCount (IN THE GIVEN WINDOW)

if current window length - maxCharCount (most commonly occurring character) is greater than k, slide left pointer to the left and decrement its count in visited obj

*/

//my only update was to use maxLen variable to track max length instead of just returning right - left
//I found this more intuitive and updated answer still beats on 91.55%
const characterReplacementNEW = (s, k) => {
    let left = 0
    let right = 0

    let visited = {}
    let maxCharCount = 0
    let maxLen = 0
    
    while (right < s.length){
        
        let char = s[right]
        let curWindowLen = right - left + 1

        visited[char] = visited[char] ? visited[char] + 1 : 1

        maxCharCount = Math.max(visited[char], maxCharCount)

        //if there aren't enough k replacements to make a contiguous string, move left up
        if (curWindowLen - maxCharCount > k){
            visited[s[left]]--
            left++
        }

        maxLen = Math.max(right - left + 1, maxLen)
        right++
    }

    return maxLen
}



//this sliding window solution with explanation
'https://leetcode.com/problems/longest-repeating-character-replacement/discuss/872604/99-Javascript-Solution-with-Explanation'




/*
Maintain left and right pointer, max instances of a single char, and visit counts for each char.
for each char in string
increment visit count for this char
if new visit count is higher than max, update max
if length of current string without max char count is greater than k,
then we know the new char made it such that there are more chars missing than can be replaced by k,
so we will remove the first char
and increment left pointer
increment right pointer to look at next char.
In the end, the answer is whatever the window size is. This is because we never shrink the window size.
As we look at new chars, we increase the window size.
Once we see we can no longer increase due to limitation of k, we slide the window forward.
In these inbetween states, it's possible the window doesn't span a valid subset,
but that doesn't matter because the window size at one point did span a valid set.
Instead, we wait until there's a possibility of a better set, which is when there is a substring with more instances of some char.
*/

/*
comment explanation why in the conditional it's right - left + 1:

Hey. right - left + 1 is the length of the current string segment we're looking at. The indexing doesn't matter so much here, as a string of length 1 will have equivalent min and max indices regardless the index basis, which will mean equivalent max - min index difference of 0.

right - left tells us the distance FROM charA TO charB, how many steps we had to take to get there. What we really want is distance FROM charA PAST charB. The +1 accomplishes this last char inclusion for us.
*/


const characterReplacement2 = (s, k) => {
    console.log('s',s)
    console.log('k',k)
    let left = 0;
  let right = 0;
  let maxCharCount = 0;
  const visited = {};

  while (right < s.length) {
    const char = s[right];
    
    //if there's an entry for visited char, add 1 to it, otherwise initialize it to 1
    visited[char] = visited[char] ? visited[char] + 1 : 1;

    //if count for visited char is greater than maxCharcount maxCharCount = number of times that char has been visited (visited[char])
    if (visited[char] > maxCharCount) maxCharCount = visited[char];

    //if right pointer - left pointer + 1 - maxCharCount is greater than k
    console.log('left',left) 
    console.log('right',right)
    console.log('visited', visited)
    console.log('maxCharCount',maxCharCount)
    console.log('right - left', right - left)  
    if (right - left + 1 - maxCharCount > k) {
        console.log('hit condition')
      visited[s[left]]--;
      left++;
    }

    right++;
  }

  console.log('VALS TO BE RETURNED')
  console.log('right', right)
  console.log('left', left)
  return right - left;
};


let s1 = "ABAB", k1 = 2

console.log(characterReplacement2(s1, k1))


//my try at sliding window (timed out)

/*
input: string (uppercase), k int
output: int (lengthn of longest contiguous string of repeating chars after k operations)


//want to find the most repeated character and see if 
    //there is a space between instances of the char that can be connected in k operations
    //if not, there are adjacent repeating chars and k operations could be done at the start or at the end
//if not preexistng repeated char, then longest repeated will just be k + 1 (k switches for a single instance char)
//if k is greater than or equal to s.length - 1 , max len is s.length


*/
function characterReplacement(s, k){
    if (k >= s.length) return s.length
    let set = new Set(s)
    if(s.length == set.size) return k+1

    /*2 pointers
    loop through chars
    left pointer and right pointer*/

    let maxLen = 0 
  
   

    for (let l = 0; l < s.length; l++){
        r = l+1

        //if not equal
        while(s[l] !== s[r] && r < s.length){
            r++
        }

        if(r >= s.length - 1) continue
       
        //if equal
        if (s[l] == s[r]){
            //adjacent
            if(r - l == 1){
                while(s[l] == s[r] && r < s.length){
                    r++
                }

                let add = r
                while(add < s.length && add <= k){
                    add++
                }

                maxLen = Math.max(add - l, r - l, maxLen)
                l = r

            }

            //not adjacent
            //if there is space between them that is k or less
            //if there is space between them that is greater than k
            //if they are adjacent
            //
        }



    }






}