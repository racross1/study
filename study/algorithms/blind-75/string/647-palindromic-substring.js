// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

//implementatoin from this video:
'https://www.youtube.com/watch?v=4RACzI5-du8'


//condensation of the below using helper function
function countSubstring2(s){
    let res = 0
    for(let i = 0; i < s.length; i++){
        //odd palindromes
        res += countPals(s, i, i)
        //even palindromes
        res += countPals(s, i, i+1) 
    }
    return res
}

function countPals(s, l , r){
    let res = 0
    while (l >= 0 && r < s.length && s[l] == s[r]) {
        res += 1
        l--
        r++
    }
    return res

}

//get all substrings that a char is the middle of
//want to get odd and even length palindromes
//check for odd palindromes set l and r to i and expand out, increment while equal and in bounds
//check for even, set l to i and r to i + 1 and expand out

function countSubstring2(s){
    let res = 0
    for(let i = 0; i < s.length; i++){
        let l = r = i

        //for palindromes of odd length
        //while in bounds and chars are equal
        //increment result and expand (i.e. left out left and right out right)
        while (l >= 0 && r < s.length && s[l] == s[r]) {
            res += 1
            l--
            r++
        }

        //even palindromes
        //don't need a separate for loop,
        //just need to set left to i and right to i+1
        //and then just copy and paste separate while loop
        l = i
        r = i + 1
        while (l >= 0 && r < s.length && s[l] == s[r]) {
            res += 1
            l--
            r++
        }

    }
    return res

}


//my implementation (works but is only faster than ~20%)
function countSubstrings(s){
	if (s.length === 1) return 1
	let count = s.length

	for (let left = 0; left < s.length - 1; left++){
        for (let right = left + 1; right < s.length; right++){
            if (isPalindrome(left, right, s)) count++
        }
    }
    return count
}

function isPalindrome(l, r, s){
	while(l <= r) {
		if(s[l] != s[r]) return false
		l++
		r-- 
    }
    return true
}



let s  = "aaa"

console.log(countSubstrings(s))