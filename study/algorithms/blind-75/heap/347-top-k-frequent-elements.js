/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

*/



/*
initial way to do it would be to get counts of each num, then sort and get first k elements of that sort.
    time complexity would be O(n log n)

slightly faster way: use a heap and pop off k times
    time complexity would be (k log n) because popping from max heap is log n time <-- this way is faster only if k is < n.
    
Even faster way to do it is with bucket sort
    create the hash with the count of each num
    then create an array of length of nums + 1
    each index of that new array is a list of the nums that occur that amount of times
    

*/
//


//O(N) and faster than 93.33% (? got some variation on submissions)
//this one here is my implementation of the bucket sort version.
//see below for less verbose implementation of same thing from leetcode discuss
var topKFrequent = function(nums, k) {
    let count = {}
    let freq = Array.from({length: nums.length + 1}, () => [])
    let res = []
    
    //create obj with char and counts
    for (let num of nums){
        if (count[num] == undefined){
            count[num] = 1
        } else {
            count[num]++
        }
    }
     
    for (let prop in count){
        let k = parseInt(prop)
        let v = count[prop]
        freq[v].push(k)
    }

    for(let i = freq.length - 1; i >= 0; i--){
        if (freq[i].length > 0){
            for (let n of freq[i]){
                res.push(n)
                console.log(res)
                if (res.length == k){
                    return res
                }
            }

        }
    }
};


let nums =[1,1,1,2,2,3], k = 2

console.log(topKFrequent(nums, k))



///implementation from leetcode discuss
'https://leetcode.com/problems/top-k-frequent-elements/discuss/669782/JavaScript-No-Sorting-O(N)-Time'

var topKFrequent = function(nums, k) {
    const freqMap = new Map();
    const bucket = [];
    const result = [];
    
    for(let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    for(let [num, freq] of freqMap) {
        bucket[freq] = (bucket[freq] || new Set()).add(num);
    }
    
    for(let i = bucket.length-1; i >= 0; i--) {
        if(bucket[i]) result.push(...bucket[i]);
        if(result.length === k) break;
    }
    return result;
};