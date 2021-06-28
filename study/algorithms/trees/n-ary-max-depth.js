
//my solution, beats on 69%
var maxDepth = function(root) {
    let depth = 0
    
    function getMaxDepth(root, level){
        if(!root) return 
        let children = root.children
        
        if(level > depth) depth = level
        
        if(children){
            for (child of children)
                getMaxDepth(child, level+1)
        }
        
    }
    
    getMaxDepth(root, 1)
    return depth
    
};