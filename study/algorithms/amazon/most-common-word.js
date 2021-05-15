// Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

// The words in paragraph are case-insensitive and the answer should be returned in lowercase.

// Input: 
let paragraph1 = "Bob hit a ball, the hit BALL flew far after it was hit."
let banned1 = ["hit"]
// Output: "ball"
// Explanation: 
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"), 
// and that "hit" isn't the answer even though it occurs more because it is banned.


// Input: 
let paragraph2 = "a."
let banned2 = []
// Output: "a"

let paragraph3 = "Bob. hIt, baLl"
let banned3 = ["bob", "hit"]


let paragraph4 = "a, a, a, a, b,b,b,c, c"
let banned4 = ["a"]
// Expected:
// "b"

let paragraph5 = "j. t? T. z! R, v, F' x! L; l! W. M; S. y? r! n; O. q; I? h; w. t; y; X? y, p. k! k, h, J, r? w! U! V; j' u; R! z. s. T' k. P? M' I' j! y. P, T! e; X. w? M! Y, X; G; d, X? S' F, K? V, r' v, v, D, w, K! S? Q! N. n. V. v. t? t' x! u. j; m; n! F, V' Y! h; c! V, v, X' X' t? n; N' r; x. W' P? W; p' q, S' X, J; R. x; z; z! G, U; m. P; o. P! Y; I, I' l' J? h; Q; s? U, q, x. J, T! o. z, N, L; u, w! u, S. Y! V; S? y' E! O; p' X, w. p' M, h! R; t? K? Y' z? T? w; u. q' R, q, T. R? I. R! t, X, s? u; z. u, Y, n' U; m; p? g' P? y' v, o? K? R. Q? I! c, X, x. r' u! m' y. t. W; x! K? B. v; m, k; k' x; Z! U! p. U? Q, t, u' E' n? S' w. y; W, x? r. p! Y? q, Y. t, Z' V, S. q; W. Z, z? x! k, I. n; x? z; V? s! g, U; E' m! Z? y' x? V! t, F. Z? Y' S! z, Y' T? x? v? o! l; d; G' L. L, Z? q. w' r? U! E, H. C, Q! O? w! s? w' D. R, Y? u. w, N. Z? h. M? o, B, g, Z! t! l, W? z, o? z, q! O? u, N; o' o? V; S! z; q! q. o, t! q! w! Z? Z? w, F? O' N' U' p? r' J' L; S. M; g' V. i, P, v, v, f; W? L, y! i' z; L? w. v, s! P?"
let banned5 = ["m","q","e","l","c","i","z","j","g","t","w","v","h","p","d","b","a","r","x","n"]
//Expected: "y"

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
*/

//this one doesn't seem to work when submitted, check one below, which is similar in approach and very fast
 var mostCommonWord = function(paragraph, banned) {
    console.log(paragraph.toLowerCase().split(/\W/)) 
    paragraph = paragraph.toLowerCase().replace(/[^a-z' ']'/gi, ' ')
     

     let arr = paragraph.split(' ').filter(x => x !== '')
     let hash = {}

     for (let i = 0; i<arr.length; i++){
        
        if (!banned.includes(arr[i])) {
    
            if(hash[arr[i]] && arr[i]){
                hash[arr[i]]++
            } else {
                hash[arr[i]] = 1
            }
        }
    }
     
     let max = 0
     let result = ''

     for (key in hash){
         if (hash[key] > max){
             max = hash[key]
             result = key
         }
     }

    return `${result}: ${max}`
    
};

// console.log(mostCommonWord(paragraph1, banned1))
// console.log(mostCommonWord(paragraph2, banned2))
console.log(mostCommonWord(paragraph3, banned3))
// console.log(mostCommonWord(paragraph4, banned4))
// console.log(mostCommonWord(paragraph5, banned5))


//another JS solution to understand
//check regex
//this one is the one submitted and beats on 99%
const mostCommonWord2 = (paragraph, banned) => {
    const bannedSet = new Set(banned);
    const words = paragraph.toLowerCase().split(/\W+/);
    const map = {};
    for (const w of words) {
      if (!bannedSet.has(w)) {
        if (map[w] == null) map[w] = 0;
        map[w]++;
      }
    }
  
    let res = '';
    let max = -Infinity;
    for (const w in map) {
      const count = map[w];
      if (count > max) {
        res = w;
        max = count;
      }
    }
    return res;
  };



  //another 
//   Here is a shortened ES6 solution with explanation; It's in O(N) where N is the number of words in the paragraph;

var mostCommonWord3 = function(paragraph, banned) {
    //Split the paragraph into an array of words in lowercase
    const words = paragraph.toLowerCase().split(/\W/);
    //Create a map to act as histogram of words
    const mp = Object.create(null);
    //Filter out empty strings and make the histogram
    words.filter(x => x).map(x => mp[x] = x in mp ? mp[x] + 1 : 1);
    //Rather than deleting banned words, just set its value to a negative number
    banned.map(x => mp[x] = -1)
    //Return the word with the highest count in the histogram
    return Object.keys(mp).reduce((a, b) => mp[a] > mp[b] ? a : b);
};
// Noteworthy here:

// It doesn't ever delete anything, cause it hurts performance in some JavaScript Engines, notably in v8 engine
// Note the oneliner trick of finding maximum element using a predicate, with the [...].reduce() trick. Similar to how I would have done it in C++ std::max_element(...[](){});