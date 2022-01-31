

var countBits = function(num) {
    let bits = [];
    for (let i = 0; i <= num; i++)
        // remove 0 from bits

        
        
        bits.push(Number(i).toString(2).replace(/0/g, '').length);
    return bits;
};

// Input: 
let n = 2
// Output: [0,1,1]
 

// console.log(countBits(5))

//Number(i).toString(2) converts a number to strubg base 2