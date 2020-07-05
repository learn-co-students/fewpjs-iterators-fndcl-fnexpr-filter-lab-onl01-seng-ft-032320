// Code your solution here
function findMatching(source, string) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase() === string.toLowerCase()
    )
}
  
function fuzzyMatch(source, string) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
}
  
function matchName(source, name) {
    return source.filter( record => record.name === name)
}