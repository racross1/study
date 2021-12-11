// You have a queue of integers, you need to retrieve the first unique integer in the queue.

// Implement the FirstUnique class:

// FirstUnique(int[] nums) Initializes the object with the numbers in the queue.
// int showFirstUnique() returns the value of the first unique integer of the queue, and returns -1 if there is no such integer.
// void add(int value) insert value to the queue.
 

// Example 1:

// Input: 
// ["FirstUnique","showFirstUnique","add","showFirstUnique","add","showFirstUnique","add","showFirstUnique"]
// [[[2,3,5]],[],[5],[],[2],[],[3],[]]
// Output: 
// [null,2,null,2,null,3,null,-1]
// Explanation: 
// FirstUnique firstUnique = new FirstUnique([2,3,5]);
// firstUnique.showFirstUnique(); // return 2
// firstUnique.add(5);            // the queue is now [2,3,5,5]
// firstUnique.showFirstUnique(); // return 2
// firstUnique.add(2);            // the queue is now [2,3,5,5,2]
// firstUnique.showFirstUnique(); // return 3
// firstUnique.add(3);            // the queue is now [2,3,5,5,2,3]
// firstUnique.showFirstUnique(); // return -1
// Example 2:

// Input: 
// ["FirstUnique","showFirstUnique","add","add","add","add","add","showFirstUnique"]
// [[[7,7,7,7,7,7]],[],[7],[3],[3],[7],[17],[]]
// Output: 
// [null,-1,null,null,null,null,null,17]
// Explanation: 
// FirstUnique firstUnique = new FirstUnique([7,7,7,7,7,7]);
// firstUnique.showFirstUnique(); // return -1
// firstUnique.add(7);            // the queue is now [7,7,7,7,7,7,7]
// firstUnique.add(3);            // the queue is now [7,7,7,7,7,7,7,3]
// firstUnique.add(3);            // the queue is now [7,7,7,7,7,7,7,3,3]
// firstUnique.add(7);            // the queue is now [7,7,7,7,7,7,7,3,3,7]
// firstUnique.add(17);           // the queue is now [7,7,7,7,7,7,7,3,3,7,17]
// firstUnique.showFirstUnique(); // return 17
// Example 3:

// Input: 
// ["FirstUnique","showFirstUnique","add","showFirstUnique"]
// [[[809]],[],[809],[]]
// Output: 
// [null,809,null,-1]
// Explanation: 
// FirstUnique firstUnique = new FirstUnique([809]);
// firstUnique.showFirstUnique(); // return 809
// firstUnique.add(809);          // the queue is now [809,809]
// firstUnique.showFirstUnique(); // return -1


//my final passing solution based on each of the below 2 examples:
/**
 * @param {number[]} nums
 */
 var FirstUnique = function(nums) {
    this.unique = new Set()
    this.dupes = new Set()
    
    nums.forEach(n => this.add(n))
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    for(let n of this.unique){
        return n
    }
    return -1
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
   if (this.unique.has(value)){
       this.unique.delete(value)
       this.dupes.add(value)
   } else if (!this.dupes.has(value)){
       this.unique.add(value)
   }
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */



//another js solution that involves creating 2 sets, but is easier to understand:
'https://leetcode.com/problems/first-unique-number/discuss/904512/Javascript-Super-Fast-and-Super-Slow'
class FirstUnique{
    constructor(nums){
      this.set = new Set()
      this.previouslyDeleted = new Set()
      for(let q of nums){
        this.add(q)
      }    
    }
    
    showFirstUnique(){
      for(let s of this.set){
        return s
      }
      return -1
    }
    
    add(val){
      if(this.set.has(val)){
        this.set.delete(val)
        this.previouslyDeleted.add(val)
      }else if(!this.previouslyDeleted.has(val)){
        this.set.add(val) // Set will keep the order of insertion
      }
    }
  }


//javascript solution that involves creating a dupe list and a unique list (and selectively moving in and out of those lists):
'https://leetcode.com/problems/first-unique-number/discuss/601381/JavaScript-Concise-clear-and-efficient-2-sets-wo-element-duplication'
var FirstUnique = function(nums) {
    this.uniques = new Set()
    this.dupes = new Set()
    nums.forEach(n => this.add(n))    // use FirstUnique.prototype.add, defined below
};

FirstUnique.prototype.showFirstUnique = function() {
    if (this.uniques.size == 0) return -1      // early return if no uniques
    return this.uniques.values().next().value  // use iterator to get first unique
};

FirstUnique.prototype.add = function(n) {
    if (this.dupes.has(n)) return                           // already duplicate? skip!
    if (!this.uniques.has(n)) return this.uniques.add(n)    // not dupe *or* unique? add and early return

    // handle item needing to be moved from unique list to dupe list
    this.uniques.delete(n)
    this.dupes.add(n)
    return
};



//my initial try - passed first test case but timed out
/**
 * @param {number[]} nums
 */
 var FirstUnique1 = function(nums) {
    this.q = nums
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    let nums = this.q
    for (let i = 0; i< nums.length; i++){
        if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
            return nums[i]
            }
    }
    return -1
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    this.q.push(value)
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */