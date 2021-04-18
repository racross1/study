// * Implement a method to perform basic string compression using the counts
//  * of repeated characters. For example, the string aabcccccaaa would become
//  * a2b1c5a3. If the "compressed" string would not become smaller than the
//  * original string, your method should return the original string.

let str1 = 'aaabbcccdddd'
let str2 = 'abc'
let str3 = 'bbc'

function stringCompression(str){
    str = str.toLowerCase()
    let hash = {}
    let output = ''

    for (let i = 0; i < str.length; i++){
        if (hash[str[i]]){
            hash[str[i]]++
        }else {
            hash[str[i]] = 1
        }
    }

    for (item in hash){
        output += item
        output += hash[item]
    }

    return output.length >= str.length ? str : output

}

console.log(stringCompression(str1))
console.log(stringCompression(str2))
console.log(stringCompression(str3))