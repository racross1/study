

var postorder = function(root) {
    let result = []
    
    function traverse(root){
        if (!root) return 
        let curr = root
        let children = curr.children
        
        if(children){
            for (child of children){
                traverse(child)
            }
            result.push(curr.val)
        }
        
        
    }
    
    traverse(root)
    return result
};