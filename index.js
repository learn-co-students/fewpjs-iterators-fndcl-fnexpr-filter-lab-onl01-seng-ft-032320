function findMatching(drivers, name) {
    return drivers.filter(n => n.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(drivers, beginning) {
    return drivers.filter(n => n.slice(0, beginning.length).match(beginning));
}

function matchName(drivers, name) {
    return drivers.filter(n => n.name === name)
}
