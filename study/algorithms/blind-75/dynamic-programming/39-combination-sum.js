// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
// Example 2:

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
// Example 3:

// Input: candidates = [2], target = 1
// Output: []

//note decision tree for this explanation: 
'assets/Screen Shot 2022-01-06 at 6.41.30 AM.png'
    //note time complexity of (O) 2 ^ t where t is the target (because that's how hight the decision tree is)
//from video: 
'https://www.youtube.com/watch?v=GBKI9VSKdGg'


/*

    all starts with visualizing as decision tree with 2 options for each node: can include current index i in next total, or can exclude index i in next total

    backtracking + dfs

    global result array
    dfs(i, cur, total)
    i: pointer which tells us which of the remaining candidates we're allowed to use
    cur: list of values we've added to the current combination
    total: total of our current list

    in dfs: base cases for 1) if we're successful, 2) if we're not
        successful base case: if total = target push A COPY of cur onto result array and return
        unsuccessful: if i is out of bounds or total > target return

    then make the 2 calls to the dfs: one with current index i included, one without:
        for index i included, push candidates[i] onto cur and call dfs (i, cur, total + candidates[i])
        for index i excluded, do cur.pop() and then call dfs (i + 1, cur, candidates[i])

    Outside of dfs call dfs with (0, [], 0) (if first char = target it will get pushed onto cur in first recursive call of dfs)
    return result
*/

//code along from that video
var combinationSum = function(candidates, target) {
    //global result variable
    let result = []
    //dfs search defined within the scope of the function

    //pointer i which tells us which of the remaining candidates we're allowed to choose
    //cur variable, list of values we've added to the current combination
    //for the values in our cur list we want to be maintaining a total sum (bc if it reaches ours target sum we know we've found a solution,
    //if it goes over, we've reached the base case and we can't continue anymore.
    function dfs(i, cur, total){

        //since we're only using 1 instance of cur we 
        //don't want to use the array itself, we actually want to make a copy
        //base case where we succeed
        if (total == target){
            let copy = [...cur]
            result.push(copy)
            return
        }

        //base cases if we end up being impossible
            //if i is out of bounds
            //if total is greater than target
        if (i >= candidates.length || total > target) return

        //now the recursive step: we have 2 decisions to make, 
            //we can choose to include the value at candidates[i]
            //append candidate i to our cur list (we do this before we call our dfs function)
        
        //include i
            //in this call, i stays the same (because we can use it)
            //and we pass in upddated cur (because we added candidates[i] to it)
        cur.push(candidates[i])
        dfs(i, cur, total + candidates[i])    
        //don't include i
            //pop off appended candidate
        cur.pop()  
        dfs(i + 1, cur, total)
    }

    dfs(0, [], 0)
    return result
};


let candidates = [2,3,6,7], target = 7
let candidates2 = [2,3,5], target2 = 8
console.log(combinationSum(candidates2, target2))


//top approach from leetcode discuss commented up by me
'https://leetcode.com/problems/combination-sum/discuss/16757/JavaScript-solution-with-backtracking'

function combinationSum(candidates, target) {
    var buffer = [];
    var result = [];
    search(0, target);
    return result;
  
    function search(startIdx, target) {
        //if target is 0 push buffer on to result arr
        //below slice is the same as doing result.push([...buffer])
        //if target gets to 0 that means this is a combo that gets to target (we are decrementing target each time)
        if (target === 0) return result.push(buffer.slice());
        //Negative base case. combination overshoots target
        if (target < 0) return;
        //we've gottne to the end of our candidates
        if (startIdx === candidates.length) return;
        
        //otherwise: meaning target > 0, and startIdx is less than candidates.length
        //push current char onto buffer array
        buffer.push(candidates[startIdx]);
        
        //2 search options: 1) use current char (again), 2) don't use current char
        
        //use current char: 
            //new target is now target - current num
        search(startIdx, target - candidates[startIdx]);
        
        //don't use current char
            //pop it off after it was apended 
        buffer.pop();
            //run search starting with next char
        search(startIdx + 1, target);
    }
  }



  //update combining above 2 (redoing var names and such)

  var combinationSum = function(candidates, target) {
    //global result variable
    let result = []
 
    function search(idx, curCombo, total){
        //pos base case
        if (total === target){
            let copy = [...curCombo]
            result.push(copy)
            return
        }

        //neg base case
        if (idx >= candidates.length || total > target) return

        //a. include candidates[idx]
        curCombo.push(candidates[idx])
        search(idx, curCombo, total + candidates[idx])    
        //b. don't include candidates[idx]
            //pop off appended candidate
        curCombo.pop()  
        search(idx + 1, curCombo, total)
    }

    search(0, [], 0)
    return result
};

/*
 all starts with visualizing as decision tree with 2 options for each node: can include current index i in next total, or can exclude index i in next total

    backtracking + dfs

    global result array
    dfs(i, cur, total)
    i: pointer which tells us which of the remaining candidates we're allowed to use
    cur: list of values we've added to the current combination
    total: total of our current list

    in dfs: base cases for 1) if we're successful, 2) if we're not
        successful base case: if total = target push A COPY of cur onto result array and return
        unsuccessful: if i is out of bounds or total > target return

    then make the 2 calls to the dfs: one with current index i included, one without:
        for index i included, push candidates[i] onto cur and call dfs (i, cur, total + candidates[i])
        for index i excluded, do cur.pop() and then call dfs (i + 1, cur, candidates[i])

    Outside of dfs call dfs with (0, [], 0) (if first char = target it will get pushed onto cur in first recursive call of dfs)
    return result
*/


/*
 //dfs search defined within the scope of the function

    //pointer i which tells us which of the remaining candidates we're allowed to choose
    //cur variable, list of values we've added to the current combination
    //for the values in our cur list we want to be maintaining a total sum (bc if it reaches ours target sum we know we've found a solution,
    //if it goes over, we've reached the base case and we can't continue anymore.
    
    
    
        //since we're only using 1 instance of cur we 
        //don't want to use the array itself, we actually want to make a copy
        //base case where we succeed
      
        //base cases if we end up being impossible
            //if i is out of bounds
            //if total is greater than target
       
        //now the recursive step: we have 2 decisions to make, 
            //we can choose to include the value at candidates[i]
            //append candidate i to our cur list (we do this before we call our dfs function)
        
        //include i
            //in this call, i stays the same (because we can use it)
            //and we pass in upddated cur (because we added candidates[i] to it)
      
        //don't include i
            //pop off appended candidate
       

*/