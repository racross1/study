// Given n non-negative integers representing an elevation map where the width of each bar is 1, 
// compute how much water it can trap after raining.


//this is a hard one - I did not understand this one




'https://leetcode.com/problems/trapping-rain-water/discuss/183237/Another-JavaScript-solution-(99)-w-bonus-illustration'
/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(elevs) {
    var trapped = 0;
    var left = 0;
    var leftHeight = 0;
    var right = elevs.length - 1;
    var rightHeight = 0;
    
    while (left <= right) {
      if (leftHeight <= rightHeight) {
        leftHeight = Math.max(leftHeight, elevs[left]);
        trapped += leftHeight - elevs[left];
        left++;
      } else {
        rightHeight = Math.max(rightHeight, elevs[right]);
        trapped += rightHeight - elevs[right];
        right--; 
      }
    }
    
    return trapped;
  };



'https://leetcode.com/problems/trapping-rain-water/discuss/17393/JavaScript-O(n)-geometric-solution'
//We have a mountain with a bunch of filled ponds. We'll hike (and swim) over the highest parts and subtract from that area the same mountain during a nasty drought.

var trap = function(height) {
    let landArea = 0;
    let maxFromLeft = 0;
    let maxAreaFromLeft = 0;
    
    for (let h of height) {
        landArea += h;
        maxFromLeft = Math.max(maxFromLeft, h);
        maxAreaFromLeft += maxFromLeft;
    }
    
    let maxFromRight = 0;
    let maxAreaFromRight = 0;
    
    for (let i = height.length - 1; i >= 0; i--) {
        maxFromRight = Math.max(maxFromRight, height[i]);
        maxAreaFromRight += maxFromRight;
    }
    
    const boundingArea = height.length * maxFromLeft;
    const leftVoid = boundingArea - maxAreaFromLeft;
    const rightVoid = boundingArea - maxAreaFromRight;
    return boundingArea - leftVoid - rightVoid - landArea;
};


// *******Clean JavaScript solutions (brute force, dynamic programming, stack, two pointers)
'https://leetcode.com/problems/trapping-rain-water/discuss/400555/Clean-JavaScript-solutions-(brute-force-dynamic-programming-stack-two-pointers)'

/** 1) Brute force */
// time O(n^2)
// space O(1)
function trap(height) {
    if (height == null || height.length === 0) return 0;
  
    let res = 0;
    for (let i = 0; i < height.length; i++) {
      let lMax = 0;
      let rMax = 0;
  
      for (let j = 0; j < i; j++) {
        lMax = Math.max(lMax, height[j]);
      }
      for (let j = i + 1; j < height.length; j++) {
        rMax = Math.max(rMax, height[j]);
      }
  
      const water = Math.min(lMax, rMax) - height[i];
      if (water > 0) res += water;
    }
  
    return res;
  }
  
  /** 2) Dynamic programming */
  // time O(n)
  // space O(n)
  function trap(height) {
    if (height == null || height.length === 0) return 0;
  
    let res = 0;
    let l = height.length;
    let lMax = {};
    let rMax = {};
  
    lMax[0] = height[0];
    for (let i = 1; i < l; i++) {
      lMax[i] = Math.max(height[i], lMax[i - 1]);
    }
  
    rMax[l - 1] = height[l - 1];
    for (let i = l - 2; i >= 0; i--) {
      rMax[i] = Math.max(height[i], rMax[i + 1]);
    }
  
    for (let i = 0; i < height.length; i++) {
      res += Math.min(lMax[i], rMax[i]) - height[i];
    }
  
    return res;
  }
  
  /** 3) Stack */
  // time O(n)
  // space O(n)
  function trap(height) {
    let res = 0;
    let i = 0;
    const st = [];
  
    while (i < height.length) {
      while (st.length !== 0 && height[i] > height[st[st.length - 1]]) {
        const top = st[st.length - 1];
        st.pop();
  
        if (st.length === 0) break;
  
        const dist = i - st[st.length - 1] - 1;
        const h = Math.min(height[i], height[st[st.length - 1]]) - height[top];
        res += dist * h;
      }
      st.push(i);
      i++;
    }
    return res;
  }
  
  /** 4) Two pointers */
  // time O(n)
  // space O(1)
  function trap(height) {
    if (height == null || height.length === 0) return 0;
  
    let l = 0;
    let r = height.length - 1;
  
    let lMax = 0;
    let rMax = 0;
  
    let res = 0;
  
    while (l < r) {
      lMax = Math.max(lMax, height[l]);
      if (height[l] < lMax) {
        res += lMax - height[l];
      }
  
      rMax = Math.max(rMax, height[r]);
      if (height[r] < rMax) {
        res += rMax - height[r];
      }
  
      height[l] < height[r] ? l++ : r--;
    }
  
    return res;
  }