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




// [
//     [1, 3,  5, 7],
//     [10,11,16,20],
//     [23,30,34,60]
// ]

//for target less than mid
    //subarr1 

        //startRow0 (original start)
        //endRow = mid
        //startCol  = 0 (original start)
        //endCol = 3 (original end)
    
    //subarr2

        //startRow = mid
        //endRow = 2 (original end)
        //startCol = 0 (original start)
        //endCol = mid


//get mid val
    //mid row and mid col
//check midval
//if greater

// start[0][0]
// end[matrix.length - 1][matrix[0].length - 1]

// midRow =  startRow + (startRow  - endRow) / 2
// midCol = startCol + (startCol - endCol) / 2

// midpoint = matrix[midRow][midCol]

// submatrix1: same row or higher: col must be less
// submatrix2: lower row any

var searchMatrix2 = function(matrix, target) {
    
    let startRow = 0
    let startCol = 0
    let endRow = matrix.length - 1
    //2
    let endCol = matrix[0].length - 1
    //3
    let call = 1 

   

    return helper(matrix, target, startRow, startCol, endRow, endCol)

    function helper(matrix, target, startRow, startCol, endRow, endCol){
      console.log('startRow', startRow)
      console.log('endRow', endRow)
      console.log('startCol', startCol)
      console.log('endCol', endCol)
      
    }

    
};






 var searchMatrix = function(matrix, target) {
     //get midpoint
     //process 2 separate subarrays

     let startRow = 0
     let startCol = 0
     let endRow = matrix.length - 1
     //2
     let endCol = matrix[0].length - 1
     //3
     let call = 1 

    

     return helper(matrix, target, startRow, startCol, endRow, endCol)

     function helper(matrix, target, startRow, startCol, endRow, endCol){
         console.log('call', call)
         call++ 
        
        //looks like base case isn't being met
         if (startRow < 0 || startCol < 0 || endRow > matrix.length - 1 || endCol > matrix[0].length - 1) {
            return
         }


         //start row: 0
         //end row: 2
         //start col: 0
         //end col: 3


         //desired midrow:[1]
         //desired midcol: [2]

        // let midRow =  Math.floor(startRow + (endRow - startRow) / 2) - 1
        let midRow = Math.floor(matrix.length / 2)
        console.log('midrow', midRow)
        // let midCol = Math.floor(startCol + (endCol - startCol) / 2) - 1
        let midCol = Math.floor(matrix[0].length / 2)
        console.log('midcol', midCol)

        let midVal = matrix[midRow][midCol]
        console.log('midval', midVal)

        if (midVal === target) {
            return true
        } 

        if (midVal < target) {
            //recursively call the left 2 subarrays
            //first is less so want left 2 subarrays
            //left subarr 1 = 
                //less row, any col
                //same row or greater less col
            return helper(matrix, target, midRow - 1 , startCol, midRow, endCol) || helper(matrix, target, startRow , startCol - 1, midRow, endCol)

        } else {
            return helper(matrix, target, midRow + 1 , startCol, endRow, endCol) || helper(matrix, target, midRow , startCol + 1, endRow, endCol)

        }

        return false
     }

     
};

console.log(searchMatrix2(matrix1, target1))