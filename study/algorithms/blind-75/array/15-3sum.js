


var threeSum = function(nums) {
    let output = []
    
    nums = nums.sort((a,b) => a-b)
    
    let target = 0
    
    for (let i = 0; i < nums.length -2; i++){
        if (nums[i] > target) break
        if (i > 0 && nums[i] === nums[i-1]) continue
        
        let midPoint = i+1
        let right = nums.length - 1
        
        while(midPoint < right){
            let sum = nums[i] + nums[midPoint] + nums[right]
            
            if (sum === target) {
                output.push([nums[i], nums[midPoint], nums[right]])

            
            //don't want dupes, so move midpoint and right while == to selves
            while (nums[midPoint] === nums[midPoint + 1]) midPoint++
            while (nums[right] === nums[right - 1]) right--
                
            //move midpoint and right so they point to new numbers
            midPoint++
            right--
            
            //if not equal to sum, move either mid pointer or right pointer
            } else if (sum < target) {
                midPoint++
            } else {
                right--
            }
        }
    }
    return output
};