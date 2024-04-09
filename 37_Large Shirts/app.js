"use strict";
// Making a function
function make_shirts(size = "Large", printMessage = "I Love Typescript") {
    console.log(`creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
// Calling a function with by default values.
make_shirts();
// Calling a fucntion now with Medium size and default messages
make_shirts("Medium");
// Calling a Function now with small size and Different print Message.
make_shirts("small", "I Love Javascript");
