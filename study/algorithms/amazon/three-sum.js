// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that 
// i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.


// Example 1:

// Input: 
let nums1 = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: 
let nums2 = []
// Output: []
// Example 3:

// Input: 
let nums3 = [0]
// Output: []
 
let nums4 = [0,0,0]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//second attempt based on explanation solution at the bottom of this page. uses 3 pointers similar to three sum closest.
//solution accepted but is 38% for time complexity
var threeSum2 = function(nums) {
    if (nums.length < 3) return []
    
    nums = nums.sort((a,b) => a-b)
    let output = []
    let target = 0

    for (let i = 0; i < nums.length - 2; i++){
        if (nums[i] > target) break 
        if (i > 0 && nums[i] === nums[i - 1]) continue


        let j = i + 1
        let k = nums.length - 1

        while(j < k){
            let sum = nums[i] + nums[j] + nums[k]

            if (sum === target) {
                output.push([nums[i], nums[j], nums[k]])

                while(nums[j] === nums[j+1]) j++
                while(nums[k] === nums[k-1]) k--

                j++
                k--
            } else if(sum < target) {
                j++

            } else {
                k--
            }
        }
    }

    return output

}



//my attempt - not totally successful
 var threeSum = function(nums) {
    if (nums.filter(n=> n !== 0).length < 1) return []
    
    let output = [] 
    numsToZero = nums.map(n => 0-n)
    //each of these become targets for two sum
    let setsSeen = new Set()


    //for no duplicates, set for seen values or filter dupes in beginning with set?
    numsToZero.forEach((n, idx) => {
        let target = n
        let previousVals = {}
        for (let i = 0; i < nums.length; i++){
            if (idx === i) continue 

            let currentNum = nums[i]
            let needed = target - currentNum 
            let index2 = previousVals[needed]

            if (index2 != null){
                let triplet = [0-n, needed, currentNum]
                let sortedSet = triplet.sort((a,b) => a - b).join('')
                if(!setsSeen.has(sortedSet)) {
                    setsSeen.add(sortedSet)
                    output.push(triplet)
                }
        
            } else {
                previousVals[currentNum] = i 
            }
        }
    })

    return output
}

    // for (let i = 0; i < nums.length; i++){
    //     let prevVals = {}
    //     for(let j = 0; j < nums.length; j++){
    //         let currentNum = nums[j]
    //         let needed = numsToZero[i] - currentNum
    //         let neededIdx = prevVals[needed]

    //         if (neededIdx != null){
    //             console.log(i, j, neededIdx)
    //         }

            // if(another in map){
            //     if(i !== j && nums[i] !== nums[j] !== another){
            //     console.log(nums[i], nums[j], another)
            //     }
            // }

            // map[nums[j]] = j
//         }
//     }
// }


//     let prevVals = {}
    
//     for (let i = 0; i < nums.length; i++){
//         let currentNum = nums[i]
//         let needed = target - currentNum
//         let neededIdx = prevVals[needed]
        
//         if (neededIdx != null) {
//             return [neededIdx, i]
//         } else {
//             prevVals[currentNum] = i
//         }
//     }
    
// };

    // numsToZero.forEach((n, idx) => {
    //     for (let i = 0; i < nums.length; i++){
    //         const another = n - 


    //         map[n-nums[i]] = i
    //         //so this is the number we are looing for

    //     }
        
    // })
    

    
// };




var twoSum = function(nums, target) {
    const comp = {};
    for(let i=0; i<nums.length; i++){
   
        
        if(comp[nums[i]]>=0){
            return [comp[nums[i]] , i]
        }
        
        comp[target-nums[i]] = i
    }
    
};

console.log(threeSum2(nums1))
console.log(threeSum2(nums2))
console.log(threeSum2(nums3))
console.log(threeSum2(nums4))



//solution with explanation

function threeSum(nums) {
	const results = []

	// obviously irrelevant if we don't have at least 3 numbers to play with!
	if (nums.length < 3) return results

	// having the numbers in ascending order will make this problem much easier.
	// also, knowing the overall problem  will take at least O(N^2) time, we can
	// afford the O(NlogN) sort operation
	nums = nums.sort((a, b) => a - b)

    // if the question asks us for a custom target, we can control it here
	let target = 0

	for (let i = 0; i < nums.length - 2; i++) {
		// `i` represents the "left" most number in our sorted set.
		// once this number hits 0, there's no need to go further since
		// positive numbers cannot sum to a negative number
		if (nums[i] > target) break

		// we don't want repeats, so skip numbers we've already seen
		if (i > 0 && nums[i] === nums[i - 1]) continue

		// `j` represents the "middle" element between `i` and `k`.
		// we will increment this up through the array while `i` and `k`
		// are anchored to their positions. we will decrement `k` for
		// for each pass through the array, and finally increment `i`
		// once `j` and `k` meet.
		let j = i + 1

		// `k` represents the "right" most element
		let k = nums.length - 1
		
		// to summarize our setup, we have `i` that starts at the beginning,
		// `k` that starts at the end, and `j` that races in between the two.
		//
		// note that `i` is controlled by our outer for-loop and will move the slowest.
		// in the meantime, `j` and `k` will take turns inching towards each other depending
		// on some logic we'll set up below. once they collide, `i` will be incremented up
		// and we'll repeat the process.

		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k]

			// if we find the target sum, increment `j` and decrement `k` for
			// other potential combos where `i` is the anchor
			if (sum === target) {
				// store the valid threesum
				results.push([nums[i], nums[j], nums[k]])

				// this is important! we need to continue to increment `j` and decrement `k`
				// as long as those values are duplicated. in other words, we wanna skip values
				// we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
				// [[-2,0,2], [-2,0,2]].
				//
				// (i'm not a fan of this part because we're doing a while loop as we're
				// already inside of another while loop...)
				while (nums[j] === nums[j + 1]) j++
				while (nums[k] === nums[k - 1]) k--

				// finally, we need to actually move `j` forward and `k` backward to the
				// next unique elements. the previous while loops will not handle this.
				j++
				k--

			// if the sum is too small, increment `j` to get closer to the target
			} else if (sum < target) {
				j++

			// if the sum is too large, decrement `k` to get closer to the target
			} else { // (sum > target)
				k--
			}
		}
	}

	return results
};