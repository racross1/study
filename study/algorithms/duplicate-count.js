// Write a function that will return the count of distinct 
//case-insensitive alphabetic characters 
//and numeric digits that occur more than once in the input string. 
//The input string can be assumed to contain only alphabets 
//(both uppercase and lowercase) and numeric digits.

// Example
let str1 = "abcde" 

//-> 0 # no characters repeats more than once
let str2 = "aabbcde" 
//-> 2 # 'a' and 'b'

let str3 = "aabBcde" 
//-> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)

let str4 = "indivisibility" 
//-> 1 # 'i' occurs six times

let str5 = "Indivisibilities" 
//-> 2 # 'i' occurs seven times and 's' occurs twice

let str6 = "aA11" 
//-> 2 # 'a' and '1'

let str7 = "ABBA" 
//-> 2 # 'A' and 'B' each occur twice

// input: string of chars
// output: num chars that occur more than once

// function duplicateCount(text){
//     let dupes = []
    
//     text.toLowerCase().split('').forEach(x =>{
//         if (!dupes.includes(x)){
//             dupes.push(x)
//         }
//     })

//     return dupes.length
//   }


function duplicateCount(text){
    let hash = {}
    let lcText = text.toLowerCase()
    for (let i = 0; i < lcText.length; i++){
        if (hash[lcText[i]]) {
            hash[lcText[i]]++
        } else {
            hash[lcText[i]] = 1
        }
    }
    
   return Object.values(hash).filter(x => x > 1).length 

  }


  
  console.log(duplicateCount(str1))
  console.log(duplicateCount(str2))
  console.log(duplicateCount(str3))
  console.log(duplicateCount(str4))
  console.log(duplicateCount(str5))
  console.log(duplicateCount(str6))
  console.log(duplicateCount(str7))
  