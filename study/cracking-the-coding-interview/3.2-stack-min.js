//JAVA IMPLEMENTATION
//consists of creating a separate stack to keep track of the min values. 
//from this video:
'https://www.youtube.com/watch?v=OLQ_aWJIITw'
  
// public class StackMin {
//     public static void main(String[] args) throws Exception {
//         StackWithMin2 stack = new StackWithMin2();
//         stack.push(1);
//         stack.push(4);
//         stack.push(5);
//         stack.push(-1);
//         stack.push(9);
//         System.out.println(stack.min());
//         stack.pop();
//         stack.pop();
//         System.out.println(stack.min());
//     }
  
//     public class StackWithMin2 extends MyStack<Integer>{
//       MyStack<Integer> s2;
//       public StackWithMin2() {
//         s2 = new MyStack<Integer>();
//       }
  
//       public void push(int value) throws Exception {
//         if(value <= min()) {
//           s2.push(value);
//         }
//         super.push(value);
//       }
  
//       public Integer pop() throws Exception {
//         int value = super.pop();
//         if(value == min()) {
//           s2.pop();
//         }
//         return value;
//       }
  
//       public int min() throws Exception {
//         if(s2.isEmpty()) {
//           return Integer.MAX_VALUE;
//         } else {
//           return s2.peek();
//         }
//       }
  
//     }



//video explaining in JS
'https://www.youtube.com/watch?v=_aKd8xsOa30'



// leetcode problem, my solution

/**
 * initialize your data structure here.
 */



 var MinStack = function() {
    this.stack = []
    this.mins = []
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    
    if (this.mins.length === 0){
        this.mins.push(val)
    } 

    this.mins.push(Math.min(val, this.mins[this.mins.length - 1]))
    
    this.stack.push(val)
  
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {

        this.stack.pop()
        this.mins.pop()
   
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
     return this.mins[this.mins.length - 1]
};




// var obj = new MinStack()
// obj.push(1)
// obj.push(2)
// obj.push(3)
// obj.pop()
// console.log(obj)
// var param_3 = obj.top()
// console.log(param_3)
// var param_4 = obj.getMin()
// console.log(param_4)



// var obj = new MinStack()
// obj.push(-2)
// obj.push(0)
// obj.push(-1)
// obj.pop()
// var min1 = obj.getMin()
// console.log(min1)
// var top1 = obj.top()
// console.log(top1)
// obj.pop()
// var min2 = obj.getMin()
// console.log(min2)



// ["MinStack","push","push","push","getMin","pop","getMin"]
// [[],[0],[1],[0],[],[],[]]


var obj = new MinStack()
obj.push(0)
obj.push(1)
obj.push(0)
var min1 = obj.getMin()
console.log(min1)
obj.pop()
var min2 = obj.getMin()
console.log(obj)
console.log(min2)


//improved 2 stack method (min stack has pairs showing how many time a # has been repeated)

// Approach 3: Improved Two Stacks
// Intuition

// In the above approach, we pushed a new number onto the min-tracker Stack if, and only if, it was less than or equal to the current minimum.

// One downside of this solution is that if the same number is pushed repeatedly onto MinStack, and that number also happens to be the current minimum, there'll be a lot of needless repetition on the min-tracker Stack. Recall that we put this repetition in to prevent a bug from occurring (refer to Approach 2).

// Repetition that can occur on the min-tracker Stack.

// An improvement is to put pairs onto the min-tracker Stack. The first value of the pair would be the same as before, and the second value would be how many times that minimum was repeated. For example, this is how the min-tracker Stack for the example just above would appear.

// Min-tracker Stack with counts.

// The push(...) and pop(...) operations of MinStack need to be slightly modified to work with the new representation.



// written by @jamesernator (James Browning)

function last(arr) {
    return arr[arr.length - 1];
}

class MinStack {
    _stack = [];
    _minStack = [];

    push(x) {
        // We always put the number onto the main stack.
        this._stack.push(x);
        
        // If the min stack is empty, or this number is smaller
        // than the top of the min stack, put it on with a count of 1.
        if (this._minStack.length === 0 || x < last(this._minStack)[0]) {
            this._minStack.push([x, 1]);
        }
        // Else if this number is equal to what's currently at the top
        // of the min stack, then increment the count at the top by 1.
        else if (x === last(this._minStack)[0]) {
            last(this._minStack)[1]++;
        }
    }
    
    pop() {
        // If the top of min stack is the same as the top of stack
        // then we need to decrement the count at the top by 1.
        if (last(this._minStack)[0] === last(this._stack)) {
            last(this._minStack)[1]--;
        }
        
        // If the count at the top of min stack is now 0, then remove
        // that value as we're done with it.
        if (last(this._minStack)[1] === 0) {
            this._minStack.pop();
        }

        // And like before, pop the top of the main stack.
        this._stack.pop();
    }

    top() {
        return last(this._stack);
    }

    getMin() {
        return last(this._minStack)[0];
    }
}