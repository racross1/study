let str1 = 'hello'
//olleh



function reverse(str){
    let i = 0
    let str2 = str.split('')
    while (i < str.length / 2){
        let temp = str2[i]
        str2[i] = str2[str2.length - 1 - i]
        str2[str2.length - 1 - i] = temp		
        i++
    }

    return str2.join('')

}


console.log(reverse(str1))