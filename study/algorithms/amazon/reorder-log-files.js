// You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

// There are two types of logs:

// Letter-logs: All words (except the identifier) consist of lowercase English letters.
// Digit-logs: All words (except the identifier) consist of digits.
// Reorder these logs so that:

// The letter-logs come before all digit-logs.
// The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
// The digit-logs maintain their relative ordering.
// Return the final order of the logs.

///**** localeCompare seems important! study it and 
 

// Example 1:

// Input: 
let logs1 = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
let output1 = ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
// Explanation:
// The letter-log contents are all different, so their ordering is "art can", "art zero", "own kit dig".
// The digit-logs have a relative order of "dig1 8 1 5 1", "dig2 3 6".
// Example 2:

// Input: 
let logs2 = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
let output2 = ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
 

let logs3 = ["j mo", "5 m w", "g 07", "o 2 0", "t q h"]
let output3 = ["5 m w","j mo","t q h","g 07","o 2 0"]

// Output:
// ["j mo","5 m w","t q h","g 07","o 2 0"]
// Expected:
// ["5 m w","j mo","t q h","g 07","o 2 0"]


// Constraints:

// 1 <= logs.length <= 100
// 3 <= logs[i].length <= 100
// All the tokens of logs[i] are separated by a single space.
// logs[i] is guaranteed to have an identifier and at least one word after the identifier.

/**
 * @param {string[]} logs
 * @return {string[]}
 */



//another solution with localeCompare

var reorderLogFiles4 = function(logs) {
    
    function getLog(str){ // get after-identifier part of log
        return str.slice(str.indexOf(' ')+1);
    }    
    
    function isDigitalStr(str){  // the condition is that either ALL str[i] are digits or they ALL are symbols
                                // so we may check str[0] only
        return (str[0] >= '0' && str[0] <= '9') ? true : false;
    }
    
    function compare(a, b){  // main comparing function for 2 strings, if they're equal then compares identifiers
        let res = getLog(a).localeCompare(getLog(b));
        return (res == 0) ? a.slice(0, a.indexOf(' ')).localeCompare(b.slice(0, b.indexOf(' '))) : res;
    }
    
    let resLogs = []; // the resulting array: all digital logs will go into it befor symbol logs
    let symbolLogs = []; // the array for sorting symbol logs

    for(let i = 0; i < logs.length; i++){
        if(isDigitalStr(getLog(logs[i])))
            resLogs.push(logs[i]);
        else
            symbolLogs.push(logs[i]);
    }

    return [...symbolLogs.sort(compare), ...resLogs];
}


//solution 1 in JS. Uses Locale compare
const reorderLogFiles3 = (logs) => {
    const body = s => s.slice(s.indexOf(' ') + 1); // get the body after identifier
    const isNum = c => /\d/.test(c);
  
    // if body same then compare identifier
    const compare = (a, b) => {
      const n = body(a).localeCompare(body(b));
      if (n !== 0) return n;
      return a.localeCompare(b);
    };
  
    const digitLogs = [];
    const letterLogs = [];
    for (const log of logs) {
      if (isNum(body(log))) digitLogs.push(log);
      else letterLogs.push(log);
    }
    return [...letterLogs.sort(compare), ...digitLogs];
  };



//me trying to refactor for better time complexity:
//result faster than 97% (much faster than others). uses localeCompare.

 var reorderLogFiles2 = function(logs) {

    let digitLogs = []
    let letterLogs = []

    const getLog = function(str){
        return str.slice(str.indexOf(' ') + 1)
    }

    const isNum = function(str){
        return getLog(str).match(/\d/)
    }

    const compare = function(a,b) {
        let result = getLog(a).localeCompare(getLog(b))
        return result !== 0 ? result : a.localeCompare(b)

    }

    logs.forEach(log => {
        isNum(getLog(log)) ? digitLogs.push(log) : letterLogs.push(log)

    })

    return [...letterLogs.sort(compare), ...digitLogs]
}


//My first solution: works but is slow. See if I can refactor the sort
 var reorderLogFiles1 = function(logs) {
     //how to distinguish letter and digit logs
     //how to sort lexicographlly in each
     //start with separate data structure and then see if can do it with map or something

     let digitLogs = []
     let letterLogs = []

     logs.forEach(log => {
        let split = log.split(' ')

        split[1].match(/[0-9]/) ? digitLogs.push(log) : letterLogs.push(log)

     })

     //implement O (N) sort?

    //  console.log(letterLogs)
    //  letterLogs.forEach(ll => {
    //      console.log(ll.split(' ').slice(1).join(' '))
    //  })

     
     let sortedLetters = letterLogs.sort((a,b) => a.split(' ').slice(1).join(' ') > b.split(' ').slice(1).join(' ') ? 1 : -1)


     return [...sortedLetters, ...digitLogs]
     
 
};

//time complexity O (n log n) => could shorten this to ) O log N 
//space complexity 

console.log(reorderLogFiles2(logs1))
let joinedLogs1 = reorderLogFiles2(logs1)
console.log(joinedLogs1.join('') == output1.join(''))

console.log(reorderLogFiles2(logs2))
let joinedLogs2 = reorderLogFiles2(logs2)
console.log(joinedLogs2.join('') == output2.join(''))

console.log(reorderLogFiles2(logs3))
let joinedLogs3 = reorderLogFiles2(logs3)
console.log(joinedLogs3.join('') == output3.join(''))

