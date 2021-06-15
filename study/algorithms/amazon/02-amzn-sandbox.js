area = [
    [ 1, 1, 1, 1 ],
    [ 0, 1, 1, 1 ],
    [ 0, 1, 0, 1 ],
    [ 1, 1, 9, 1 ],
    [ 0, 0, 1, 1 ]
  ]

function minimumDistance(area) {
    let rows = area.length
    let cols = area[0].length
    let distance = Infinity
    let routes = []
    let initialDistance = 1
    
    console.log(area)
    
    for (let row = 0; row < rows; row++){
        for(let col = 0; col < cols; col++){
            if(area[row][col] === 1){
                dfs(row, col, area, initialDistance)
            }
        }
    }
    


    function dfs(row, col, area, localDistance){
        if (row < 0 || col < 0 || row >= rows || col >= cols || area[row][col] === 0) return

      


        if (area[row][col] === 9){
            console.log('row', row)

            console.log('col', col)
    
            console.log('localDist', localDistance)
            distance = Math.min(distance, localDistance+1)
            return
            }
        
        area[row][col] = 0

        dfs(row+1, col, area, localDistance+1)
        dfs(row-1, col, area, localDistance+1)
        dfs(row, col+1, area, localDistance+1)
        dfs(row, col-1, area, localDistance+1)
    }
    
    return distance != Infinity ? distance: -1

}

console.log(minimumDistance(area))




var shortestPathBinaryMatrix = function(grid) {
    const m = grid.length || 0
    const n = m && grid[0].length || 0
    
    if (m === 0 || n === 0 || grid[0][0] !== 0) return -1
  
    let step = 1
    const queue = [[0, 0]]
    const dires = [[-1, 0], [1, 0], [0, 1], [0, -1], [-1, 1], [-1, -1], [1, 1], [1, -1]]
    
    while (queue.length) {
      const size = queue.length
      for (let i = 0; i < size; i++) {
        const [x, y] = queue.shift()
        
        if (x === m - 1 && y === n - 1) return step
        
        for (const [dx, dy] of dires) {
          const newX = x + dx, newY = y + dy
          if (_withinBound(newX, newY, m, n) && grid[newX][newY] === 0) {
            grid[newX][newY] = 1
            queue.push([newX, newY])
          }
        }
      }
      
      step += 1
    }
    
    return -1
  };
    
  function _withinBound(x, y, m, n) {
    return 0 <= x && 0 <= y && x < m && y < n
  }