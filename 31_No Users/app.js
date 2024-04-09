var userNames = ["Saad", "Fahad", "Aftab", "Admin", "Ali"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your Array in Empty we need some users!");
}
else {
    userNames.forEach(function (oneuser) {
        if (oneuser === "Admin") {
            console.log("Hello ".concat(oneuser, ",  would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneuser, " ,thank you for logging in again."));
        }
    });
}
