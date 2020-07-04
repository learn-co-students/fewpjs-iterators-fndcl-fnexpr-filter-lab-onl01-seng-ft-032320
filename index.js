// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(word => {
      return word.toLowerCase() == string.toLowerCase()})
}

function fuzzyMatch(drivers, string){
    return drivers.filter(word => {
        return word.startsWith(string)
    })
}

function matchName(drivers, string){
    return drivers.filter(driver => {
      return driver['name'] == string
    })
  }