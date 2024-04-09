// creating a Array
let userName = ["Saad" , "Danish" , "Sir Hamza", "Admin" , "Rehman"];

// Using ForEach loop on Array

userName.forEach(oneuser =>{
    if(oneuser === "Admin"){
console.log(`Hello ${oneuser},  would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneuser} ,thank you for logging in again.`);
    }
})
