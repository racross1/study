
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
// You may assume all four edges of the grid are all surrounded by water.
'https://leetcode.com/problems/number-of-islands/'

 
grid1 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
//Output: 1

grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
// Output: 3

//me working to do my own implementation:
//accepted and faster than 99%
//what I learned here is how to use looping through each cell and incrementing a count in conjunction with a recursive dfs
//also in the dfs apparently you can make 4 different calls of the function and they will all get executed
//how does this differ from return [call1 && call2] in isValidBST?

// so for this one you go through each row, and for each cell in the row if the value is 1, you increment the island count
//and then you run a dfs with the row, col and overall grid
  //in the dfs break if row or col are less than 0, if row reaches grid.length, if col eachs col.length, or if you run into a zero
  //then switch the current 1 to a 0 and call the dfs once in each of the 4 directions, this way the dfs will run until each call to the recursive search is with a 0 element

//at the end, return the count

function numIslandsMyTry(grid) {
    let rows = grid.length
    let cols = grid[0].length
    let count = 0

    for (let row = 0; row < rows; row++){
        for (let col = 0; col < cols; col++){
            if (grid[row][col] === "1"){
                count++
                dfs(row, col, grid)

            }
        }
    }

    function dfs(row, col, grid){
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === "0") return 

        grid[row][col] = "0"

        dfs(row+1, col, grid)
        dfs(row-1, col, grid)
        dfs(row, col+1, grid)
        dfs(row, col-1, grid)
    }

    return count
}


console.log(numIslandsMyTry(grid1))
console.log(numIslandsMyTry(grid2))



//below are various implementations of DFS searches. walk through to work to understand (start from bottom up)




function numIslands1(grid) {
    const H = grid.length;
    const W = H && grid[0].length;
    let count = 0;
    
    for (let r = 0; r < H; r++) {
      for (let c = 0; c < W; c++) {
        if (grid[r][c] === '0') continue;
        
        count++;
        dfs(r, c);
      }
    }
    return count;
    
    function dfs(r, c) {
      if (r < 0 || c < 0 || r === H || c === W) return;
      if (grid[r][c] === '0') return;
      
      grid[r][c] = '0';
      dfs(r-1, c);
      dfs(r+1, c);
      dfs(r, c-1);
      dfs(r, c+1);
    }
  }




  var numIslands2 = function(grid) {
    let count = 0;
    
    function depthSearch(x, y) {
        if (grid[x][y] === '1') {
            grid[x][y] = '0';
        } else {
            return;
        }

        if (x < grid.length - 1) {
            depthSearch(x+1, y);
        }
        
        if (y < grid[x].length - 1) {
            depthSearch(x, y+1);
        }
        
        if (x > 0 && x < grid.length) {
            depthSearch(x-1, y);
        }
        
        if (y > 0 && y < grid[x].length) {
            depthSearch(x, y-1);
        }
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                depthSearch(i, j);
            }
        }
    }
    
    return count;
};


function numIslands3(grid) {
    let count = 0;
  
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === '1') {
          count++;
          dfs(grid, i,j);
        }
      }
    }
  
    return count;
  }
  
  function dfs(grid, row, col) {
    // bound check
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return;
  
    const value = grid[row][col];
    if (value === '1') {
      grid[row][col] = '#';
      dfs(grid, row + 1, col);
      dfs(grid, row - 1, col);
      dfs(grid, row, col + 1);
      dfs(grid, row, col - 1);
    }
  }


//   Below is what I typed out on a google doc in preparation for a google phone interview.
// I thought it may be helpful for others to see and give feedback on my thought process, and if it makes sense/is followable. After all, that's what I want my interviewer to do, understand me.
// Goal: Count number of islands
// Rules:

// An island is surrounded by water(0's)
// We count things apart of our island if it is horizontal or vertical connected
// Plan:
// Start at the top left of the 2d array, and visit the first row, and all its columns, trying to find the start of the first island
// Once we find a 1, we can increment the number of islands, but we want to know where the island ends. So let’s look and follow any of the horizontal or vertical spots near the current position we are on.
// First, let’s mark the current start/visited parts of the islands as visited by turning them into a 0,
// Second, explore all the adjacent possibilities,
// If one of them is a 1, recursively turn it into a 0 and check its children
// Once we are done, we should have gotten rid of the island that we discovered and can move on to the next island, if it exists in the 2d array

const numIslands4 =  (grid) => {
	let count = 0 // the counted islands
	//Go though each cell of the 2d array/grid 
	for(let row = 0; row < grid.length; row++){
	for(let col = 0; col < grid[row].length; col ++){
	if(grid[row][col] == '1'){
		count ++
		explore(row,col, grid)
            }
        }
    }
    return count
}



// Takes a cell in a grid with a “1” , turns it into a “0” and explores (DFS) any of the left, right, up, down 1’s
function explore(row, col, grid){
    //Let's return IF
    // row < 0 OR col < 0 OR row is out of bounds(meaning the row is larger than the number of arrays in the 2d array) OR col is at/out of bounds (meaning the current col is at/over the number of elements a row has.)
     if (row < 0 || col < 0 || row >= grid.length  
         || col >= grid[row].length || grid[row][col] === '0')  {
        return
    }
    
    //Otherwise, we should explore it!
    //First let's set the current spot to "0"
    grid[row][col]='0'
    
	//Possibilites:
	// 1) 1 to the right, left, top, bottom
	//right
	explore(row, col+1, grid)   
    //Left
	explore(row, col-1, grid)  
    //Up
	explore(row+1, col, grid) 
    //Down
	explore(row-1, col, grid)   

}