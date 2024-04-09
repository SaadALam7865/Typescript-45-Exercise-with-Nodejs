// Creating a  Guestlist array
let guestlist = ["Saad" , "Aftab" , "Tahira" , "Maryam" ];

// making variable for those who cant come 
let dontcome = guestlist[0];

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
let middleindex: number = Math.floor(guestlist.length / 2);

//Addind a new guest to middle index of array
guestlist.splice(middleindex, 0, "sir Qasim");

// print Message of upload list
console.log("Updated list of our Guests");

// Sending a invitation message to our guests one by one with thier Names
guestlist.forEach(oneguest => console.log(`Assalam o ALikum ${oneguest}, Would you like to Dinner with me`));
 
// Inform only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so i can only invites two Guests to dinner with me")

//Using while-loop to remove from the array until only two names remains
while(guestlist.length > 2) {
let removedguest = guestlist.pop();
console.log(`Sorry, ${removedguest}`)
}



//Sending a invitations to the last two guest on the list
console.log("Invitations to the last 2 guests");
guestlist.forEach(lasttwo => console.log(`Luckly ${lasttwo}, You are still Invited to DInner`));

//Removing last two Guest from the list
guestlist.pop();
guestlist.pop();

console.log("Empty list:",guestlist );
