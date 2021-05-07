/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
// 

'https://leetcode.com/problems/all-paths-from-source-to-target/discuss/137888/JavaScript-solution'

//***********SOLUTION
var allPathsSourceTarget = module.exports = function(graph) {
    var res = [];
    var path = [];  
					
    path.push(0);
   
    dfsSearch(0); 
    
    function dfsSearch(node) {
         
        if (node == graph.length - 1) {           
            res.push(path.slice(0));           
        } else
            for (nextNode of graph[node]) {
                path.push(nextNode);
                dfsSearch(nextNode);
                path.pop();
            }
    }
    return res;
};




//***********here's a verbose version of this solution that helped me trace how it executes



const allPathsSourceTargetAnnot = graph => {
    let res = []
    let path = []
    console.log('beginning res', res)
    console.log('beginning path', path)
  
    path.push(0)
    console.log('path after first push', path)
  
    dfsSearch(0)
  
    function dfsSearch(nodeIndex) {
      const isLastNodeIndex = nodeIndex === graph.length - 1
      if (isLastNodeIndex) {
        console.log('isLastNodeIndex', isLastNodeIndex)
        console.log(`${nodeIndex} is the last nodeIndex`)
        const pathCopy = path.slice(0)
        res.push(pathCopy)
        console.log('res after push', res)
      } else {
        for (nextNode of graph[nodeIndex]) {
          path.push(nextNode)
          console.log('path after push', path)
          // recurse
          console.log('now we recurse')
          dfsSearch(nextNode)
          path.pop()
          console.log('path after pop', path)
        }
      }
    }
    console.log('res before return', res)
    return res
  }
  




//***********ANOTHER JS SOLUTION (DIFFRENT FROM FIRST 2)
'https://leetcode.com/problems/all-paths-from-source-to-target/discuss/961277/Clean-JavaScript-DFS-Solution'
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
 var allPathsSourceTarget = function(graph) {
    const paths = []
    const dfs = (index, path) => {
		// only if the path a target path
        if(path[path.length - 1] == graph.length - 1) {
            paths.push(path);
            return;
        }
        for(let i = 0; i < graph[index].length; i++) {
            dfs(graph[index][i], [...path, graph[index][i]])
        }
    }
    dfs(0, [0])
    return paths
};



allPathsSourceTargetAnnot([[1,2],[3],[3],[]])



//MY ATTEMPTS
//DFS where if current branch leads to target, add to paths


//DFS
// var allPathsSourceTarget = function(graph) {
//      const target = graph.length - 1
//      const start = 0
//      const paths = []
//      let currentPath = [start]
//      let stack = []
//      let visited = new Set()
//      visited.add(start)


//      if (graph[start] === graph[target]) paths.push([start])

  

//      while (!stack.isEmpty()) {
//          let currentNode = stack.pop()
//          console.log(currentNode)
//          for (const neighbor of graph[currentNode]){
//             if(!visited)
//             //left off here
   
//         }
//      }
     
     
     
//      for (const neighbor of graph[start]){
         
//         if(!visited.has(neighbor)){
//             if (allPathsSourceTarget(graph))
//         }
//      }

    
// };





// //start for BFS
// // var allPathsSourceTarget = function(graph) {
//     //     const target = graph.length - 1
//     //     const start = 0
    
//     //     if (start === target) return [[0]]
    
//     //     const visited = new Set()
//     //     const queue = [start]
//     //     const paths = []
    
//     //     while (queue.length){
//     //         const currentPath
//     //         const currenNode = queue.shift()
            
    
//     //         for (const neighbor of graph[currentNode]){
//     //             if(!visited.has(neighbor)){
    
//     //             }
//     //         }
//     //     }
       
//     // };