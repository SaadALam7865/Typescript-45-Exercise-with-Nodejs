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
// Making a copy of original array through. slice() function
var copy_magician_names = magician_names.slice();
// Modify the copied array to include "THe Great" with their names.
var copy_great_magician = make_great(copy_magician_names);
//show both arrays Original and Copied.
//ORIGINAL 
console.log("\nOriginal Array");
show_magicians(magician_names);
// COPIED
console.log("\nCopied Array");
show_magicians(copy_great_magician);
