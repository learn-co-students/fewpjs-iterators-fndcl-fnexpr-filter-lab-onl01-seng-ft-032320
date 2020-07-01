// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase().includes(string.toLowerCase()))
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(string.toLowerCase()))
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver["name"] === string)
}