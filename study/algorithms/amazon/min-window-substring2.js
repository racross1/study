'https://medium.com/outco/how-to-solve-sliding-window-problems-28d67601a66'

// 1) Fast/Slow
// These ones have a fast pointer that grows your window under a certain condition. 
// So for Minimum Window Substring, you want to grow your window until you have a window that contains 
// all the characters you’re looking for.
// It will also have a slow pointer, that shrinks the window. 

// Once you find a valid window with the fast pointer, you want to start sliding the slow pointer up until you no longer have a valid window.
// So in the Minimum Window Substring problem, once you have a substring that contains all the characters you’re looking for, 
// then you want to start shrinking it by moving the slow pointer up until you no longer have a valid substring 
// (meaning you no longer have all the characters you’re looking for)



// What we need:
// 1) A result tuple (or two-element array) that represents the start and end index of the shortest substring that contains all the characters. 
// Initialized to the largest possible range (for example, [-Infinity, Infinity].
// 2) A hashMap to keep track of how letters in the set you’ve seen in the current window, 
// initialized with all the characters in the set as keys, and all the values as 0.
// 3) A counter to keep track of any time we see a new letter from the set when we grow the window, 
// or lose a letter from the set when we shrink the window. Initialized to the number of characters we are looking for.
// 4) A fast and slow pointer, both initialized to 0.



// Then all we do is have a for loop where the fast pointer increments every round.
// Within that for loop, if we see a character from the hashMap, we increment its value in the map.
// If its value was a 0 in the hash map before, then we decrement the number of characters missing. 
// But if we have repeats of a character we’re searching for we don’t decrement the counter.
// Once you’ve seen all the characters you’re looking for, that counter will reach 0 and

// Then we have a while loop within the for loop that only runs while the number of counter is 0.
// Within that while loop, if the difference between our fast and slow pointer is less than the difference 
// between what is stored in our result tuple, then we can replace that tuple with a new smallest window. 
// By default, the first time we find a valid window, it will update.

// Then all we do is increment our slow pointer. If we see a character in our set, 
// then we need to decrement its value in the hashMap by 1, as it is moving out of our window.
// If its value in the hashMap reaches 0, then the number of characters we are missing now increments to 1, 
// and we will break out of the while loop next round.

// Example 1:

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


//example from medium post linked above, commented to try to get understanding of process

function minimumWindowSubstring(str, substr) {
    //hash map of letters seen so far in current window, will be initialized with all the letters needed as keys
    //all values will be 0
    let lettersSeen = {};
    let lettersNeeded = {};
    let lettersMissing = 0;
  
    //iterating through our substr (target) to initialized our variables
    for(let i = 0; i < substr.length; i++) {
        //if current index of substring is already in letterNeeded obj
        //increment value of that element in lettersNeeded obj
      if(substr[i] in lettersNeeded){
        lettersNeeded[substr[i]] += 1;
    //otherwise (i.e. current element of substring is not found in letters needed)  
    } else {
        //element added to lettersNeeded as key and val sset to 1
        lettersNeeded[substr[i]] = 1;
        //element added to lettersSeen as key and val is set to 0
        lettersSeen[substr[i]] = 0;
        //increment letters missing
        //notably, this only seems to be counting unique letters missing
        lettersMissing += 1;
      }
    }
  
    //fast and slow pointer both initialized at 0
    let fast = 0;
    let slow = 0;
  
    //result tuple for start and end of substring
    let result = [-Infinity, Infinity];
  
    //fast pointer incrementing by 1 each time through string
    for(fast; fast < str.length; fast++) {
  
        //if element at fast index is in lettersNeeded obj
      if(str[fast] in lettersNeeded) {
        //increment that element in the letters seen obj
        lettersSeen[str[fast]] += 1;
        //further, if the amount of the counter for this element in letters seen is equal to the count for the letter in lettersNeeded
        //you will decrement letters missing counter by 1
        //so either way you are incrementing seen val of this letter, however since letters missing counter is unique letters missing
        //you only want to decrement it if the count of that element in letters seen matches the count for that element in letters needed
        if(lettersSeen[str[fast]] === lettersNeeded[str[fast]]) {
            //decrement letters missing counter by 1
          lettersMissing -= 1;
        }
      }
      
      //this while loop is within the fast pointer traversing for loop
      //after you've gotten letters missing count to 0, while letters missing count is 0
      while(lettersMissing === 0) {
        //if the distance between fast and slow pointer is less than the result bounds
        if(fast - slow < result[1] - result[0]) {
            //reassign result values to slow and fast values
          result[0] = slow
          result[1] = fast
        }
        //if the element at the slow pointer is in lettersNeeded array
        console.log('str[slow]', str[slow])
        if(str[slow] in lettersNeeded) {
          //decrement the entry for that element in the letters seen array
          console.log('before decrement lettersSeen[str[slow]]', lettersSeen[str[slow]])  
          lettersSeen[str[slow]] -= 1;
            console.log('after decrement lettersSeen[str[slow]]', lettersSeen[str[slow]])
            console.log('lettersNeeded[str[slow]])', lettersNeeded[str[slow]])
            //if the element entry in letters seen for the element at the slow index is greater than its entry in letters needed
            //basically this is checking if there is an extra copy of the letter in the seen array, that we can subtract from and still have letters we need
          if(lettersSeen[str[slow]] < lettersNeeded[str[slow]]) {
            //increment letters missing by 1 (which will break out of the while loop)
            //will this break out of the while loop before incrementing slow variable below?    
            lettersMissing += 1;
          }
        }
        console.log('you still hit the slow++')
        slow++;
      }
    }
  
    return result[0] === -Infinity ? "" : str.slice(result[0], result[1] + 1);
  }

console.log(minimumWindowSubstring(s1, t1))
console.log(minimumWindowSubstring(s2, t2))
console.log(minimumWindowSubstring(s3, t3))