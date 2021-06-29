//see 1 for well annotated walk through

// Input: 
let grid1 = [[0,1],[1,0]]
// Output: 2

// Input: 
let grid2 = [[0,0,0],[1,1,0],[1,1,0]]
// Output: 4

// Input: 
let grid3 = [[1,0,0],[1,1,0],[1,1,0]]
// Output: -1

//SHORTEST PATH BINARY MATRIX
//Overview: 
    //BFS with distance property for each traversal level, 
    //and overwriting a cell to 1 once it has been visited
//initiate vars
    //create queue where each node has coordinate and distance properties
    //initiate gridlength property for bounds of grid
    //initiate directions array (all 8 different ways you can move)
    //initiate helper function to check if is valid coord (basically if it's on the grid)
//overwrite first coord [0,0] to 1
//queue loop
    //get current node and break out currend coordianted and current distance properties
    //check if current coordinates are lower right hand corner (that is the goal node).
        //if so, return current distance
    // otherwise loop over poosible directions array and 
    // for each set of directions, if current coordinates, + directions is valid coords and 
    // value of that cell (current + directions) is 0 (meaning it's open)
    // push it onto the queue with new coords and distance + 1
    // overwrite the cell to be 1 (visited)




//my follow up go at implementation
var shortestPathBinaryMatrixNEW = function(grid) {  
    if (grid[0][0]) return -1
     
      let queue = [{coord: [0,0], dist: 1}]
      
      let gridLen = grid.length
      let directs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]]
     const isValidCoord = (x,y) => x >= 0 && x < gridLen && y >=0 && y < gridLen
     
     grid [0][0] = 1
     
       while(queue.length){
         let curr = queue.shift()
         let currCoords = curr.coord
         let currDist = curr.dist
       
     if(currCoords[0] === gridLen-1 && currCoords[1] === gridLen-1) {
             return currDist
         }
       
     for (let direct of directs){
             const nextX = currCoords[0] + direct[0]
             const nextY = currCoords[1] + direct[1]
         
     if (isValidCoord(nextX, nextY) && grid[nextX][nextY] === 0) {
           queue.push({coord: [nextX, nextY], dist: currDist + 1 });
           grid[nextX][nextY] = 1;
         }
       }
     }
     
     return -1;
   };
  

   console.log(shortestPathBinaryMatrixNEW(grid1))
   console.log(shortestPathBinaryMatrixNEW(grid2))
   console.log(shortestPathBinaryMatrixNEW(grid3))
  
  
  
  
  
  