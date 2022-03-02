//part 1: https://javascript.plainenglish.io/from-zero-to-dijkstra-the-shortest-path-to-the-shortest-path-algorithm-f070e224f99e

class MinBinaryHeap {
    constructor() {
        this.values = [];
    }
    
    enqueue(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp(){
        //Reference 'new' Element
        let idx = this.values.length - 1;
        const element = this.values[idx];
        //Find 'parent' element
        let parentIdx = Math.floor( (idx-1) / 2 );
        let parent = this.values[parentIdx];

        //while the index is NOT the top of the heap
        while(idx > 0) {
            // if the child element is greater/equal to the parent, exit the loop
            
                if (element >= parent) break;
            // else, swap parent and child and reassign the 'new' element's index to be what the parent's was.
                if (element > parent) {
                    this.values[parentIdx];
                    this.values[idx] = parent;
                    idx = parentIdx;
            }
        }
    }

}