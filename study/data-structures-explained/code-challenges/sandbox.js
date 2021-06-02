import moment from 'moment';

let transactions = [
    { "payer": "DANNON", "points": 1000, "timestamp": "2020-11-02T14:00:00Z" },
    { "payer": "UNILEVER", "points": 200, "timestamp": "2020-10-31T11:00:00Z" },
    { "payer": "DANNON", "points": -200, "timestamp": "2020-10-31T15:00:00Z" },
    { "payer": "MILLER COORS", "points": 10000, "timestamp": "2020-11-01T14:00:00Z" },
    { "payer": "DANNON", "points": 300, "timestamp": "2020-10-31T10:00:00Z" }
]

function sortTrans(transactions){
    return transactions.sort((a,b) => a["timestamp"] > b["timestamp"] ? 1 : -1)
}


let payerBalances = (transactions) => {
    transactions = sortTrans(transactions)
    let payerBals = {}
    
    transactions.forEach(t => {
        if(!payerBals[t["payer"]]) {
            payerBals[t["payer"]] = 0
        }

        payerBals[t["payer"]] += t["points"]
    })

    return payerBals
}

function userTrans(points){

}

//for userTransaction

// { "points": 5000 }

// expect:
// [
//     { "payer": "DANNON", "points": -100 },
//     { "payer": "UNILEVER", "points": -200 },
//     { "payer": "MILLER COORS", "points": -4,700 }
// ]

console.log('transactions: ', transactions)
console.log('sorted: ', sortTrans(transactions))
console.log('payer balances: ', payerBalances(transactions))

console.log('time convert: ', moment("2018-04-01T00:00:00Z").format('MMMM Do YYYY, h:mm:ss a'))

