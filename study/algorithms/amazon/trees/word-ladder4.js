// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

// Input: 
let beginWord1 = "hit" 
let endWord1 = "cog"
let wordList1 = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.

// Input: 
let beginWord2 = "hit"
let endWord2 = "cog" 
let wordList2 = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.



// /**
//  * @param {string} beginWord
//  * @param {string} endWord
//  * @param {string[]} wordList
//  * @return {number}
//  */

//problem: find length of list of words in word sequence from beginword to endword. If there is no path, return 0
//input: wordlist: arr, beginword: string, endword: string

//graph traversal where adjacent nodes = words that differ by 1 character


//graph traversal, BFS, counter 

//helper function to get adjacent nodes
//queue to process nodes
//seen set to keep track of nodes seen

//my solution slow (27%) but accepted!
 var ladderLength = function(beginWord, endWord, wordList) {
     //initialize, seen set, queue
     //first node, {word: word, level: 0}
     const seen = new Set()
     const q = [{word: beginWord, level: 1}]

     function getAdjacentList(word){
         let wordMap = []
         console.log(word)

         for (let w of wordList){
            //  console.log(w)
            let diffCounter = 0 
            if(w === word) continue

             for(let i = 0; i < w.length; i++){
                 if(w[i] !== word[i]) diffCounter++
             }

             if (diffCounter < 2 && !seen.has(w)) wordMap.push(w)
            //  console.log(wordMap)

         }
         return wordMap
        }
         
        while(q.length){
            let curr = q.shift()
            let currLevel = curr.level
            let currWord = curr.word
            

            if (currWord === endWord) return currLevel

            let adjacents = getAdjacentList(currWord)

            for (adj of adjacents){
                if (!seen.has(adj)){
                    q.push({word: adj, level: currLevel + 1})
                    seen.add(adj)
                }
            }
        }

        return 0

};



console.log(ladderLength(beginWord1, endWord1, wordList1))
console.log(ladderLength(beginWord2, endWord2, wordList2))


 //q loop while q.length
            //process current node 
            //current = q.shift()
            //currLevel = current.level
                //if current node === endnode, return currLevel
            //get adjacent nodes of current node and add them to q
                //for word in adjacent, if not seen, add {word, currLevel + 1}
            //add current node to seen


        
        //if i exit loop without finding endnode, return 0