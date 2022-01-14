// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


//see note in google sheet - pretty self explanatory
function isAnagram(s, t){
	if (s.length !== t.length) return false
    let hash = {}

	//1 loop to increment

	for (let char of s){
       if (!hash[char]) hash[char] = 0
        hash[char]++
    }

    //1 loop to decrement
    for (let char of t){
        if (!hash[char]){
            return false
        }
        hash[char]--	
    }
		
	
	let nums = Object.values(hash)
    
    //1 loop to check 0s
	for (let num of nums){
		if (num !== 0) return false
    }

    return true
}
