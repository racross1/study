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

midRow =  startRow + (startRow  - endRow) / 2
midCol = startCol + (startCol - endCol) / 2

midpoint = matrix[midRow][midCol]

submatrix1: same row or higher: col must be less
submatrix2: lower row any

 var searchMatrix = function(matrix, target) {
     //get midpoint
     //process 2 separate subarrays

     let startRow = 0
     let startCol = 0
     let endRow = matrix.length - 1
     let endCol = matrix[0].length - 1

     helper(matrix, target, startRow, startCol, endRow, endCol){
        let midRow =  startRow + (endRow  - startRow) / 2
        let midCol = startCol + (endCol - startCol) / 2

        let midVal = matrix[midRow][midCol]

        if (midVal === target) {
            return true
        } 

        if (midVal > target) {
            //recursively call the left 2 subarrays
            return helper(matrix, target, midRow, midCol + 1, endRow, endCol) || 

        } else {

        }


     }

     return helper(rowStart, colStart, rowEnd, colEnd)
};