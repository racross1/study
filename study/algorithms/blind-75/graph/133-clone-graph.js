// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }
 

// Test case format:

// For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

// An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

 

// Example 1:


// Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
// Output: [[2,4],[1,3],[2,4],[1,3]]
// Explanation: There are 4 nodes in the graph.
// 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
// 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
// Example 2:


// Input: adjList = [[]]
// Output: [[]]
// Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.
// Example 3:

// Input: adjList = []
// Output: []
// Explanation: This an empty graph, it does not have any nodes.
 

/*USE MAP. Can do BFS or DFS. 
For BFS, add node to queue, grab node off of queue, 
iterate over all adjacents (neighbor of currentVertex.neighbors), 
then if Map doesn't have entry for this neighbor, 
add neighbor entry to map 
(vertexMap.set(neighbor, new Node(neighbor.val))), 
then add neighbor to queue to be processed, 
then draw edge from currentVertexe's clone to neighbor's clone (vertexMap.get(currentVertex).neighbors.push(vertexMap.get(neighbor));). At very end, outside of while queue.length > 0, return vertexMap.get(start); 

*/

var cloneGraph = function(node) {
    // If start node is null than we can't do any cloning
   let start = node; 
   if (start === null) return null;
   // vertexMap is the original node reference to our node
   const vertexMap = new Map(); 
   
   
   // Add the start node to the queue. Give the start node a clone in the vertex map
   const queue = [start]
   vertexMap.set(start, new Node(start.val)); 
   
   /*
   * Breadth first search continues until we process all the vertices in the graph
   * In the original graph. We know this is done when queue is empty
   */
   
   while (queue.length > 0) {
       // We grab a node. We will express all of the edges coming off of this node.
       const currentVertex = queue.shift(); 
       // Iterate over all adjacents.
       for (const neighbor of currentVertex.neighbors) {
         // Has this neighbor been given a clone?
           if (!vertexMap.has(neighbor)) {
               /*
               * No? Give it a mapping and add the original neighbor to the search queue so we
               * can express ITS edges later
               */
               vertexMap.set(neighbor, new Node(neighbor.val))
               queue.push(neighbor); 
           }
           
           /*
           * Draw the edge from currVertex's clone to neighbor's clone. Do you see how our
           * hashtable makes this quick access possible?
           */
           vertexMap.get(currentVertex).neighbors.push(vertexMap.get(neighbor)); 
       }
   }
  return vertexMap.get(start); 
   
};

//with DFS
var cloneGraph = function(node) {
  // If start node is null than we can't do any cloning
 let start = node; 
 if (start === null) return null;
 // vertexMap is the original node reference to our node
 const vertexMap = new Map(); 
 
 
 // Add the start node to the queue. Give the start node a clone in the vertex map
 const stack = [start]
 vertexMap.set(start, new Node(start.val)); 
 
 /*
 * Breadth first search continues until we process all the vertices in the graph
 * In the original graph. We know this is done when queue is empty
 */
 
 while (stack.length > 0) {
     // We grab a node. We will express all of the edges coming off of this node.
     const currentVertex = stack.pop(); 
     // Iterate over all adjacents.
     for (const neighbor of currentVertex.neighbors) {
       // Has this neighbor been given a clone?
         if (!vertexMap.has(neighbor)) {
             /*
             * No? Give it a mapping and add the original neighbor to the search queue so we
             * can express ITS edges later
             */
             vertexMap.set(neighbor, new Node(neighbor.val))
             stack.push(neighbor); 
         }
         
         /*
         * Draw the edge from currVertex's clone to neighbor's clone. Do you see how our
         * hashtable makes this quick access possible?
         */
         vertexMap.get(currentVertex).neighbors.push(vertexMap.get(neighbor)); 
     }
 }
return vertexMap.get(start); 
 
};


//DFS recursive implementations

//this one doesn't make as much intuitive sense to me - see next one (annotated)
var cloneGraph = function (graph) {
  var map = {};
  return traverse(graph);

  function traverse(node) {
    if (!node) return node;
    if (!map[node.val]) {
      map[node.val] = new Node(node.val);
      map[node.val].neighbors = node.neighbors.map(traverse);
    }
    return map[node.val];
  }
}


var cloneGraph = function(node, map = new Map()) {
  //negtive base case
  if(!node) return null
  // positive base case: if node is in map, return the copy of that node from your map
  if(map.has(node)) return map.get(node)
  
  //otherwise create new node using current node val
  const n = new Node(node.val)
  //add new node to your map with key as actual node, value as new copied node
  map.set(node, n)
  //loop through actual node's neighbors
  for(let k of node.neighbors){    
    //and for each one, create that new node using the recursive function and add that newly created node to the neighbors of your copy n
    n.neighbors.push(cloneGraph(k, map))
  }
  //after you have added all neighbors to all nodes, return n (new copied node)
  return n
};


//this one not my comments - above is my comments and easier for me to understand
var cloneGraph = function(node, copy = new Map()) {
  // Handle null case
  if (!node) return null;
      
  // If our graph hasn't already copied the input node
  if (!copy.has(node.val)) {
      // Create new copy node (+ reference in map)
      copy.set(node.val, new Node(node.val));
      // Recursively clone neighbors
      copy.get(node.val).neighbors = node.neighbors.map((neighbor) => cloneGraph(neighbor, copy));
  }
      
  // Return copied/new node (* not * the original node passed in)
  return copy.get(node.val);
};