// You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.

// Return true if the edges of the given graph make up a valid tree, and false otherwise.

 

// Example 1:


// Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
// Output: true
// Example 2:


// Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
// Output: false


// union find solution: 
'https://leetcode.com/problems/graph-valid-tree/discuss/875463/JavaScript-Union-Find-(simple-wexplanation-99)-and-BFS-example'

//dfs with explanation
'https://leetcode.com/problems/graph-valid-tree/discuss/255815/Javascript-DFS-with-explanation'



//DFS
function validTreeFromDiscuss(n, edges) {
    /** construct adjacency list **/
    const adjacencyList = new Map();
    for (let i = 0; i < n; i++) {
        adjacencyList.set(i, []);
    }
    // undirected graph must store edges both ways
    for (let edge of edges) {
        const u = edge[0];
        const v = edge[1];       
        adjacencyList.get(u).push(v);
        adjacencyList.get(v).push(u);
    }
    
    const visited = new Set();
    
    function hasCycle(curr, parent) {
        // mark current node as visited
        visited.add(curr);
        /** explore neighbors via dfs**/
        for (let neighbor of adjacencyList.get(curr)) {
            // havent seen this node before
            if (!visited.has(neighbor)) {
                //lets see if non explored node has a cycle, if it does we exit the recursion
                if (hasCycle(neighbor, curr)) return true;
            } else {
                //we've seen this neighbor before, it has to be its parent, or else we got a cycle
                if (neighbor !== parent) return true;
            }
        }
        return false;
    }
    
    if (hasCycle(0, -1)) {
        return false;
    }
    
    
    /**
     * do we have unconnected components?
     * at this point we should have seen all the nodes by DFS traversal
     * if there are nodes that aren't visited, theres an unconnected component
     **/
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            return false;
        }
    }
        
    return true;
}

//my try to implement the above iteratively 
//this iterative implementation works!
function validTree(n, edges) {
    //construct adjacency list

    const adjList = new Map()
    //for each node, create map entry of an empty arr
    for (let i = 0; i < n; i++){
        adjList.set(i, [])
    }

    //for each edge, add entry to adjList (undirectd, so add edge to both node entries)

    for (let edge of edges){
        const u = edge[0]
        const v = edge[1]

        adjList.get(u).push(v)
        adjList.get(v).push(u)
    }

    const visited = new Set()
    const stack = [[-1, 0]]

    while(stack.length !== 0){
        let cur = stack.pop()
        let curNode = cur[1]
        let curParent = cur[0]

        visited.add(curNode)

        for (let neighbor of adjList.get(curNode)) {
            // havent seen this node before
            if (!visited.has(neighbor)) {
                //lets see if non explored node has a cycle
                stack.push([curNode, neighbor])
            } else {
                //we've seen this neighbor before, it has to be its parent, or else we got a cycle
                //and we return false for the function
                if (neighbor !== curParent) return false
            }
        }

    }

    //check and make sure there are no unvisited nodes
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            return false;
        }
    }
      
    return true
}

let n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
let n2 = 4, edges2 = [[2,3],[1,2],[1,3]]


console.log(validTree(n2, edges2))

