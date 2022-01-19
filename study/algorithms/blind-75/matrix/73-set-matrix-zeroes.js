


//my solution from practice code doc. it works and is faster than 88%!
//create row and col sets of rows and cols to zero
function setZeroes(matrix){
	let colsToZero = new Set()
	let rowsToZero = new Set()
	
	for (let row = 0; row < matrix.length; row++){
		for(let col = 0; col < matrix[0].length; col++){
			if (matrix[row][col] === 0){
                colsToZero.add(col)
				rowsToZero.add(row)
            }
        }
    }

    for (let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[0].length; col++){
            if (rowsToZero.has(row) || colsToZero.has(col)){
                matrix[row][col] = 0
            }
        }
    }

    return matrix	
}
