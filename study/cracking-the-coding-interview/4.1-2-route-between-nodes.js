'https://github.com/harryttd/Cracking-the-Coding-Interview-Javascript-Solutions-CTCI/blob/master/questions-specs/chapter04-trees-graphs/4.01-routesBetweenNodes.js'

let adjList = [
    [1],
    [0, 4, 5],
    [3, 4, 5],
    [2, 6],
    [1, 2],
    [1, 2, 6],
    [3, 5],
    [7]
  ];

//true
let source1 = 0
let target1 = 4

let source2 = 0
let target2 = 3

let source3 = 3
let target3 = 6



//false

let source4 = 7
let target4 = 3

let source5 = 6
let target5 = 7

let source6 = 1
let target6 = 11





'use strict';

const errorCheck = (graph, start) => {
  if (!Array.isArray(graph)) throw Error('invalid graph');
  if (!graph[start]) throw Error('invalid start node');
};

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// E = Edges
// V = Vertices

// O(E) TIME --- O(V) SPACE
// ITERATIVE BREADTH FIRST SEARCH

function graphSearchBFS(graph, start, target) {
  errorCheck(graph, start);

  if (start === target) return true;

  const visited = new Set(),
        queue = [start];

//queue starts as start node, visited is new blank set
//while queue has items in it
  while (queue.length) {
      //current node = first item in queue
    const currentNode = queue.shift();
    //for each edge connection (neighbor) in current node list of edges
    for (const neighbour of graph[currentNode]) {
        console.log(`neighbor: ${neighbour}  graph[currentNode]: ${graph[currentNode]}`)
        //if the visited set doesn't already have neighbor in it
        if (!visited.has(neighbour)) {
            //if neighbor is the target return true
            if (neighbour === target) return true;
            //otherwise add neighbor to visited
            visited.add(neighbour);
            //add neighbor to back of queue
            //so that the edges of visited nodes are added to the queue of nodes whose edges are to be examined
            //once the queue is empty (i.e. there are no more accessible nodes that haven't been visited or the target has been reached)
            //the while loop ends and if the target wasn't reached false which comes after the while loop is returned
            queue.push(neighbour);
      }
    }
  }

  return false;
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(E) TIME --- O(V) SPACE
// RECURSIVE DEPTH FIRST SEARCH

function graphSearchDFS(graph, start, target) {
  errorCheck(graph, start);
  return searchDFS(graph, start, target);
}

function searchDFS(graph, start, target, visited = new Set()) {
  if (start === target) return true;

  //on first iteration, add start node to visited set
  //on following iterations, add neighbor (i.e. node included as neighbor of whatever node started this fn)
  visited.add(start);

  //for the neighbors of the argument node
  for (const neighbour of graph[start]) {
    //if it's not in the visited set
    if (!visited.has(neighbour)) {
        //call this function with the original graph, the neighbor node as the start node, the original target, and the updated visited
      if (searchDFS(graph, neighbour, target, visited)) return true;
    }
  }

  return false;
}

console.log(graphSearchBFS(adjList, source1, target1))
// console.log(graphSearchBFS(adjList, source2, target2))
// console.log(graphSearchBFS(adjList, source3, target3))
// console.log(graphSearchBFS(adjList, source4, target4))
// console.log(graphSearchBFS(adjList, source5, target5))
// console.log(graphSearchBFS(adjList, source6, target6))