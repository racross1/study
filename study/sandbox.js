function createPhoneNumber(nums){
    return `(${nums.slice(0,3).join('')})${nums.slice(3,6).join('')}-${nums.slice(6-9).join('')}`
}

nums1 = [2,3,4,5,8,6,7,8,8,9]

console.log(createPhoneNumber(nums1))