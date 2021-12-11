// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

 

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Example 3:

// Input: digits = [0]
// Output: [1]
 

// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9


// First, I add 1 anyway. If there is a carry-over, the new digit will also add 1. If the current digit is less than 9 then return the array.

// Last, when running over for loop, I just put fill 1 in front of the array.

//another from solutions
var plusOne = function(digits) {
    for(var i = digits.length - 1; i >= 0; i--){
         digits[i]++; 
        if(digits[i] > 9){
            digits[i] = 0;
        }else{
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
    };


// mine
var plusOne = function(digits) {
    if (digits.length === digits.filter(n => n === 9).length){
        let result = [1]
        for (let i = 1; i <= digits.length; i++){
            result.push(0)
        }
        return result
    } else {
    
    let spliceStart = digits.length - 1
   

    while (digits[spliceStart] === 9){
        spliceStart--
        console.log(spliceStart)
        console.log(digits[spliceStart])
    }

    // console.log(spliceStart)
    // console.log(digits[spliceStart])

    let num = digits.splice(spliceStart)
    let int =  parseInt(num.join(''))+ 1
    let newArr = String(int).split('')
    let newArrInts = newArr.map(n => parseInt(n))
    return [...digits, ...newArrInts]
    }
}

//SHORTER RUNTIME
/**
//  * @param {number[]} digits
//  * @return {number[]}
 */
 var plusOne = function(digits) {
    let len = digits.length
    for(var i =len-1;i >= 0; i--){
        if(digits[i] < 9){
            digits[i] = digits[i]+1
            return digits
        }
        digits[i] = 0
    }
    var arr = []
    arr[0] =1
    for(var i =1 ;i<=digits.length ;i++){
        arr.push(0)
    }
    return arr
};


//integer appears to be too big. will likely need to do it the long way

// Input: 
digits1 = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:


// Input: 
digits2 = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Example 3:

Input:
digits3 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// Output:
// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,0,0,0]
// Expected:
// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]


digits4 = [8,9,9,9]
//Expected [9,0,0,0]

digits5 = [9]

digits6 = [9,9]

digits7 = [9,9,9]


console.log(plusOne(digits4))
