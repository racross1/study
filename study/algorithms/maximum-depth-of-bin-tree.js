// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.









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


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

//dfs that keeps track of length
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    if (!root) return 0
    
    let stack = [{node: root, depth: 1}]

    while (stack.length){
        if (root)


    }

    //get depths of each
    
};