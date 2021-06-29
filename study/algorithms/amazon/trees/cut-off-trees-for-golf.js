/**
 * @param {number[][]} forest
 * @return {number}
 */
 var cutOffTree = function(forest) {
    const R = forest.length;
    const C = forest[0].length;
    
    const sortedTrees = sortTreesByHeight(forest);
    
    let sr = 0, sc = 0; // start node.
    let steps = 0; // steps taken to cut all trees.
    
    while (sortedTrees.length) {
        const [tr, tc] = sortedTrees.shift();
        
        // run BFS from start to target node.
        const partialSteps = cutOffTreeBfs(forest, sr, sc, tr, tc);
        
        if (partialSteps >= 0) {
            // increment steps by partialSteps, and set the start 
            // node of the BFS to be the target we just reached.
            steps += partialSteps;
            sr = tr;
            sc = tc;
        } else {
            return -1;
        }
    }
    return steps;
};

function sortTreesByHeight(forest) {
    const trees = [];
    for (let i = 0; i < forest.length; i++) {
        for (let j = 0; j < forest[0].length; j++) {
            if (forest[i][j] > 1) {
                trees.push([i, j, forest[i][j]]);
            }
        }
    }
    // sort height from smallest to biggest.
    trees.sort((x, y) => x[2] - y[2]);
    return trees;
}

function cutOffTreeBfs(forest, sr, sc, tr, tc) {
    const R = forest.length;
    const C = forest[0].length;
    
    // add start node to the queue with a dist of 0.
    const queue = [[sr, sc, 0]];
    
    // create visited matrix and initialize it to false.
    const visited = new Array(R);
    for (let i = 0; i < R; i++) {
        visited[i] = new Array(C).fill(false);
    }
    
    // mark the start node as visited.
    visited[sr][sc] = true;
    
    
    while (queue.length) {
        const [r, c, dist] = queue.shift();
        
        // if we reached the target, return the distance so far.
        if (r == tr && c === tc) {
            return dist;
        }
        
        // get the neighbors of the current node, 
        // getNeighbors will return only valid neighbors.
        const neighbors = getNeighbors(R, C, forest, visited, r, c);
        
        for (const [nr, nc] of neighbors) {
            visited[nr][nc] = true;
            // add neighbor to the queue 
            // and set its distance by current dist plus 1.
            queue.push([nr, nc, dist + 1]);
        }
    }
    
    return -1;
}

function getNeighbors(R, C, forest, visited, r, c) {
    const neighbors = [];
    // direction vectors for moving in the matrix.
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    for (let i = 0; i < directions.length; i++) {
        const nr = r + directions[i][0];
        const nc = c + directions[i][1];
        // add only valid nodes.
        if (isValid(R, C, forest, visited, nr, nc)) {
            neighbors.push([nr, nc]);
        }
    }
    return neighbors;
}

function isValid(R, C, forest, visited, r, c) {
    const inBounds = r >= 0 && r < R && c >= 0 && c < C;
    if (!inBounds || visited[r][c]) return false;
    // valid node = not visited and not an obstacle;
    return !visited[r][c] && forest[r][c] !== 0; 
}