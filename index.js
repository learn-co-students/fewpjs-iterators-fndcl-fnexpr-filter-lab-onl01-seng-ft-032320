// Code your solution here

function findMatching(drivers, string) {
    return drivers.filter(n => {
        return n.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(n => {
        return n.indexOf(string) === 0
    })
}

function matchName(drivers, string) {
    return drivers.filter(n => {
        return n["name"] === string 
    })
}