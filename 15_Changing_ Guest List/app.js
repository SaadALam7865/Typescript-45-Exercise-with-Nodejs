var guestlist = ["Saad", "Aftab", "Tahira", "Maryam"];
var dontcome = guestlist[0];
console.log(dontcome, "Nahe Ahh Skta");
guestlist.splice(0, 1, "Hamza Sir");
guestlist.forEach(function (guest) { return console.log("Assalam o Alikum ".concat(guest, ", Would u like to dinner with me?")); });
