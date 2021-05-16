let str1 = 'hello'
//olleh

let str2 = 'turtle'

let str3 = 'cat'



// function reverse(str){
//     let i = 0
//     let arr = str.split('')
    
//     while (i < str.length / 2){
//         let temp = arr[i]
        
//         arr[i] = arr[arr.length - 1 - i]
//         arr[arr.length - 1 - i] = temp		
//         i++
//     }

//     return arr.join('')

// }


function reverse(str){
    let arr = str.split('')
    
    for(let i = 0; i < str.length / 2; i++) {
        let temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp		
    }

    return arr.join('')

}

console.log(reverse(str1))
console.log(reverse(str2))
console.log(reverse(str3))