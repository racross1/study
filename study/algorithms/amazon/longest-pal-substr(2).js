
//code from this video annotated with my notes and alternate implementation in cases
//where a different way makes more sense to me.
//video:
'https://www.youtube.com/watch?v=VNiqbcow64c'

//source code:
'https://gist.github.com/tombaranowicz/7299e33fd8864c2dabb1d0b45dcf66dc'


//this implementation effective and beats on 98% of cases
function expandAroundCenterSolution(s) {
    let start = 0, end = 0;
    for (let i = 0; i < s.length; i++) {
        //helper function to get center around each i. center is all characters that are equal to each other (so in the case of 'cccaba' the first center is 'ccc')
        let center = getCenter(s, i);
        //helper function to get bounds of palindrome around center
        let bounds = expandAroundCenter(s, center[0], center[1]);
        //let left = left bound of palindrome found above and right = right bound of palindrom found above
        let L = bounds[0], R = bounds[1];
        //if right bound - left bount is greater than current end minus current start
        if (R - L > end - start) {
            //new start = that left bound
            start = L;
            //new end = that right bount
            end = R;
        }
        console.log("---");
        i = center[1]; //move to the end of center, i++ will then shift pointer to index right after current center
    }

    //return substring with new start and end values (with end val + 1 because substr not inclusive)
    return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
    //lef left = left bound of center and right = right bound of center (if just one char center, these will be the same #)
    let L = left, R = right;

    //while left pointer is >= 0 and right pointer is less than string.length (basically pointers are staying on string) and also s at left === s at right
    //decrement left pointer and increment right pointer
    while (L >= 0 && R < s.length && s[L] === s[R]) {
        L--;
        R++;
    }
    console.log("expand return " + (L+1) + ":" + (R-1));
    //return on greater than left and one greater than right since the loop ended with them failing the conditions
    return [++L, --R];
}

//this implementation also works (again, redid in a way that makes more sense to me)
function expandAroundCenter2(s, left, right) {
    //lef left = left bound of center and right = right bound of center (if just one char center, these will be the same #)
    let leftBound = left, rightBound = right;

    //while left pointer is >= 0 and right pointer is less than string.length (basically pointers are staying on string) and also s at left === s at right
    //decrement left pointer and increment right pointer
    while (leftBound >= 0 && rightBound < s.length && s[leftBound] === s[rightBound]) {
        leftBound--;
        rightBound++;
    }
    console.log("expand return " + (L+1) + ":" + (R-1));
    //return on greater than left and one greater than right since the loop ended with them failing the conditions
    return [leftBound + 1, rightBound - 1];
}


function getCenter(s,c){
    //let left = i and right = i where i is current iterator in for loop
    let L = c, R = c;
    console.log("get center start index: " + c);
    //while s at index of left equals r incremented and r is less than or equal to s.length return [left, and right - 1] => so basically, keep incrementing right bound
    //of center until either right bound reaches end of string, or right char is no longer equal to left char
    while(s[L] === s[++R] && R <= s.length );
    console.log("return " + L + ":" + (R-1));
    return [L, --R];
}


//this implementation of the above get center also works, and is less confusing to me than the above 
//(which uses a while loop with ++R and no explicit return value)
//if center is just single char, the while loop will increment the right pointer once and so you return left, right - 1, which == c or the center char you supplied
function getCenter2(s, c){
    let left = c, right = c 

    while(s[left] === s[right] && right <= s.length) right++

    return [left, right - 1]
}



// ++x (pre-increment) means "increment the variable; the value of the expression is the final value"
// x++ (post-increment) means "remember the original value, then increment the variable; the value of the expression is the original value"
// Now when used as a standalone statement, they mean the same thing:

// x++;
// ++x;
// The difference comes when you use the value of the expression elsewhere. For example:

// x = 0;
// y = array[x++]; // This will get array[0]

// x = 0;
// y = array[++x]; // This will get array[1]













// BRUTE FORCE
function isPalindrome(s) {
    let k = 0;
    let l = s.length - 1;
    let isPalindrome = true;
    while(k<=l) {
        if (!(s.charAt(k) === s.charAt(l))) {
            isPalindrome = false;
            break;
        }
        k++;
        l--;
    }
    return isPalindrome;
}

function bruteForce(s) {

    let maxPalindrome = "";
    
    for (let i = 0; i <= s.length-1; i++) {
        for (let j = i+1; j <= s.length; j++) {
            let subStr = s.substring(i, j)
            console.log("check: " + subStr);
            if (isPalindrome(subStr)) {
                console.log(subStr + " is palindrome")
                if (subStr.length > maxPalindrome.length) {
                        maxPalindrome = subStr;
                }
            } 
        }
        console.log("---");
    }  
    
    return maxPalindrome;
}

function longestPalindrome(s) {

    // let maxPalindrome = bruteForce(s);
    let maxPalindrome = expandAroundCenterSolution(s);

    return maxPalindrome;
}

let testCase = "cccaba";
console.log("Longest Palindromic Substring: " + longestPalindrome(testCase));