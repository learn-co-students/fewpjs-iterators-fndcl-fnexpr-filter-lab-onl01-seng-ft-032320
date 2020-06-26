// Code your solution here
function findMatching(drivers, query) {
    return drivers.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })
}

function fuzzyMatch(drivers, query) {
    return drivers.filter(function (el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) === 0;
    })
}

function matchName(drivers, query) {
    return drivers.filter(function(el) {
        return el.name.indexOf(query) !== -1;
    })
}