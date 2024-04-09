let userNames = ["Saad" , "Fahad" , "Aftab" , "Admin" , "Ali"];
userNames = []
if (userNames.length === 0){
console.log("Your Array in Empty we need some users!");
// let creating a array 
}else{
    userNames.forEach(oneuser =>{
        if(oneuser === "Admin"){
    console.log(`Hello ${oneuser},  would you like to see a status report?`)
        }else{
            console.log(`Hello ${oneuser} ,thank you for logging in again.`);
        }
    })
    

}
