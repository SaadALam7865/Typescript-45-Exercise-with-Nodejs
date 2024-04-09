// define a function to show magician names 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through. map() it will modify your array 
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// define an array of magician names 
var magician_names = ["Harry poter", "Saad", "Usman", "Taha"];
// Call make great_magician to modify magicians names 
var great_magician = make_great(magician_names);
// Call show magicians that show modify list of magicians .
show_magicians(great_magician);
