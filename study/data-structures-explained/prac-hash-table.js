function hasher(key, tableSize) {
    let hash = 3
    for (let i = 0; i < key.length; i++){
        hash = 17 * key.charCodeAt(i) 
    }
    hash = hash % tableSize

    return hash
}

class HashTable {
    table = new Array(100)

    addItem = (key, value) => {
        let idx = hasher(key, this.table.length)
        if (this.table[idx]){
            this.table[idx].push([key, value])
        } else {
            this.table[idx] = [[key, value]]
        }
    }

    getItem = (key) => {
        let idx = hasher(key, this.table.length)
        console.log(idx)
        if (!this.table[idx]){
            console.log('key not found')
        } else {
            return this.table[idx].find(x => x[0] === key)
        } 
    }

}

let test = new HashTable
test.addItem("firstName", "Bob")
test.addItem("lastName", "Jones")
test.addItem("waffle", "cone")
test.addItem(1, 2)
console.log(test.getItem(1))
