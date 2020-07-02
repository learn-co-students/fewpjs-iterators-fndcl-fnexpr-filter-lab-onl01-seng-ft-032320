// Code your solution here


function findMatching(shortList, query) {
    return shortList.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
  }


  function fuzzyMatch(drivers, query) {
    return drivers.filter(function(el) {
      console.log(el.substring(0, 2))
      return el.substring(0, 2).toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
  }
//   function fuzzyMatch(drivers, query) {
//     return drivers.filter(function(el) {
//       console.log(el.charAt(0))
//       if (query.length === 1){
//         return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
//       }
      
//     })
//   }

function matchName(drivers, query){
    return drivers.filter(it => it.name.includes(query));
    }