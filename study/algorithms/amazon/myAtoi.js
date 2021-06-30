/**
 * @param {string} s
 * @return {number}
 */

//  Input: 
let s1 = "42"
//  Output: 42

// Input: 
let s2 = "   -42"
// Output: -42

// Input: 
let s3 = "4193 with words"
// Output: 4193

let s4 = "words and 987"




console.log(myAtoi(s1))
console.log(myAtoi(s2))
console.log(myAtoi(s3))
console.log(myAtoi(s4))



/**
 * @param {string} str
 * @return {number}
 */

//see following solution from discussion. Employs similar concepts to the one I started on my own (very bottom)
//for times sake decided not to run my own implementation
 var myAtoi = function(str) {
    let i = 0;
    let res = 0;
    let isNegative = false;
    // 1. Skip spaces
    //could also trim here
    while (str[i] === ' ') {
        i += 1;
    }
    // 2. Optional +/-
    const maybeSign = str[i];
    if (maybeSign === '+' || maybeSign === '-') {
        isNegative = maybeSign === '-';
        i += 1;
    }

    // 3. Process numbers and stop once an invalid character is found
    for (; i < str.length; i += 1) {
        //this is one of the main differences with mine. I used 0 - val. This one uses char code
        const code = str.charCodeAt(i) - 48; // '0' is 48
        if (code < 0 || code > 9) {
            break;
        }
        res *= 10;
        res += code;
    }
    
    if (isNegative) {
        res = -res;
    }
    
    //see check for size cap here
    return Math.max(-(2**31), Math.min(2**31 - 1, res));
};


//another one

var myAtoi = function (str) {
    str = str.trim();
    if (!str) return 0;
    var sign = 1;
    var i = 0;
    var answer = 0;
    if (str[i] == '+') {
      sign = 1;
      i++;
    } else if (str[i] == '-') {
      sign = -1;
      i++;
    }
  
    for (; i < str.length; i++) {
      var temp = str.charCodeAt(i) - 48;
      if (temp > 9 || temp < 0) break;
      if (answer > 2147483647 / 10 || answer > (2147483647 - temp) / 10)
        return sign == 1 ? 2147483647 : -2147483648;
      else answer = answer * 10 + temp;
    }
    return answer * sign;
  };


  //one using min and max
  var myAtoi = function(str) {
    let i=0, sign = 1, num = 0, MIN = -2147483648, MAX = 2147483647;
    str = str.trim();
    if (str[i]=='-' || str[i]=='+') sign = str[i++]=='-'?-1:1;
    while (str[i] && str[i].charCodeAt(0)-48 <= 9 && str[i].charCodeAt(0)-48 >= 0) {
        num = num*10 + (str[i++].charCodeAt(0)-48);
    }
    num = sign*num;
    return num<=MIN?MIN:num>=MAX?MAX:num;
};





//mine, currently failing on some test cases
//iterate through each char from left to right
//char mins zero
//add to result
//for every added digit after first, multiply current answer by 10 and THEN add #
//have a range at the end for numbers that are too big?

var myAtoi = function(s) {
    s = s.trim()
    let negative = false
    let result = 0

    if ((/[a-zA-Z]/).test(s[0])) return result

    for(let i = 0; i<s.length; i++){
       let toInt = s[i] - 0  
       if (toInt > -1 && toInt - 0 < 10 ){
           if(s[i-1] === "-") negative = true 

           if (result === 0){
                result += toInt
            } else {
                result = result * 10 + toInt
            }

            if(s[i+1] == " ") break
        }
    }
   
    return negative ? 0 - result : result
};
