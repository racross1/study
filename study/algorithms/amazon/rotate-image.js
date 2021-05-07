// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
// DO NOT allocate another 2D matrix and do the rotation.

// Input: matrix = 
[[1,2,3],
 [4,5,6],
 [7,8,9]]
// Output: 
[[7,4,1],
 [8,5,2],
 [9,6,3]]

// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
// Example 3:

// Input: matrix = [[1]]
// Output: [[1]]
// Example 4:

// Input: matrix = [[1,2],[3,4]]
// Output: [[3,1],[4,2]]


let matrix1 = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

let matrix2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
// Example 3:

let matrix3 = [[1]]
// Output: [[1]]
// Example 4:

let matrix4 = [[1,2],[3,4]]
// Output: [[3,1],[4,2]]
 

// input: 2d Array
// output: 2d array
//the pattern: reverse order of each array, 

// /**
//  * @param {number[][]} matrix
//  * @return {void} Do not return anything, modify matrix in-place instead.
//  */
var rotate = function(matrix) {
    const n = matrix.length - 1; 
    const result = matrix.map((row, i) => 
         row.map((val, j) => matrix[n - j][i])
    );
    matrix.length = 0;      
    matrix.push(...result);
    return matrix;
    
    
};


// return matrix[0].map((val, index) => matrix.map(row => row[index]).reverse())


// console.log(rotate(matrix1))
// console.log(rotate(matrix2))
// console.log(rotate(matrix3))

// another solution
'https://leetcode.com/problems/rotate-image/discuss/159431/javascript-solution-with-example'

const rotate2 = function(matrix){
    matrix = matrix.reverse()
    for(let i in matrix)
      for(let j =0; j<i; j++) {
          [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }

    return matrix
  }


// function test(matrix){
//     for (let i in matrix){
//         console.log(i)
//     }
// }

// test(matrix1)


// another one
'https://leetcode.com/problems/rotate-image/discuss/211812/JavaScript-52-ms-faster-than-100.00'
// var rotate = function(matrix) {
//     for (var row = 0; row <= matrix.length-1; row++) {
//     var tracker = matrix.length-1;
    
//       for (var j = matrix.length-1; j >= 0; j--) {
//         var current = matrix[row].pop();
//         matrix[tracker].unshift(current);
//         tracker--;
//       }
//     }
//     return matrix;
//   };

//ANOTHER
// Transpose the matrix
// Reverse each row


var rotate3 = function(matrix) {
    for (let i=0;i<matrix.length;i++) {
        for (let j=i;j<matrix[0].length;j++) {
            //This loop transposes the matrix. How that's done explained:
            //for each row, going through each value
            //setting temp element to ij
            //seeting ji to ij
            //settingji to temp (initially set to ij)
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for (let i=0;i<matrix.length;i++) {
        for (let j=0;j<matrix[0].length/2;j++) {
            console.log(`i: ${i}`)
            console.log(`j: ${j}`)
            let temp = matrix[i][j];
            console.log(`temp1: ${temp}`)
            matrix[i][j] = matrix[i][matrix[0].length-j-1];
            console.log(`matrix[i][j]: ${matrix[i][j]}`)
            console.log(`matrix: ${matrix}`)
            console.log(`matrix[i][matrix[0].length-j-1]: ${matrix[i][matrix[0].length-j-1]}`)
            matrix[i][matrix[0].length-j-1] = temp;
        }
    }
};


console.log(rotate3(matrix1))
// console.log(rotate(matrix2))
// console.log(rotate(matrix3))
