//Given a string s, return the first non-repeating character in it and return its index. 
//If it does not exist, return -1.
'https://leetcode.com/explore/interview/card/amazon/76/array-and-strings/480/'



// Example 1:

// Input: 
s1 = "leetcode"
// Output: 0
// Example 2:

// Input: 
s2 = "loveleetcode"
// Output: 2
// Example 3:

// Input: 
s3 = "aabb"
// Output: -1
 

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */

//Another js solution which uses hash map
//uses new Map() object. apparently objects often used for maps because they're very similar, but here's an explanation 
//of where they're different and why/when you might want to use new Map()
'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map'

//looks like the below just runs through and checks if map has s[i] then set map entry for this character to 2
//otherwise set it to 1
//then loop through map and check if map has s[i] and map get s[i] == 1 (i.e. its entry value is 1) then return index. Otherwise return 0
//i think I prefer the 2 approaches below (mine and the other for loop)

var firstUniqChar = function(s){
    var map=new Map();
    for(i=0;i<s.length;i++){
         if(map.has(s[i])){
             map.set(s[i],2);
         }
         else{
             map.set(s[i],1);
         }
     }

    for(i=0;i<s.length;i++){
        if(map.has(s[i]) && map.get(s[i])===1){
            return i;
        }
    }
    return -1;
 }



//another js solution which uses lastIndexOf. Clever because it tests if index of is equal to last index of
var firstUniqChar2 = function(s) {
    for(i=0;i<s.length;i++){
        if (s.indexOf(s[i])===s.lastIndexOf(s[i])){
           return i;
       } 
    }
    return -1;
 };



//my solution, beats on 93% for time complexity
 var firstUniqChar = function(s) {

    //new set for seen
    //if not in set then check if s slice from current index plus 1 contains it

    const seen = new Set()

    for (let i = 0; i < s.length; i++){
        if (!seen.has(s[i]) && !s.slice(i+1).includes(s[i])){
            return i
        } else {
            seen.add(s[i])
        }

    }

    return -1
    
};



console.log(firstUniqChar(s1))
console.log(firstUniqChar(s2))
console.log(firstUniqChar(s3))