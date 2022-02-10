//Given an integer array nums, 
//return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].


//solutions seem to involve left and right pointers moving towards center

let nums1 = [1,2,3,4]

//2 passes
//first pass going left to right, on first pass you set index = to rightmult, which starts at 1. 
//Then you multiply right mult by currend index. This way you offset, so for first loop [a,b,c,d] becomes [b*d*c,d*c,d,1]
//basically it multiplies all idxs by the idxs after them in the order
//on second pass you go from left to right starting at 1 which again offsets, this time so that each idx is multipled by all the idxs before itself
//
var productExceptSelf = function(nums) {
    var output = [];
    var leftMult = 1;
    var rightMult = 1;
    for (var i=nums.length - 1; i >= 0; i--) {
        console.log(`1. output before: ${output}`)
        output[i] = rightMult;
        console.log(`2. output after set to rightMult: ${output}`)
        rightMult *= nums[i];
        console.log(`3. rightMult: ${rightMult}`)
    }
    for (var j=0; j < nums.length; j++) {
        console.log(`1. left output before: ${output}`)
        output[j] *= leftMult;
        console.log(`2. output after set to left: ${output}`)
        leftMult *= nums[j];
        console.log(`3. leftMult: ${leftMult}`)
    }
    return output;
};

productExceptSelf(nums1)

// var productExceptSelf = function(nums) {
//     const result = [];
//     let productSoFar = 1;
//     for (let i = 0; i < nums.length; i++) {
//         result[i] = productSoFar
//         productSoFar *= nums[i]
//     }
//     productSoFar = 1
//     for (let j = nums.length-1; j >= 0; j--) {
//         result[j] *= productSoFar
//         productSoFar *= nums[j]
//     }
//     return result;
// };