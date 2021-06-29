'https://www.tutorialspoint.com/Dijkstra-s-algorithm-in-Javascript'
// Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a weighted graph. 
// We'll use the new addEdge and addDirectedEdge methods to add weights to the edges when creating a graph. 
// Let us look at how this algorithm works −

//     Create a distance collection and set all vertices distances as infinity except the source node.

//     Enqueue the source node in a min-priority queue with priority 0 as the distance is 0.

//     Start a loop till the priority queue is empty and dequeue the node with the minimum distance from it.

//     Update the distances of the connected nodes to the popped node if "current node distance + edge weight < next node distance", 
//     then push the node with the new distance to the queue.

//     Continue till the priority queue is empty.

//     What this algorithm basically does is assumes all nodes are at an infinite distance from the source. Then it starts taking the edges in consideration and keeps track of distances of nodes from the source updating the same if it finds a lower cost path along the way.

// Let us look at this implementation in code −

//this implementation doesn't show implementation of priority queue

djikstraAlgorithm(startNode) {
    let distances = {};
 
    // Stores the reference to previous nodes
    let prev = {};
    let pq = new PriorityQueue(this.nodes.length * this.nodes.length);
 
    // Set distances to all nodes to be infinite except startNode
    distances[startNode] = 0;
    pq.enqueue(startNode, 0);
    this.nodes.forEach(node => {
       if (node !== startNode) distances[node] = Infinity;
       prev[node] = null;
    });
 
    while (!pq.isEmpty()) {
       let minNode = pq.dequeue();
       let currNode = minNode.data;
       let weight = minNode.priority;
       this.edges[currNode].forEach(neighbor => {
          let alt = distances[currNode] + neighbor.weight;
          if (alt < distances[neighbor.node]) {
             distances[neighbor.node] = alt;
             prev[neighbor.node] = currNode;
             pq.enqueue(neighbor.node, distances[neighbor.node]);
          }
       });
    }
    return distances;
 }
let g = new Graph();
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");
g.addNode("F");
g.addNode("G");

g.addDirectedEdge("A", "C", 100);
g.addDirectedEdge("A", "B", 3);
g.addDirectedEdge("A", "D", 4);
g.addDirectedEdge("D", "C", 3);
g.addDirectedEdge("D", "E", 8);
g.addDirectedEdge("E", "F", 10);
g.addDirectedEdge("B", "G", 9);
g.addDirectedEdge("E", "G", 50);

console.log(g.djikstraAlgorithm("A"));