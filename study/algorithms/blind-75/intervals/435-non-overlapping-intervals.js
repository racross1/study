// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

 

// Example 1:

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
// Example 2:

// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
// Example 3:

// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.


//sort by starting values, compare adjacent pairs, 
//use the condition where when 2 intervals are overlapping we "pick" the one with the earlier end time

//start by keeping track of first interval's end value
//save next kept interval's end value

var eraseOverlapIntervals = function(intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0])
    let prevEnd = intervals[0][1]
    let deleted = 0
    
    for(let i = 1; i < intervals.length; i++){
        //if current start time is < previous end time
            //deleted++
            //prevEnd = min of prev end and current end
        //otherwise prevEnd = current end
        if (intervals[i][0] < prevEnd){
            deleted++
            prevEnd = Math.min(prevEnd, intervals[i][1])
        }else{
            prevEnd = intervals[i][1]
        }
    }
    return deleted
};