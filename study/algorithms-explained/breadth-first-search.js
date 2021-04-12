//youtube:
'https://www.youtube.com/watch?v=wu0ckYkltus'

// Breadth-first search (BFS) is an algorithm that is used to graph data or searching tree or traversing structures.
// This algorithm selects a single node (initial or source point) in a graph and then visits all the nodes adjacent to the selected node. 
// Remember, BFS accesses these nodes one by one.

/* Graphs: Breadth-first search */

//this function will output an object where the key is the node and the value is its distance from the root.
function bfs(graph, root) {
    var nodesLen = {};
    
    //in this version we will start all the distances at infinity
    for (var i = 0; i < graph.length; i++) {
      nodesLen[i] = Infinity;
    }
    nodesLen[root] = 0; 
    
    //build a simple queue to keep track of nodes to visit
    var queue = [root]; 
    //keep track of current node we're traversing
    var current; 
  
    //start a while loop to keep traversing nodes until there are no more nodes in the queue to traverse
    while (queue.length != 0) {
      //we'll start the loop by popping off a node from the queue to traverse
      //which at the beginning is the root node
      current = queue.shift();
      
      //here we get all the nodes connected to the current node
      //remember we are looking at adjacency matrix
      var curConnected = graph[current];
      //set neighbor index variable to an empty array
      //this will keep track of a list of nodes that are connected to the current node
      var neighborIdx = []; 
      //first node connected to the current node
      //when it says index of 1 this finds the current connected node, 
      //because the number 1 in our array means that the node is connected to another node at that index
    
      var idx = curConnected.indexOf(1); 
      //if there is no node with an index of 1, then index variable will be set to -1
      //so while index does not equal -1, push the index onto our list of neighbors
      while (idx != -1) {
        neighborIdx.push(idx); 
      //this line searches for the next connected node
      //we look for the next one in the array after the previous one we found (that's what the + 1 means)
        idx = curConnected.indexOf(1, idx + 1); 
      }
      
      //now that we know all the nodes connected to the current node, 
      //we loop through these and get the distance.
      for (var j = 0; j < neighborIdx.length; j++) {
        //if the value in the nodesLen array at the index of the neighbor from the neighbor index array == Infinity
        //that means we haven't set the distance of that node yet, so we'll set it now
        if (nodesLen[neighborIdx[j]] == Infinity) {
          //we have to set it to the value of the nodesLength array for the current node + 1
          nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
          //then we'll push that neighbor to the queue
          //so the next time we go through the while loop, we'll check the neighbors of that node too
          queue.push(neighborIdx[j]); 
        }
      }
    }
    //at the end return the nodes length array
    return nodesLen;
  };
  
  //remember with adjacency matrix:
  //each nested array shows which nodes in the graph are connected to the node at that index
  var exBFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
  ];
  console.log(bfs(exBFSGraph, 1));