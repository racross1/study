// Given an m x n matrix, return all elements of the matrix in spiral order.

 

// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

// [
//      [1, 2, 3 ,4],
//      [5, 6, 7, 8],
//      [9,10,11,12]
// ]

// initilize top, bottom, left and right boundaries and size and result. while result.length < size, loop have 4 diff for loops for each dir, and increment one of the boundaries after each one

//my approach which worked - uses the above. Can also use && result.length < size in for loop (for (let i = left; i <= right && result.length < size; i++))
//see below that which uses recursion and popping off outer rows and cols (faster than mine)
var spiralOrder = function(matrix) {
    let result = []
    let size = matrix.length * matrix[0].length
    //bounds
    let top = 0
    let bottom = matrix.length - 1
    let left = 0
    let right = matrix[0].length - 1

    while(result.length < size){
        //right
            //move right until you hit right bound
            //at end, update top bound + 1
        for (let i = left; i <= right; i++){
            result.push(matrix[top][i])
        }
        top += 1
        //down
            //move down until you hit bottom bound
            //at end, update right bound -1
        for (let i = top; i <= bottom; i++){
            result.push(matrix[i][right])
        }
        right -= 1

        //left
            //move left until you hit left bound
            //at end, update bottom bound -1
        for (let i = right; i >= left; i--){
            result.push(matrix[bottom][i])
        }

        bottom -= 1

        //up
            //move up until you hit top bound
            //at end, update left bount +1
        for (let i = bottom; i >= top; i--){
            result.push(matrix[i][left])
        }

        left += 1

    }

    return result
    
};

//recursion where you pull the pieces off of matrix to add to result recursively:

var spiralOrder = function(matrix) {
    if (matrix.length === 0) return [];
    if (matrix[0].length === 0) return [];
    
    let result = [];
    // ADD FIRST ROW
    result = result.concat(matrix.shift());
    
    // ADD LAST COL
    for (let i=0; i<matrix.length-1; i++){
        result.push(matrix[i].pop());
    }
    
    // ADD LAST ROW
    const lastRow = matrix.pop();
    if (lastRow) result = result.concat(lastRow.reverse());

    // ADD FIRST COL
    for (let i=matrix.length-1; i>=0; i--){
        if (matrix[i].length) result.push(matrix[i].shift());
    }
    
    return result.concat(spiralOrder(matrix));
};