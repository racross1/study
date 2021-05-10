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
//very slow solution
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