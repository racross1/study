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

console.log(rotate3(matrix1))