// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. 
//You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 

//Approach 1: create empty result arr and add loop through to add intervals. 
//In each loop account for 3 cases:
//    1 - If we have already added newInterval or the current interval ends before the new one starts
    // 2 - If newInterval ends before the current one starts
    // 3 - If there is an overlap that requires a merge
//first check is if !newInterval || end of current interval is less than start of new interval. In which case just push it onto result arr
//else if new interval end is less than start (new interval ends before current one starts), push new interval on, set new interval to null (for first conditional), and push current interval onto result arr
//else (meaning end of current is greater than or equal to newInterval start, and new interval end is greater than or equal to current interval start) set new interval start to min of new interval start and current start, and set new interval end to max of current interval end and new interval end. This will expand new interval until it doesn't overlap with anything
//after the loop if new interval (meaning it hasn't been added and therefore set to null), push it onto the end of the arr
//at the end return result arr
var insert = function(intervals, newInterval) {
    const result = []
    
    /*
    Three cases:
    1 - If we have already added newInterval or the current interval ends before the new one starts
    2 - If newInterval ends before the current one starts
    3 - If there is an overlap that requires a merge
    */
    
    for (const [start, end] of intervals) {        
        if (!newInterval || end < newInterval[0]) {
            result.push([start, end])
        } else if (newInterval[1] < start) {
            result.push(newInterval)
            newInterval = null
            result.push([start, end])
        } else {
            newInterval[0] = Math.min(newInterval[0], start)
            newInterval[1] = Math.max(newInterval[1], end)
        }
    }
    
    // If newInterval has not been added it means it must be the last one
    if (newInterval) {
        result.push(newInterval)
    }
    
    return result
};

//another approach. Loop through, get current interval and check if it overlaps (with if the max of the start of interval and new interval is less than or equal to the min of the ends) set newInterval to the min of the starts and the max of the ends and continue to next loop
// else if current interval start is greater than new interval end push new interval as well as the rest of the intervals starting at current index and return result
//else push interval onto end of result
//again after loop push newInterval onto end (because thaat means it hasn't been pushed onto the result arr and then result returned)
//at end return result
var insert = function(intervals, newInterval) {
    const result = [];
    
    for (let i = 0; i < intervals.length; i++) {
        let interval = intervals[i];
        
        // If overlaps
        if (Math.max(interval[0], newInterval[0]) <= Math.min(interval[1], newInterval[1])) {
            newInterval = [Math.min(interval[0], newInterval[0]), Math.max(interval[1], newInterval[1])];
            continue;
        }
        
        // If lower
        if (interval[0] > newInterval[1]) {
            result.push(newInterval, ...intervals.slice(i));
            return result;
        }
        
        result.push(interval);
    }
    
    result.push(newInterval);
    return result;
};