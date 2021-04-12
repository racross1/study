// Given a string, determine if the string has all unique characters.

// Examples :  

// Input : 
let str1 = 'abcd10jk'
// Output : true

// Input : 
let str2 = 'hutg9mnd!nk9'
// Output : false


function isUnique(str){
    for (let i = 0; i < str.length; i++){
        if (str.split('').filter(n => n === str[i]).length > 1){
            return false
        } 
    }
    return true

}


//this one uses Set method (see google drive notes for additional detail)
function isUnique2(str){
    return (new Set(str).size === str.length);    

}

console.log(isUnique2(str2))

    // str.split('').forEach(x => {
    //     console.log(str.split('').filter(n => n === x).length)
    //     if (str.split('').filter(n => n === x).length > 1){
    //         return false
    //     } 
    // })