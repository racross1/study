// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

 

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.



//solution from neetcode video
'https://www.youtube.com/watch?v=EgI5nU9etnU'

/*

make adjlist
run dfs on each num from 0 to num courses -1
in dfs
    if course is in visited set return false
    if entry for course in adjlist (prereqs) is blank, return true
    otherwise, add course to visited set
    and loop through its neighbors.
    for each neighbor, if dfs(neighbor) returns false, return false
    after loop delete course from visited set
    and update course entry in adjlist to [] (so it'll immediately return true if you see it again)
    after that (still within DFS return true)

for each num in loop in main function if !dfs(num) return false
after loop (meaning we haven't run into any courses we can't meet prereqs for), return true

*/

function canFinish(numCourses, prerequisites){
    let adjList = new Map()
    let visited = new Set()

    for (let i = 0; i < numCourses; i++){
        adjList.set(i, [])
    } 
    
    for (let edge of prerequisites){
       let a = edge[0]
       let b = edge[1]

       adjList.get(a).push(b)
    }
    
    //dfs within scope of function so you don't have to pass it seen and adjlist
    function dfs(crs){
        //if course is in visited set, we have found a cycle
        //return false because this course cannot be completed
        if (visited.has(crs)) return false
        //if course entry in prereq map / adj list is empty
        //that means there are no prereqs, and we can complete it
        // so we return true
        if (adjList.get(crs) == []) return true

        //if neither of these conditions are satisfied, we can take this course and add it to our visited set
        //because that means we are currently visiting this course 
        //and we want to recursively run dfs on its prereqs
        visited.add(crs)

        for (let pre of adjList.get(crs)){
            //we know if we return false for one course that can't be completed, we can return false for whole function
            if (!dfs(pre)) return false
        }

        //remove it from visited set because we are no longer visiting it
        visited.delete(crs)
        //we can also set its entry in adjlist to [] so that in future dfs, if we hit that node, we know we can return true immediately
        //so that we don't have to go through all the DFS again if we see it again
        adjList.set(crs, [])
        return true
    }
    
    //loop through all our courses, and if DFS for any of them returns false, 
    //return false for whole function
    //otherwise, we can return true
    for(let i = 0; i < numCourses; i++){
        if (!dfs(i)) return false
    }

    return true
}

/*
create adj list, 
create dfs to detect if there is a cycle 
(use arrive and depart vars to check for back edge) 
then in main function, loop through adjList 
and run detect cycle dfs on node
*/

//notes on solution copied in
function makeAdjList1(n, edges){
    const adjList = Array.from({length: n}, () => [])

    for (let edge of edges){
        let [src, dest] = edge
        adjList[src].push(dest)
    }
    
    return adjList
    
}

function hasCycleDFS(node, adjList, visited, arrive, depart){
    arrive[node]++
    visited[node] = true
    
    for (let neighbor of adjList[node]){
        if(!visited[neighbor]){
            visited[neighbor] = true
            if(hasCycleDFS(neighbor, adjList, visited, arrive, depart)) return true
        } else {
            if(depart[neighbor] === 0) return true
        }
        
    }
    depart[node]++
    return false
}

var canFinish1 = function(numCourses, prerequisites) {
    const adjList = makeAdjList(numCourses, prerequisites)
    const visited = {}
    const arrive = Array.from({length: numCourses}, () => 0)
    const depart = Array.from({length: numCourses}, () => 0)
    
    for (let vertex = 0; vertex < adjList.length; vertex++){
        if(!visited[vertex]){
            if(hasCycleDFS(vertex, adjList, visited, arrive, depart)) return false
        }
    }
    return true
};


//BELOW APPROACH DOES NOT WORK
//attempt with MAP as adjlist
//can you use seen SET for seen nodes?

var canFinish = function(numCourses, prerequisites) {
    const adjList = makeAdjList(numCourses, prerequisites)
    const seen = new Set()
    
    function hasCycle(cur, parent){
        //cycle through neighbors
        for (let neighbor of adjList.get(cur)){
            if (seen.has(neighbor)){
               if(neighbor != parent) return true
            } else {
                seen.add(neighbor)
                if (hasCycle(neighbor, cur, adjList, seen)) return true
            }
        }
        return false
    }


    adjList.forEach((value, key) =>{
        if(!seen.has(key)){
            seen.add(key)
            if(hasCycle(key, null, adjList, seen,)) console.log('cycle!')
            if(hasCycle(key, null, adjList, seen,)) return false
        }
    })
    return true
}


function makeAdjList(numCourses, prerequisites){
    let adjList = new Map()

    for (let i = 0; i < numCourses; i++){
        adjList.set(i, [])
    } 
    
    for (let edge of prerequisites){
       let a = edge[0]
       let b = edge[1]

       adjList.get(a).push(b)
    }

    return adjList
    
}

function hasCycle(cur, parent, adjList, seen){
    //cycle through neighbors
    console.log('hit has cycle')
    console.log('cur', cur)
    console.log('seen', seen)
    for (let neighbor of adjList.get(cur)){
        console.log('neighbor', neighbor)
        if (seen.has(neighbor)){
           if(neighbor != parent) return true
        } else {
            seen.add(neighbor)
            if (hasCycle(neighbor, cur, adjList, seen)) return true
        }
    }
    return false
}

let numCourses = 2, prerequisites = [[1,0],[0,1]]

console.log(canFinish(numCourses, prerequisites))


