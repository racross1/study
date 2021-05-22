

let scores1 = [10, 5, 20, 20, 4, 5, 2, 25, 1]

function breakingRecords(scores) {
    let min = scores[0]
    let max = scores[0]

    let beatMinCount = 0
    let beatMaxCount = 0

    for (let i = 1; i < scores.length; i++){
        if (scores[i] > max) {
            beatMaxCount++
            max = scores[i]
        }

        if (scores[i] < min){
            beatMinCount++
            min = scores[i]
        }
    }

    return [beatMaxCount, beatMinCount]
}