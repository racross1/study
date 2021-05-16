// We are given two strings, s and goal.

// A shift on s consists of taking string s and moving the leftmost character to the rightmost position. 
// For example, if s = 'abcde', then it will be 'bcdea' after one shift on s. 
// Return true if and only if s can become goal after some number of shifts on s.

// Example 1:

let s1 = 'abcde'
let goal1 = 'cdeab'
// Output: true

// Example 2:
let s2 = 'abcde'
let goal2 = 'abced'
// Output: false

let goal3 = 'ta'

// Note:
// s and goal will have length at most 100.

//input: 2 strs
//output: boolean
//what about if s and goal are equal? does it need at least 1 shift?

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
//very slow solution that does work
//mine is similar to brute force solution which is 0 (N^2) time
 var rotateString = function(s, goal) {
    if (s.length !== goal.length) return false
    if (s === goal) return true
    let i = 0

    sArr = s.split('')
    
    while(i < s.length){
    
        sArr.push(sArr.shift())
        if (sArr.join('') === goal){
            return true
        }
        i++
    }

    return false

    
};

console.log(rotateString(s2, goal2))


// Approach #2: Simple Check [Accepted]
// Intuition and Algorithm

//their explanation
// All rotations of A are contained in A+A. Thus, we can simply check whether B is a substring of A+A. 
// We also need to check A.length == B.length, otherwise we will fail cases like A = "a", B = "aa".

//my note: concat string to itself and that will contain all rotations. Then we just need to check if B is a substring of A
//Complexity Analysis

// Time Complexity: O(N^2), where NN is the length of A.
    
// Space Complexity: O(N), the space used building A+A.




// Approach #3: Rolling Hash
// Time Complexity: O(N), where NN is the length of A.

// Space Complexity: O(N), to perform the final check A_rotation == B.

// Approach #4: KMP (Knuth-Morris-Pratt)



// **********from discussion: one line solution in JS:
//I think what is happening here is that you are seeing if A is a substring of B+B (just seeing that that index exists i.e. is not -1)
//and then if that condition is met it returns bool result of saying a.length equals b.length
var rotateString = function (A, B) {
	return (B + B).indexOf(A) != -1 && A.length == B.length
};

//**** anothr that beats on 98%
//this one I do not understand yet

var rotateString = function(A, B) {
    for(let shift = 0; shift < A.length; shift++) if(A.slice(shift) + A.slice(0, shift) === B) return true;
    return B.length ? false : true;
};