function fizzBuzz(n) {
    for (let i = 1; i <= n; i++){
        if (n % 15 != 0){
            console.log("FizzBuzz")
        } else if (n % 3 != 0 ) {
            console.log("Fizz")
        } else if (n % 5 != 0){
            console.log("Buzz")
        } else {
            console.log(n)
        }
    }

}

console.log(fizzBuzz(15))
console.log(fizzBuzz2(15))

function fizzBuzz2(n) {
    for (let i = 1; i <= n; i++){ 
        let x
        switch(i % x === 0){
            case x = 15:
                console.log('FizzBuzz')
                break
            case x = 3:
                console.log('Fizz')
                break
            case x = 5:
                console.log('Buzz')
                break
            default:
                console.log(i) 
        }
        
    }

}