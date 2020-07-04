function findMatching(drivers, str){
    return drivers.filter(d => d.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(drivers, str){
    return drivers.filter(driver => driver.slice(0, str.length) === str)
}

function matchName(drivers, str){
    return drivers.filter(driver => driver.name === str)
}