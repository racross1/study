// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 

// Example 1:

// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

// Explanation
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True




//one implementation from leetcode discuss: https://leetcode.com/problems/implement-trie-prefix-tree/discuss/399178/Clean-JavaScript-solution
//annotated below

//change function to class
class Trie {
    //constructor, when new trie created, initialized with this.root = {}
    constructor() {
      this.root = {};
      console.log('new trie', this)
    }
  
    //pass word to be inserted
    //creates nested hashes of letters (checks if char is in trie, if not creates new nested hash for it)
    insert(word) {
        //node = root of trie
        let node = this.root;
       
        //for each letter of word passed
        for (let c of word) {
            console.log('node at start of loop', node)
            //if root does not have entry for key if current letter
            //create hash for c
            if (node[c] == null) node[c] = {};
            console.log('node[c] after if statement','char:', c, "node[c]:",node[c])
            //set node to newly created node (or preexisting node) for next iteration
            node = node[c];
        }
        //after iterating through word, give last char isWord property of true
        node.isWord = true;
        console.log('this.root', this.root)
    }
  
    //pass word to be traversed
    traverse(word) {
        //start at root  
        let node = this.root;

        //for each char of word
        for (let c of word) {
            //node == node at that char
            node = node[c];
            //if you don't find node of that char (i.e. node == null)
            //return null
            if (node == null) return null;
        }
        //otherwise you traversed the word in the trie and you return the last char of the word
      return node;
    }
  
    search(word) {
        //to search, set node equal to traversed word
        //traverse returns either last char in word, or null
        const node = this.traverse(word);
        //if node is not null (i.e. you got to / found the last char)
        //and node.isWord property == true return true because you found the word
        //else return false
        return node != null && node.isWord === true;
    }
  
    startsWith(prefix) {
        //with prefix you just need to know if prefix is present (not if isWord = true, which indicates the end of the word)
        //return a bool that traversed prefix returns a char
        return this.traverse(prefix) != null;
    }
  }
  
  /** 
   * Your Trie object will be instantiated and called as such:
   * var obj = new Trie()
   * obj.insert(word)
   * var param_2 = obj.search(word)
   * var param_3 = obj.startsWith(prefix)
   */


let trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");
trie.insert("ape") 

//my addition of ape - if you insert 'ape' you get:
    //this.root { a: { p: { p: [Object], e: [Object] } } }
    //whereas with just apple and app it was:
        //this.root { a: { p: { p: [Object] } } }



