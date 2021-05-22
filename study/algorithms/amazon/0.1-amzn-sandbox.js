console.log('hello world')
let allLocations = [
    [1, -3],
    [1, 2],
    [3, 4],
]

let num = 1

function deliveryPlan(allLocations, numDeliveries) {
    let map = {}
    

    let distances = allLocations.map(l => {
       return [Math.sqrt(l[0]**2 + l[1]**2), l]
        })

        
    let sorted = distances.sort((a,b) => a[0]-b[0])
   
    return sorted.map(n => n[1]).slice(0, numDeliveries)
    
    // for (let i = 0; i < numDeliveries; i++) {
    //     let target = sorted[i]

    //     map[target] = allLocations.find(n => Math.sqrt(n[0]**2 + n[1]**2) == target)

    //     // let loc = allLocations[i]
    //     // let key = Math.sqrt( loc[0]**2 + loc[1]**2 )

    //     // if (key == sorted[i]) {
    //     //     map[key] = loc
    //     // }
        
    
    // }
    
 

    

}



function deliveryPlan1(allLocations, numDeliveries) {
    let map = {}
    

    let distances = allLocations.map(l => {
       return Math.sqrt(l[0]**2 + l[1]**2) 
        })

        
    let sorted = distances.sort((a,b) => a-b)
    console.log(sorted)
    
    for (let i = 0; i < numDeliveries; i++) {
        let target = sorted[i]

        map[target] = allLocations.find(n => Math.sqrt(n[0]**2 + n[1]**2) == target)

        // let loc = allLocations[i]
        // let key = Math.sqrt( loc[0]**2 + loc[1]**2 )

        // if (key == sorted[i]) {
        //     map[key] = loc
        // }
        
    
    }
    
    return Object.values(map)
    

    

}

console.log(deliveryPlan(allLocations, num))