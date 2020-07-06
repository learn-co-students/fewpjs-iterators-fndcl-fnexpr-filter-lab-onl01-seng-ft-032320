const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching=(drivers,driver) => {
     return drivers.filter(d => 
        d.toLowerCase() === driver.toLowerCase()
     )}
    

const fuzzyMatch=(drivers,driver) => {
    return drivers.filter( d => 
        d.toLowerCase().indexOf(driver.toLowerCase()) === 0
    )
}

const matchName=(drivers,driver) => {
    return drivers.filter( d => d.name === driver)
}