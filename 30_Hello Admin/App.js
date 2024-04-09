// creating a Array
var userName = ["Saad", "Danish", "Sir Hamza", "Admin", "Rehman"];
// Using ForEach loop on Array
userName.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("Hello ".concat(oneuser, ",  would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneuser, " ,thank you for logging in again."));
    }
});
