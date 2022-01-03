//**not sure why this one under graphs in my blind 75 list

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.



// create Set from nums. initialize max variable. 
// Then loop through set: if num - 1 exists, continue (we want to start at beginning of a given sequence), 
// otherwise let currentmax = 1,  let current num = num. 
// While set has currentNum+1 current max ++ current num++. 
// At end of loop get math.max(current max, max)

function longestConsecutive(nums) {
    let max = 0
    let set = new Set(nums)

    for (let num of set){
        if (set.has(num-1)) continue

        let curMax = 1
        let curNum = num

        while(set.has(curNum + 1)){
            curMax++
            curNum++
        }

        max = Math.max(max, curMax)

    }
    return max
}