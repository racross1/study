// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 

// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
// Example 2:


// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]


//reverse and transpose

//example of reverse and transpose without .reverse() or deconstruction
//quicker than my version

//transpose: row of char becomes col of char
//reverse: length / 2 swaps
//see below for console.logged version (clean + just annotated version here)
var rotate = function(matrix) {
    for (let i=0;i<matrix.length;i++) {
        //for each row col starts at row
        //col less then row.length. col++
        //transpose, row of char becomes col of char, so for i = 0 you're populating j = 0 position
        //set j to i because when you move on to new row, you've already transposed the column before it
        //save some time by setting j to i+1 because j = i (row === col) is char that will not be transposed
        for (let j=i+1;j<matrix[0].length;j++) {
            
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    //reverse: length / 2 swaps
    //save simei time by doing Math.floor(matrix[0].length/2 to avoid swapping num with self for odd numbered cols), but not a matrial improvement
    for (let i=0;i<matrix.length;i++) {
        for (let j=0;j<matrix[0].length/2;j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][matrix[0].length-j-1];
            matrix[i][matrix[0].length-j-1] = temp;
        }
    }

    return matrix
  }

var rotate = function(matrix) {
    console.log('og matrix', matrix)
    console.log('matrix[0].length /2', matrix[0].length/2)
    //iterate through rows
    for (let i=0;i<matrix.length;i++) {
        //for each row col starts at row
        //col less then row.length. col++

        //transpose, row of char becomes col of char, so for i = 0 you're populating j = 0 position
        //set j to i because when you move on to new row, you've already transposed the column before it
        //save some time by setting j to i+1 because j = i (row === col) is char that will not be transposed
        for (let j=i;j<matrix[0].length;j++) {
            // console.log('i', i)
            // console.log('j', j)
            // console.log('matrix before swap', matrix)
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;

            // console.log('matrix after swap', matrix)
        }
    }

    console.log('transposed matrix', matrix)

    for (let i=0;i<matrix.length;i++) {
        //Math.floor to save some duplicates on odd numbered col numbers. j loop still works with simply matrix[0].length/2
        for (let j=0;j<Math.floor(matrix[0].length/2);j++) {
            console.log('i', i)
            console.log('j', j)
            console.log('matrix before swap', matrix)
            let temp = matrix[i][j];
            console.log('matrix[i][j] before swap', matrix[i][j])
            matrix[i][j] = matrix[i][matrix[0].length-j-1];
            console.log('matrix[i][j] after swap', matrix[i][j])
            matrix[i][matrix[0].length-j-1] = temp;
            console.log('matrix after swap', matrix)
        }
    }

    return matrix
};

let matrix1 = [[1,2,3],[4,5,6],[7,8,9]]
let matrix2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]

console.log(rotate(matrix1))
console.log(rotate(matrix2))



//solution with 4 layers for reference:
//from back to back swe.com: https://backtobackswe.com/platform/content/rotating-a-2d-matrix/solutions
const rotate = (matrix) => {
    const size = matrix.length - 1;
  
    for (let layer = 0; layer < Math.floor(matrix.length / 2); layer++) {
      for (let i = layer; i < size - layer; i++) {
        const topFence = matrix[layer][i];                  // starts at top left of layer
        const rightFence = matrix[i][size - layer];         // starts at top right of layer
        const bottomFence = matrix[size - layer][size - i]; // starts at bottom right of layer
        const leftFence = matrix[size - i][layer];          // starts at bottom left of layer
  
        // rotate 90 degrees clockwise element by element
        matrix[layer][i] = leftFence;                     // set value walking top fence
        matrix[i][size - layer] = topFence;               // set value walking right fence
        matrix[size - layer][size - i] = rightFence;      // set value walking bottom fence
        matrix[size - i][layer] = bottomFence;            // set value walking left fence
      }
    }
  
    return matrix;
  }