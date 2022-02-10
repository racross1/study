//time complexity O (m*n)


function gridTraveler(m, n){
    //get m + 1 rows and fill with n + 1 empty arrays and fill those empty arrays with 0s
    let table = Array(m + 1).fill().map(() => Array(n + 1).fill(0))
    //a 1x1 table would have 1 path
    table[1][1] = 1

    //nested loops to iterate through 2d Array
    for (let i = 0; i <= m; i++){
        for (let j = 0; j <= n; j++){
            //I need to take cur element and add it to its right and down neighbors
            const cur = table[i][j]
            //To make sure we don't step out of bounds, add conditionals 
            if (j + 1 <= n) table[i][j + 1] += cur
            if (i + 1 <= m) table[i + 1][j] += cur

        }
    }

    //once done, just return last cell in table
    return table[m][n]
}

console.log(gridTraveler(1,1))
console.log(gridTraveler(2,3))
console.log(gridTraveler(3,2))
console.log(gridTraveler(3,3))
console.log(gridTraveler(18,18))