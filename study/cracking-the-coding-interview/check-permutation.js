'Given 2 strings write a method to decide if one is  a permutation of the other'


//first one = mine - sort and compare sorted strings
//I think time complexity is O of n log n (because sort)
function checkPermutation1(str1, str2){
    return str1.split('').sort((a,b) => a > b ?  1 : -1).join('') === str2.split('').sort((a,b) => a > b ?  1 : -1).join('')
    
}

//using hash table - from this article:
'https://medium.com/@_edhuang/cci-check-permutations-e83dfd05f0b6'
function checkPermutation(str1, str2) {
    if(str1.length !== str2.length) {
      return false;
    }
    var myHash = [];
    for(var i = 0; i < str1.length; i++) {
      if(myHash[str1[i]]) {
        myHash[str1.charAt(i)]++;
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

// console.log(checkPermutation1('bacd', 'acbd'))

console.log(checkPermutation1('bbca', 'acbd'))

console.log('dbca'.split('').sort())
