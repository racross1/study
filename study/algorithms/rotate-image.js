// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
// DO NOT allocate another 2D matrix and do the rotation.

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
// Example 3:

// Input: matrix = [[1]]
// Output: [[1]]
// Example 4:

// Input: matrix = [[1,2],[3,4]]
// Output: [[3,1],[4,2]]
 

// /**
//  * @param {number[][]} matrix
//  * @return {void} Do not return anything, modify matrix in-place instead.
//  */
 var rotate = function(matrix) {
    [ [2][0],[1][0],[0][0] ], [ [2][1],[1][1],[0][1] ], [ [2][2],[1][2],[0][2] ]
    let newArr = []
    let i = 0
    let subArr = []
    for (let j = matrix.length - 1; j > -1; j--){
        for (let k = subArr.length; k < matrix.length; k++){
        subArr.push(matrix[j][i])
            
        }
       i++



    console.log(subArr)
    }
};



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

console.log(rotate(matrix1))