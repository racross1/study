/**
 * @param {number[][]} matrix
 * @return {number[]}
 */


// Given an m x n matrix, return all elements of the matrix in spiral order.


//in terms of order of indices, what is spiral?
//visited set of indices to invert?
//pointer of current?

// [rows][cols]

//first row, last col, last row, first col

matrix1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
// Output: [1,2,3,6,9,8,7,4,5]
// [[0,0], [0,1], [0,2]   ,[1,2], [2,2],  [2,1], [2,0],  [1,0],   [1,1]]

// eliminate first row and get to end of row

 var spiralOrder = function(matrix) {
     //cols++ until end of row less already visited cell
     //rows-- until end of col less already visited cell
     //cols-- until 

    //current trying to think about how to trigger stopping at end of row/ col etc

     let rowIdx = 0 
     let colIdx = 0 
     let visitedRows = []
     let visitedCols = []
     let current = [i,j]
     let totalCells = matrix.length * matrix[0].length
     let seen = new Set()
     let output = []

     console.log('current: ', current)
     console.log('totalCells: ', totalCells)

     for (let i = 0; i < matrix.length; i++){
         for (let j = 0; j < matrix[0].length; j++){
         
            output.push(matrix[i][j])

         }
     }
         
     return output

};

function colsForward(matrix, rowIdx, seen, output) {
    //[0][0]
    //row = 0, col = 0
    let currentRow = matrix[rowIdx]
    


    for (let i = 0; i < currentRow.length; i++){
        output.push(currentRow[i])


    }


}

console.log(spiralOrder(matrix1))