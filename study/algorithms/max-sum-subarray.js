// Max sum of subarray

// Great explanation of Kadan’s algo here:
// https://www.youtube.com/watch?v=86CQq3pKSUw

// Kadane’s Algorithm

let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
let array2 = [1,1,1,-1]
let array3 = [1,1,-1, 2, 2, 2, 2]

function largestSubarraySum(arr){
   let max_cur=arr[0], max_global = arr[0];
    for (let i = 1; i < arr.length; i++) {
        max_cur = Math.max(arr[i], max_cur + arr[i]);
        max_global = Math.max(max_cur, max_global);
    }  
    return max_global;
}




console.log(largestSubarraySum(array))
// 16
