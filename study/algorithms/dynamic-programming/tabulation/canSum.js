
//Time complexity: O(mn) time
//Space: O(m)

//fill table of target length with false
function canSum(targetSum, numbers){
    let table = Array(targetSum+1).fill(false)

    table[0] = true

    //iterate and check if position is true
    //only let it go up to targetsum so that we're not infinitly assigning numbers
    for (let i = 0; i <= targetSum; i++){
        if(table[i] === true){
            //we only get to look ahead if we can get to this current amount
            //now we want to look ahead for each element with a nested loop
            for(let num of numbers){
                //for each number, I want to look that many indexes ahead
                //if my current position is reachable and I take num steps, that must mean that position i + num is reachable
                table[i + num] = true
            }
        }

    }
    return table[targetSum]
}

console.log(canSum(7, [5,3,4,7]))