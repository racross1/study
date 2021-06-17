function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

//hash map for each col
//traverse recursively adding and subtracting accordingly
//left child, subtract
//right child, add

//this one passing on initial test case but misses on
//Input: [1,2,3,4,6,5,7]
    // Output
    // [[4],[2],[1,6,5],[3],[7]]
    // Expected
    // [[4],[2],[1,5,6],[3],[7]]
var verticalTraversal = function(root) {
    if (!root) return 0
    let call = 1

    let colMap = {}
    function traverse(root, col){
        if (!root) return 0
        // console.log('call#: ', call)
        call++
        col = parseInt(col)

        // console.log("root: ", root)
        // console.log("col: ", col)
        if (!colMap[col]) {
            // console.log('colMap: ', colMap)
            colMap[col] = [root.val]
        } else {
            
            colMap[col].push(root.val)
        }

        if (root.left) traverse(root.left, col - 1)
        if (root.right) traverse(root.right, col + 1)

        // let left = traverse(root.left, col - 1)
        // let right = traverse(root.right, col + 1)

    }
    traverse(root, 0)
    
 
    let orderedKeys = Object.keys(colMap).sort((a,b) => parseInt(a) - parseInt(b))
    // console.log(orderedKeys)

    let result = []
    orderedKeys.forEach((k) => {
        // result.push({k: colMap[k]})
        result.push(colMap[k])
    })



    return result
};

console.log(verticalTraversal(root))



//This implementation from discussion, with person's notes
    //gets x coord, y coord, and val for each node


//:
// My intuition for this problem was to use inOrderTraversal 
// because this will allow us to visit the leftmost (vertically speaking) node first. 
// This way the nodes are mostly already sorted by x-coordinates. 
// I thought that since JavaScript uses quick sort for its sorting algorithm, 
// which tends vary in speed from best to worst case, it will be an overall improvement. 
// I might be totally off. Please let me know what you guys think. Thank you.


var verticalTraversal = function(root) {
    const nodeInfos = []; // holds the x, y, & val information of each node traversed
    
    getNodeInfos(root, 0, 0);
	
	// sort by the following order of importance:
	//  1. x - coordinate
	//  2. y - coordinate precedence given to higher value
	//  3. node val in ascending order
	
    nodeInfos.sort((a, b) => a[0] - b[0] || b[1] - a[1] || a[2] - b[2]);
    
    const map = new Map();
    
    for (const [x, y, val] of nodeInfos) {
        if (!map.has(x)) map.set(x, []);
        map.get(x).push(val);
    }
    
    return [...map.values()];
    
    function getNodeInfos(node, x, y) {
        if (node) {
            getNodeInfos(node.left, x - 1, y - 1); // traverse left
			nodeInfos.push([x, y, node.val]);
            getNodeInfos(node.right, x + 1, y - 1); // traverse right
        }
    }
};

