


// Search from top right corner
// Time complexity O(m + n)
'https://leetcode.com/problems/search-a-2d-matrix/discuss/133252/Simple-JavaScript-solution'
function searchMatrix(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  let row = 0;
  let col = matrix[0].length - 1;

  while (col >= 0 && row <= matrix.length - 1) {
    if (matrix[row][col] === target) return true;
    else if (matrix[row][col] > target) col--;
    else if (matrix[row][col] < target) row++;
  }

  return false;
}

'https://leetcode.com/problems/search-a-2d-matrix/discuss/1425649/4-solutions-Brute-force-O(mn)-to-Optimal-O(log-mn)'

// **Binary search in each row - O(mlog n)**
var searchMatrix = function(matrix, target) {
    for(let i = 0; i < matrix.length; i++) {
        let start = 0, end = matrix[0].length - 1

        while(start <= end) {
            let mid = Math.floor((start + end) / 2)
            if(matrix[i][mid] === target) return true
            
            if(matrix[i][mid] > target) end = mid - 1
            else start = mid + 1
        }
    }
    return false
}

// ** Diagonal search from top right - O(m + n)**
var searchMatrix = function(matrix, target) {
    let j = matrix[0].length - 1, i = 0
    
    while(j >= 0 && i < matrix.length) {
        if(matrix[i][j] === target) return true
        
        if(matrix[i][j] > target) j--
        else i++
    }
    return false
}

//** Binary search complete matrix - O(log mn)**
var searchMatrix = function(matrix, target) {
  let start = 0, end = (matrix.length * matrix[0].length) - 1
    
    while(start <= end) {
        let mid = Math.floor((start + end) / 2)
        let midNum = 
            matrix[Math.floor(mid / matrix[0].length)][mid % matrix[0].length]
        
        if(midNum === target) return true    
        else if(midNum < target) start = mid + 1
        else end = mid - 1
    }
    return false
}