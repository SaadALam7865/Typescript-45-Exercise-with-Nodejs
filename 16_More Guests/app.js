// Creating a  Guestlist array
var guestlist = ["Saad", "Aftab", "Tahira", "Maryam"];
// making variable for those who cant come 
var dontcome = guestlist[0];
// print the name of guest who cant come 
console.log(dontcome, "You are not invited");
// add or remove guest from Guest list Array
guestlist.splice(0, 1, "Sir Hamza");
// Mesaage Print for Bigger Table
console.log("Good News! We have found a Bigger Table for Dinner.");
// Adding a new guest at starting index of Array
guestlist.unshift("sir Ameen");
//adding a new guest at ending index of Array
guestlist.push("Zain");
// Get a middle index of our guest list array
var middleindex = Math.floor(guestlist.length / 2);
//Addind a new guest to middle index of array
guestlist.splice(middleindex, 0, "sir Qasim");
// print Message of upload list
console.log("Updated list of our Guests");
// Sending a invitation message to our guests one by one with thier Names
guestlist.forEach(function (oneguest) { return console.log("Assalam o ALikum ".concat(oneguest, ", Would you like to Dinner with me")); });
