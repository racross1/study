
//solution using hash set
var isHappy = function(n) {
    
    var getNext = function(n){
        let totalSum = 0
        while(n>0){
            console.log('n: ', n)
            let digit = n % 10
            console.log('digit after mod 10: ', digit)
            n = Math.floor(n / 10)
            console.log('n after Math.floor: ', n)
            totalSum += digit*digit
        }

        return totalSum
    }

    let seen = new Set()
    while (n !== 1 && !seen.has(n)){
        seen.add(n)
        n = getNext(n)
    }
    
    return n == 1
    
};

// console.log(isHappy(19))
// console.log(isHappy(2))
console.log(isHappy(119))
console.log(isHappy(999))


//Floyd's Cycle-finding algorithm (slow and fast pointer)
//The chain we get by repeatedly calling getNext(n) is an implicit LinkedList. 
//Implicit means we don't have actual LinkedNode's and pointers, but the data does still form a LinkedList structure. 
//The starting number is the head "node" of the list, and all the other numbers in the chain are nodes. 
//The next pointer is obtained with our getNext(n) function above.
var isHappy = function(n) {
    
    var getNext = function(n){
        let totalSum = 0
        while(n>0){
            let digit = n % 10
            n = Math.floor(n / 10)
            totalSum += digit**2
        }

        return totalSum
    }

    let tortoise = n
    let hare = getNext(n)
    while (hare !== 1 && tortoise !== hare){
        tortoise = getNext(tortoise)
        hare = getNext(getNext(hare))
    }
    
    return hare === 1
    
};