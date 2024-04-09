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

// Call make great_magician to modify magicians names 
let great_magician = make_great(magician_names)

// Call show magicians that show modify list of magicians .
show_magicians(great_magician);
