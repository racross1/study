// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

// Example 1:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false




var exist = function(board, word) {
    if (word.length < 1) return false
    let rows = board.length
    let cols = board[0].length
    
    
    function dfs(row, col, wordIdx){
        //negative base case
        if(
            row < 0 ||
            col < 0 ||
            row === rows ||
            col === cols ||
            board[row][col] !== word[wordIdx] ||
             board[row][col] === -1
        ) return false
        

        //positive base case
        if(wordIdx == word.length - 1) return true
        
        board[row][col] = -1
        
        //traverse
        let found = (
            dfs(row + 1, col, wordIdx + 1) ||
            dfs(row - 1, col, wordIdx + 1) ||
            dfs(row, col + 1, wordIdx + 1) ||
            dfs(row, col - 1, wordIdx + 1) 
        )
        
        board[row][col] = word[wordIdx]
        return found
    }
    
    for (let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if (board[i][j] === word[0]){
                if (dfs(i, j, 0)) return true
            }
        }
    }
    
    return false
};

let board = [["C","A","A"],["A","A","A"],["B","C","D"]], word = "AAB"
console.log(exist(board, word))




//prior submission which seems to be faster
var exist = function(board, word) {
    if (word.length < 1) return false;
    let rows = board.length
    let cols = board[0].length
    
    function dfs(row, col, idx){
        if (row < 0 || col < 0 || row === rows || col === cols || board[row][col] !== word[idx] || board[row][col] === -1) return false
        if (idx === word.length - 1) return true
        
        board[row][col] = -1
        
        let found = 
            dfs(row + 1, col, idx + 1) ||
            dfs(row - 1 , col, idx + 1) ||
            dfs(row, col + 1, idx + 1) ||
            dfs(row, col - 1, idx + 1)
        
        board[row][col] = word[idx]
        return found
    }
    
    
    for (let row = 0; row < rows; row++){
        for (let col = 0; col < cols; col++){
            if(board[row][col] === word[0]){
                
                const match = dfs(row,col, 0);
                if (match) return true;
            }
        }
    }
    
      return false
};