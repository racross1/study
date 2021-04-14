'Given 2 strings write a method to decide if one is  a permutation of the other'


//first one = mine - sort and compare sorted strings
//I think time complexity is O of n log n (because sort)
function checkPermutation1(str1, str2){
    return str1.split('').sort((a,b) => a > b ?  1 : -1).join('') === str2.split('').sort((a,b) => a > b ?  1 : -1).join('')
    
}

//using hash table - from this article:
'https://medium.com/@_edhuang/cci-check-permutations-e83dfd05f0b6'

//reviewed it and from what I can tell just a stylistic preference on things like declaring the myHash object using empty square brackets
//I did it with curly brackets to the same result
//Appears to be same thing with myHash[str1.charAt(i)] vs. myHash[str1[i]]
//Discussion of charAt vs str[i]: 'https://stackoverflow.com/questions/5943726/string-charatx-or-stringx'
function checkPermutation2(str1, str2) {
    if(str1.length !== str2.length) {
      return false;
    }
    var myHash = []
    for(var i = 0; i < str1.length; i++) {
      if(myHash[str1[i]]) {
        myHash[str1.charAt(i)]++;
        // myHash[str1[i]]++
      } else {
        myHash[str1.charAt(i)] = 1;
      }
     }

  
    for(i = 0; i < str2.length; i++) {
      myHash[str2.charAt(i)]--;
    }
    for(i in myHash) {
      if(myHash[i] !== 0) {
        return false;
      }
    }
    return true;
  }




  function checkPermutation3(str1, str2) {
      if (str1.length !== str2.length){
          return false
      }

     let hash = {}

      for (let i = 0; i < str1.length; i++){
          if (hash[str1[i]]){
            //   hash[str1.charAt(i)]++
              hash[str1[i]]++
          } else {
            //   hash[str1.charAt(i)] = 1
              hash[str1[i]] = 1
          }
      }

      for (let i = 0; i < str2.length; i++){
            // hash[str2.charAt(i)]--
            hash[str2[i]]--
      }

      for (item in hash) {
          if (hash[item] !== 0){
              return false
          }
      }
      return true
  }
// console.log(checkPermutation1('bacd', 'acbd'))

console.log(checkPermutation3('bbca', 'acbd'))
console.log(checkPermutation3('bca', 'acb'))

// console.log('dbca'.split('').sort())
