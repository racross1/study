
/*
Time complexity of below

m = target.length
n = wordBank.length

height of decision tree is m

there are O n^m subarrays so you can't do any better than exponential time complexity for this one

Time complexity: O n^m
Space: O(m)


*/

function allConstruct(target, wordBank){
    if (target === '') return [[]]

    const result = []

    for (let word of wordBank){
        //if word is a prefix of current target
        if(target.indexOf(word) === 0){
            //suffix will be the rest of the target
            const suffix = target.slice(word.length)
            //recursively get all the ways to get that suffix
            const suffixWays = allConstruct(suffix, wordBank)
            //after you get suffix ways, concatenate prefix onto it
            const targetWays = suffixWays.map(way => [word, ...way])
            //spread target ways because it's a 2D array and if you were to just push it, it would make a 3D array
            result.push(...targetWays)
        }
    }
    return result
}

console.log(allConstruct2('purple', ['purp', 'p', 'ur', 'le', 'purpl']))


/*
can optimize slightly with memoization, but this does not help true worst case
*/

function allConstruct2(target, wordBank, memo = {}){
    if (target === '') return [[]]
    if (target in memo) return memo[target]

    const result = []

    for (let word of wordBank){
        //if word is a prefix of current target
        if(target.indexOf(word) === 0){
            //suffix will be the rest of the target
            const suffix = target.slice(word.length)
            //recursively get all the ways to get that suffix
            const suffixWays = allConstruct(suffix, wordBank, memo)
            //after you get suffix ways, concatenate prefix onto it
            const targetWays = suffixWays.map(way => [word, ...way])
            //spread target ways because it's a 2D array and if you were to just push it, it would make a 3D array
            result.push(...targetWays)
        }
    }

    memo[target] = result
    return result
}