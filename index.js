// Code your solution here

function findMatching(drivers, string) {
   let found = drivers.filter(driver => {
      if (string.toLowerCase() === driver.toLowerCase()){
         return driver
      }
   })
   return found
}

function fuzzyMatch(drivers, string) {
   let found = drivers.filter(driver => {
      if (string.toLowerCase() === driver.substring(0,string.length).toLowerCase()){
         return driver
      }
   })
   return found
}

function matchName(drivers, string) {
   let found = drivers.filter(driver => {
      if (driver.name === string) {
         return driver
      }
   })
   return found
}
