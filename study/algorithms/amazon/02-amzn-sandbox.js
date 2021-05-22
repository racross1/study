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