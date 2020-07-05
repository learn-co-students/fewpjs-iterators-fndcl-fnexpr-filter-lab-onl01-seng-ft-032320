function findMatching(drivers, string) {
    return drivers.filter(d => d.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(d => d.slice(0, string.length) === string)
}

function matchName(drivers, string) {
    return drivers.filter(d => d.name === string)
}