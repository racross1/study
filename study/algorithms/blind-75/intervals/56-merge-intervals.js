// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.


/*
sort intervals, initialize result with first interval. 
then loop through with let interval of intervals. 
Get last interval added to result with let recentInterval = result[result.length-1]. 
If recent interval end is >= current interval start, recent interval end is the greater of recent interval end and current interval end. 
Otherwise just push interval to result
*/

var merge = function(intervals) {
    if(intervals.length == 0) return []
    else if(intervals.length == 1) return intervals

    intervals.sort((a,b) => {
        return a[0]-b[0];
    })

    let result = [intervals[0]]

    for(let interval of intervals) {
        let recentInterval = result[result.length-1]
        if(recentInterval[1] >= interval[0]) {
            recentInterval[1] = Math.max(recentInterval[1], interval[1])
        } else {
            result.push(interval)
        }
    }
    return result
};