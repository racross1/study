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

// console.log(isUnique2(str2))

    // str.split('').forEach(x => {
    //     console.log(str.split('').filter(n => n === x).length)
    //     if (str.split('').filter(n => n === x).length > 1){
    //         return false
    //     } 
    // })


//this one uses for loop and an object storing instances.
// not sure why it's doing it with the second && condition tho

function everyCharUnique3(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
      if (obj[str[i]] && obj[str[i]] >= 1) {
        return false;
      } else {
        obj[str[i]] = 1;
      }
    }
    return true;
  }

  function everyCharUnique4(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
      if (obj[str[i]]) {
        return false;
      } else {
        obj[str[i]] = 1;
      }
    }
    return true;
  }


console.log(isUnique2(str2))