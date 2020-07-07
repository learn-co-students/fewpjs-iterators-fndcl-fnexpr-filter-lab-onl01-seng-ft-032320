// Code your solution here
function findMatching(drivers, string) {
    let result = drivers.filter(d => {
        return d.toLowerCase() === string.toLowerCase();
      });

      return result

}


function fuzzyMatch(drivers, string) {

    let result = drivers.filter(d => {
        return d.charAt(0) === string.charAt(0)
    })
    return result 
}

function matchName(drivers, string) {

    let result = drivers.filter(d => {
        return d.name === string
    })
    return result

}