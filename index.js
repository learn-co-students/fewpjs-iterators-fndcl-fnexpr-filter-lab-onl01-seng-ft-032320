const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(drivers, string) {
  return drivers.filter((n) => n.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(drivers, string) {
  return drivers.filter((n) => {
    return n.substring(0, 2).toLowerCase().indexOf(string.toLowerCase()) !== -1;
  });
}
console.log(fuzzyMatch(drivers, "S"));

function matchName(drivers, string) {
  return drivers.filter((n) => n.name === string);
}
