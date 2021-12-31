// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// //find beginning of an island (a 1) and traverse all its connecting neighbors
// //increment counter by 1
// //dfs marking "seen" island cells
 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
 


// Go through each row and each col, and for each cell in the [row][col] if the value is 1, you increment the island count
//and then you run a dfs with the row, col and overall grid
  //in the dfs if row or col are less than 0, if row reaches grid.length, if col eachs col.length, or if you run into a zero return
  //then switch the current 1 to a 0 and call the dfs once in each of the 4 directions, this way the dfs will run until each call to the recursive search is with a 0 element
//at the end, return the count

var numIslands = function(grid) {
    let count = 0

    //traverse each cell and start DFS for cells with a 1
    for (let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if (grid[i][j] === "1"){
                count++
                dfs(grid, i, j)
            }
        }
    }
    return count
}

function dfs(grid, row, col){
    //base case: out of bounds, or cell val is "0"
    if (
        row < 0 ||
        row > grid.length - 1 ||
        col < 0 ||
        col > grid[0].length - 1 ||
        grid[row][col] === "0"
    ) return

    //switch 1 to 0
    grid[row][col] = "0"
    //dfs in each of the 4 directions

    dfs(grid, row + 1, col)
    dfs(grid, row, col + 1)
    dfs(grid, row - 1, col)
    dfs(grid, row, col - 1)
}