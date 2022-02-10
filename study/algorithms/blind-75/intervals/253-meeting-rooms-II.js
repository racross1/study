// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

 

// Example 1:

// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: 2
// Example 2:

// Input: intervals = [[7,10],[2,4]]
// Output: 1



//min conference rooms = num overlapping intervals
//sort
//increment count when:
    //meetings overlap (oldMtg[1] <= newMtg[0])
    //

    var minMeetingRooms = function(intervals) {
        //get 2 sepaerated sorted arrays: intervals sorted by start, and intervals sorted by end
        let start = intervals.sort((a,b) => a[0]-b[0])
        let end = [...intervals].sort((a,b) => a[1] - b[1])
        
        let rooms = 0
        //end time interval pointer
        let j = 0
        
        for (let i = 0; i < intervals.length; i++){
            //if current start time is less than current end time
            //i.e. start of curr meeting chronologically is before end of curr meeting chronologically
            if(start[i][0] < end[j][1]) {
                //increment room count
                rooms++
            //otherwise, i.e. start of meeting does not intersect with end of meeting
            //move j (end time pointer) forward
            } else {
                j++
            }
        }
        return rooms
    };