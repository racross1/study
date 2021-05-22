let s1 = 'aba'
let n1 = 10
// Sample Output 0

// 7

// pointer that skips back to end 

function repeatedString(s, n) {
    // Write your code here
    let pointer = 0
    let repeated = ''
    let hash = {}
    let num = n-3

    for (let i = 0; i < s.length; i++){
        if (hash[s[i]] == null) hash[s[i]] = 0
        hash[s[i]]++

        if (hash[s[i]] > 1) {
            repeated = s[i]
            break
        }
    }

    for(let i=0; i < num; i++) {
        s += s[pointer]
        if(pointer === s.length-1) {
            pointer = 0
        } else {
            pointer++
        }

    }
    return s.split('').filter(n=> n == repeated).length
}



console.log(repeatedString(s1, n1))