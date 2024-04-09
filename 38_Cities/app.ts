//Decribe a Function
function describe_city(city:string, country:string = "Pakistan"){
    console.log(`${city} is in ${country}`);
}

// Calling a function

describe_city("Karachii");
describe_city("Lahore");
describe_city("Berlin", "Germany");