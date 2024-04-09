// define a function with a rest parameter that accepts items arguments representing our sandwiches.
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwiches with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy Sandwiches");
}
//Call the function 3 times with 3  different number of arguments.
makeSandwich("chicken", "Chese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Kechup", "Mayo", "Egg", "Cheese", "Meat", "Tomato", "Butter");
