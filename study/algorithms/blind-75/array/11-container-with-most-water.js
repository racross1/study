

/*
intialize left pointer, right pointer and maxArea. 
while left < right get bounding height, 
then get max of current max area and bounding area * right - left. 
Then move the pointer (left or right) that is smaller
for moving pointer, don't have to worry about sides being equal, just do if comparison if one greater than other and else statement (not else if)

*/ 

//area = base * height
    // == (right - left) * height 

    var maxArea = function(height) {
        let left = 0
        let right = height.length - 1
        let maxArea = 0
        
        while(left < right){
            let heightBound = Math.min(height[left], height[right])
            let area = (right - left) * heightBound
            
            if(area > maxArea) maxArea = area
            
            if(height[left] < height[right]){
                left++
            } else {
                right--
            }
            
        }
        return maxArea
    };