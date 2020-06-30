// Code your solution here
function findMatching(arr, dr) {
    let name = arr.filter(e => e.toLowerCase() === dr.toLowerCase())
    return name
}

function fuzzyMatch(arr, dr) {
    let nameArr = []
    arr.filter(e => e.startsWith(dr) ? nameArr.push(e) : "")

    return nameArr

}

function matchName(a, b) {
    return a.filter(e => e.name === b)

}