//review this answer:
'https://www.youtube.com/watch?v=9FmEowPl2Rg'
// Convert a non-negative integer num to its English words representation.
// Input: 
let num1 = 123
// Output: "One Hundred Twenty Three"
// Example 2:

// Input: 
let num2 = 12345
// Output: "Twelve Thousand Three Hundred Forty Five"
// Example 3:

// Input: 
let num3 = 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
// Example 4:

// Input: 
let num4 = 1234567891
// Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"



/**
 * @param {number} num
 * @return {string}
 */

//create 1-9, 10 - 90
//thousand 
//billion
//million

//helper function to get 1-100
//function to do 1000 and above
//get hundreds digits then also get hundreds digit version for thousands digit followed by thousand etc

//get first hundred, then next 3 digits are thousand
//next 3 digits are million
//'' billion

//big part is getting 100s and then from there 



 var numberToWords = function(num) {
     const map = {
         1:"one", 2:"two",3:"three", 4:"four", 5:"five", 6:"six", 7:"seven", 8:"eight", 9:"nine", 
         10:"ten", 11:"eleven", 12:"twelve", 13:"thirteen", 14:"fourteen", 15:"fifteen", 16:"sixteen", 17:"seventeen", 18:"eighteen", 19:"nineteen",
         20:"twenty", 30:"thirty"

        } 
    
};


function getOneToHundreds(n){

}



const LESS_THAN_20 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const TENS = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const THOUSANDS = ["", "Thousand", "Million", "Billion"];

var numberToWords = function(num) {
    if(num === 0) {
        return 'Zero';
    }
    let thousandCounter = 0;
    let result = '';
    
    while(num > 0) {
        if(num % 1000 != 0) {
            result = numToString(num % 1000) + THOUSANDS[thousandCounter] + ' ' + result;
        }
        num /= 1000;
        num = Math.trunc(num);
        thousandCounter++;
    }
    return result.trim();
};

function numToString(num) {
    if (num === 0)
        return '';
    else if (num < 20)
        return LESS_THAN_20[num] + " ";
    else if (num < 100)
        return TENS[Math.trunc(num / 10)] + " " + numToString(num % 10);
    else
        return LESS_THAN_20[Math.trunc(num / 100)] + " Hundred " + numToString(num % 100);
}