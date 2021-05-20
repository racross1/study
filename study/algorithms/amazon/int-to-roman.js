// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

//     let key = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}





    /**
 * @param {number} num
 * @return {string}
 */


    //  Input: 
    let num1 = 3
    //  Output: "III"
    //  Example 2:
     
    //  Input: 
    let num2 = 4
    //  Output: "IV"
    //  Example 3:
     
    //  Input: 
    let num3 = 9
    //  Output: "IX"
    //  Example 4:
     
    //  Input: 
    let num4 = 58
    //  Output: "LVIII"
    //  Explanation: L = 50, V = 5, III = 3.
    //  Example 5:
     
    //  Input: 
    let num5 = 1994
    //  Output: "MCMXCIV"
    //  Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

    //mod by 10 each time to get each digit
    //num to string.length = digits
    //highest digits will be in thousands


// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

//     let key = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
//5 , 10, 50, 100, 500, 1000 
//4, 9, 40, 90, 400, 900

//solutions below. First 2 from same post. I found third easier to understand


// First version using forEach:

function intToRoman(num) {
    const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let result = '';
    Object.entries(map).forEach(([letter, n]) => {
        //add to result letter repeated floor of number / divided by current digit
        result += letter.repeat(Math.floor(num / n));
        //number = number modulo n (current digit)
        num %= n;
    });
    return result;
}
// Second version with reduce:

function intToRoman(num) {
    const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    return Object.entries(map).reduce((result, [letter, n]) => {
        result += letter.repeat(Math.floor(num / n));
        num %= n;
        return result;
    }, '');
}


//nice neat one which I found easier to understand

function intToRoman(num) {
    var hash = [
        ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        ['', 'M', 'MM', 'MMM']
    ];
    
    var result = '';
    var counter = 0;
    while (num > 0) {
        result = hash[counter++][num % 10] + result;
        num = Math.floor(num / 10);
    }
    
    return result;
};


console.log(intToRoman(num1))
console.log(intToRoman(num2))
console.log(intToRoman(num3))
console.log(intToRoman(num4))