let guestlist = ["Saad" , "Aftab" , "Tahira" , "Maryam"];

let dontcome = guestlist[0];

console.log(dontcome, "Nahe Ahh Skta");

guestlist.splice(0, 1, "Hamza Sir");

guestlist.forEach(guest => console.log(`Assalam o Alikum ${guest}, Would u like to dinner with me?`));