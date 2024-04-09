// array of current users 
var current_users = ["Usman", "ali", "Areeba", "Zain", "Osama"];
// Array of new Users
var new_users = ["Hamza ", "Ayesha ", "Ali", "Mahad", "Areeba"];
// loop through new_users to check for username avaibility.
new_users.forEach(function (new_one_user) {
    //Making a condition for username already exist and save in our_condition
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // print different messages using if else statements.
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
