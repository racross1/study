// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

 

// Example 1:


// Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
// Example 2:

// Input: heights = [[2,1],[1,2]]
// Output: [[0,0],[0,1],[1,0],[1,1]]

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

/*

This solution from Leetcode annotated below: https://leetcode.com/problems/pacific-atlantic-water-flow/discuss/1018375/Explanation-%2B-dfs

basic idea -->
populate cells reached from atlantic and cells reached from pacific with dfs
loop through matrix
add coords to return array if they exist in both the atlantic matrix and the pacific matrix
return result

dfs --> 
1. base - return if out of bounds
2. base - return if our previous spot was larger because we are only marking spot as true
if it is larger than prev (prev) **this is tricky, we aren't checking if the water is
able to flow to this spot from a previous spot...instead we are checking if water can flow out FROM this spot
TO the "prev" spot, so really prev is kind of a confusing name, because it represents the next spot that water could flow to
2. base - if the spot is already marked as true we can just return, because it means that water from this spot can already reach ocean
3. if we've reached this point it means that our flow has not yet been interrupted from our starting point
so we CAN reach our ocean (pacific or atlantic) from the current spot, so we simply mark that in our ocean i.e. ocean[i][j] = true
4. call dfs recursively on all 4 surrounding spots


create pacific and atlantic matrixes and fill with false
then start from pacific side and atlantic side and do dfs for each one
dfs
    args are matrix, row, col, prev (prev value), ocean (pacific or atlantic matrix)
    3 base cases: 
        out of bounds, 
        prev value is greater than current value (remember we are back trackign so we want current to be able to flow into prev)
        and this cell has already been seen (marked as true) in this ocean's result array
    If not returned with any of the above base cases, set ocean[row][col] to true
    and then run dfs in each direction (up down left right), with matrix[row][col] as prev
    After you've done dfs starting from the outer rows and cols, do a nested for loop
    If a set of coords are in both ocean matrixes, push those coords into a result array
    at end return result array




*/
var pacificAtlantic = function(matrix) {
    //if matrix empty, return empty arr
    if (matrix.length === 0) return [] 
   
    //get numRows and numCols
    let numRows = matrix.length
    let numCols = matrix[0].length
   
    //initialize atlantic and pacific arrs
    let atlantic = []
    let pacific = []
    for (let i = 0;i<numRows;i++){
        //for each row create an array with the numcols filled with false
        atlantic.push(new Array(numCols).fill(false))
        pacific.push(new Array(numCols).fill(false))
    }
   
    //dfs's for moving right to left
   for (let col=0 ;col<matrix[0].length;col++){
        //starting at matrix, 0, 0, -Infinity, pacific ([[false, false false]...etc])
        //dfs starting in upper left corner 
        dfs(matrix, 0, col, Number.MIN_SAFE_INTEGER, pacific)
        
        //starting bottom row, left to right
        dfs(matrix, numRows - 1, col, Number.MIN_SAFE_INTEGER, atlantic)
   }
    
   //dfs top to bottom
    for (let row = 0;row<matrix.length; row++){
        //first col
        dfs(matrix, row, 0, Number.MIN_SAFE_INTEGER, pacific)
        //last col
        dfs(matrix, row, numCols - 1, Number.MIN_SAFE_INTEGER, atlantic)
    }
    
    let res = []
    //now that we have our pacific and atlantic result arrs 
    //we can do a nested loop and push all coords into our result that appear in both pacific and atlantic
    for (let i=0;i<numRows;i++){
        for (let j=0;j<numCols;j++){
            if (atlantic[i][j] && pacific[i][j]){
                res.push([i, j])
            }
        }
    }
    return res
}
   

//dfs (matrix, row, col, prev, ocean array)
//3 base cases: out of bounds, current less than prev or these coords already seen by this ocean
const dfs = (matrix, i, j, prev, ocean) =>{
  //checkOutOfBounds
  //return if out of bounds
  if (i<0 ||
       i > matrix.length -1 ||
       j < 0 ||
       j > matrix[i].length - 1
    ) return
    
    //if val at current coords is less than "prev" i.e. the adjacent cell that was just traversed
    //return. This is because our "prev" cannot flow into this cell
    if (matrix[i][j] < prev) return
    //if this cell has already been visited in this ocean's result array return
    if (ocean[i][j]) return

    //otherwise 
    //(i.e. matrix val at current coords is greater than or equal to val at prev coords
    //and this cell hasn't been visited in this ocean's array yet)
    //set the entry for these coords in this ocean to true
    ocean[i][j] = true
    
    //then do dfs in each direction (up, down, left and right), passing in matrix, ocean, and current coords as prev
    dfs(matrix, i+1, j, matrix[i][j], ocean)
    dfs(matrix, i-1, j, matrix[i][j], ocean)
    dfs(matrix, i, j+1, matrix[i][j], ocean)
    dfs(matrix, i, j-1, matrix[i][j], ocean)    
}
