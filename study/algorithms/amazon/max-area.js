// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
//n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

// find x and y such that 
// Math.min(x,y) * x-y
 
let height1 = [1,8,6,2,5,4,8,3,7]
//output: 49

let height2 = [1,1]
// Output: 1


// Input: 
let height3 = [4,3,2,1,4]
// Output: 16


// Input: 
let height4 = [1,2,1]
// Output: 2

let height5 = [1,8,6,2,5,4,8,3,7]

/**
 * @param {number[]} height
 * @return {number}
 */

//my solution which seems to work here but times out in leetcode console
//see below for a solution that works using 2 pointers - one starting from beginning, one starting from end. for each one
//we want to get rid of the smaller side in each case, so whichever is the shorter side, we iterate that one
 var maxArea = function(height) {
    let waterHoldings = []
    
    for (let i = 0; i < height.length; i++){
        for(let j = 0; j < height.length; j++){
            let localMax = 0
            let left = i
            let right = i+j

            let waterVol = (i - j) * Math.min(height[i], height[j])

            if(waterVol > localMax) {
                localMax = waterVol

            }

            waterHoldings.push(localMax)

            

        }

     }

     return waterHoldings.reduce((a,b) => Math.max(a,b))
};



console.log(maxArea(height1))
console.log(maxArea(height2))
console.log(maxArea(height3))
console.log(maxArea(height4))
console.log(maxArea(height5))



// Before we go on, we need to look at the given test cases, and make some facts up to start writing our code:

// We can see that the area of the container is limited by the smallest side, so we need to know what the smallest side is every iterations
// The area of a container is (right - left) multiplied by the smallestSide.
// If the area is greater than our result, we have a new result
// When moving the left or right pointer, we want to get rid of the smaller side, so iterate from that side
// With this we can do the problem in O(n) time and constant space by having a left and right pointer, and moving these pointers inward.

const maxArea = (height) => {
	let result = 0,
		left = 0,
		right = height.length - 1;

	while (left < right) {
		let smallestSide = Math.min(height[left], height[right]);
		let area = (right - left) * smallestSide;

		if (area > result) result = area;

		if (height[left] < height[right]) left++;
		else right--;
	}

	return result;
};
