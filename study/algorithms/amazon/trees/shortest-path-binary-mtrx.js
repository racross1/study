'https://leetcode.com/problems/shortest-path-in-binary-matrix/'

// Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. 
//If there is no clear path, return -1.

// A clear path in a binary matrix is 
//a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

    // All the visited cells of the path are 0.
    // All the adjacent cells of the path are 8-directionally connected (i.e., 
    // they are different and they share an edge or a corner).
    // The length of a clear path is the number of visited cells of this path.

//NOTES ON THIS PROBLEM
// Here is the pseudocode that puts all of this together. 
//This function is reusable for many grid problems (usually without the 4 diagonal directions). You should be very familiar with this algorithm and be able to implement it in your programming language of choice very quickly.


// directions = [(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1)]

// define function get_neighbors(row, col):
// neighbors = a container to put the neighbors of (row, col) in
//     for each (row_direction, col_direction) pair in directions:
//         neighbor_row = row + row_direction
//         neighbor_col = col + col_direction
//         if (neighbor_row, neighbor_col) is NOT over the edge of the grid AND is 0:
//             add (neighbor_row, neighbor_col) to neighbors
//     return neighbors


/**
 * @param {number[][]} grid
 * @return {number}
 */


//  This is actually the question of finding shortest path beween source and distnation in a 2D-array.
//  Instead of moving on 4 direactions, we need to move to 8 directions for this question.
 
//  C_i and C_i + 1 are different and share an edge or corner
 
//  We need keep traking cells that have been visited. Usually we can create a same size 2D-array to mark visited cell, for this question, however, it didn't mention that we can't modifiy original 2D-array, so we can just flip 0 to 1 to mark it as visited.

//my annotation:
    //basically we are running a BFS by initiating a queue that keeps track of coordinates and distance.
    //we also establish a possible distances array with all the ways our x and y coordinates can move
    //after we visit each cell/ node, we overwrite it
    //processing our queue if we return the bottom right cell coordinates, we return the distance of the node we're currently processing (because that means we've gotten to our endpoint)
    //otherwise, loop through the directions array and add it to the queue if it's a valid coordinate and the value is 0

 var shortestPathBinaryMatrix = function(grid) {  
    //if the initial cell is blocked (i.e. not 0), return -1
    if (grid[0][0]) return -1;
    
    //initiate queue with coordinate and distance properties
    const queue = [{ coord: [0, 0], dist: 1 }];
    //create directions key. There are 8 because you can go diagonal in this problem
    //diagonals:  [1,1], [-1,1], [1,-1], [-1,-1],
    const directs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
   //self explanatroy
    const N = grid.length;
    //check if x and y coordinates are valid by making sure x coordinate is not less than 0 or greater than length of grid and same with y
    const isValidCoord = (x, y) => x >= 0 && x < N && y >= 0 && y < N;
    
    //overwrite starting point to 1 (visited)
    grid[0][0] = 1;
    
    //while there are items in the queue
    while (queue.length) {
    //use destructuring I think to get 0th item in the queue (with its coordinates and distance properties)  
    const { coord: [x, y], dist } = queue.shift();
      
    //if x and y coordinates indicate this is the bottom right cell
    //return the distance 
    //I guess if it is the first one to get to the end that will mean it is the shortest distance?
      if (x === N - 1 && y === N - 1) {
        return dist;
      }
      
    //otherwise (i.e. if it's not the bottom right coordinate)
    //for each of the directions you can move (see directs array above)
    //let the next x and y be the current x and y plus the move amounts in the directions array
    //this way from each cell we're looking into each of the adjacent nodes
      for (let [moveX, moveY] of directs) {
        const nextX = x + moveX;
        const nextY = y + moveY;
        
    //if next is a valid coordinate (i.e. x and y coordinates are both on the grid)
    //AND the next coordinate value = 0
    //add this next x and y coordinate with the distance incremented by 1 to the queue
    //and then overwrite the cell value to 1 (visited)
        if (isValidCoord(nextX, nextY) && grid[nextX][nextY] === 0) {
          queue.push({coord: [nextX, nextY], dist: dist + 1 });
          grid[nextX][nextY] = 1;
        }
      }
    }
    
    return -1;
  };









  //my implementation of the above (not working)
  var shortestPathBinaryMatrix = function(grid) {
    if (grid[0][0] === 1) return -1
    
    let queue = [{coord: [0,0], dist: 1}]
    let N = grid.length
    let directs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]]
    let isValidCoord = (x,y) => x >= 0 && x < N && y >=0 && y < N
    
    grid [0][0] = 1
    
    while(queue.length){
        let curr = queue.shift()
        console.log(curr)
        
        if(x === N-1 && y === N-1) {
            return dist
        }
        
        for (let [moveX, moveY] of directs){
            const nextX = x + moveX
            const nextY = y + moveY
            
            if (isValidCoord(nextX, nextY) && grid[nextX, nextY] === 0){
                queue.push({coord: [nextX, nextY], dist: dist + 1})
                grid[nextX][nextY] = 1
            }
        }
        
    }
    return -1
    
};

