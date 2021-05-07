// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle fancy punctuation.)
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.


let text1 = "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."
//# => ["a", "of", "on"]

let text2 = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"
//# => ["e", "ddd", "aa"]

let text3 = "  //wont won't won't"
//# => ["won't", "wont"]

let text4 = "     "

let text5 = 'no    , '

let text6 = "a a a  b  c c  d d d d  e e e e e"
//['e','d','a']
  
let text7 = "a a c b b"
//['a','b','c']

let text8 = "  '  "

let text9 = "Toads yelled with the cat of a doll" 
let text10 = 'A rat ate on the toad of a frog'


let text10 = 'A jedi exploded from a doll on the rat'





function topThreeWords(text) {
    let newStr = text.toLowerCase().replace(/[^a-z'  ' ']/g, '').trim()
    let arr = newStr.split(' ').filter(x => x !== '')
    let uniques = new Set(arr)
    let numOutput = Math.min(3, uniques.size)
    let output = []


   if (Array.from(uniques)[0] === ''){
       return output
   }

    let hash = {}

    for (let i = 0; i < arr.length; i++){
        if(hash[arr[i]]){
            hash[arr[i]]++
        } else {
            hash[arr[i]] = 1
        }
    }

    console.log(hash)
    let values = Object.values(hash)
    let max

    while(output.length < numOutput){
        max = Math.max(...values)
        
        output.push(max)
        values.splice(values.indexOf(max), 1)
       

   

    }
    console.log(output)


  return output.map(x =>Object.keys(hash)[Object.values(hash).indexOf(x)]) 
}


// function topThreeWords2(text) {
//     let newStr = text.toLowerCase().replace(/[^a-z'  ' ']/g, '').trim()
//     //probably don't need to trim AND filter for spaces
//     let arr = newStr.split(' ').filter(x => x !== '')
//     let uniques = new Set(arr)
//     let numOutput = Math.min(3, uniques.size)
//     let output = []


//    if (Array.from(uniques)[0] === ''){
//        return output
//    }

//     let hash = []

//     for (let i = 0; i < arr.length; i++){
//         if(hash[arr[i]]){
//             hash[arr[i]]++
//         } else {
//             hash[arr[i]] = 1
//         }
//     }

//     console.log(hash[1])

//     let values = Object.values(hash)
//     let entries = Object.entries(hash)
//     let max
//     console.log(entries.sort((a,b) => a[1] - b[1]))

//     // while(output.length < numOutput){
//     //     max = Math.max(...values)
        
//     //     output.push(max)
//     //     values.splice(values.indexOf(max), 1)
//     //     // console.log(values)

//     // }

function topThreeWords2(text) {
    let newStr = text.toLowerCase().replace(/[^a-z'  ' ']/g, '')
    let arr = newStr.split(' ').filter(x => x !== '' && x !== "'")
    let uniques = new Set(arr)
    let numOutput = Math.min(3, uniques.size)
    let output = []

    console.log(numOutput)
    let hash = {}

    for (let i = 0; i < arr.length; i++){
        if(hash[arr[i]]){
            hash[arr[i]]++
        } else {
            hash[arr[i]] = 1
        }
    }

    
    let values = Object.values(hash)
    let max

    while(output.length < numOutput){
        max = Math.max(...values)
        
        output.push(max)
        values.splice(values.indexOf(max), 1)
       

    }
    
    let result = []
    for (item in hash){
        if (output.includes(hash[item])){
            result[item] = hash[item]
            delete hash[item]
           
        }
    }
    

    let entries = Object.entries(result)

    let sorted = entries.sort((a,b) => b[1] - a[1])
    
   return sorted.map(x => x[0])


}

function topThreeWords3(text) {
    let newStr = text.toLowerCase().replace(/[^a-z'  ' ']/g, '')
    let arr = newStr.split(' ').filter(x => x !== '' && x !== "'")
    let uniques = new Set(arr)
    let numOutput = Math.min(3, uniques.size)
    let output = []

    let hash = {}

    for (let i = 0; i < arr.length; i++){
        if(hash[arr[i]]){
            hash[arr[i]]++
        } else {
            hash[arr[i]] = 1
        }
    }

    
    let values = Object.values(hash)
    let max

    while(output.length < numOutput){
        max = Math.max(...values)
        
        output.push(max)
       
        values.splice(values.indexOf(max), 1)

    }

    console.log(output)
    
    let result = []
    while(result.length < numOutput){
    for (item in hash){
        
        if (output.includes(hash[item])){
            result[item] = hash[item]
            delete hash[item]
           
        }
    }
}
    

    let entries = Object.entries(result)

    let sorted = entries.sort((a,b) => b[1] - a[1])
    
   return sorted.map(x => x[0])


}

    
   
   


//   return output.map(x =>{
//     if ()  
//     Object.keys(hash)[Object.values(hash).indexOf(x)]
//     }) 
// }

console.log(topThreeWords3(text8))
console.log(topThreeWords3(text9))
console.log(topThreeWords3(text10))