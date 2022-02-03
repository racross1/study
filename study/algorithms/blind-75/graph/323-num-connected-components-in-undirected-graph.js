// You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

// Return the number of connected components in the graph.

 

// Example 1:


// Input: n = 5, edges = [[0,1],[1,2],[3,4]]
// Output: 2
// Example 2:


// Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
// Output: 1

//top union-find solution: 
    'https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/discuss/1198462/Simple-JavaScript-%2B-Python-solutions-or-Union-Find-or-Clean'
//faster dfs than mine: 
    'https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/discuss/1136637/javascript-dfs'

//faster DFS version loops over all nodes n instead of all vertices in adjlist. here's me trying to adapt my original solution to that
//this doesn't appear to be much faster (maybe the data structures I'm using?)
var countComponents = function(n, edges) {
    const adjList = new Map()
    
    for (let i = 0; i < n; i++){
        adjList.set(i, [])
    }
    
    for (let edge of edges){
        let u = edge[0]
        let v = edge[1]
        adjList.get(u).push(v)
        adjList.get(v).push(u)  
    }
    
    //make visited Set
    //dfs where if parent has not been seen, increment component counter
    //increment component counter when we get to the end of a new component
    
    let components = 0
    const seen = new Set()
    
    //loop over all nodes in adjlist. if parnet is not in seen, dfs its path and increment counter
    // for (let node of adjList){
    //     if (!seen.has(node[0])){
    //         dfs(node[0])
    //         components++
    //         }
    // }

    for (let i = 0; i < n; i++){
        if (!seen.has(i)){
            dfs(i)
            components++
        }
    }
    
   function dfs(cur){
       seen.add(cur)
       for (let neighbor of adjList.get(cur)){
           if (!seen.has(neighbor)){
               dfs(neighbor)
           }
       }
       return
   }
    return components  
};




//my first attempt. Works!

//make adjList. create component counter and 'seen' set. loop through adjList. If parent (node) hasn't been seen, run DFS and after DFS increment counter.
    //in dfs, add node to seen. then for neighbor of adjList.get(node) if not seen, dfs. after loop through all edges, return

//inputs: 
    //int: number of nodes
    //array: list of edges (2d array)

//output: int: number of connected components

// 0 -- 1
// 2 -- 3
// 4 -- 5

// n = 6
// edges = [[0,1], [2,3], [3,4]]
// output = 3

//contiguous if there is a path between all nodes
var countComponents = function(n, edges) {
    const adjList = new Map()
    
    for (let i = 0; i < n; i++){
        adjList.set(i, [])
    }
    
    for (let edge of edges){
        let u = edge[0]
        let v = edge[1]
        adjList.get(u).push(v)
        adjList.get(v).push(u)  
    }
    
    //make visited Set
    //dfs where if parent has not been seen, increment component counter
    //increment component counter when we get to the end of a new component
    
    let components = 0
    const seen = new Set()
    
    //loop over all nodes in adjlist. if parent is not in seen, dfs its path and increment counter
    for (let node of adjList){
        if (!seen.has(node[0])){
            dfs(node[0])
            components++
            }
    }
    
   function dfs(cur){
       seen.add(cur)
       for (let neighbor of adjList.get(cur)){
           if (!seen.has(neighbor)){
               dfs(neighbor)
           }
       }
       return
   }
    return components  
};