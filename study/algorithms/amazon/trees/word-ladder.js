//review this solution plus this video (solution is not from video)
//https://www.youtube.com/watch?v=pmImer7O3pM


function ladderLength(beginWord, endWord, wordList) {
    let len = 1;
    let queue = [beginWord];
    //new dictionary set out of all words in word list
    const dict = new Set(wordList);
    //set for seen with just beginWord to start
    const seen = new Set(queue);
    
    //while there are items in the q
    while (queue.length) {
    //initialize 'next' array  
    const next = [];
    //for each item in q
    //if item is endword, return length
      for (let v of queue) {
        if (v === endWord) {
          return len;
        }
        
        //otherwise make an array out of current dequeued word
        const arr = v.split('');
        //iterate through word
        for (let i = 0; i < arr.length; i++) {
            //for each letter in word look through alphabet
            for (let d = 0; d < 26; d++) {
            //current character in word = string from character code ascii for a + d (so we'll be seeing each char of arr as each letter of alphabet)
            arr[i] = String.fromCharCode(97+d);
            //nv => string with 1 letter changed
            const nv = arr.join('');
            //if nv isn't in seen set and is in dictionary
            if (!seen.has(nv) && dict.has(nv)) {
                //add nv to next array
                //add nv to seen
              next.push(nv);
              seen.add(nv);
            }
            //change arr[i] back to original char
            arr[i] = v[i];
          }
        }
      }
      //next word to look at is the next you discerned above
      queue = next;
      //increment length
      len++;
    }
    
    //if you never get to end word, return 0
    return 0;
  }