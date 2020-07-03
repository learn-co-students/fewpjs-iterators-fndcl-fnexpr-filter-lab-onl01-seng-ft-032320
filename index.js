
let output;

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}


function fuzzyMatch (drivers, string){
    return drivers.filter(driver => driver.slice(0, string.length) === string)
}

function matchName(drivers, string){
    return drivers.filter(driver => driver.name.toLowerCase() === string.toLowerCase())
}








output = matchName(drivers, 'bobby')

let outputTag = document.querySelector("#output")
outputTag.innerText = output 





