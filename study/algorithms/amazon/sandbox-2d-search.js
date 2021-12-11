


let arr1 = [1,3,5,7]

let arr2 = [
        [1, 3, 5, 7],
        [10,11,16,20],
        [23,30,34,60]
    ]


function getMid(arr){
    let mid = Math.floor(arr.length / 2)
    return mid
}


//what's another way to get arr.length using start and end
function getMidTwoD(arr){
    console.log('length', arr.length)
    let midRow = Math.floor(arr.length / 2)
    let midCol = Math.floor(arr[0].length / 2)

    return [midRow, midCol]

}

console.log(getMid(arr1))
console.log(getMidTwoD(arr2))