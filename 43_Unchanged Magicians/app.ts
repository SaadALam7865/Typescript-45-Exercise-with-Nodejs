// define a function to show magician names 
function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));



}
// function to make magicians great through. map() it will modify your array 
function make_great(magicians:string[]){
    return magicians.map(name => `The Great ${name}`)
    
    
}

// define an array of magician names 
let magician_names = ["Harry poter", "Saad", "Usman", "Taha"];

// Making a copy of original array through. slice() function
let copy_magician_names = magician_names.slice()

// Modify the copied array to include "THe Great" with their names.
let copy_great_magician = make_great(copy_magician_names);

//show both arrays Original and Copied.
//ORIGINAL 
console.log("\nOriginal Array");
show_magicians(magician_names);

// COPIED
console.log("\nCopied Array");
show_magicians(copy_great_magician);