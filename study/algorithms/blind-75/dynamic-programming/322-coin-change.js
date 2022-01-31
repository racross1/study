// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 function coinChangeTry(coins, amount){
     let dp = new Array(amount + 1).fill(Infinity)

     dp[0] = 0

     for(let amt = 0; amt <= amount; amt++){
         for(let j = 0; j < coins.length; j++){
             if (coins[j] <= amt){
                 dp[amt] = Math.min(dp[amt], 1 + dp[amt - coins[j]])
             }

         }
     }
     return dp[amount] != Infinity ? dp[amount] : -1
 }

 let coins2 = [1,2,5], amount2 = 11
 let coins3 = [2], amount3 = 3
 let coins4 = [1], amount4 = 0
 let coins5 = [1], amount5 = 1
 let coins6 = [1], amount6 = 2

 console.log(coinChangeTry(coins2, amount2))
 console.log(coinChangeTry(coins3, amount3))
 console.log(coinChangeTry(coins4, amount4))
 console.log(coinChangeTry(coins5, amount5))
 console.log(coinChangeTry(coins6, amount6))

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
// Example 4:

// Input: coins = [1], amount = 1
// Output: 1
// Example 5:

// Input: coins = [1], amount = 2
// Output: 2


//for dp problems, break it down into smaller sub problems and solve those
//create dp array to store fewest coins needed to get that amount (using amount + 1 slots to account from 0 array)
//fill dp array with infinity
//starting at bottom of problem, can set dp of 0 to 0 (0 coins to get 0)
//nested loop to go through all coins for all amounts in dp array


//fromthis video: https://www.youtube.com/watch?v=1R0_7HqNaW0
//it's for java but may be a more intuitive solution

//create dp array and fill with inifinty
//sub problem will be to loop through all amounts leading up to amount and get least number of coins for that amount
//to do that
//loop through the coin combo for each amount (outer loop current amount, inner loop coin)
//for each coin for given amount if current coin is less than or equal to current amount
//take that coin and we want to reassign dp[i] (each index in dp is the fewest coins it would take to make that amount)
//since we want to get the smallest number of coins to make i, set dp[i] to the min of what dp[i] already is and 1 + dp[i - coins[j]]
//1 + dp[i - coins[j]] basically we are saying if I subtract this coin from the current amount, I have some amount left (Amount Left for my reference in following sentence)
//I want to look in my array for the current min number of coins it takes to get the Amount Left because current coint + Amount Left = current amount
//so I will fill up the dp array and at the end just need to check if I've modified dp[amou


/*
for each amount leading up to amount:

    for each coin, if coin is <= amount

    dp for this amnount = 1 (of this coin) + the min combination of coins for the rest (i.e. difference in amont and if you take out this current coin)
                    dp[i] = 1 + dp[i - nums[j]]

*/
function coinChange2(coins,amount){
    const dp = new Array(amount + 1).fill(Infinity)
    
    dp[0] = 0

    //loop to go through all amounts
    for (let i = 0; i <= amount; i++){
        //for each amount, loop through each coin
        //whereas in below solution, outer loop is coin and inner loop is amounts
        for (let j = 0; j < coins.length; j++){
            //if current coin is <= i which is the current amount / the current piece of the amount
            //e.g. if you have a nickle and the amount is 1 cent you can't take that nickle
            //i is the current sub problem (the fewest number of coins for i'th cents)
            //because we're building up to amount
            console.log('i', i)
            console.log('j', j)
            if (coins[j] <= i){
                console.log('coins[j] <= i')
                console.log('dp before assign', dp)
                //if we can take the coin, we want to set dp of i, which is fewest # of coins to make i cents
                //we want that to be as small as possible
                //now we need to simulate 'taking' the coin j. 
                //taking that coin, what does the new amount that we're trying to make become?
                //it's going to become whatever amount is i minus coins[j]
                //but we don't just want to know some way to make that amount, we want to know the best way
                //so hopefully that's a sub problem that we've already solved.
                //so we can access our dp array
                //that's going to represent whatever amount we're currently solving, i.e. the fewest number of coins to make up i cents,
                //minus whatever coin that we just took, and we want to look up the best way to make whatever amount that is in our dp array
                console.log('1 + dp[i - coins[j]]', 1 + dp[i - coins[j]])
                dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]])
                console.log('dp after assign', dp)
            }

        }
        

    }
    //when we get out of this loop, we'll have our entire dp array populated
    //all we need to do is check whether we've modified dp of amount to something that's better than infinity
    return dp[amount] === Infinity ? -1 : dp[amount] 
}

//on the above you can also do a small optimization with sorting coins and breaking




var coinChange = function(coins, amount) {
    //first create our table
    //add 1 to account for 0th index
    //fill with infinity because we're doing min comparison
    const table = new Array(amount + 1).fill(Infinity)
    
    
    //fil in first element 
    table[0] = 0
    
    //now iterate over the coins
    
    for (let coin of coins){
        //go over coins
        //remember in table index = amount
        console.log('coin loop', coin)
        for (let i = 0; i < table.length; i++){
            console.log('i outside conditional', i)
            //now check if coin you're currently on is <= the amount which is the index
            if (coin <= i){
                // console.log('i inside conditional', i)
                // console.log('coin', coin)
                //if it is, we want to get the potential amount
                //this will get our index
                //because curr table index in teration - coin amount = difference between this piece of the total amount and current coin
                let idx = i - coin
                console.log('idx', idx)

                
                //then let our potental amount = idx + 1
                //what is potential amount?
                    //table at index of difference of this peice of the total amount less the current coin
                    //use + 1 to account for 0th index
                    //potential amount is the potential amount of that coin denoominations for that index (where index is part of the whole amount)
                    //it's potential amount because it's the fewest number of current coin it owuld take to get to current index, but it might not be fewest of all coins
                let potentialAmt = table[idx] + 1
                console.log('potentialAmt', potentialAmt)
                //table at index = min of potential amount and infinity
                table[i] = Math.min(potentialAmt, table[i])
                console.log('table[i] after assign', table[i])
                console.log('table at bottom of coin loop', table)
            }
        }
    }
    
    //if the last element is infinity we can just assume that wasn't found
    return table[table.length - 1] === Infinity? -1 : table[table.length-1]
};

let coins1 = [1,2,5], amount1 = 11


// coinChange(coins1, amount1)