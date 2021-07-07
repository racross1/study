'https://leetcode.com/problems/search-a-2d-matrix/'

// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */


//  Input: 
 let matrix1 = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
 let target1 = 3
//  Output: true


[
    [1, 3,  5, 7],
    [10,11,16,20],
    [23,30,34,60]
]


start[0][0]
end[matrix.length - 1][matrix[0].length - 1]

midRow =  startRow  - endRow / 2
midCol = startCol - endCol / 2

 var searchMatrix = function(matrix, target) {
     //get midpoint
     //process 2 separate subarrays

     let rowStart = 0
     let colStart = 0
     let rowEnd = matrix.length - 1
     let colEnd = matrix[0].length - 1

     helper(rowStart, colStart, rowEnd, colEnd){
         let mid = 
     }

     //helper(rowStart, colStart, rowEnd, colEnd)
};