/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// input: matrix
// output: matrix

//loop through each row and col
//helper function to zero out row and col

//in matrix[i][j]
//elements sharing i are same row, elements

let matrix1 = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

let matrix2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

//zero out subarr
//zero out same index in other subarrs
//keep track of rows and cols to zero and then do it at end?
//don't want to do it real time because then in subsequent iters, it would read the changed zeroes

//mine below works. so additional below for row and column flags approach
 var setZeroes = function(matrix) {
     let rows = []
     let cols = []

     for (let i = 0; i<matrix.length; i++){
         for (let j=0; j < matrix[0].length; j++){
             if (matrix[i][j] === 0){
                 rows.push(i)
                 cols.push(j)
             }
         }
     }

    //  console.log('rows', rows)
    //  console.log('cols', cols)

     
     
     for (let k = 0; k < matrix.length; k++){
         if (rows.includes(k)){
            // console.log('matrix[k]',matrix[k]) 
            // console.log('matrix[k].map',matrix[k].map(n=>n=0)) 
            matrix[k] = matrix[k].map(n=>n=0)
         }

         for (let l = 0; l < matrix[0].length; l++){
             if (cols.includes(l)){
                 matrix[k][l] = 0
             }
         }
     }

return matrix
    
};

console.log(setZeroes(matrix1))
console.log(setZeroes(matrix2))


//

/**
 * Time: O(n * m)
 * Space: O(1)
 * n - number of rows in matrix
 * m - number of cols in matrix
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 function setZeroes(matrix) {
    let firstColHasZero = false;
    let firstRowHasZero = false;
  
    // Check if first col has zero
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][0] === 0) {
        firstColHasZero = true;
        break;
      }
    }
  
    // Check if first row has zero
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[0][j] === 0) {
        firstRowHasZero = true;
        break;
      }
    }
  
    // Use first row and col as flags, set matrix[i][0] and matrix[0][j] to 0 if matrix[i][j] is 0
    for (let i = 1; i < matrix.length; i++) {
      for (let j = 1; j < matrix[0].length; j++) {
        if (matrix[i][j] === 0) {
          matrix[i][0] = 0;
          matrix[0][j] = 0;
        }
      }
    }
  
    // Zero out cells based on flags in first row and col
    for (let i = 1; i < matrix.length; i++) {
      for (let j = 1; j < matrix[0].length; j++) {
        if (matrix[i][0] === 0 || matrix[0][j] === 0) {
          matrix[i][j] = 0;
        }
      }
    }
  
    // Zero out first col
    if (firstColHasZero) {
      for (let i = 0; i < matrix.length; i++) {
        matrix[i][0] = 0;
      }
    }
  
    // Zero out first row
    if (firstRowHasZero) {
      for (let j = 0; j < matrix[0].length; j++) {
        matrix[0][j] = 0;
      }
    }
  }