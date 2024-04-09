// define variable.
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange",];
// Test for equality and inequality with strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("\n Is apple is not equal to apple ");
console.log(apple != "apple");
// Tests using lowercase Function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
// Numerial Testes
// Equal to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
// not equal to
console.log("\n Is ten is not equal to twenty ");
console.log(ten != twenty);
// greater than
console.log("\nIs ten is greater than 0 ");
console.log(ten > 0);
// less than
console.log("\nIs twenty  is less than 10 ");
console.log(20 < 10);
// greater than or equal to
console.log("\nIs ten is greater than or equal to 5");
console.log(ten >= 5);
// less than or equal to
console.log("\n twenty is less than or equal to 10");
console.log(twenty <= 10);
// Tests using "and" & "r" operaters.
// Using && (AND)
console.log("\n twenty is not equal  to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
// using || (OR) 
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 < 50 || 20 == 20);
// Test whether an item is include in array
console.log(" Is orange in my fruits array");
console.log(fruits.includes("orange"));
// not include 
console.log("\nIs orange include in my Fruits array");
console.log(!fruits.includes("orange"));
