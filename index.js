// Code your solution here

const { match } = require("sinon")

function findMatching(drivers,name) {
    let matching = drivers.filter(driver => {
        return driver.toUpperCase() === name.toUpperCase()

    })
    return matching
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(driver =>
        driver.toUpperCase().indexOf(name.toUpperCase())=== 0
    )
}

function matchName(drivers, name) {
    return drivers.filter( record => record.name === name)
}
