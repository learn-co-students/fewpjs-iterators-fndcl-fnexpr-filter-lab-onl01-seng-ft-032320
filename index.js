// Code your solution here

const { match } = require("sinon")


function findMatching(arr, str) {
  return arr.filter(maybe => 
    maybe.toLowerCase() === str.toLowerCase()
  )
}

function fuzzyMatch(arr, str) {
  return arr.filter(maybe => 
    maybe.toLowerCase().indexOf(str.toLowerCase()) === 0
  )
}

function matchName(arr, arrName) {
  return arr.filter(maybe => maybe.name === arrName)
}